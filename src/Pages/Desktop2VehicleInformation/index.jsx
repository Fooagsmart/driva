import React from "react";

import { Button, Img, Input, List, Text } from "../../Components";
import Desktop2VehicleInformationSidebar from "../../Components/Desktop1PersonalInformationSidebar";

const Desktop2VehicleInformationPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-zonapro items-center justify-start mx-auto pb-[539px] w-full">
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
            <Desktop2VehicleInformationSidebar className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-[-1px] h-[567px] md:h-auto items-start justify-start mb-0.5 rounded-lg w-[310px]" />
            <div className="bg-white-A700 border border-gray-200 border-solid flex flex-1 flex-col gap-[-1px] items-start justify-start max-w-[970px] rounded-lg w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="border-b border-gray-200 border-solid flex flex-col gap-5 items-center justify-start px-10 sm:px-5 py-5 w-full">
                  <div className="flex flex-col items-start justify-center w-full">
                    <div className="flex flex-col gap-2 items-start justify-center w-full">
                      <div className="flex flex-col gap-1 items-start justify-center w-full">
                        <Text
                          className="text-base text-blue_gray-900 w-full"
                          size="txtInterSemiBold16"
                        >
                          Driving Record
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-sm w-full"
                          size="txtInterRegular14"
                        >
                          Fill in all information requested here
                        </Text>
                      </div>
                      <Text
                        className="text-red-400 text-sm w-full"
                        size="txtInterMedium14"
                      >
                        *Required Fields
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex flex-col gap-1 items-start justify-start w-full">
                            <Text
                              className="text-blue_gray-900 text-sm w-full"
                              size="txtInterMedium14Bluegray900"
                            >
                              <span className="text-blue_gray-900 font-inter text-left font-medium">
                                Number of Accidents or Traffic Violations in the
                                past [5] years
                              </span>
                              <span className="text-red-400 font-inter text-left font-medium">
                                *
                              </span>
                            </Text>
                            <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col items-center justify-start px-3 py-2 rounded-md w-full">
                              <div className="flex flex-col items-center justify-start w-full">
                                <Input
                                  name="textcursor"
                                  placeholder="Enter Answer"
                                  className="p-0 placeholder:text-blue_gray-500 text-blue_gray-500 text-left text-sm w-full"
                                  wrapClassName="w-[11%]"
                                  size="xs"
                                ></Input>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex flex-col gap-3 items-start justify-start w-full">
                            <Text
                              className="text-blue_gray-900 text-sm w-full"
                              size="txtInterMedium14Bluegray900"
                            >
                              <span className="text-blue_gray-900 font-inter text-left font-medium">
                                Details of any accidents or violations
                              </span>
                              <span className="text-red-400 font-inter text-left font-medium">
                                *
                              </span>
                            </Text>
                            <div className="flex flex-col gap-2 items-start justify-start w-full">
                              <Input
                                name="inputframe"
                                placeholder="Date"
                                className="p-0 placeholder:text-blue_gray-500 text-left text-sm w-full"
                                wrapClassName="border border-gray-200 border-solid flex w-[21%]"
                                prefix={
                                  <Img
                                    className="h-5 mr-2 my-auto"
                                    src="images/img_calendar_gray_600.svg"
                                    alt="Calendar"
                                  />
                                }
                                shape="round"
                                color="white_A700"
                                size="sm"
                                variant="fill"
                              ></Input>
                              <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col gap-2 h-20 md:h-auto items-start justify-start px-3 py-2 rounded-md w-full">
                                <div className="flex flex-col h-full items-start justify-start w-full">
                                  <div className="flex flex-col items-center justify-start w-auto">
                                    <Text
                                      className="text-blue_gray-500 text-sm w-auto"
                                      size="txtInterRegular14"
                                    >
                                      Describe what happened
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-end w-full">
                                  <div className="flex flex-col items-center justify-start w-auto">
                                    <Text
                                      className="text-gray-500 text-sm w-auto"
                                      size="txtInterRegular14Gray500"
                                    >
                                      0/500 words
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col gap-2 h-20 md:h-auto items-start justify-start px-3 py-2 rounded-md w-full">
                                <div className="flex flex-col h-full items-start justify-start w-full">
                                  <div className="flex flex-col items-center justify-start w-auto">
                                    <Text
                                      className="text-blue_gray-500 text-sm w-auto"
                                      size="txtInterRegular14"
                                    >
                                      What was the outcome?
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-end w-full">
                                  <div className="flex flex-col items-center justify-start w-auto">
                                    <Text
                                      className="text-gray-500 text-sm w-auto"
                                      size="txtInterRegular14Gray500"
                                    >
                                      0/500 words
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5 items-start justify-center pb-5 pt-2 px-10 sm:px-5 w-full">
                <Text
                  className="text-red-400 text-sm w-auto"
                  size="txtInterMedium14"
                >
                  *Make sure all information are correct before you click
                  “Continue”, as you would not be able to go back*
                </Text>
                <Button
                  className="cursor-pointer min-w-[100px] text-center text-sm"
                  shape="round"
                  color="yellow_900"
                  size="sm"
                  variant="fill"
                >
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Desktop2VehicleInformationPage;
