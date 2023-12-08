import { Text , Paragraph, ParagraphTytle} from "../styles/home"
import { Cards } from "../components/Cards"

export const HomeText = () =>{
    return(
        <div> 
            <Paragraph>
                <div>
                    <ParagraphTytle>
                        Trabalho 100% orientado para resultados
                    </ParagraphTytle>
                </div>
                            
                    <div>
                        <Text>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa             bgttttttttttttbbbbbbbbbbbbbbb  qui officia deserunt mollit anim id est laborum." </p>
                        </Text>
                    </div>
            </Paragraph>

            <Cards/> 
            
        </div>
    )
}