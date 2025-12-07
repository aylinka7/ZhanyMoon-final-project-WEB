import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import About from './pages/About';
import Courses from './pages/Courses';
import Achievements from './pages/Achievements';
import Contacts from './pages/Contacts';
import Admin from "./pages/Admin.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-screen bg-gray-50">
                <Header />
                <main className="flex-1">
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/courses" element={<Courses />} />
                        <Route path="/achievements" element={<Achievements />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="/admin" element={<Admin />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}