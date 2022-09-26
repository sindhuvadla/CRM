import{BrowserRouter,Routes,Route }from "react-router-dom"
import First from "./First"
import Topbar from "./Topbar"
export default function Navigation(){
    return<>
    <BroserRouter>
    <Routes>
        <Route path="/" element={<First/>}></Route>
        </Routes>
    </BroserRouter>
    </>
}