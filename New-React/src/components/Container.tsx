import { ReactNode } from 'react';
import { Container, MinHeight, Start, Column } from '../styles/container.styles'; // 

interface ContainerProps {
    customClass?: string;
    children: ReactNode;
}

function CustomContainer(props: ContainerProps) {
    return (
        <Container>
            <MinHeight>
                <Start>
                    <Column>
                        {props.children}  
                    </Column>
                </Start>
            </MinHeight>
        </Container>
    );
}

export default CustomContainer;


