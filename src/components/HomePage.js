import React, { useState } from "react";
import { sourceData } from "../../data-source";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getDate } from "../util";

const StyledTableHeadingAnchor = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: #444444; 
`;

const StyledTh = styled.th`
    color: #444444; 
    margin-bottom: 10px;
`;

const StyledTable = styled.table`
    margin-left: auto;
    margin-right: auto;
`;

const StyledTr = styled.tr`
    margin-bottom: 10px;
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

const StyledRowLink = styled(Link)`
    cursor: pointer;
    color: #0011bb;
    &:visited {
        color: #6600cc;
    }
`;

export const HomePage = () => {

    // Default sort value is ascending
    const [sortToggle, setSortToggle] = useState(true);
    const { metadata, features } = sourceData.data;
    const { title } = metadata;
    const tableContent = features.map((feature) => {
        const { id, properties } = feature;
        const { title, mag, time } = properties;
        const date = getDate(time);
        return (
            <tr key={id}>
                <td>
                    <StyledRowLink to={{pathname: `detail/${id}`}}>
                        {title}
                    </StyledRowLink>
                </td>
                <td>{mag}</td>
                <td>{date}</td>
            </tr>
        )
    });

    const sortByField = (field) => {
        setSortToggle(!sortToggle);
        return sortData(toggle, field);
    };

    const sortData = (toggle, field) => {
        if(toggle) {  // asceding order
            return features.sort((a,b) => (a.properties[field] > b.properties[field]) ? 
            1 : ((b.properties[field] > a.properties[field]) ? 
            -1 : 0)
            );
        } else {  // desceding order
            return features.sort((a,b) => (a.properties[field] > b.properties[field]) ? 
            -1 : ((b.properties[field] > a.properties[field]) ? 
            1 : 0)
            );
        }
    };

    return (
        <StyledDiv>
            <StyledH4>
                {title}
            </StyledH4>
            <StyledTable> 
                <tbody>
                    <StyledTr>
                        <StyledTh>
                            <StyledTableHeadingAnchor onClick={() => sortByField("title")}>
                                Title
                            </StyledTableHeadingAnchor>
                        </StyledTh>
                        <StyledTh>
                            <StyledTableHeadingAnchor onClick={() => sortByField("mag")}>
                                Magnitude
                            </StyledTableHeadingAnchor>
                        </StyledTh>
                        <StyledTh>
                            <StyledTableHeadingAnchor onClick={() => sortByField("time")}>
                                Time
                            </StyledTableHeadingAnchor>
                        </StyledTh>                        
                    </StyledTr>
                    {tableContent}
                </tbody>
            </StyledTable>
        </StyledDiv>
    )
};