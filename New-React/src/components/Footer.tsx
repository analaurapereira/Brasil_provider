import {FaInstagram, FaLinkedin, FaFacebook} from 'react-icons/fa'

import { FooterWrapper, SocialList, SocialListItem, SocialIcon, CopyRight, CopyRightSpan } from '../styles/footer.styles';

export function Footer(){
    return(
        <FooterWrapper>
            <SocialList>
                <SocialListItem>
                    <SocialIcon> <FaFacebook/> </SocialIcon>
                </SocialListItem>
                <SocialListItem>
                    <SocialIcon> <FaInstagram/> </SocialIcon>
                </SocialListItem>
                <SocialListItem>
                    <SocialIcon> <FaLinkedin/> </SocialIcon>
                </SocialListItem>
            </SocialList>
            <CopyRight>
                <CopyRightSpan>Brasil Provider</CopyRightSpan> &copy; 2023
            </CopyRight>
        </FooterWrapper>
    )
}