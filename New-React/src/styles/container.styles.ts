import styled from 'styled-components';

const Container = styled.div`
    width: 1200px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    flex-wrap: wrap;
`;

const MinHeight = styled.div`
    min-height: 75%;
`;

const Start = styled.div`
    justify-content: flex-start;
`;

const Column = styled.div`
    flex-direction: column;
    justify-content: flex-start;
`;

export { Container, MinHeight, Start, Column };

