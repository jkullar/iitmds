import { Router } from "express";
import { db, courseSubscriptionsTable } from "@workspace/db";
import { eq, and } from "drizzle-orm";
import { requireAuth, type AuthRequest } from "../middlewares/auth";

const router = Router();

// GET /api/subscriptions — list all subscriptions for the current user
router.get("/subscriptions", requireAuth as any, async (req: AuthRequest, res) => {
  const rows = await db
    .select()
    .from(courseSubscriptionsTable)
    .where(eq(courseSubscriptionsTable.userId, req.userId!));
  res.json({ subscriptions: rows });
});

// POST /api/subscriptions — subscribe to a course
// body: { courseId, degreeId }
router.post("/subscriptions", requireAuth as any, async (req: AuthRequest, res) => {
  const { courseId, degreeId } = req.body ?? {};
  if (!courseId || !degreeId) {
    res.status(400).json({ error: "courseId and degreeId are required" });
    return;
  }

  // Upsert — ignore if already subscribed
  const existing = await db
    .select({ id: courseSubscriptionsTable.id })
    .from(courseSubscriptionsTable)
    .where(
      and(
        eq(courseSubscriptionsTable.userId, req.userId!),
        eq(courseSubscriptionsTable.courseId, courseId)
      )
    )
    .limit(1);

  if (existing.length > 0) {
    res.json({ subscribed: true, alreadyExisted: true });
    return;
  }

  const [row] = await db
    .insert(courseSubscriptionsTable)
    .values({ userId: req.userId!, courseId, degreeId })
    .returning();

  res.status(201).json({ subscribed: true, subscription: row });
});

// PATCH /api/subscriptions/:courseId — update tracking types
router.patch("/subscriptions/:courseId", requireAuth as any, async (req: AuthRequest, res) => {
  const { courseId } = req.params;
  const { trackingTypes } = req.body ?? {};

  if (!Array.isArray(trackingTypes)) {
    res.status(400).json({ error: "trackingTypes must be an array" });
    return;
  }
  const valid = ["videos", "concepts", "notes"];
  const filtered = trackingTypes.filter((t: string) => valid.includes(t));

  const [updated] = await db
    .update(courseSubscriptionsTable)
    .set({ trackingTypes: filtered })
    .where(
      and(
        eq(courseSubscriptionsTable.userId, req.userId!),
        eq(courseSubscriptionsTable.courseId, courseId)
      )
    )
    .returning();

  if (!updated) {
    res.status(404).json({ error: "Subscription not found" });
    return;
  }

  res.json({ updated: true, trackingTypes: updated.trackingTypes });
});

// DELETE /api/subscriptions — unsubscribe from a course
// body: { courseId }
router.delete("/subscriptions", requireAuth as any, async (req: AuthRequest, res) => {
  const { courseId } = req.body ?? {};
  if (!courseId) {
    res.status(400).json({ error: "courseId is required" });
    return;
  }

  await db
    .delete(courseSubscriptionsTable)
    .where(
      and(
        eq(courseSubscriptionsTable.userId, req.userId!),
        eq(courseSubscriptionsTable.courseId, courseId)
      )
    );

  res.json({ unsubscribed: true });
});

export default router;
