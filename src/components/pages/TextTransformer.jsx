import { useState } from "react";

const TextTransformer = ({ setPage }) => {
  const [text, setText] = useState("");

  const handleUppercase = () => {
    setText(text.toUpperCase());
  };

  const handleLowercase = () => {
    setText(text.toLowerCase());
  };

  const handleReverse = () => {
    setText(text.split("").reverse().join(""));
  };

  const handleRemoveSpaces = () => {
    setText(text.replace(/\s+/g, " ").trim());
  };

  const handleClear = () => {
    setText("");
  };

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 md:ml-72">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={() => setPage("home")}
          className="text-purple-600 hover:text-purple-800 mb-6"
        >
          ← Back to Home
        </button>

        <div className="bg-white rounded-3xl shadow-sm p-8">
          <h1 className="text-3xl font-bold text-slate-900">
            🔄 Text Transformer
          </h1>

          <p className="text-slate-500 mt-2">
            Transform your text with simple tools.
          </p>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter your text here..."
            className="w-full h-48 mt-8 border border-slate-300 rounded-2xl p-4 resize-none outline-none focus:ring-2 focus:ring-purple-400"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5">
            <button
              onClick={handleUppercase}
              className="bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition"
            >
              Uppercase
            </button>

            <button
              onClick={handleLowercase}
              className="bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition"
            >
              Lowercase
            </button>

            <button
              onClick={handleReverse}
              className="bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition"
            >
              Reverse
            </button>

            <button
              onClick={handleRemoveSpaces}
              className="bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition"
            >
              Remove Spaces
            </button>
          </div>

          <button
            onClick={handleClear}
            className="w-full mt-4 border border-slate-300 text-slate-600 py-3 rounded-xl hover:bg-slate-100 transition"
          >
            Clear
          </button>

          <div className="flex justify-between mt-6 text-sm text-slate-500">
            <span>Characters: {text.length}</span>

            <span>
              Words: {text.trim() ? text.trim().split(/\s+/).length : 0}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TextTransformer;
