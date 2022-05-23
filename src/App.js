import { Routes, Route } from "react-router-dom";
// components
import Header from "./components/Layouts/Header";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Movie from "./pages/Movie";

const App = () => {
  return (
    <>
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/movie/:movieId" element={<Movie />}></Route>
        </Routes>
      </main>
    </>
  );
};

export default App;
