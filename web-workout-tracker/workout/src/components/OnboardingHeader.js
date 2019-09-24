import React from "react";
import styled from "styled-components";

export default function OnboardingHeader(props) {
    return (
        <Header>
            <img alt={props.text} src={props.url} style={{width: "20px", "marginRight": "7px"}}/>
            <HeaderText data-testid="body-goal-header">{props.text}</HeaderText>
        </Header>
    )
}

const Header = styled.div`
    width: 90%;
    max-width: 510px;
    margin: 15px auto;
    display: flex;
    align-items: center;
`;

const HeaderText = styled.h1`
    font-family: Roboto Condensed, sans-serif;
    font-size: 24px;
    line-height: 31px;
    font-weight: bold;
    text-transform: uppercase;
    color: #FAFBFC;
`;