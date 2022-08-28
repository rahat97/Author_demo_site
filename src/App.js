import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Books from './Pages/Books/Books';
import Publications from './Pages/Publications/Publications';
import Songs from './Pages/Songs/Songs';
import TalkshownInterview from './Pages/TalkshownInterview/TalkshownInterview';
import Reward from './Pages/Reward/Reward';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="books" element={<Books />} />
        <Route path="publications" element={<Publications />} />
        <Route path="songs" element={<Songs />} />
        <Route path="talkshowninterview" element={<TalkshownInterview />} />
        <Route path="reward" element={<Reward />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
