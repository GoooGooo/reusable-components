import styled from "styled-components"

const fontColor = {
    disabled: "#747B95",
    active: "#333950",
    error: "#F05B5B"
}

const borderColor = {
    disabled: "#747B95",
    active: "#747B95",
    error: "#F05B5B"
}

const fontWeight = {
    input: "regular",
    dropdown: "bold",
}



const Input = styled.input`
    width: 360px;
    margin-bottom: 40px;
    padding-left: 16px;
    padding-bottom: 16px;
    font-size: 16px;
    font-weight: ${(props) => fontWeight[props.weight]};;
    line-height: 28px;
    border-top: none;
    border-right: none;
    border-left: none;
    /* border-bottom-style: groove; */
    border-bottom: 1px solid ${(props) => borderColor[props.border]};
    &:focus {
        outline: none;
    }
    /* color: ${(props) => {
        if(props.color) {
            return fontColor[props.color];
        }
    }}; */
    &::placeholder {color: ${(props) => fontColor[props.colorr]};
    }
`

export default Input;
