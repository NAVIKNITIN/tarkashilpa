import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";


function App() {

  return (
    <div className="App">
      <NavBar />
      <div className="body-content">
        <div className="body-content-main ">
          <h1>
            Welcome to <span className="nav-logo">Landkit</span>. <br /> Develop
            anything .
          </h1>
          <h4>
            Build a beautiful, modern website with flexible
            <br />
            Bootstrap components built from scratch
          </h4>
          <div>
            <button className="btn-buynow pointer"> View all pages</button>
            <button className="btn-doc pointer">Documentation</button>
          </div>
        </div>
        <img className="body-content-2 " src="image.png" alt="LOGO"></img>
      </div>
    </div>
  );
}

export default App;
