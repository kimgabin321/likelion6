import { NavLink as RouterNavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(RouterNavLink)`
    text-decoration: none;
    color: black;
    &.active {
        color: red;
    }
    margin-right: 300px;
`;

const ReactPage = styled(StyledNavLink)`
    margin-right: 0px
`;

const HeaderBtn = styled.div`
    text-align: center;
`;

export default function Header() {
    return (
        <HeaderBtn>
            <hr></hr>
            <StyledNavLink to='/'>Home</StyledNavLink>
            <StyledNavLink to='/intro'>Intro</StyledNavLink>
            <StyledNavLink to='/work'>Work</StyledNavLink>
            <ReactPage to='/react'>React</ReactPage>
            <hr></hr>
        </HeaderBtn>
    );
}
