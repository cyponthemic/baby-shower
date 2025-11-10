import { COPY } from "./constants";

export default function Thanks() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 watercolor-bg">
      <main className="bg-white max-w-lg w-full p-12 rounded-3xl shadow-2xl text-center space-y-6">
        <h1 className="font-serif text-4xl font-bold text-warm-text">
          {COPY.thanks.title}
        </h1>
        <p className="text-gray-600 text-sm leading-relaxed">
          {COPY.thanks.message}
        </p>
        <p className="text-gray-600 text-sm">
          {COPY.thanks.calendarPrompt}
        </p>

        <a
          href="/baby-shower.ics"
          className="inline-block mt-4 px-8 py-3 rounded-full bg-gray-800 text-white font-medium text-sm hover:bg-gray-700 transition-all duration-200"
          download
        >
          {COPY.thanks.calendarButton}
        </a>

        <div className="mt-8 space-y-2 text-xs text-gray-500">
          <p>{COPY.thanks.dateLine}</p>
          <p>{COPY.thanks.locationLine}</p>
        </div>
      </main>
    </div>
  );
}

