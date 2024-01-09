import React from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import { Profile } from "./components/profile/Profile";
import { Messages } from "./components/messages/Messages";
import { News } from "./components/news/News";
import { Footer } from "./components/footer/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/profile" element={<Profile />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/news" element={<News />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
