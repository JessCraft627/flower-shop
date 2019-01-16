import React from 'react'
import { Spring } from 'react-spring'
import styled from 'styled-components'

const Primary = styled.h1`
    margin: 50px;
    letter-spacing: 5px;
    text-align:center;
    text-transform: uppercase;
    line-height: 95%;
    font-size: 2rem;
    color: ${props => props.primary ? "#6f203d" : "white"};
    font-family: 'Oswald', sans-serif;
`

const Collection = styled.h2`
  color:purple;
  padding:10px 30px;
  margin: 20px;
  color: black;
  text-align:center;
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
   border-radius: 5px;
  border: 1px solid #6f203d;

  &:hover {
    background:#6f203d;
    color:white;
  }
`
const Wrapper = styled.div`
  display:flex;
  justify-content: center;
  margin: 5px;
`


 class Product extends React.Component {
  render() {
    return (
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ delay:1000, duration:1000 }}
          >
            {props => (
              <div style={props}>
                <Primary primary>Our collections </Primary>
                <Wrapper>
                  <Collection onClick={this.props.toggle}>The Valentine's Collection </Collection>
                  <Collection>Urban Stem Collection </Collection>
                  <Collection>The Vogue Collection </Collection>
                </Wrapper>
            </div>
          )}
        </Spring>
      )
    }
  }


export default Product
