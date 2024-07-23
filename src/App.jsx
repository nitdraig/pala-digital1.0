import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Page404 from "./components/error404";
import IndexView from "./views/IndexView/IndexView";
import Chat from "./views/Chat/Chat";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<IndexView />}></Route>
        <Route path="/empezar" element={<Chat />}></Route>
        <Route path="/*" element={<Page404 />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
