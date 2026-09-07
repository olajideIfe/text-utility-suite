import { useState } from "react";

const TextAnalyzer = ({ setPage }) => {
  const [text, setText] = useState("");

  const characterCount = text.length;

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

  const sentenceCount = text.trim()
    ? text.split(/[.!?]+/).filter((sentence) => sentence.trim()).length
    : 0;

  const readingTime = Math.ceil(wordCount / 200);

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-10 md:ml-72">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => setPage("home")}
          className="text-purple-600 hover:text-purple-800 mb-6"
        >
          ← Back to Home
        </button>

        <div className="bg-white rounded-3xl shadow-sm p-6 md:p-8">
          <h1 className="text-3xl font-bold text-slate-900">Text Analyzer</h1>

          <p className="text-slate-500 mt-2">
            Analyze your text and get useful statistics instantly.
          </p>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter your text here..."
            className="w-full h-48 mt-8 border border-slate-300 rounded-2xl p-4 resize-none outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <div className="bg-purple-50 p-5 rounded-2xl border border-purple-100">
              <h3 className="text-sm font-medium text-slate-500">Characters</h3>
              <p className="text-3xl font-bold text-purple-700 mt-2">
                {characterCount}
              </p>
            </div>

            <div className="bg-purple-50 p-5 rounded-2xl border border-purple-100">
              <h3 className="text-sm font-medium text-slate-500">Words</h3>
              <p className="text-3xl font-bold text-purple-700 mt-2">
                {wordCount}
              </p>
            </div>

            <div className="bg-purple-50 p-5 rounded-2xl border border-purple-100">
              <h3 className="text-sm font-medium text-slate-500">Sentences</h3>
              <p className="text-3xl font-bold text-purple-700 mt-2">
                {sentenceCount}
              </p>
            </div>

            <div className="bg-purple-50 p-5 rounded-2xl border border-purple-100">
              <h3 className="text-sm font-medium text-slate-500">
                Reading Time
              </h3>
              <p className="text-3xl font-bold text-purple-700 mt-2">
                {readingTime} min
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextAnalyzer;
