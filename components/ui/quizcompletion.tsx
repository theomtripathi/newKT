import React from "react";
import {
  FaHeart,
  FaUsers,
  FaBriefcase,
  FaUserPlus,
  FaUser,
  FaCog,
  FaPlus,
  FaArrowRight,
  FaClock,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

export default function QuizInterface() {
  const progress = 90; // Replace with dynamic value if needed

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-[#2B47B5] text-white p-6">
        <h1 className="text-3xl font-bold">Krishna Test</h1>
      </header>

      {/* Main Content */}
      <main className="p-6 max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="border border-gray-200 rounded-3xl p-6 shadow-sm">
            <div className="mb-6">
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-[#F39C12] rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="text-right text-[#F39C12] mt-2">
                Ready to Complete
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-[#2B47B5]">
              Ready To Submit Your Answers?
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-600" size={20} />
                <span>You've answered 18 out of 20 questions</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-green-600" size={20} />
                <span>Time Spent: 14:30</span>
              </div>
              <div className="flex items-center gap-2">
                <FaExclamationCircle className="text-[#F39C12]" size={20} />
                <span>You haven't answered 2 questions</span>
              </div>
            </div>

            <div className="space-y-4">
              <button
                aria-label="Submit the answers"
                className="w-full bg-[#4169E1] hover:bg-[#4169E1]/90 text-white rounded-xl py-4 px-6 flex items-center justify-between transition-transform duration-300 ease-in-out hover:scale-105"
              >
                Submit the Answers
                <FaArrowRight size={20} />
              </button>

              <button
                aria-label="Submit and create quiz"
                className="w-full bg-[#F39C12] hover:bg-[#F39C12]/90 text-white rounded-xl py-4 px-6 flex items-center justify-between transition-transform duration-300 ease-in-out hover:scale-105"
              >
                Submit the Answers & Create My Own Quiz
                <FaPlus size={20} />
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-[#2B47B5] text-white rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">
              Create Your Own Krishna Test
            </h2>
            <p className="text-lg mb-8">
              Explore different aspects of your life and relationships. Choose a
              category and start creating your personalized quiz!
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <CategoryButton icon={FaHeart} label="Relationship" />
              <CategoryButton icon={FaUsers} label="Family" />
              <CategoryButton icon={FaBriefcase} label="Professional" />
              <CategoryButton icon={FaUserPlus} label="Friendship" />
              <CategoryButton icon={FaUser} label="Self-Reflection" />
              <CategoryButton icon={FaCog} label="Custom" />
            </div>

            <button
              aria-label="Submit and create quiz"
              className="w-full bg-[#F39C12] hover:bg-[#F39C12]/90 text-white rounded-xl py-4 px-6 flex items-center justify-between transition-transform duration-300 ease-in-out hover:scale-105"
            >
              Submit the Answers & Create My Own Quiz
              <FaPlus size={20} />
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#2B47B5] text-white text-center py-6 mt-12">
        2024 Krishna Test. All rights reserved.
      </footer>
    </div>
  );
}

// Reusable CategoryButton Component
type CategoryButtonProps = {
  icon: React.ComponentType<{ size: number }>;
  label: string;
};

const CategoryButton: React.FC<CategoryButtonProps> = ({ icon: Icon, label }) => (
  <button
    aria-label={`Select ${label}`}
    className="bg-[#4169E1] hover:bg-[#4169E1]/90 rounded-xl p-4 text-left flex items-center gap-3 transition-transform duration-300 ease-in-out hover:scale-105"
  >
    <Icon size={24} />
    {label}
  </button>
);
