import styled from 'styled-components';

export const Buttons = styled.ul`
display: flex;
align-items: center;
justify-content: center;
gap: 15px;
`;
export const Button = styled.button`
position: relative;
display: inline-block;
font-family: 'Arial', 'Helvetica', 'FreeSans', 'Liberation Sans', 'Nimbus Sans L',
  sans-serif;
font-size: 1.8em;
font-weight: 700;
color: rgb(255, 255, 255);
text-shadow: 0 -1px rgba(0, 0, 0, 0.1);
text-decoration: none;
user-select: none;
padding: 0.4em 1.5em;
outline: none;
border: none;
border-radius: 5px;
background: black;
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
transition: background 0.3s, transform 0.2s;
cursor: pointer;

&:hover {
  color:black;
  background: rgb(255, 255, 255);
  transform: scale(1.05);
}

&:active {
  color:black;
  background: rgb(255, 255, 255);
  transform: scale(0.95);
}
`;