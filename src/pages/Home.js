import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";
import "./Home.css";
    
function Home(){
    return (
        <MainWrapper>
            <p>Looking for a new book to read?</p>

                <Link to="/main"><MainButton>WE GOT YOU!</MainButton></Link>
            <Outlet/>
        </MainWrapper>
        
    );
}

const MainWrapper = styled.div`
  height: 96vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #FFFFFE;
  justify-content: center;
`;

const MainButton = styled.button`
    margin: 5px;
    color: #232946;
    background: #eebbc3;
    border-radius: 5px;
    border: 0;
    text-decoration: none;
    padding: 14px 40px;
    font-size: 25px
`;

export default Home;