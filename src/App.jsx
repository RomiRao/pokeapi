import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ContainCardsPokemon from "./components/ContainCardsPokemon";
import DetailPokemon from "./components/DetailPokemon";
import FavoritesContextProvider from "./context/FavoritesContext";

function App() {
    return (
        <FavoritesContextProvider>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<ContainCardsPokemon />} />
                    <Route
                        path="/detailPokemon/:idPokemon"
                        element={<DetailPokemon />}
                    />
                </Routes>
            </BrowserRouter>
        </FavoritesContextProvider>
    );
}

export default App;
