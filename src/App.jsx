import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Rowlist from "./Components/Rows/Rowlist/Rowlist";
import { HashRouter } from "react-router-dom";
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Banner />
        <Rowlist />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
