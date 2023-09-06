import { Routes, Route } from "react-router-dom"
import { HomePage } from "./pages/home"
import { Navbar } from "./components/Navbar"
import { Portifolio } from "./pages/portifolio"
import { Servicos } from "./pages/servicos"
import { Contato } from "./pages/contato"
import { SobreNos } from "./pages/sobreNos"
import { Footer } from "./components/Footer"
export function RouteComponent() {

    return (
        <Routes>
            <Navbar />
            <Route path={'/' || '/home'} element={<HomePage/>}/>
            <Route path={'/portifolio'} element={<Portifolio/>}/>
            <Route path={'/serviços'} element={<Servicos/>}/>
            <Route path={'/contato'} element={<Contato/>}/>
            <Route path={'/sobrenos'} element={<SobreNos/>}/>
            <Footer/>
        </Routes>
    )
}