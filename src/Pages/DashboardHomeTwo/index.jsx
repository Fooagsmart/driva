import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import DashboardHomeOneSidebar from "components/DashboardHomeOneSidebar";

const DashboardHomeTwoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-zonapro items-center justify-start mx-auto pb-[166px] w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <DashboardHomeOneSidebar className="bg-white-A700 border-gray-200 border-r border-solid flex flex-col gap-[18px] h-[963px] md:h-auto items-start justify-start mb-[139px] md:px-5 w-[214px]" />
          <div className="flex md:flex-1 flex-col font-inter gap-5 items-center justify-start md:px-5 w-[88%] md:w-full">
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
            <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col gap-[-1px] h-[975px] md:h-auto items-center justify-start max-w-[1514px] pb-10 w-full">
              <div className="bg-white-A700 flex flex-col gap-1 h-[62px] md:h-auto items-start justify-start pt-5 px-5 w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-full">
                  <Button
                    className="common-pointer bg-transparent cursor-pointer font-medium min-w-[156px] text-blue_gray-500 text-center text-sm"
                    onClick={() => navigate("/dashboardhomefour")}
                    size="md"
                  >
                    Application Information
                  </Button>
                  <Text
                    className="border-b-4 border-blue_gray-900 border-solid pb-[18px] pt-[3px] text-base text-blue_gray-900 w-auto"
                    size="txtInterSemiBold16"
                  >
                    Check-up Schedules
                  </Text>
                  <Button
                    className="common-pointer bg-transparent cursor-pointer font-medium min-w-[149px] text-blue_gray-500 text-center text-sm"
                    onClick={() => navigate("/dashboardhome")}
                    size="md"
                  >
                    Payment Transactions
                  </Button>
                </div>
                <Line className="bg-gray-200 h-0.5 w-full" />
              </div>
              <div className="flex flex-col gap-10 items-center justify-start w-full">
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
                <div className="flex flex-col gap-5 items-start justify-center w-auto md:w-full">
                  <div className="flex flex-col items-start justify-start max-w-[920px] w-full">
                    <div className="flex flex-col gap-10 items-start justify-start w-full">
                      <div className="flex md:flex-col flex-row gap-3 items-center justify-start w-full">
                        <div className="flex flex-1 flex-col items-center justify-start w-full">
                          <div className="flex flex-row gap-3.5 items-center justify-start w-auto">
                            <Button
                              className="border border-gray-200 border-solid flex h-9 items-center justify-center w-9"
                              shape="circle"
                              color="gray_100"
                              size="lg"
                              variant="fill"
                            >
                              <Img
                                src="images/img_arrowleft.svg"
                                alt="arrowleft"
                              />
                            </Button>
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                              size="txtInterSemiBold24"
                            >
                              January
                            </Text>
                            <Button
                              className="border border-gray-200 border-solid flex h-9 items-center justify-center w-9"
                              shape="circle"
                              color="gray_100"
                              size="lg"
                              variant="fill"
                            >
                              <Img
                                src="images/img_arrowright_blue_gray_900.svg"
                                alt="arrowright"
                              />
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-col items-end justify-center w-auto">
                          <div className="bg-gray-100 border border-gray-200 border-solid flex flex-col items-center justify-center p-2 rotate-[180deg] rounded-[5px] w-auto">
                            <div className="flex flex-row gap-[6.63px] items-center justify-start w-auto">
                              <Text
                                className="rotate-[180deg] text-blue_gray-900 text-sm w-auto"
                                size="txtInterSemiBold14Bluegray900"
                              >
                                2024
                              </Text>
                              <Img
                                className="h-5 w-5"
                                src="images/img_arrowright_blue_gray_900_20x20.svg"
                                alt="arrowright_One"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-5 items-end justify-start w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-center w-full">
                          <Text
                            className="bg-gray-100 flex-1 justify-center outline outline-[0.5px] outline-gray-200 pl-2 sm:pr-5 pr-[35px] py-[7px] rounded-tl text-black-900 text-sm w-full"
                            size="txtInterSemiBold14Black900"
                          >
                            SUN
                          </Text>
                          <Text
                            className="bg-gray-100 flex-1 justify-center outline outline-[0.5px] outline-gray-200 pl-2 sm:pr-5 pr-[35px] py-[7px] text-black-900 text-sm w-full"
                            size="txtInterSemiBold14Black900"
                          >
                            MON
                          </Text>
                          <Text
                            className="bg-gray-100 flex-1 justify-center outline outline-[0.5px] outline-gray-200 pl-2 sm:pr-5 pr-[35px] py-[7px] text-black-900 text-sm w-full"
                            size="txtInterSemiBold14Black900"
                          >
                            TUE
                          </Text>
                          <Text
                            className="bg-gray-100 flex-1 justify-center outline outline-[0.5px] outline-gray-200 pl-2 sm:pr-5 pr-[35px] py-[7px] text-black-900 text-sm w-full"
                            size="txtInterSemiBold14Black900"
                          >
                            WED
                          </Text>
                          <Text
                            className="bg-gray-100 flex-1 justify-center outline outline-[0.5px] outline-gray-200 pl-2 sm:pr-5 pr-[35px] py-[7px] text-black-900 text-sm w-full"
                            size="txtInterSemiBold14Black900"
                          >
                            THUR
                          </Text>
                          <Text
                            className="bg-gray-100 flex-1 justify-center outline outline-[0.5px] outline-gray-200 pl-2 sm:pr-5 pr-[35px] py-[7px] text-black-900 text-sm w-full"
                            size="txtInterSemiBold14Black900"
                          >
                            FRI
                          </Text>
                          <Text
                            className="bg-gray-100 flex-1 justify-center outline outline-[0.5px] outline-gray-200 pl-2 sm:pr-5 pr-[35px] py-[7px] rounded-tr text-black-900 text-sm w-full"
                            size="txtInterSemiBold14Black900"
                          >
                            SAT
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start w-full">
                          <List
                            className="flex flex-col gap-px items-center w-full"
                            orientation="vertical"
                          >
                            <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-center w-full">
                              <div className="bg-white-A700 flex-1 h-[70px] outline outline-[0.5px] outline-gray-200 w-[15%]"></div>
                              <Text
                                className="bg-white-A700 flex-1 h-[70px] justify-center outline outline-[0.5px] outline-gray-200 pb-[35px] pl-2 sm:pr-5 pr-[35px] pt-2 text-blue_gray-900 text-sm w-full"
                                size="txtInterMedium14Bluegray900"
                              >
                                01
                              </Text>
                              <Text
                                className="bg-white-A700 flex-1 h-[70px] justify-center outline outline-[0.5px] outline-gray-200 pb-[35px] pl-2 sm:pr-5 pr-[35px] pt-2 text-blue_gray-900 text-sm w-full"
                                size="txtInterMedium14Bluegray900"
                              >
                                02
                              </Text>
                              <Text
                                className="bg-white-A700 flex-1 h-[70px] justify-center outline outline-[0.5px] outline-gray-200 pb-[35px] pl-2 sm:pr-5 pr-[35px] pt-2 text-blue_gray-900 text-sm w-full"
                                size="txtInterMedium14Bluegray900"
                              >
                                03
                              </Text>
                              <Text
                                className="bg-white-A700 flex-1 h-[70px] justify-center outline outline-[0.5px] outline-gray-200 pb-[35px] pl-2 sm:pr-5 pr-[35px] pt-2 text-blue_gray-900 text-sm w-full"
                                size="txtInterMedium14Bluegray900"
                              >
                                04
                              </Text>
                              <Text
                                className="bg-white-A700 flex-1 h-[70px] justify-center outline outline-[0.5px] outline-gray-200 pb-[35px] pl-2 sm:pr-5 pr-[35px] pt-2 text-blue_gray-900 text-sm w-full"
                                size="txtInterMedium14Bluegray900"
                              >
                                05
                              </Text>
                              <Text
                                className="bg-green-700 flex-1 h-[70px] justify-center outline outline-[0.5px] outline-gray-200 pb-[35px] pl-2 sm:pr-5 pr-[35px] pt-2 text-gray-50 text-sm w-full"
                                size="txtInterMedium14Gray50"
                              >
                                06
                              </Text>
                            </div>
                            <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                              <Text
                                className="bg-white-A700 flex-1 h-[70px] justify-center outline outline-[0.5px] outline-gray-200 pb-[35px] pl-2 sm:pr-5 pr-[35px] pt-2 text-blue_gray-900 text-sm w-full"
                                size="txtInterMedium14Bluegray900"
                              >
                                07
                              </Text>
                              <Text
                                className="bg-white-A700 flex-1 h-[70px] justify-center outline outline-[0.5px] outline-gray-200 pb-[35px] pl-2 sm:pr-5 pr-[35px] pt-2 text-blue_gray-900 text-sm w-full"
                                size="txtInterMedium14Bluegray900"
                              >
                                08
                              </Text>
                              <Text
                                className="bg-white-A700 flex-1 h-[70px] justify-center outline outline-[0.5px] outline-gray-200 pb-[35px] pl-2 sm:pr-5 pr-[35px] pt-2 text-blue_gray-900 text-sm w-full"
                                size="txtInterMedium14Bluegray900"
                              >
                                09
                              </Text>
                              <Text
                                className="bg-red-400 flex-1 h-[70px] justify-center outline outline-[0.5px] outline-gray-200 pb-[35px] pl-2 sm:pr-5 pr-[35px] pt-2 text-gray-50 text-sm w-full"
                                size="txtInterMedium14Gray50"
                              >
                                10
                              </Text>
                              <Text
                                className="bg-white-A700 flex-1 h-[70px] justify-center outline outline-[0.5px] outline-gray-200 pb-[35px] pl-2 sm:pr-5 pr-[35px] pt-2 text-blue_gray-900 text-sm w-full"
                                size="txtInterMedium14Bluegray900"
                              >
                                11
                              </Text>
                              <Text
                                className="bg-white-A700 flex-1 h-[70px] justify-center outline outline-[0.5px] outline-gray-200 pb-[35px] pl-2 sm:pr-5 pr-[35px] pt-2 text-blue_gray-900 text-sm w-full"
                                size="txtInterMedium14Bluegray900"
                              >
                                12
                              </Text>
                              <Text
                                className="bg-white-A700 flex-1 h-[70px] justify-center outline outline-[0.5px] outline-gray-200 pb-[35px] pl-2 sm:pr-5 pr-[35px] pt-2 text-blue_gray-900 text-sm w-full"
                                size="txtInterMedium14Bluegray900"
                              >
                                13
                              </Text>
                            </div>
                            <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                              <Text
                                className="bg-white-A700 flex-1 h-[70px] justify-center outline outline-[0.5px] outline-gray-200 pb-[35px] pl-2 sm:pr-5 pr-[35px] pt-2 text-blue_gray-900 text-sm w-full"
                                size="txtInterMedium14Bluegray900"
                              >
                                14
                              </Text>
                              <Text
                                className="bg-white-A700 flex-1 h-[70px] justify-center outline outline-[0.5px] outline-gray-200 pb-[35px] pl-2 sm:pr-5 pr-[35px] pt-2 text-blue_gray-900 text-sm w-full"
                                size="txtInterMedium14Bluegray900"
                              >
                                15
                              </Text>
                              <Text
                                className="bg-white-A700 flex-1 h-[70px] justify-center outline outline-[0.5px] outline-gray-200 pb-[35px] pl-2 sm:pr-5 pr-[35px] pt-2 text-blue_gray-900 text-sm w-full"
                                size="txtInterMedium14Bluegray900"
                              >
                                16
                              </Text>
                              <Text
                                className="bg-white-A700 flex-1 h-[70px] justify-center outline outline-[0.5px] outline-gray-200 pb-[35px] pl-2 sm:pr-5 pr-[35px] pt-2 text-blue_gray-900 text-sm w-full"
                                size="txtInterMedium14Bluegray900"
                              >
                                17
                              </Text>
                              <Text
                                className="bg-white-A700 flex-1 h-[70px] justify-center outline outline-[0.5px] outline-gray-200 pb-[35px] pl-2 sm:pr-5 pr-[35px] pt-2 text-blue_gray-900 text-sm w-full"
                                size="txtInterMedium14Bluegray900"
                              >
                                18
                              </Text>
                              <Text
                                className="bg-white-A700 flex-1 h-[70px] justify-center outline outline-[0.5px] outline-gray-200 pb-[35px] pl-2 sm:pr-5 pr-[35px] pt-2 text-blue_gray-900 text-sm w-full"
                                size="txtInterMedium14Bluegray900"
                              >
                                19
                              </Text>
                              <Text
                                className="bg-yellow-900 flex-1 h-[70px] justify-center outline outline-[0.5px] outline-gray-200 pb-[35px] pl-2 sm:pr-5 pr-[35px] pt-2 text-gray-50 text-sm w-full"
                                size="txtInterMedium14Gray50"
                              >
                                20
                              </Text>
                            </div>
                            <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                              <Text
                                className="bg-white-A700 flex-1 h-[70px] justify-center outline outline-[0.5px] outline-gray-200 pb-[35px] pl-2 sm:pr-5 pr-[35px] pt-2 text-blue_gray-900 text-sm w-full"
                                size="txtInterMedium14Bluegray900"
                              >
                                21
                              </Text>
                              <Text
                                className="bg-white-A700 flex-1 h-[70px] justify-center outline outline-[0.5px] outline-gray-200 pb-[35px] pl-2 sm:pr-5 pr-[35px] pt-2 text-blue_gray-900 text-sm w-full"
                                size="txtInterMedium14Bluegray900"
                              >
                                22
                              </Text>
                              <Text
                                className="bg-white-A700 flex-1 h-[70px] justify-center outline outline-[0.5px] outline-gray-200 pb-[35px] pl-2 sm:pr-5 pr-[35px] pt-2 text-blue_gray-900 text-sm w-full"
                                size="txtInterMedium14Bluegray900"
                              >
                                23
                              </Text>
                              <List
                                className="md:flex-1 sm:flex-col flex-row sm:gap-5 grid sm:grid-cols-1 grid-cols-4 w-[58%] md:w-full"
                                orientation="horizontal"
                              >
                                <div className="bg-white-A700 flex flex-col h-[70px] md:h-auto items-start justify-start outline outline-[0.5px] outline-gray-200 p-2 w-full">
                                  <Text
                                    className="text-blue_gray-900 text-sm"
                                    size="txtInterMedium14Bluegray900"
                                  >
                                    24
                                  </Text>
                                </div>
                                <div className="bg-white-A700 flex flex-col h-[70px] md:h-auto items-start justify-start outline outline-[0.5px] outline-gray-200 p-2 w-full">
                                  <Text
                                    className="text-blue_gray-900 text-sm"
                                    size="txtInterMedium14Bluegray900"
                                  >
                                    25
                                  </Text>
                                </div>
                                <div className="bg-white-A700 flex flex-col h-[70px] md:h-auto items-start justify-start outline outline-[0.5px] outline-gray-200 p-2 w-full">
                                  <Text
                                    className="text-blue_gray-900 text-sm"
                                    size="txtInterMedium14Bluegray900"
                                  >
                                    26
                                  </Text>
                                </div>
                                <div className="bg-white-A700 flex flex-col h-[70px] md:h-auto items-start justify-start outline outline-[0.5px] outline-gray-200 p-2 w-full">
                                  <Text
                                    className="text-blue_gray-900 text-sm"
                                    size="txtInterMedium14Bluegray900"
                                  >
                                    27
                                  </Text>
                                </div>
                              </List>
                            </div>
                          </List>
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                            <Text
                              className="bg-white-A700 flex-1 h-[70px] justify-center outline outline-[0.5px] outline-gray-200 pb-[35px] pl-2 sm:pr-5 pr-[35px] pt-2 text-blue_gray-900 text-sm w-full"
                              size="txtInterMedium14Bluegray900"
                            >
                              28
                            </Text>
                            <Text
                              className="bg-white-A700 flex-1 h-[70px] justify-center outline outline-[0.5px] outline-gray-200 pb-[35px] pl-2 sm:pr-5 pr-[35px] pt-2 text-blue_gray-900 text-sm w-full"
                              size="txtInterMedium14Bluegray900"
                            >
                              29
                            </Text>
                            <Text
                              className="bg-white-A700 flex-1 h-[70px] justify-center outline outline-[0.5px] outline-gray-200 pb-[35px] pl-2 sm:pr-5 pr-[35px] pt-2 text-blue_gray-900 text-sm w-full"
                              size="txtInterMedium14Bluegray900"
                            >
                              30
                            </Text>
                            <div className="bg-white-A700 flex flex-1 flex-col h-[70px] md:h-auto items-start justify-start outline outline-[0.5px] outline-gray-200 p-2 w-full">
                              <Text
                                className="text-blue_gray-900 text-sm w-auto"
                                size="txtInterMedium14Bluegray900"
                              >
                                31
                              </Text>
                            </div>
                            <div className="bg-white-A700 flex-1 h-[70px] outline outline-[0.5px] outline-gray-200 w-[15%]"></div>
                            <div className="bg-white-A700 flex-1 h-[70px] outline outline-[0.5px] outline-gray-200 w-[15%]"></div>
                            <div className="bg-white-A700 flex-1 h-[70px] outline outline-[0.5px] outline-gray-200 w-[15%]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-5 items-center justify-start w-auto sm:w-full">
                    <div className="flex flex-row gap-1 items-center justify-start w-auto">
                      <div className="bg-gray-200 h-3 rounded-[50%] w-3"></div>
                      <Text
                        className="text-black-900 text-sm w-auto"
                        size="txtInterMedium14Black900"
                      >
                        Selected date
                      </Text>
                    </div>
                    <div className="flex flex-row gap-1 items-center justify-start w-auto">
                      <div className="bg-yellow-900 h-3 rounded-[50%] w-3"></div>
                      <Text
                        className="text-black-900 text-sm w-auto"
                        size="txtInterMedium14Black900"
                      >
                        Check-up date
                      </Text>
                    </div>
                    <div className="flex flex-row gap-1 items-center justify-start w-auto">
                      <div className="bg-green-700 h-3 rounded-[50%] w-3"></div>
                      <Text
                        className="text-black-900 text-sm w-auto"
                        size="txtInterMedium14Black900"
                      >
                        Check-up done
                      </Text>
                    </div>
                    <div className="flex flex-row gap-1 items-center justify-start w-auto">
                      <div className="bg-red-400 h-3 rounded-[50%] w-3"></div>
                      <Text
                        className="text-black-900 text-sm w-auto"
                        size="txtInterMedium14Black900"
                      >
                        Check-up not done
                      </Text>
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

export default DashboardHomeTwoPage;
