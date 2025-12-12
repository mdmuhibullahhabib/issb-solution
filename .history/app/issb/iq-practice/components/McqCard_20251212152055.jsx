import React from 'react'

const McqCard = () => {
  return (
                {/* Question Card */}
            <div className="mt-4 bg-white border p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-lg">
                    1. Find the next: 10, 30, 68, 130, ?, ?
                </h3>

                {/* Options */}
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                    {["150, 190", "222, 350", "165, 190", "225, 350", "200, 350"].map(
                        (opt, i) => (
                            <div
                                key={i}
                                className="px-4 py-3 rounded-lg border bg-gray-50 hover:bg-gray-100 cursor-pointer"
                            >
                                {String.fromCharCode(65 + i)}. {opt}
                            </div>
                        )
                    )}
                </div>

                {/* Explanation */}
                <button
                    onClick={() => setShowExplanation(!showExplanation)}
                    className="mt-5 px-5 py-2 border border-green-600 text-green-700 rounded-lg hover:bg-green-50"
                >
                    Show Explanation
                </button>

                {showExplanation && (
                    <p className="mt-3 text-gray-700">
                        Explanation will go here...
                    </p>
                )}
            </div>
  )
}

export default McqCard