import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { DetailView } from "./components/DetailView";
import { ProfileView } from "./components/ProfileView";

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='' exact element={<HomePage />} />
                <Route path='detail/:id' element={<DetailView />} />
                <Route path='profile' element={<ProfileView />} />
            </Routes>
        </Router>
    );
};

export default App;