import { useState } from "react";
import RSVPForm from "./RSVPForm";
import Thanks from "./Thanks";
import { EVENT, COPY } from "./constants";

type View = "invitation" | "form" | "thanks";

function App() {
  // Development helper: check query string for forced view
  const getInitialView = (): View => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const viewParam = params.get("view");
      if (viewParam === "landing") return "invitation";
      if (viewParam === "form") return "form";
      if (viewParam === "thanks") return "thanks";
    }
    return "invitation";
  };

  const [view, setView] = useState<View>(getInitialView());

  if (view === "thanks") {
    return <Thanks />;
  }

  if (view === "invitation") {
    return (
      <div className="min-h-screen w-full flex items-center justify-center p-6 bg-warm-bg">
        <div className="w-full max-w-2xl flex flex-col items-center justify-center">
          <div 
            className="relative w-full rounded-3xl shadow-2xl overflow-hidden" 
            style={{ 
              aspectRatio: '4/5',
              backgroundImage: 'url(/bg.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Text content */}
            <div className="relative h-full flex flex-col  justify-between p-6 md:p-12">
              {/* Top right text */}
              <div className="self-end text-left md:pt-8">
                <p className="landing-copy">{EVENT.hosts.full}</p>
                <p className="landing-copy">are throwing a</p>
              </div>
              
              {/* Center content */}
              <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4 max-w-xs mx-auto" >
                <h1 className="font-serif text-6xl sm:text-8xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  {EVENT.title}
                </h1>
                <p className="landing-copy max-w-md leading-relaxed text-gray-700">
                  {EVENT.tagline.split(",").map((part, i, arr) => (
                    <span key={i}>
                      {part.trim()}
                      {i < arr.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
              
              {/* Bottom left text */}
              <div className="self-end text-right">
                <p className="landing-copy text-gray-800">{COPY.invitation.dateLine}</p>
                <p className="landing-copy text-gray-800">{COPY.invitation.timeLocationLine}</p>
              </div>
            </div>
          </div>
          <button 
            className="mt-8 px-10 py-4 text-base font-medium rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-all duration-200"
            onClick={() => setView("form")}
          >
            RSVP
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 watercolor-bg">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-6 md:p-16 space-y-8">
        <header className="text-center space-y-3">
          <p className="text-sm text-gray-600 font-light tracking-wide uppercase">
            {COPY.invitation.hostsLine}
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-warm-text tracking-tight">
            {EVENT.title}
          </h1>
          <p className="text-base text-gray-600 font-light leading-relaxed max-w-md mx-auto">
            {EVENT.tagline.split(",").map((part, i, arr) => (
              <span key={i}>
                {part.trim()}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </p>
        </header>

        <section className="pt-8 space-y-6">
          <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
            Event details
          </h2>
          <div className="bg-gray-50 rounded-2xl p-6 space-y-3 text-sm">
            <div className="flex flex-col md:flex-row md:justify-between gap-1 md:gap-0">
              <span className="font-medium text-gray-700">{COPY.form.dateLabel}</span>
              <span className="text-gray-600">{COPY.form.dateValue}</span>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between gap-1 md:gap-0">
              <span className="font-medium text-gray-700">{COPY.form.locationLabel}</span>
              <span className="text-gray-600">{COPY.form.locationValue}</span>
            </div>
          </div>
        </section>

        <RSVPForm onSuccess={() => setView("thanks")} />
      </div>
    </div>
  );
}

export default App;
