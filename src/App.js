import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
    const isLoggedIn = JSON.parse(window.localStorage.getItem("loggedIn"));

    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={isLoggedIn === "true" ? <Navigate to="/home" /> : <Navigate to="/login" />}
                    />
                    <Route path="/login" element={isLoggedIn === "true" ? <Navigate to="/home" /> : <Login />} />
                    <Route path="/sign-up" element={isLoggedIn === "true" ? <Navigate to="/home" /> : <SignUp />} />
                    <Route path="/home" element={isLoggedIn === "true" ? <Home /> : <Navigate to="/login" />} />
                    <Route path="*" element={isLoggedIn === "true" ? <Navigate to="/home" /> : <Navigate to="/login" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App