import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GameDetailsPage from "./pages/GameDetailsPage";
import GenresPage from "./pages/GenresPage"; 
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game/:id" element={<GameDetailsPage />} />
        <Route path="/genres" element={<GenresPage />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar
        closeOnClick
        pauseOnHover
        theme="colored"
        toastClassName="!bg-transparent !shadow-none !p-0 !text-xs !leading-tight"
        closeButton={false}
      />
    </>
  );
}

export default App;



