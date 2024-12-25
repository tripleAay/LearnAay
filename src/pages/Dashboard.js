import React from 'react'
import Header from '../components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Dashboard() {
  return (
    <Router>
        <AppBody/>
    </Router>
  )
}

function AppBody(){
    return(
    <div>
      <Header/>
      <div className="min-h-screen bg-gray-50">
      {/* Navigation Tabs */}
      <nav className="flex justify-center border-b bg-white shadow-md">
        <div className="flex space-x-8 py-4">
          <button
            className={`text-sm font-medium ${
              activeTab === "home"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }`}
            
          >
            Home
          </button>
          <button
            className={`text-sm font-medium ${
              activeTab === "learning"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }`}
           
          >
            My Learning
          </button>
          <button className="text-sm font-medium text-gray-600 hover:text-blue-600">
            Online Degrees
          </button>
          <button className="text-sm font-medium text-gray-600 hover:text-blue-600">
            Careers
          </button>
        </div>
      </nav>

      {/* Dynamic Component Rendering */}
      <main className="p-6"></main>
    </div>
  </div>
    )
}

export default Dashboard
