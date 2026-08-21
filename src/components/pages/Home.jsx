import React from "react";

const Home = ({ setPage }) => {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 md:ml-72 ">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="bg-purple-200 rounded-3xl p-8 md:p-12 flex justify-between">
          <div className="max-w-sm">
            <h1 className="text-slate-900 font-semibold mb-2 text-2xl md:text-3xl ">
              Welcome to
            </h1>
            <h1 className="text-2xl md:text-3xl font-bold text-purple-800">
              Text Utility Suite
            </h1>

            <p className="mt-5 text-slate-600 text-lg leading-8">
              A collection of powerful tools to analyze, transform, and improve
              your text effortlessly.
            </p>
            <button
              onClick={() => setPage("home")}
              className="mt-7 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition"
            >
              ✨ Explore Tools
            </button>
          </div>
          <div className="hidden md:flex w-64 h-64 bg-purple-200 rounded-full items-center justify-between">
            <div className="text-9xl">📝</div>
          </div>
        </section>

        {/* Tool Cards */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {/* Password */}
          <div className="bg-white rounded-3xl p-7 shadow-sm border border-slate-100 hover:-translate-y-1 transition">
            <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center text-2xl">
              🔐
            </div>

            <h2 className="text-xl font-bold text-slate-900 mt-6">
              Password Strength Checker
            </h2>

            <p className="text-slate-500 mt-3 leading-7">
              Check your password strength and discover ways to make your
              password more secure.
            </p>

            <button
              onClick={() => setPage("password")}
              className="mt-6 w-full border border-pink-300 text-pink-600 py-3 rounded-xl font-semibold hover:bg-pink-50 transition"
            >
              Check Password →
            </button>
          </div>

          {/* Transformer */}
          <div className="bg-white rounded-3xl p-7 shadow-sm border border-slate-100 hover:-translate-y-1 transition">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl">
              🔄
            </div>

            <h2 className="text-xl font-bold text-slate-900 mt-6">
              Text Transformer
            </h2>

            <p className="text-slate-500 mt-3 leading-7">
              Transform your text into uppercase, lowercase, reversed text, and
              remove unnecessary spaces.
            </p>

            <button
              onClick={() => setPage("transformer")}
              className="mt-6 w-full border border-blue-300 text-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-50 transition"
            >
              Transform Text →
            </button>
          </div>

          {/* Analyzer */}
          <div className="bg-white rounded-3xl p-7 shadow-sm border border-slate-100 hover:-translate-y-1 transition">
            <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-2xl">
              📊
            </div>

            <h2 className="text-xl font-bold text-slate-900 mt-6">
              Text Analyzer
            </h2>
            <p className="text-slate-500 mt-3 leading-7">
              Analyze your text with character count, word count, and estimated
              reading time.
            </p>

            <button
              onClick={() => setPage("analyzer")}
              className="mt-6 w-full border border-green-300 text-green-600 py-3 rounded-xl font-semibold hover:bg-green-50 transition"
            >
              Analyze Text →
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
