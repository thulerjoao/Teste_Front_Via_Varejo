import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/index";



const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    )
}

export default Router;