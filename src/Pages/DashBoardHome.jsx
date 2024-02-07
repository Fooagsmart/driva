import React from 'react'

import { Sidebar } from 'react-pro-sidebar';
import { useNavigate } from 'react-router-dom';
import { Button, Img, Line, List, Text } from '../Components';

const DashBoardHome = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className='bg-gray-50 flex flex-col font-zonapro items-center justify-start mx-auto w-full'>
      <div className='flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full'>
        <Sidebar className='!sticky !w-[214px] bg-white-A700 border-gray-200 border-r border-solid flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]'>
          <div className='bg-white-A700 border-b border-gray-200 border-solid flex flex-col items-start justify-start sm:px-5 px-7 py-3.5 w-[214px]'>
            <div className='flex flex-row gap-1 items-center justify-start w-auto'>
              <img className='h-5 w-5' src="images/img_car.svg" alt="car" />
              <Text className='text-blue_gray-900 text-xl tracking-[-0.60px] w-auto'
              size="txtZonaProBold20"
              >Driva</Text>
            </div>
          </div>
        </Sidebar>
      </div>
    </div>
    </>
  )
}

export default DashBoardHome
