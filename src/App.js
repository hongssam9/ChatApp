import './App.css';
import Sidebar from "./components/Sidebar.jsx"
import Chat from "./components/Chat.jsx"
import Login from "./components/Login.jsx"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import React, { useState } from 'react'
import { useStateValue } from "./StateProvider"
function App() {
    const [{ user }, dispatch] = useStateValue()

    return (
        <div className="app">
            {/* If there's no user, show a login screen, otherwise show the app*/}
            {!user ? (
                <Login />
            ) : (
                <div className="app__body">
                    <Router>
                        <Sidebar />
                        <Routes>
                            <Route path="/rooms/:roomId" element={<Chat />} />
                            <Route path="/" element={<Chat />} />
                        </Routes> 
                    </Router>
                </div>
            )}
        </div>
    );
}

export default App;

/* OutLINE 
Sidebar
Chat

*/

