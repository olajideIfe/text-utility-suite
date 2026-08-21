import {useState} from "react";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import PasswordStrengthChecker from "./components/pages/PasswordStrengthChecker";
import TextAnalyzer from "./components/pages/TextAnalyzer";
import TextTransformer from "./components/pages/TextTransformer";

const App = () => {

  const [page, setPage] = useState("home")

  return <div>
    <Navbar page={page} setPage={setPage} />
    {page === "home" && <Home setPage={setPage}/>}
    {page === "password" && <PasswordStrengthChecker setPage={setPage}/>}
    {page === "analyzer" && <TextAnalyzer setPage={setPage}/>}
    {page === "transformer" && <TextTransformer setPage={setPage} />}
  </div>;
};

export default App;
