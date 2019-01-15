import React, { Component } from 'react';
import styled from 'styled-components';
import flower from './annie-spratt-197809-unsplash.jpg'

const Nav = styled.p`
  font-size: 20px;
  color: white;
  padding: 15px 25px;
  text-shadow: 1px 1px black;
  letter-spacing: 4px;
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
`

const Header = styled.header`
  height: 60px;
  padding: 5px 0 150px;
  display:flex;
  align-items: center;
  justify-content: flex-end;
`

const Main = styled.div`
  height: 900px;
  background-image: url(${flower});
  background-position: center;
  background-size: cover;
  width: 100%;
  padding-top:20px;
`
const ShopButton = styled.button`
   margin: 50px;
   font-family: 'Oswald', sans-serif;
   font-weight: 300;
   border-radius: 5px;
   color:white;
   background:#6f203d;
   font-size: 2rem;
   border: 1px solid #6f203d;
   letter-spacing: 6px;
   padding: 0.8rem 5rem;
`
const Tagline = styled.h1`
    margin: 0 50px;
    letter-spacing: 8px;
    text-transform: uppercase;
    line-height: 95%;
    text-shadow: 1px 1px black;
    font-size: 8rem;
    color:white;
    font-family: 'Oswald', sans-serif;
`

class App extends Component {

  render() {
    return (
      <div>
        <Main>
          <Header>
            <Nav>
              Shop
            </Nav>
            <Nav>
              Location
            </Nav>
            <Nav>
              Contact
            </Nav>
          </Header>
          <Tagline>Fresh</Tagline>
          <Tagline>Blooms</Tagline>
          <ShopButton>Shop Plants</ShopButton>
        </Main>
      </div>
    );
  }
}

export default App;
