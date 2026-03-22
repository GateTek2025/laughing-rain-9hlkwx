export default function DealerAppDemoFunnel() {
  const logos = [
    { name: "Rick Case Auto Group", src: "/Rick Case Auto Group .png" },
    { name: "Paragon Honda", src: "/Paragon Honda Logo .png" },
    {
      name: "Jack Daniels Auto Group",
      src: "/Jack Daniels Auto Group Logo.png",
    },
    { name: "Ramsey Auto Group", src: "/Ramsey Auto Group.png" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 via-slate-950 to-indigo-500/10" />

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="flex items-center justify-between">
            <img
              src="/DealerApp Logo.png"
              alt="DealerApp Vantage"
              className="h-12"
            />
            <div className="text-sm text-slate-300">
              Trusted by leading dealer groups
            </div>
          </div>

          <div className="mt-12 text-center">
            <h1 className="text-5xl font-semibold leading-tight">
              Turn Your Dealership App Into a Daily-Use Customer Engagement
              Engine
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto">
              Trusted by Rick Case Auto Group, Paragon Honda, Jack Daniels Auto
              Group, Ramsey Auto Group, and more.
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <a
                href="#form"
                className="bg-sky-500 px-6 py-4 rounded-2xl font-semibold hover:bg-sky-400"
              >
                Get My Custom App Preview
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO BAR */}
      <section className="py-10 bg-slate-900 border-y border-white/10">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-10 items-center">
          {logos.map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              className="h-10 w-auto opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </section>

      {/* RICK CASE FEATURE */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold">
              Rick Case Auto Group: Real-World App Engagement
            </h2>
            <p className="mt-4 text-slate-300">
              Customers use the app to access car wash services, loyalty
              rewards, and other dealership touchpoints — turning the app into
              part of their ongoing routine.
            </p>

            <p className="mt-4 text-sky-400 font-semibold">
              This transforms the app from a one-time download into a weekly
              customer touchpoint.
            </p>
            <ul
              className="mt-6 space-y-3 text-slate-300"
              style={{ listStyle: "none", paddingLeft: 0 }}
            >
              <li className="flex items-start gap-2">
                <span className="text-sky-400">✔</span>
                <span>Increased service visits and repeat traffic</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400">✔</span>
                <span>Weekly customer engagement</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400">✔</span>
                <span>Stronger customer retention</span>
              </li>
            </ul>
          </div>
          <div className="bg-slate-900 p-8 rounded-2xl border border-white/10">
            <p className="text-sm text-slate-400">Key Insight</p>
            <p className="mt-2 text-xl font-semibold">
              Not just an app — a customer retention platform
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.25em] text-sky-300">
            Real App Experience
          </p>
          <h2 className="mt-3 text-3xl font-semibold">
            Built for Real Customer Engagement
          </h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Dealer apps should do more than sit on a customer’s phone — they
            should drive real-world usage, loyalty, and repeat visits.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          <div className="bg-slate-900/60 p-4 rounded-xl border border-white/10 text-center">
            <img
              src="/rick-case-app.png"
              alt="Rick Case app home screen"
              className="h-[300px] w-auto mx-auto rounded-xl object-contain"
            />
            <p className="text-sm text-slate-400 mt-4">
              Branded dealership app experience
            </p>
          </div>

          <div className="bg-slate-900/60 p-4 rounded-xl border border-white/10 text-center">
            <img
              src="/rick-case-carwash.png"
              alt="Rick Case car wash feature"
              className="h-[300px] w-auto mx-auto rounded-xl object-contain"
            />
            <p className="text-sm text-slate-400 mt-4">
              Integrated car wash access
            </p>
          </div>

          <div className="bg-slate-900/60 p-4 rounded-xl border border-white/10 text-center">
            <img
              src="/rick-case-rewards.png"
              alt="Rick Case rewards feature"
              className="h-[300px] w-auto mx-auto rounded-xl object-contain"
            />
            <p className="text-sm text-slate-400 mt-4">
              Built-in loyalty rewards program
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sky-400 font-semibold text-lg">
            This is what turns your app into a weekly customer touchpoint.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">Core Features</h2>
          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {["Rewards", "Service", "Push", "Docs"].map((f) => (
              <div
                key={f}
                className="p-6 bg-slate-950 rounded-2xl border border-white/10"
              >
                <h3 className="font-semibold">{f}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-sky-300">
            Quick Demo
          </p>
          <h2 className="mt-3 text-3xl font-semibold">
            Watch a 60-Second Overview
          </h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            A short personalized demo can show dealers exactly how the app
            supports rewards, service engagement, and repeat business.
          </p>

          <div className="mt-10 rounded-2xl border border-dashed border-white/20 bg-slate-950 p-16">
            <p className="text-xl font-semibold text-white">
              Loom video placeholder
            </p>
            <p className="mt-3 text-slate-400">
              Replace this box with your Loom embed when ready.
            </p>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section id="form" className="py-20 max-w-4xl mx-auto px-6">
        <div className="bg-white text-black p-10 rounded-2xl shadow-2xl">
          <h2 className="text-3xl font-semibold">
            Get Your Custom App Preview
          </h2>
          <p className="text-sm text-slate-600 mb-4">
            We’ll create a custom preview tailored to your dealership — no
            obligation.
          </p>
          <p className="text-sm text-slate-500 mt-3 text-center">
            Limited onboarding spots available this month
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <input placeholder="Name" className="p-3 border rounded-xl" />
            <input placeholder="Dealership" className="p-3 border rounded-xl" />
            <input placeholder="Email" className="p-3 border rounded-xl" />
            <input placeholder="Phone" className="p-3 border rounded-xl" />
          </div>
          <button className="mt-6 w-full bg-black text-white p-4 rounded-xl">
            Get My Custom App Preview
          </button>
        </div>
      </section>
    </div>
  );
}
