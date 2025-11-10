import { useState } from "react";
import RSVPForm from "./RSVPForm";
import Thanks from "./Thanks";
import { EVENT, COPY } from "./constants";

type View = "invitation" | "form" | "thanks";

function App() {
  const [view, setView] = useState<View>("invitation");

  if (view === "thanks") {
    return <Thanks />;
  }

  if (view === "invitation") {
    return (
      <div className="min-h-screen w-full flex items-center justify-center p-6 bg-warm-bg">
        <div className="w-full max-w-2xl flex flex-col items-center justify-center">
          <div className="relative w-full bg-white rounded-3xl shadow-2xl overflow-hidden" style={{ aspectRatio: '4/5' }}>
            {/* Watercolor blob shapes - positioned at corners */}
            {/* Top-left: Coral red */}
            <div className="absolute top-0 left-0 w-80 h-80 -translate-x-1/4 -translate-y-1/4 rounded-full" 
                 style={{ 
                   background: 'radial-gradient(circle, rgba(255, 99, 71, 0.35) 0%, rgba(255, 182, 193, 0.25) 40%, transparent 70%)',
                   filter: 'blur(30px)',
                   mixBlendMode: 'multiply'
                 }}></div>
            {/* Top-right: Sage green */}
            <div className="absolute top-0 right-0 w-80 h-80 translate-x-1/4 -translate-y-1/4 rounded-full"
                 style={{ 
                   background: 'radial-gradient(circle, rgba(144, 238, 144, 0.35) 0%, rgba(152, 251, 152, 0.25) 40%, transparent 70%)',
                   filter: 'blur(30px)',
                   mixBlendMode: 'multiply'
                 }}></div>
            {/* Bottom-left: Golden yellow */}
            <div className="absolute bottom-0 left-0 w-80 h-80 -translate-x-1/4 translate-y-1/4 rounded-full"
                 style={{ 
                   background: 'radial-gradient(circle, rgba(255, 215, 0, 0.35) 0%, rgba(255, 255, 224, 0.25) 40%, transparent 70%)',
                   filter: 'blur(30px)',
                   mixBlendMode: 'multiply'
                 }}></div>
            {/* Bottom-right: Sky blue */}
            <div className="absolute bottom-0 right-0 w-80 h-80 translate-x-1/4 translate-y-1/4 rounded-full"
                 style={{ 
                   background: 'radial-gradient(circle, rgba(135, 206, 235, 0.35) 0%, rgba(176, 224, 230, 0.25) 40%, transparent 70%)',
                   filter: 'blur(30px)',
                   mixBlendMode: 'multiply'
                 }}></div>
            
            {/* Text content */}
            <div className="relative h-full flex flex-col justify-between p-8 md:p-12">
              {/* Top right text */}
              <div className="self-start text-left">
                <p className="text-xs md:text-sm text-gray-800 font-light">{EVENT.hosts.full}</p>
                <p className="text-xs md:text-sm text-gray-800 font-light">are throwing a</p>
              </div>
              
              {/* Center content */}
              <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4 max-w-xs mx-auto" >
                <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  {EVENT.title}
                </h1>
                <p className="text-xs md:text-sm text-gray-700 font-light max-w-md leading-relaxed">
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
                <p className="text-xs md:text-sm text-gray-800 font-light">{COPY.invitation.dateLine}</p>
                <p className="text-xs md:text-sm text-gray-800 font-light">{COPY.invitation.timeLocationLine}</p>
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
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-12 md:p-16 space-y-8">
        <header className="text-center space-y-3">
          <p className="text-sm text-gray-600 font-light tracking-wide uppercase">
            {COPY.invitation.hostsLine}
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-warm-text tracking-tight">
            {EVENT.title}
          </h1>
          <p className="text-base text-gray-600 font-light leading-relaxed max-w-md mx-auto">
            {EVENT.tagline}
          </p>
        </header>

        <section className="pt-8 space-y-6">
          <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
            Event details
          </h2>
          <div className="bg-gray-50 rounded-2xl p-6 space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">{COPY.form.dateLabel}</span>
              <span className="text-gray-600">{COPY.form.dateValue}</span>
            </div>
            <div className="flex justify-between">
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
