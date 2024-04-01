import React from "react";
import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";

const FooterX =() => {
  return (
    <Footer container className="footer bg-primary">
      <FooterCopyright style={{ color: 'white' }} href="#" year={2022} id="company"/>
      <FooterLinkGroup className="footer-menu">
        <FooterLink href="#" style={{ color: 'white' }}>About</FooterLink>
        <FooterLink href="#" style={{ color: 'white' }}>Privacy Policy</FooterLink>
        <FooterLink href="#" style={{ color: 'white' }}>Licensing</FooterLink>
        <FooterLink href="#" style={{ color: 'white' }}>Contact</FooterLink>
      </FooterLinkGroup>
    </Footer>
  );
}

export default FooterX;
