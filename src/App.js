import './App.css';
import AddInfo from "./components/AddInfo/AddInfo";
import NewProduct from "./components/NewProduct/NewProduct";
import Overview from "./components/Overview/Overview";
import Download from "./components/Download/Download";
import Review from "./components/Review/Review";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <div className="App">

            <Navbar/>
            <NewProduct/>
            <AddInfo/>
            <Overview/>
            <Download/>
            <Review/>
            <Footer/>
        </div>
    );
}

export default App;
