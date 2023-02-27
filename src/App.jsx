import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="cart" element={<h1>shop</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
