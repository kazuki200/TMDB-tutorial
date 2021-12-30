import Movie from "@mui/icons-material/Movie";
import { Container } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./componets/Header/Header";
import SimpleBottomNavigation from "./componets/Main.Nav";
import { Movies } from "./pages/Movies";
import { Search } from "./pages/Search";
import { Series } from "./pages/Series";
import { Trending } from "./pages/Trending";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="min-h-screen bg-gray-700 text-white pt-32 pb-16">
          <Container>
            <Routes>
              <Route path="/" element={<Trending />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/series" element={<Series />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </Container>
        </div>
        <SimpleBottomNavigation />
      </BrowserRouter>
    </>
  );
}

export default App;
