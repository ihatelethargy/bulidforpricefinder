import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { OpenseaContextProvider } from "./context/opnseaContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./pages/main/Main.jsx";
import Detail from "./pages/detail/Detail.jsx";
import Detail_SW from "./pages/detail/Detail_SW.jsx";
import Demo from "./pages/demo/Demo.jsx";
import "./App.css";

function App() {
  return (
    <OpenseaContextProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/detail" element={<Detail />} />
          <Route exact path="/detail_SW" element={<Detail_SW />} />
        </Routes>
      </Router>
    </OpenseaContextProvider>
  );
}

export default App;
