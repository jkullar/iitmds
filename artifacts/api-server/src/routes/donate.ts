import { Router } from "express";

const router = Router();

router.post("/donate/create-order", async (req, res) => {
  const { amount, name, phone } = req.body;

  const appId = process.env.CASHFREE_APP_ID;
  const secretKey = process.env.CASHFREE_SECRET_KEY;

  if (!appId || !secretKey) {
    res.status(500).json({ error: "Payment gateway not configured" });
    return;
  }

  const parsedAmount = Number(amount);
  if (!parsedAmount || parsedAmount < 1) {
    res.status(400).json({ error: "Minimum donation is ₹1" });
    return;
  }

  const orderId = `donate_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;

  const orderPayload = {
    order_id: orderId,
    order_amount: parsedAmount,
    order_currency: "INR",
    customer_details: {
      customer_id: `donor_${Date.now()}`,
      customer_name: name?.trim() || "Supporter",
      customer_phone: phone?.replace(/\D/g, "").slice(-10) || "9999999999",
    },
    order_meta: {
      return_url: `${req.headers.origin || "https://bsindatascience.replit.app"}/`,
    },
    order_note: "Donation – BS in Data Science",
  };

  try {
    const response = await fetch("https://api.cashfree.com/pg/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-client-id": appId,
        "x-client-secret": secretKey,
        "x-api-version": "2023-08-01",
      },
      body: JSON.stringify(orderPayload),
    });

    const data = await response.json() as { payment_session_id?: string; order_id?: string; message?: string };

    if (!response.ok) {
      res.status(response.status).json({ error: data.message || "Failed to create order" });
      return;
    }

    res.json({
      orderId: data.order_id,
      paymentSessionId: data.payment_session_id,
    });
  } catch {
    res.status(500).json({ error: "Failed to connect to payment gateway" });
  }
});

export default router;
