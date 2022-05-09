import React from "react";
import { sourceData } from "../../data-source";
import { Link } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from 'styled-components';

const StyledTextLink = styled(Link)`
    cursor: pointer;
    color: #0011bb;
    &:visited {
        color: #6600cc;
    }
`;

const StyledLogoLink = styled(Link)`
    cursor: pointer;
`;

const StyledLeftCol = styled(Col)`
    max-height: 80%;
`;

const StyledMiddleCol = styled(Col)`
    color: #777777;
    text-align: center;
`;

const StyledRightCol = styled(Col)`
    text-align: right;
    padding-top: 10px;
`;

const StyledImg = styled.img`
    max-width: 30%;
    max-height: 80%;
`;

const StyledRow = styled(Row)`
    background-color: #ededed;
    height: 80px;
    padding-top: 15px;
`;

export const Header = () => {
    const { site, profile } = sourceData; 
    const { logoImage, title } = site;
    const { firstName } = profile;
  
    return (
        <Container fluid>
            <StyledRow>
                <StyledLeftCol xs={3}>
                    <StyledLogoLink to={{pathname: ``}}>
                        <StyledImg src={logoImage} alt={title}></StyledImg>
                    </StyledLogoLink>
                </StyledLeftCol>
                <StyledMiddleCol xs={6}>
                    <h2>{title}</h2>
                </StyledMiddleCol>
                <StyledRightCol xs={3}>
                    <StyledTextLink to={{pathname: `profile`}}>
                        Welcome {firstName}
                    </StyledTextLink>
                </StyledRightCol>
            </StyledRow>
        </Container>
    )
};