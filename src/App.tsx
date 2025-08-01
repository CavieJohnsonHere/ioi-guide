import Sidebar from "./components/Sidebar";
import "./index.css";
import Header from "./components/Header";
import Content from "./components/Content";
import { Route, Routes } from "react-router";
import HomePage from "./components/HomePage";

export function App() {
  return (
    <div className="h-screen bg-stone-900 text-red-500 overflow-hidden">
      {/* Making the text red makes it easy to detect when a text uses the default color since we want every text's color to be customized */}
      <Header />

      <div className="flex size-full">
        <div className="w-80 border-e border-stone-800">
          <Sidebar />
        </div>
        <div className="grow overflow-y-scroll w-full">
          <Routes>
            <Route path="/guide/:page" element={<Content />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
