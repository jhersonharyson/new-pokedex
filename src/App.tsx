import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PokemonHome } from "./modules/PokemonHome";
import { PokemonDetails } from "./modules/PokemonDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pokemon-details" element={<PokemonHome />} />
        <Route path="*" id="asdas" element={<PokemonDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
