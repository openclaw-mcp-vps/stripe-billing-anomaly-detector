export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Stripe Billing Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Detect Unusual Patterns in{" "}
          <span className="text-[#58a6ff]">Stripe Billing Data</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Automatically monitor your Stripe transactions for failed payment spikes, suspicious refund patterns, and early churn signals — with instant email and Slack alerts.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Monitoring — $17/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required for 7-day trial. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "⚡", title: "Real-Time Webhooks", desc: "Ingests Stripe events instantly via webhooks for zero-lag detection." },
            { icon: "🔍", title: "Anomaly Algorithms", desc: "Statistical models flag payment failures, refund spikes, and churn signals." },
            { icon: "🔔", title: "Instant Alerts", desc: "Get notified via email or Slack the moment something looks off." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$17<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-sm text-[#8b949e] mb-6">Everything you need to protect your Stripe revenue</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited Stripe event monitoring",
              "Failed payment spike detection",
              "Refund pattern analysis",
              "Subscription churn signals",
              "Email & Slack alerts",
              "7-day free trial"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Get Started Free
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does it connect to my Stripe account?",
              a: "You provide a restricted Stripe API key with read-only access. We register a webhook endpoint on your account to receive real-time events — no write permissions needed."
            },
            {
              q: "What counts as an anomaly?",
              a: "We flag statistically significant deviations: a sudden spike in failed charges, refund rates exceeding your baseline, or a cluster of subscription cancellations within a short window."
            },
            {
              q: "Can I customize alert thresholds?",
              a: "Yes. After onboarding you can set custom sensitivity levels for each anomaly type and choose whether to receive alerts via email, Slack, or both."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        &copy; {new Date().getFullYear()} Stripe Billing Anomaly Detector. All rights reserved.
      </footer>
    </main>
  );
}
