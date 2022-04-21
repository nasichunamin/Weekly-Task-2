import { Routes, Route } from "react-router-dom"
import Navbar from "./component/Navbar/Navbar";
import UIUX from "./pages/uiux/Uiux";
import Figma from "./pages/figma/Figma";
import Git from "./pages/Git/Git";
import Html from "./pages/page_html/html";
import Css from "./pages/page_css/css"
import Bootstrap from "./pages/bootstrap/bootstrap";
import JavaScript from "./pages/javascripts/javascripts";
import Cleancode from "./pages/clean_code/cleancode";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Git/>}>Git</Route>
        <Route path="uiux" element={<UIUX/>}>Introduction UI/UX</Route>
        <Route path="figma" element={<Figma/>}>Figma</Route>
        <Route path="html" element={<Html/>}>HTML</Route>
        <Route path="css" element={<Css/>}>CSS</Route>
        <Route path="bootstrap" element={<Bootstrap/>}>Bootstrap</Route>
        <Route path="js" element={<JavaScript/>}>JavaScript Refreshment</Route>
        <Route path="cleancode" element={<Cleancode/>}>Clean Code</Route>
      </Routes>
    </div>
  );
}

export default App;
