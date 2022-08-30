import styled from "styled-components";

const SignupFormStyled= styled.div`
    &:hover,
    &:focus,
    &:active{
        color: aliceblue;
        border-color: #000;
    }

    & h2 {
        margin: auto;
    }

    @media (preferes-color-scheme: dark) {
        border-color: #000;
    }
`;

import React from "react";

export default function SignupForm(props) {
    return (
        <SignupFormStyled variant={props.variant}>

        </SignupFormStyled>
    )
}