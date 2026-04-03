import { useState } from "react";
import { Heart, X, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    Cashfree: (config: { mode: string }) => Promise<{
      checkout: (options: { paymentSessionId: string; redirectTarget: string }) => void;
    }>;
  }
}

const PRESET_AMOUNTS = [49, 99, 199, 499];

interface DonateModalProps {
  onClose: () => void;
}

export function DonateModal({ onClose }: DonateModalProps) {
  const [amount, setAmount] = useState<number | "">(99);
  const [customAmount, setCustomAmount] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const effectiveAmount = isCustom ? Number(customAmount) : Number(amount);

  const handleDonate = async () => {
    if (!effectiveAmount || effectiveAmount < 1) {
      setError("Please enter a valid amount (minimum ₹1)");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/donate/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: effectiveAmount }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to create order");

      const cashfree = await window.Cashfree({ mode: "production" });
      cashfree.checkout({
        paymentSessionId: data.paymentSessionId,
        redirectTarget: "_modal",
      });
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-card border border-border rounded-2xl shadow-xl w-full max-w-sm p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center rounded-full hover:bg-muted transition-colors text-muted-foreground"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-12 h-12 rounded-full bg-rose-100 dark:bg-rose-950 flex items-center justify-center mb-3">
            <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
          </div>
          <h2 className="text-lg font-bold text-foreground">Support the Project</h2>
          <p className="text-xs text-muted-foreground mt-1 max-w-xs">
            Help keep free study materials, transcripts and notes available for everyone.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-2 mb-3">
          {PRESET_AMOUNTS.map((preset) => (
            <button
              key={preset}
              onClick={() => { setAmount(preset); setIsCustom(false); setCustomAmount(""); }}
              className={cn(
                "py-2 rounded-lg text-sm font-semibold border transition-colors",
                !isCustom && amount === preset
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-muted/50 text-foreground border-border hover:border-primary/50"
              )}
            >
              ₹{preset}
            </button>
          ))}
        </div>

        <div className="mb-4">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground font-medium">₹</span>
            <input
              type="number"
              min={1}
              placeholder="Custom amount"
              value={customAmount}
              onFocus={() => setIsCustom(true)}
              onChange={(e) => { setCustomAmount(e.target.value); setIsCustom(true); }}
              className="w-full h-10 pl-7 pr-3 rounded-lg border border-border bg-muted/40 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50"
            />
          </div>
        </div>

        {error && (
          <p className="text-xs text-rose-500 mb-3 text-center">{error}</p>
        )}

        <button
          onClick={handleDonate}
          disabled={loading}
          className="w-full h-10 rounded-lg bg-rose-500 hover:bg-rose-600 text-white text-sm font-semibold flex items-center justify-center gap-2 transition-colors disabled:opacity-60"
        >
          {loading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              <Heart className="w-4 h-4 fill-white" />
              Donate ₹{effectiveAmount || "—"}
            </>
          )}
        </button>

        <p className="text-[10px] text-muted-foreground text-center mt-3">
          Secured by Cashfree · UPI, Cards, Net Banking accepted
        </p>
      </div>
    </div>
  );
}
