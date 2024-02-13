import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "../../Components";
import Desktop4DocumentUploadSidebar from "../../Components/Desktop4DocumentUploadSidebar";

const Desktop5ConfirmationPage = () => {
  const navigate = useNavigate();

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
                  <div className="flex flex-col gap-5 items-center justify-start px-10 sm:px-5 w-full">
                    <Img
                      className="h-24 md:h-auto object-cover w-[100px] sm:w-full"
                      src="images/img_httpslottief.png"
                      alt="httpslottief"
                    />
                    <div className="flex flex-col items-center justify-center w-full">
                      <div className="flex flex-col gap-1 items-center justify-center w-auto">
                        <Text
                          className="leading-[24.00px] text-base text-blue_gray-900 text-center"
                          size="txtInterSemiBold16"
                        >
                          <>
                            Are you sure all informations in the <br />
                            previous step are correct?
                          </>
                        </Text>
                        <Text
                          className="leading-[21.00px] text-blue_gray-500 text-center text-sm"
                          size="txtInterRegular14"
                        >
                          <>
                            NOTE: Once you click “Yes”, there is no <br />
                            going back
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 items-start justify-center w-auto">
                      <Button
                        className="common-pointer cursor-pointer min-w-[59px] text-center text-sm"
                        onClick={() => navigate("/desktop4documentupload")}
                        shape="round"
                        color="red_400"
                        size="sm"
                        variant="fill"
                      >
                        No
                      </Button>
                      <Button
                        className="common-pointer cursor-pointer min-w-[64px] text-center text-sm"
                        onClick={() => navigate("/desktop5loading")}
                        shape="round"
                        color="teal_500"
                        size="sm"
                        variant="fill"
                      >
                        Yes
                      </Button>
                    </div>
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

export default Desktop5ConfirmationPage;
