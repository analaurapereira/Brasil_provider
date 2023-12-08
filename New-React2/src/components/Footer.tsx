import { FaInstagram, FaLinkedin, FaFacebook, FaGoogle } from 'react-icons/fa';

import {
  FooterWrapper,
  SocialContainer,
  SocialListItem,
  CopyRightSpan,
} from '../styles/footer.ts';

export function Footer() {
  return (
    <FooterWrapper>
      <SocialContainer>
        <ul>
          <SocialListItem >
              <FaFacebook style ={{marginBottom:'-35px',}}/>
          </SocialListItem>
          <SocialListItem >
              <FaInstagram style ={{marginBottom:'-35px',}}/>
          </SocialListItem>
          <SocialListItem >
              <FaLinkedin style ={{marginBottom:'-35px',}}/>
           </SocialListItem>
          <SocialListItem >
              <FaGoogle style ={{marginBottom:'-35px',}}/>
          </SocialListItem>
        </ul>
      </SocialContainer>
        <CopyRightSpan>Brasil Provider</CopyRightSpan> &copy; 2023
    </FooterWrapper>
  );
}
