import React from 'react'
import styled from 'styled-components'
import flowers from './annie-spratt-298431-unsplash.jpg'

export default function Collections(){

const Details = styled.div`
  padding: 60px;
  display: flex;
    height:600px;
   flex-wrap:no-wrap;
   justify-content: space-around;
   align-items:center;
`
const Image = styled.img`
  background-size:cover;
  width:20%;
`
const Info = styled.p`
  margin: 50px;
  letter-spacing: 5px;
  text-transform: uppercase;
  line-height: 95%;
  font-size: 3rem;
  color: #6f203d;
  text-align: center;
  font-family: 'Oswald', sans-serif;
`
const Detail = styled.p`

  padding-roght:20px;
  font-size: 2rem;
  color: #6f203d;
  text-align: center;
  flex-basis: 400px;
  font-family: 'Oswald', sans-serif;
`
  return (
    <Details>
      <Info> The Lovebird $65 </Info>
      <Image src={flowers}  alt="flower photo" />
      <Detail> For the special person in your life that just gets you.
        This bouquet’s shimmering mix of purples
        and luminous lilacs will make everyone’s heart soar.</Detail>
    </Details>
  )

}
