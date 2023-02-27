import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<h1>shop</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
