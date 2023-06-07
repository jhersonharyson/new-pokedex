import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PokemonHome } from "./modules/PokemonHome";
import { PokemonDetails } from "./modules/PokemonDetails";
import { DefaultProvider } from "./common/components/DefaultProvider";

function App() {
  return (
    <DefaultProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/pokemon-details" element={<PokemonHome />} />
          <Route path="*" id="asdas" element={<PokemonDetails />} />
        </Routes>
      </BrowserRouter>
    </DefaultProvider>
  );
}

export default App;
