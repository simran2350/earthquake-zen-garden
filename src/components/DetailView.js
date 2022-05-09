import React from "react";
import { useParams } from "react-router-dom";
import { sourceData } from "../../data-source";
import styled from 'styled-components';
import { getDate } from "../util";

const StyledTh = styled.th`
    color: #444444;
`;

const StyledTd = styled.td`
    color: #777777;
    padding-left: 25px;
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

const StyledTable = styled.table`
    margin-left: auto;
    margin-right: auto;
`;

const StyledTbody = styled.tbody`
    text-align: left;
`;

export const DetailView = () => {
    const params = useParams();
    const { id: paramId } = params;
    const { features } = sourceData.data;
    const feature = features.filter(feat => feat.id === paramId);
    const { title, mag, time, status, tsunami, type } = feature[0].properties;
    const date = getDate(time);
    return (
        <StyledDiv>
            <StyledH4>
                {title}
            </StyledH4>
            <StyledTable>
                <StyledTbody>
                    <tr>
                        <StyledTh>Title</StyledTh>
                        <StyledTd>{title}</StyledTd>
                    </tr>
                    <tr>
                        <StyledTh>Magnitude</StyledTh>
                        <StyledTd>{mag}</StyledTd>
                    </tr>
                    <tr>
                        <StyledTh>Time</StyledTh>
                        <StyledTd>{date}</StyledTd>
                    </tr>
                    <tr>
                        <StyledTh>Status</StyledTh>
                        <StyledTd>{status}</StyledTd>
                    </tr>
                    <tr>
                        <StyledTh>Tsunami</StyledTh>
                        <StyledTd>{tsunami}</StyledTd>
                    </tr>
                    <tr>
                        <StyledTh>Type</StyledTh>
                        <StyledTd>{type}</StyledTd>
                    </tr>
                </StyledTbody>
            </StyledTable>
        </StyledDiv>
    )
};