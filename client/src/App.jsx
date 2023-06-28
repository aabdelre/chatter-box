import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Chat from "@/components/chat";

//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

function App() {
  //const [count, setCount] = useState(0)
  return ( 
    <div className='app'>  
      <BrowserRouter>
        <Routes>
          <Route path="/chat" element={<Chat/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
