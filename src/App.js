import Banner from "./components/Banner";
import Movies from "./components/Movies";
import NavBar from "./components/NavBar";
import {BrowserRouter,Routes, Route  } from "react-router-dom";
import Favourites from "./components/Favourites";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
          <Route path="/" element={<>
            <Banner/>
            <Movies/>
          </>}/>
          <Route path="/favourites" element={<Favourites/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
