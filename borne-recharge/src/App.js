import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./composants/Navigation";
import Accueil from "./pages/Accueil";
import Informations from "./pages/Informations";
import Abonnements from "./pages/Abonnements";
import Bornes from "./pages/Bornes";
import Professionnels from "./pages/Professionnels";
import Particuliers from "./pages/Particuliers";

function App() {
  return (
    <div>
      {/* Ajout de la barre de navigation sur toute l'application */}
      <Navigation />

      {/* Gestion de l'ensemble des liens (redirections) de l'application */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Accueil />} />
          <Route exact path="/Informations" element={<Informations />} />
          <Route exact path="/Abonnements" element={<Abonnements />} />
          <Route exact path="/Bornes" element={<Bornes />} />
          <Route exact path="/Professionnels" element={<Professionnels />} />
          <Route exact path="/Particuliers" element={<Particuliers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
