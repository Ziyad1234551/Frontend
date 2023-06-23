
import styled, { css } from "styled-components";
const color = {
    primary : "#4136ee",
    secondary:"#B517EE"
}
const Button = styled.button `
padding :0.8rem 2rem;
border:none;
border-radius:10px;
color:#fff;
cursor:pointer;
${(props) =>props.full && css `
display:block;
width:100%`}
;
font-size:${({size,theme})=>
theme.fontSize[size] ||theme.fontSize["sm"]};
padding:${({size,theme})=>theme.padding[size] ||theme.padding["sm"]};
background-color:${(props)=>
    props.theme.colors[props.variant]||props.theme.variant["primary"]
}
`;
export default Button;