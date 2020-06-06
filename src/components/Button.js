import styled from "styled-components";


export const ButtonContainer = styled.button
`text-transform:capitalize;
font-size:1.4rem;
background: transparent;
border:0.05rem solid var(--lighBlue);
color:var(--lighBlue);
border-raduis:0.5rem;
padding:0.2rem 0.5rem;
margin-top:15px;
curseur:pointer;
margin:0.2 rem 0.5rem 0;
transition:all 0.5s ease-in-out;
&:hover{
  background:var(--lightBlue);
  color:var(--mainBlue)
}
&:focus{
  outline: none
}
`