import { Card, CardTitle, SmallDescription, CardContainer} from '../styles/cards'

export const Cards = () => {
    return (
        <CardContainer>
            <Card>
                <CardTitle className="card-title">DIAGNÓSTICO E PLANEJAMENTO</CardTitle>
                <SmallDescription className="small-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                </SmallDescription>
            </Card>

            <Card>
                <CardTitle className="card-title">ANÁLISE E DESENHO DA SOLUÇÃO</CardTitle>
                <SmallDescription className="small-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                </SmallDescription>
            </Card>

            <Card>
                <CardTitle className="card-title">APLICAÇÃO DE ACOMPANHAMENTO</CardTitle>
                <SmallDescription className="small-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                </SmallDescription>
            </Card>
        </CardContainer>
  );
}