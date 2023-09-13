import { useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import tw from "tailwind-styled-components"
import Link from "next/link";
import Map from './components/Map';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <Wrapper>
      <Map/>
      <ActionItems>
        <Header>
          <RiderLogo src="https://i.ibb.co/Xx4G91m/uberblack.png"/>
        <Profile>
          <Name>Viraj chopade</Name>
          <UserImage src="https://lh3.googleusercontent.com/ogw/AGvuzYZ0ZcCwJtSETEHDwmhBawS2fnM7VRsjp7aruD6P=s64-c-mo"/>
        </Profile>
        </Header>
        <ActionButtons>
        <ActionButton>
          <Link href="/search" passHref>
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride
            </ActionButton>
          </Link>
          </ActionButton>
          <ActionButton className="text-red-600">
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
            Wheels(Not Available)
          </ActionButton>
          <ActionButton className="text-red-600">
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve(NotAvailable)
          </ActionButton>
        </ActionButtons>

        <Link href="/search" passHref>
          <InputButton>Where to ?</InputButton>
        </Link>

      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
 flex flex-col h-screen 
`;

const ActionItems = tw.div`
 flex-1 p-4 
`;

const Header = tw.div`
 flex justify-between items-center
`;

const RiderLogo = tw.img`
 h-28  rounded-full
`;

const ActionButtons = tw.div`
flex 
`;

const ActionButton = tw.div`
flex flex-col bg-gray-200 flex-1 m-1 h-32 items-center justify-center rounded-lg transform hover:scale-105 transition text-xl curson-pointer
`;

const ActionButtonImage = tw.img`
h-3/5
`;

const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center justify-center rounded-lg transform hover:scale-105 transition mt-8
`;

const Profile = tw.div`
flex item-center
`
const Name = tw.div`
mr-4 w-20 text-sm
`
const UserImage = tw.img`
rounded-full h-12 w-12 border border-grey-200 p-px
`








