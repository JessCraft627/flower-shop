import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components'
import flower from './annie-spratt-197809-unsplash.jpg'
import { Transition, animated } from 'react-spring'
import Body from './body'
import Product from './product'
import Collections from './collections'

const Nav = styled.p`
  font-size: 24px;
  color: white;
  padding: 15px 25px;
  text-shadow: 1px 1px black;
  letter-spacing: 4px;
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
`
const rotate = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Rotate = styled.div`
  animation: ${rotate} 2.5s ease-in ;
`;
const rotated = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: .9;
  }
`;

const Rotated = styled.div`
  animation: ${rotated} 3s ease-in ;
`;

const Header = styled.header`
  height: 60px;
  padding: 5px 0 300px;
  display:flex;
  align-items: center;
  justify-content: flex-end;
`

const Main = styled.div`
  height: 1200px;
  background-image: url(${flower});
  background-position: center;
  background-size: cover;
  width: 100%;
  padding-top:20px;
`
const LastLink = styled(Nav)`
  padding-right:40px;
`;

const ShopButton = styled.button`
   margin: 50px;
   font-family: 'Oswald', sans-serif;
   font-weight: 300;
   border-radius: 5px;
   color:white;
   background: ${props => props.primary ? "#6f203d" : 'white'};
   color: ${props => props.primary ? "white" : "#6f203d"};
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
    font-size: 9rem;
    color: ${props => props.primary ? "#6f203d;" : "white"};
    font-family: 'Oswald', sans-serif;
`

const Footer = styled.footer`
  margin: 300px 0px 0px;
  background: #6f203d;
  padding: 5px;
  color: white;
  font-size: 2rem;
  font-family: 'Oswald', sans-serif;
  font-weight: 300;
  display:flex;
  justify-content: space-around;
`

class App extends Component {

  state = {
    showComponent: false
  }
  toggle = (e) => {
    this.setState({
      showComponent: !this.state.showComponent
    })
  }

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
            <LastLink>
              Contact
            </LastLink>
          </Header>
          <Rotate><Tagline>Fresh</Tagline>   </Rotate>
          <Rotated><Tagline>Blooms</Tagline></Rotated>
          <ShopButton primary>Shop Now</ShopButton>
        </Main>

        <Body />
        <Product toggle={this.toggle}/>
        <Transition
          native
          items={this.state.showComponent}
          from={{ opacity: 0 }}
          enter={{ opacity: 1}}
          leave={{ opacity: 0 }}
          >
          {show => show && (props => (
            <animated.div style={props}>
              <Collections />
            </animated.div>
          ))}
        </Transition>
        <Footer> <p>Get Started</p> <p>Need Help?</p> <p>Let's Keep in Touch!</p></Footer>

      </div>
    );
  }
}

export default App;
