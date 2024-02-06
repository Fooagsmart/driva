import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "../Components";

const DashboardHomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-zonapro items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar className="!sticky !w-[214px] bg-white-A700 border-gray-200 border-r border-solid flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
            <div className="bg-white-A700 border-b border-gray-200 border-solid flex flex-col items-start justify-start sm:px-5 px-7 py-3.5 w-[214px]">
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
            <div className="flex flex-col font-inter gap-1 items-start justify-start mb-[776px] mt-[18px] w-[214px]">
              <div className="bg-yellow-900_19 border-l-[3px] border-solid border-yellow-900 flex flex-row gap-2 items-center justify-start px-4 py-2 w-full">
                <Img className="h-5 w-5" src="images/img_home.svg" alt="home" />
                <Text
                  className="text-sm text-yellow-900 w-auto"
                  size="txtInterMedium14Yellow900"
                >
                  Home
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-row gap-2 items-center justify-start px-4 py-2 w-full">
                <Img
                  className="h-5 w-5"
                  src="images/img_thumbsup.svg"
                  alt="thumbsup"
                />
                <Text
                  className="text-blue_gray-900 text-sm w-auto"
                  size="txtInterRegular14Bluegray900"
                >
                  Payments
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-row gap-2 items-center justify-start px-4 py-2 w-full">
                <Img
                  className="h-5 w-5"
                  src="images/img_profile.svg"
                  alt="profile"
                />
                <Text
                  className="text-blue_gray-900 text-sm w-auto"
                  size="txtInterRegular14Bluegray900"
                >
                  Profile
                </Text>
              </div>
            </div>
          </Sidebar>
          <div className="flex flex-1 flex-col font-inter gap-5 items-center justify-start md:px-5 w-full">
            <div className="flex flex-col gap-5 justify-start w-full">
              <div className="bg-white-A700 border-b border-gray-300 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start p-[7px] w-full">
                <Img
                  className="h-6 md:ml-[0] ml-[5px] w-6"
                  src="images/img_materialsymbolsmenu_black_900.svg"
                  alt="materialsymbols"
                />
                <Img
                  className="h-9 md:ml-[0] ml-[1350px] rounded w-9"
                  src="images/img_notification.svg"
                  alt="notification"
                />
                <Img
                  className="h-9 md:h-auto ml-4 md:ml-[0] object-cover rounded w-9"
                  src="images/img_rectangle1.png"
                  alt="rectangleOne"
                />
              </div>
              <Button
                className="common-pointer border border-gray-200 border-solid cursor-pointer flex items-center justify-center min-w-[96px] ml-10 md:ml-[0] mr-[1378px] rounded"
                onClick={() => navigate("/dashboardhomethree")}
                leftIcon={
                  <Img
                    className="h-5 mr-1"
                    src="images/img_arrow_left_blue_gray_900.svg"
                    alt="Arrow - Left"
                  />
                }
                shape="round"
                color="white_A700"
                size="sm"
                variant="fill"
              >
                <div className="font-semibold text-left text-sm">Go Back</div>
              </Button>
            </div>
            <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col gap-[-1px] items-center justify-center max-w-[1514px] pb-10 w-full">
              <div className="bg-white-A700 flex flex-col gap-1 h-[62px] md:h-auto items-start justify-start pt-5 px-5 w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-full">
                  <Button
                    className="common-pointer bg-transparent cursor-pointer font-medium min-w-[156px] text-blue_gray-500 text-center text-sm"
                    onClick={() => navigate("/dashboardhomefour")}
                    size="md"
                  >
                    Application Information
                  </Button>
                  <Button
                    className="common-pointer bg-transparent cursor-pointer font-medium min-w-[140px] text-blue_gray-500 text-center text-sm"
                    onClick={() => navigate("/dashboardhometwo")}
                    size="md"
                  >
                    Check-up Schedules
                  </Button>
                  <Text
                    className="border-b-4 border-blue_gray-900 border-solid pb-[18px] pt-[3px] text-base text-blue_gray-900 w-auto"
                    size="txtInterSemiBold16"
                  >
                    Payment Transactions
                  </Text>
                </div>
                <Line className="bg-gray-200 h-0.5 w-full" />
              </div>
              <div className="flex flex-col gap-5 items-center justify-center w-full">
                <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col items-start justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 h-[84px] md:h-auto items-center justify-start px-5 w-full">
                    <Img
                      className="h-[60px] md:h-auto object-cover rounded w-[60px]"
                      src="images/img_rectangle1_60x60.png"
                      alt="rectangleOne_One"
                    />
                    <div className="border-b border-gray-200 border-solid flex flex-1 flex-col gap-1 h-full items-start justify-center px-3 w-full">
                      <Text
                        className="text-base text-blue_gray-900 w-auto"
                        size="txtInterSemiBold16"
                      >
                        John Anthony
                      </Text>
                      <Text
                        className="text-blue_gray-500 text-sm w-auto"
                        size="txtInterMedium14Bluegray500"
                      >
                        johnanthony01@gmail.com
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col h-[499px] md:h-auto items-start justify-start max-w-[1434px] py-5 rounded-lg w-full">
                  <div className="flex flex-col items-start justify-start px-5 w-full">
                    <List
                      className="flex flex-col gap-4 items-start w-full"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 flex-row gap-3 items-center justify-start my-0 w-full">
                        <Text
                          className="text-base text-blue_gray-900 w-auto"
                          size="txtInterSemiBold16"
                        >
                          Recent Transactions
                        </Text>
                        <Button
                          className="border border-gray-200 border-solid cursor-pointer flex items-center justify-center min-w-[76px]"
                          leftIcon={
                            <Img
                              className="h-5 mr-1"
                              src="images/img_calendar.svg"
                              alt="Calendar"
                            />
                          }
                          shape="round"
                          color="gray_100"
                          size="sm"
                          variant="fill"
                        >
                          <div className="font-semibold text-left text-sm">
                            2024
                          </div>
                        </Button>
                      </div>
                      <div className="bg-gray-50 border border-gray-200 border-solid flex flex-1 flex-col items-start justify-start my-0 rounded-lg w-full">
                        <div className="flex md:flex-col flex-row gap-3 items-center justify-start px-5 py-2 rounded-lg w-full">
                          <div className="flex flex-1 flex-col items-center justify-start w-full">
                            <div className="flex flex-col items-start justify-center w-full">
                              <Text
                                className="text-base text-blue_gray-900 w-auto"
                                size="txtInterSemiBold16"
                              >
                                November
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="h-5 w-5"
                            src="images/img_arrowright.svg"
                            alt="arrowright"
                          />
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                        <div className="bg-gray-50 border border-gray-200 border-solid flex flex-col items-start justify-start rounded-lg w-full">
                          <div className="flex md:flex-col flex-row gap-3 items-center justify-start px-5 py-2 rounded-lg w-full">
                            <div className="flex flex-1 flex-col items-center justify-start w-full">
                              <div className="flex flex-col items-start justify-center w-full">
                                <Text
                                  className="text-base text-blue_gray-900 w-auto"
                                  size="txtInterSemiBold16"
                                >
                                  December
                                </Text>
                              </div>
                            </div>
                            <Img
                              className="h-5 w-5"
                              src="images/img_arrowright.svg"
                              alt="arrowright"
                            />
                          </div>
                        </div>
                      </div>
                    </List>
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

export default DashboardHomePage;
