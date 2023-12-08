import { Routes, Route, useLocation } from "react-router-dom"
import { HomePage } from "./pages/home.tsx"
import { Portifolio } from "./pages/portifolio.tsx"
import { Servicos } from "./pages/servicos.tsx"
import { Contato } from "./pages/contato.tsx"
import { SobreNos } from "./pages/sobreNos.tsx"
import { useEffect } from 'react';


export function RouteComponent() {

    const location = useLocation();

    // Função para rolar suavemente para o topo
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
        });
    };

    useEffect(() => {
        scrollToTop();
    }, [location.pathname]);
    
    return (
        <Routes>
            <Route path={'*' || '/home'} element={<HomePage/>}/>
            <Route path={'/portifolio'} element={<Portifolio/>}/>
            <Route path={'/serviços'} element={<Servicos/>}/>
            <Route path={'/contato'} element={<Contato/>}/>
            <Route path={'/sobrenos'} element={<SobreNos/>}/>
        </Routes>
    )
}