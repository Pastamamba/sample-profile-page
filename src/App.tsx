import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Profile from "./pages/Profile";
import ItemsList from "./pages/ItemsList";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <CssBaseline />
      <NavBar />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<ItemsList />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
