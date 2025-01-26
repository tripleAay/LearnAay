import React, { useState } from "react";
import Footer from "../components/Footer";
import CourseTile from "../components/CourseTile"

function Dashboard() {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("home");

  // Function to render content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <HomeContent />;
      case "learning":
        return <LearningContent />;
      case "certification":
        return <CertificationContent />;
      default:
        return <HomeContent />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-20 py-6">
      {/* Navigation Tabs */}
      <nav className="flex justify-center bg-white border-b shadow-md mt-10 ">
        <div className="flex space-x-8 py-4">
          {["home", "learning", "certification"].map((tab) => (
            <button
              key={tab}
              className={`text-sm font-medium capitalize ${activeTab === tab
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-blue-600"
                }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      {/* Dynamic Content Rendering */}
      <main className="p-6">{renderContent()}</main>
      <Footer />
    </div>
  );
}

// Improved Placeholder Components
function HomeContent() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">Happy Learning!</h1>
      <p className="text-gray-600 mb-4">Here is your dashboard overview.</p>

      <div className="grid grid-cols-1 gap-6">
        {/* General Learning */}
        <div className="bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-lg transition block ">
          <h2 className="text-xl font-bold text-blue-700 mb-4">General Learning</h2>
          <div className="flex flex-nowrap gap-4">
          <CourseTile/>
          <CourseTile/>
          <CourseTile/>
          <CourseTile/>

          </div>
        </div>

        {/* Science */}
        <div className="bg-green-100 p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-bold text-green-700">Science</h2>
          <p className="text-gray-600 mt-2">Add content here...</p>
          <div className="flex flex-nowrap gap-4">
          <CourseTile/>
          <CourseTile/>
          <CourseTile/>
          <CourseTile/>

          </div>
        </div>

        {/* Art */}
        <div className="bg-yellow-100 p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-bold text-yellow-700">Art</h2>
          <p className="text-gray-600 mt-2">Add content here...</p>
          <div className="flex flex-nowrap gap-4">
          <CourseTile/>
          <CourseTile/>
          <CourseTile/>
          <CourseTile/>

          </div>
        </div>

        {/* Technology */}
        <div className="bg-red-100 p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-bold text-red-700">Technology</h2>
          <p className="text-gray-600 mt-2">Add content here...</p>
          <div className="flex flex-nowrap gap-4">
          <CourseTile/>
          <CourseTile/>
          <CourseTile/>
          <CourseTile/>

          </div>
        </div>
      </div>

    </div>
  );
}

function LearningContent() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">Welcome to the Learning Page!</h1>
      <p className="text-gray-600">Track your courses and progress here.</p>
    </div>
  );
}

function CertificationContent() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">Welcome to the Certification Page!</h1>
      <p className="text-gray-600">
        View and download your certifications here.
      </p>
    </div>
  );
}

export default Dashboard;
