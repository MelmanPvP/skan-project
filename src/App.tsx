import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./components/mainpage/mainpage.tsx";
import SignIn from "./components/signin/signin.tsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage/>} />
                <Route path='/signin' element={<SignIn/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
