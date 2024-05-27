//import React from 'react';
import styled from 'styled-components';
import logo from '../images/LIKELION_brandsymbol.png';

const FooterContainer = styled.div`
    display: flex;
    align-items: center;
`;

const StyledImg = styled.img`
    width: 50px; 
    height: auto; 
    margin-right: 10px;
`;

const StyledParagraph = styled.p`
    margin: 5px 0; 
    font-size: 9px;
    display: grid;
    grid-template-columns: auto; 
`;

export default function Footer() {
    return (
        <FooterContainer>
            <StyledImg src={logo} alt="logo" />
            <div>
                <StyledParagraph>저자: 김가빈</StyledParagraph>
                <StyledParagraph>이메일: gabin321321@gmail.com</StyledParagraph>
                <StyledParagraph>Copyright 2024. Website. All Rights Reserved.</StyledParagraph>
            </div>
        </FooterContainer>
    );
}


