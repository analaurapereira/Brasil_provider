
import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    background-color: #2680FF;
    color: whitesmoke;
    padding: 3em;
    text-align: center;
`;

export const SocialList = styled.ul`
    display: flex;
    justify-content: center;
    list-style-type: none;
`;

export const SocialListItem = styled.li`
    margin: 0 1em;

    &:hover {
        color: #40FF00;
    }
`;

export const SocialIcon = styled.svg`
    font-size: 1.5em;
    cursor: pointer;
`;

export const CopyRight = styled.div`
    margin-top: 2em;
`;

export const CopyRightSpan = styled.span`
    font-weight: bold;
    color: #40FF00;
`;
