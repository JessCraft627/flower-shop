import React from 'react'
import { Spring } from 'react-spring'
import styled from 'styled-components'

const Primary = styled.h1`
    margin: 50px;
    padding: 50px 0px 10px;
    letter-spacing: 5px;
    text-transform: uppercase;
    line-height: 95%;
    text-align:center;
    font-size: 4rem;
    color: ${props => props.primary ? "#6f203d;" : "white"};
    font-family: 'Oswald', sans-serif;
`
const Secondary = styled.h2`
  color:purple;
  margin: 50px;
  font-size:2rem;
  color: black;
  font-family: 'Oswald', sans-serif;
  font-weight: 300;
  padding: 0 50px 20px;
  text-align:center;
`

export default function Body(){
  return (
    <Spring
      from={{ opacity: 0, marginBottom:-500 }}
      to={{ opacity: 1, marginBottom:0 }}
      >
        {props => (
          <div style={props}>
            <Primary primary>We’ve built a better way to deliver fresh blooms. </Primary>
            <Secondary>At Fresh Blooms, we think it should be simple for everyone to receive and enjoy fresh, beautiful blooms whenever and wherever they want: at home, at work, and everywhere in-between. We do things different... in a good way! Instead of the traditional mixed bouquet, we’re sending simple yet chic single-variety bunches,
            delivered straight from the source. </Secondary>
        </div>
      )}
    </Spring>
  )
}
