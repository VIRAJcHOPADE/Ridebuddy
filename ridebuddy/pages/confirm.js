import React from 'react'
import Link from "next/link";
import { useEffect, useState } from "react";
import tw from 'tailwind-styled-components'
import Map from './components/Map'
import { useRouter } from "next/router";
import RideSelector from "./components/RideSelector";

const Confirm = () => {
    const router = useRouter()
    const {pickup,dropoff} = router.query

    // console.log("pickup",pickup)
    // console.log("dropoff",dropoff)
    
    const [pickupCoordinate, setPickupCoordinate] = useState([
        -77.052256, 38.924735,
      ]);
    const [dropoffCoordinate, setDropoffCoordinate] = useState([
        -77.1703, 38.8407,
      ]);

      const getPickupCoordinates = (pickup) => {
        // the fetch will give us the coordinates
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
            new URLSearchParams({
              access_token: "pk.eyJ1IjoidmlyYWpjaG9wYWRlIiwiYSI6ImNsbWcxaWhucTBnNzIzcXRqN21nYmRxaDUifQ.Z6dSZ0X9fPYLZ-srvEKJDQ",
              limit: 1,
            })
          )
          .then(response => response.json())
          .then(data => {
            if (data.features && data.features.length > 0) {
              const center = data.features[0].center;
              
              setPickupCoordinate(center);
            } else {
              // Handle the case where no coordinates are available
              const center = [77.2090057, 28.6138954];
              setPickupCoordinate(center);
              // You can choose to display an error message or take other actions here.
            }
          })
          .catch(error => {
            // Handle any fetch or other errors here
            console.error("Error fetching coordinates:", error);
            // You can choose to display an error message or take other actions here.
          });
      }
      
    
      const getDropoffCoordinates = (dropoff) => {
        // the fetch will give us the coordinates
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
            new URLSearchParams({
              access_token: "pk.eyJ1IjoidmlyYWpjaG9wYWRlIiwiYSI6ImNsbWcxaWhucTBnNzIzcXRqN21nYmRxaDUifQ.Z6dSZ0X9fPYLZ-srvEKJDQ",
              limit: 1,
            })
          )
          .then(response => response.json())
          .then(data => {
            if (data.features && data.features.length > 0) {
              const center = data.features[0].center;
              
              setDropoffCoordinate(center);
            } else {
              // Handle the case where no coordinates are available
              const center = [73.854454, 18.521428];
              setPickupCoordinate(center);
              // You can choose to display an error message or take other actions here.
            }
          })
          .catch(error => {
            // Handle any fetch or other errors here
            console.error("Error fetching drop-off coordinates:", error);
            // You can choose to display an error message or take other actions here.
          });
      }
      

    useEffect(()=>{
        getPickupCoordinates(pickup);
        getDropoffCoordinates(dropoff);
    },[pickup,dropoff])

  return (
    <Wrapper>
        <ButtonContainer>
        <Link rel="manifest" href="/search" passHref>
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
       </ButtonContainer>
        <Map
           pickupCoordinate = {pickupCoordinate}
           dropoffCoordinate = {dropoffCoordinate}
        
        />
        <RideContainer>
        <RideSelector />
        <ConfirmButtonContainer>
            <ConfirmButton>
            Confirm
            </ConfirmButton>
            </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  )
}

export default Confirm

const Wrapper = tw.div`
 flex flex-col h-screen 
`;

const RideContainer = tw.div`
flex-1  h-1/2 overflow-y-scroll flex flex-col
`;

const ConfirmButtonContainer = tw.div`
bg-black flex text-xl  items-center py-4 text-white mt-4 justify-center text-center m-4 transform hover:scale-105 transition cursor-pointer

`;
const ConfirmButton =tw.div`
`;
const ButtonContainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`;

const BackButton = tw.img`
h-full object-contain   
`;

