import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import MainLayout from "./components/MainLayout";
import Contact from "./Pages/Contact";

function App() {
  return (
    <main className="bg-zinc-950 text-slate-300 h-full font-['Rubik']  ">
      

      <Routes>
        
        <Route element={<MainLayout/>}>

          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact/>}/>

        </Route>
        
      </Routes>
    </main>
  );
}

export default App;
