import React from "react";
import { sourceData } from "../../data-source";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from 'styled-components';

const { firstName, lastName, phone, email, bio, avatarImage } = sourceData.profile;

const StyledTh = styled.th`
    color: #444444;
    width: 20%;
    vertical-align: top;
`;

const StyledTd = styled.td`
    color: #777777;
    padding-left: 25px;
`;

const StyledTbody = styled.tbody`
    text-align: left;
`;

const StyledDiv = styled.div`
    margin: auto;
    width: 50%;
    text-align: center;
`;

const StyledH4 = styled.h4`
    margin: 20px;
    color: #444444;
`;

const StyledRow = styled(Row)`
    margin-left: auto;
    margin-right: auto;
`;

const StyledImg = styled.img`
    max-width: 100%;
    max-height: 100%;
`;

export const ProfileView = () => {
    return (
        <StyledDiv>
            <StyledH4>
                Profile
            </StyledH4>
            <StyledRow>
                <Col xs={3}>
                    <StyledImg src={avatarImage} alt={`${firstName} ${lastName}`}></StyledImg>
                </Col>
                <Col xs={9}>
                    <table>
                        <StyledTbody>
                            <tr>
                                <StyledTh>First name</StyledTh>
                                <StyledTd>{firstName}</StyledTd>
                            </tr>
                            <tr>
                                <StyledTh>Last name</StyledTh>
                                <StyledTd>{lastName}</StyledTd>
                            </tr>
                            <tr>
                                <StyledTh>Phone</StyledTh>
                                <StyledTd>{phone}</StyledTd>
                            </tr>
                            <tr>
                                <StyledTh>Email</StyledTh>
                                <StyledTd>{email}</StyledTd>
                            </tr>
                            <tr>
                                <StyledTh>Bio</StyledTh>
                                <StyledTd>{bio}</StyledTd>
                            </tr>
                        </StyledTbody>
                    </table>
                </Col>
            </StyledRow>
        </StyledDiv>
    )
};