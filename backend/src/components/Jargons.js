import React, { useState } from 'react'
import Header from './Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardHome from './DashboardHome';
import Learning from './Learning';

function Dashboard() {
    const [activePage, setActivePage] = useState('home');
    function renderComponent() {
        switch (activePage) {
            case "home":
                return <DashboardHome />;
            case "learning":
                return <Learning />;
            default:
                return <DashboardHome />;
        }
    }
    return (

        <div>
            <Header />
                <div className="min-h-screen bg-gray-50">
                    {/* Navigation Tabs */}
                    <nav className="flex justify-center border-b bg-white shadow-md">
                        <div className="flex space-x-8 py-4">
                            <button
                                className={`text-sm font-medium ${activePage === "home"
                                        ? "text-blue-600 border-b-2 border-blue-600"
                                        : "text-gray-600 hover:text-blue-600"
                                    }`} onClick={() => setActivePage('home')}

                            >
                                Home
                            </button>
                            <button
                                className={`text-sm font-medium ${activePage === "learning"
                                        ? "text-blue-600 border-b-2 border-blue-600"
                                        : "text-gray-600 hover:text-blue-600"
                                    }`} onClick={() => setActivePage('learning')}

                            >
                                My Learning
                            </button>
                            <button className="text-sm font-medium text-gray-600 hover:text-blue-600">
                                Certification
                            </button>
                        </div>
                    </nav>

                    {/* Dynamic Component Rendering */}
                    <main className="p-6">{renderComponent()}</main>
                </div>
           
        </div>

    )
}


export default 