import React, { Component } from 'react';
import styled from 'styled-components';

const Hello = styled.div`
  font-size: 50px;
  color: palevioletred;
`
const Header = styled.div`
  height: 100px;
  background-color: ${props => props.primary ? 'papayawhip' : 'black' };
  padding: 5px;
  justify-content: space-around;
`

class App extends Component {

  handleScroll = (event) => {
    let currentScrollY = window.scrollY;
    this.setState({
      lastScrollY: currentScrollY
    })
    console.log('value:',currentScrollY)
  };

  state = {
  lastScrollY: 0,  // Keep track of current position in state
};

componentWillMount() {
   // When this component mounts, begin listening for scroll changes
   window.addEventListener('scroll', this.handleScroll);
 }


  render() {
    return (
      <div>
        <Header primary>
          <Hello>
            1
          </Hello>
          <Hello>
            2
          </Hello>
          <Hello>
            3
          </Hello>
          <Hello>
            1
          </Hello>
          <Hello>
            2
          </Hello>
          <Hello>
            3
          </Hello>
          <Hello>
            1
          </Hello>
          <Hello>
            2
          </Hello>
          <Hello>
            3
          </Hello>
        </Header>
      </div>
    );
  }
}

export default App;
