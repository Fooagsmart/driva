import React from "react";
import { Link } from "react-router-dom";

import { Button, Img, List, Text } from "../../Components";
import Desktop4DocumentUploadSidebar from "../../Components/Desktop4DocumentUploadSidebar";

const Desktop5LoadingPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-zonapro items-center justify-start mx-auto pb-[306px] w-full">
        <div className="flex flex-col gap-10 items-center justify-start w-full">
          <div className="bg-white-A700 border-b border-blue_gray-100 border-solid flex flex-col items-center justify-start p-[13px] w-full">
            <div className="flex flex-col items-center justify-start md:px-5 w-[5%] md:w-full">
              <div className="flex flex-row gap-1 items-center justify-start w-auto">
                <Img className="h-5 w-5" src="images/img_car.svg" alt="car" />
                <Text
                  className="text-blue_gray-900 text-xl tracking-[-0.60px] w-auto"
                  size="txtZonaProBold20"
                >
                  Driva
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-inter gap-5 items-center justify-start max-w-[1300px] mx-auto md:px-5 w-full">
            <Desktop4DocumentUploadSidebar className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-[-1px] h-[567px] md:h-auto items-start justify-start rounded-lg w-[310px]" />
            <div className="bg-white-A700 border border-gray-200 border-solid flex flex-1 flex-col items-start justify-start max-w-[970px] rounded-lg w-full">
              <div className="flex flex-col items-center justify-start rounded-lg w-full">
                <div className="flex flex-col h-[567px] md:h-auto items-center justify-center py-5 rounded-lg w-full">
                  <div className="flex flex-col items-center justify-start px-10 sm:px-5 w-full">
                  <Link to="/desktop5success">  <Img
                      className="h-[70px] md:h-auto object-cover w-[70px]"
                      src="images/img_httpslottief_70x70.png"
                      alt="httpslottief"
                    /></Link>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Desktop5LoadingPage;
