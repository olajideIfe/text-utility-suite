import { useState } from "react";

const PasswordStrengthChecker = ({ setPage }) => {
  const [password, setPassword] = useState("");

  const checkStrength = () => {
    let score = 0;

    if (password.length >= 8) {
      score++;
    }

    if (/[A-Z]/.test(password)) {
      score++;
    }
    if (/[a-z]/.test(password)) {
      score++;
    }
    if (/[0-9]/.test(password)) {
      score++;
    }
    if (/[^A-Za-z0-9]/.test(password)) {
      score++;
    }
    return score;
  };
  const strength = checkStrength();

  let strengthText = "";

  if (strength <= 1) {
    strengthText = "Weak";
  } else if (strength <= 3) {
    strengthText = "Medium";
  } else {
    strengthText = "Strong";
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 md:ml-72">
      <div className="max-w-2xl mx-auto">
        {/* Back button */}
        <button
          onClick={() => setPage("home")}
          className="text-purple-600 hover:text-purple-800 mb-6"
        >
          ← Back to Home
        </button>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-sm p-8">
          <h1 className="text-3xl font-bold text-slate-900">
            🔐 Password Strength Checker
          </h1>

          <p className="text-slate-500 mt-2">
            Check how secure your password is.
          </p>

          {/* Input */}
          <div className="mt-8">
            <label className="block font-semibold text-slate-700 mb-2">
              Enter Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password..."
              className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Strength */}
          <div className="mt-6">
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-slate-700">
                Password Strength
              </span>

              <span className="font-bold">{strengthText}</span>
            </div>

            {/* Strength bar */}
            <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-purple-600 transition-all duration-300"
                style={{
                  width: `${(strength / 5) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Requirements */}
          <div className="mt-8">
            <h2 className="font-semibold text-slate-800 mb-4">
              Password Requirements
            </h2>

            <div className="space-y-3">
              <p
                className={
                  password.length >= 8 ? "text-green-600" : "text-slate-500"
                }
              >
                {password.length >= 8 ? "✓" : "○"} At least 8 characters
              </p>

              <p
                className={
                  /[A-Z]/.test(password) ? "text-green-600" : "text-slate-500"
                }
              >
                {/[A-Z]/.test(password) ? "✓" : "○"} One uppercase letter
              </p>

              <p
                className={
                  /[a-z]/.test(password) ? "text-green-600" : "text-slate-500"
                }
              >
                {/[a-z]/.test(password) ? "✓" : "○"} One lowercase letter
              </p>

              <p
                className={
                  /[0-9]/.test(password) ? "text-green-600" : "text-slate-500"
                }
              >
                {/[0-9]/.test(password) ? "✓" : "○"} One number
              </p>

              <p
                className={
                  /[^A-Za-z0-9]/.test(password)
                    ? "text-green-600"
                    : "text-slate-500"
                }
              >
                {/[^A-Za-z0-9]/.test(password) ? "✓" : "○"} One symbol
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PasswordStrengthChecker;
