import { Carrossel } from '../components/Carrossel.tsx'
import { StyledTitle, StyledName, Sombra, Sombra2} from '../styles/home.ts'
import { SectionContainer } from '../styles/container.ts'
import  Fundo  from "../assets/img/imgFundo.jpg"
import { HomeText } from '../texts/homeText.tsx'
import img1 from '../assets/img/m1.jpg'

export const HomePage = () => {
    return (
        <SectionContainer>
                <section>
                    
                    <Sombra />
                    <img src={Fundo} style={{
                        width: '101%',
                        height: '100vh',    
                        objectFit: 'cover',
                        marginLeft: '-9px',
                        zIndex: '-2',
                        position: 'relative',
                    }} />
                    
                    
                    <div>
                        <StyledTitle>
                        <h1 >PRECISA MELHORAR A  <br/> PROSPEÇÃO DE CLIENTES E <br/> AUMENTAR VENDAS? <br/></h1>
                        </StyledTitle> 
                        <StyledName>
                        <h2 > <br/>Nosso CRM é a solução</h2>
                        </StyledName>
                    </div>
                    <Carrossel />
                    
                    <img src= {img1} style ={{
                        width: '30%',
                        height: '50vh',   
                        marginLeft: '930px',
                        marginTop: '-200px',
                        zIndex: '-2',
                        borderRadius: '10px'}}
                    />
                    <HomeText /> 

                    <Sombra2 />
                    <img src={Fundo} style={{
                        width: '101%',
                        height: '101vh',    
                        objectFit: 'cover',
                        marginLeft: '-9px',
                        zIndex: '-2',
                        marginTop:'200px',
                        position: 'relative',
                    }} />  
                </section>
        </SectionContainer>
    )
}