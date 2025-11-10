import { COPY } from "./constants";

export default function Thanks() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 watercolor-bg">
      <main className="bg-white max-w-lg w-full p-12 rounded-3xl shadow-2xl text-center space-y-6">
       <div className="space-y-2">
        <h1 className="font-serif text-4xl font-bold text-warm-text">
          {COPY.thanks.title}
        </h1>
        <div>
        <p className="text-gray-600 text-sm leading-relaxed">
          {COPY.thanks.message}
        </p>
      
          </div>
        </div>
        <hr className="my-4 border-t border-gray-200" />
        <div>
        <p className="text-gray-600 text-sm">
            {COPY.thanks.calendarPrompt}
          </p>
          <a
            href="/baby-shower.ics"
            className="inline-flex items-center gap-2 mt-4 px-8 py-3 rounded-full bg-gray-800 text-white font-medium text-sm hover:bg-gray-700 transition-all duration-200"
            download
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-4 h-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
              />
            </svg>
            {COPY.thanks.calendarButton}
          </a>
        </div>
        <div className="mt-8 space-y-2 text-xs text-gray-500">
          <p>{COPY.thanks.dateLine}</p>
          <p>{COPY.thanks.locationLine}</p>
        </div>
      </main>
    </div>
  );
}

