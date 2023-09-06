import { Routes, Route } from "react-router-dom"
import { HomePage } from "./pages/home"
import { Portifolio } from "./pages/portifolio"
import { Servicos } from "./pages/servicos"
import { Contato } from "./pages/contato"
import { SobreNos } from "./pages/sobreNos"
export function RouteComponent() {

    return (
        <Routes>
            <Route path={'/' || '/home'} element={<HomePage/>}/>
            <Route path={'/portifolio'} element={<Portifolio/>}/>
            <Route path={'/serviços'} element={<Servicos/>}/>
            <Route path={'/contato'} element={<Contato/>}/>
            <Route path={'/sobrenos'} element={<SobreNos/>}/>
        </Routes>
    )
}