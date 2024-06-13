import ItemListContainer from "./pages/itemListContainer/ItemListContainer.jsx";
import Navbar from "./components/navbar/Navbar.jsx";

function App() {
  return (
  <div>
    <Navbar />
    <ItemListContainer greeting="Bienvenidos" />
  </div>
  );
}

export default App