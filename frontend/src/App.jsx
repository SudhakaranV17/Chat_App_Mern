import "./App.scss";
import Home from "./pages/home/Home";
import SignUp from "./pages/signup/SignUp";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="p-4 h-screen flex justify-center items-center">
        <Home />
      </div>
    </>
  );
}

export default App;
