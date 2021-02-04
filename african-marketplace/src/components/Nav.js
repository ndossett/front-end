import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
// import styled from "styled-components";


// const NavStyled = styled.div` 
//   color: ${(pr) => pr.theme.secondaryColor};
//   font-weight: bold;
//   display: flex;
//   justify-content: space-evenly;
//   align-content: space-between;
  
// `;

// const BtnStyled = styled.div`
//   color: ${(pr) => pr.theme.primaryColor};
//   background-color: ${(pr) => pr.theme.bgColorB};
//   border: 2px solid ${(pr) => pr.theme.primaryColor};
//   box-shadow: 0px 1px 6px -2px #807f7f;
//   border-radius: 8px;
//   padding:10px;
//   font-size: 1.3rem;
//   font-weight: bold;
  
// `;


const NavigationBar = () => {
  return (
    // <NavStyled>
      <nav className="nav-bar">
        <Link to="/" style={{textDecoration:"none",}}>
        {/* <BtnStyled>Home</BtnStyled> */}
        <div>Home</div>
        </Link>

        <Link to="/login" style={{textDecoration:"none",}}>
        {/* <BtnStyled>Projects</BtnStyled> */}
        <div>Login</div>
        </Link>

        <Link to="/signup" style={{textDecoration:"none",}}>
        {/* <BtnStyled>Sign up</BtnStyled> */}
        <div>SignUp</div>
        </Link>
      </nav>
    // </NavStyled>
  );
};

export default NavigationBar;
