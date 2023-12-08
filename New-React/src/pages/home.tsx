import { useState } from 'react'
import { Navbar } from "../components/Navbar.tsx"
import { Footer } from "../components/Footer.tsx"
import { StyledTitle, StyledName  } from '../styles/home.styles.ts'

export const HomePage: React.FC = () => {
    const images = [1, 2, 3, 4, 5, 6]

    const [cont, setCont] = useState(images.length)

    return (
        <div >
            <Navbar/>
            <section>
                <div>
                    <StyledTitle>
                     <h1 >PRECISA MELHORAR A  <br/> PROSPEÇÃO DE CLIENTES E <br/> AUMENTAR VENDAS? <br/></h1>
                    </StyledTitle> 
                    <StyledName>
                    <h2 > <br/>NOSSO CRM É A SOLUÇÃO PARA VOCÊ</h2>
                       </StyledName>
                </div>
                <div>
                    <button onClick={() => setCont(cont-1)}>icon</button>
                    {`${cont+1} / ${images.length + 1}`}
                    <button onClick={() => setCont(cont + 1)}>icon</button>
                </div>
                <div>
                    {images[cont]}
                </div>
                <div>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>
                </div>
            </section>
            <Footer/>
        </div>
    )
}