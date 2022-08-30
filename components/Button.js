import styled from "styled-components"

const sizes = {
    small: "14px 42px",
    large: "14px 92px"
}

const bgColors = {
    btn1: "#5175FF",
    btn2: "rgba(81, 117, 255, 0.15)",
    btn3: "#fff"
}

const hoverBgColors = {
    btn1: "#829CFF",
    btn2: "rgba(81, 117, 255, 0.25)",
    btn3: "#fff"
}

const fontColors = {
    btn1: "#fff",
    btn2: "#5175FF",
    btn3: "#5175FF"
}

const hoverFontColors = {
    btn3: "#829CFF"
}

const Button = styled.button`
    /* padding: ${(props) => {
        if(props.size) {
            return sizes[props.size];
        }
    }}; */
    margin-bottom: 20px;
    padding: ${(props) => sizes[props.size]};
    font-weight: bold;
    font-size: 16px;
    line-height: 28px;
    background-color: ${(props) => bgColors[props.bg]};
    &:hover {
        background-color: ${(props) => hoverBgColors[props.hoverBg]};
    }
    &:hover {
        background-color: ${(props) => hoverFontColors[props.hoverFont]};
    }
    border: none;
    border-radius: 28px;
    color: ${(props) => fontColors[props.color]};
`

export default Button;


/* padding: ${(props) => {
    if(props.size === "small"){
        return "14px 42px"
    } else if(props.size === "large"){
        return "14px 92px"
    }     
}}; */