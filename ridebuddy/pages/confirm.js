import React from 'react'
import tw from 'tailwind-styled-components'
import Map from './components/Map'


const confirm = () => {
  return (
    <Wrapper>
        <Map/>
         <RideContainer>

         </RideContainer>
    </Wrapper>
  )
}

export default confirm

const RideContainer = tw.div`
flex-1
`

const Wrapper = tw.div`
flex h-screen flex-col
`