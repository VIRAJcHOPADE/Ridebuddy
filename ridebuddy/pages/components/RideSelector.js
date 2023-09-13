import React from "react";
import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { carList } from "../data/carList";

const RideSelector = () => {
  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>
      <CarList>
        {carList.map((car,index) => (
          <Car key={index}>
            <CarImage src={car.imgUrl} />
            <CarDetails>
              <Service>{car.service}</Service>
              <Time>5 min away</Time>
            </CarDetails>
            <CarPrice>
              22$
            </CarPrice>
          </Car>
        ))}
      </CarList>
    </Wrapper>
  )
}

export default RideSelector
const Wrapper = tw.div`
flex-1  overflow-y-scroll flex flex-col flex flex-col
`;

const Title = tw.div`
text-center text-s text-gray-500 border-b py-2
`;
const CarList = tw.div`
border-b overflow-y-scroll 
`;
const Car = tw.div`
flex items-center 
`;

const CarImage = tw.img`
h-20 px-4
`;

const CarDetails = tw.div`
flex-1 px-8
`;
const Service = tw.div`
font-semibold`;
const Time = tw.div`
text-blue-500 text-xs
`;

const CarPrice = tw.div`
px-4 text-sm
`;

