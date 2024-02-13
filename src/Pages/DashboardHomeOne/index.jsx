import React from "react";

import { Button, Img, List, Text } from "../../Components";
import DashboardHomeOneSidebar from "../../Components/DashboardHomeOneSidebar";

const DashboardHomeOnePage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-zonapro items-center justify-start mx-auto pb-[17px] w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <DashboardHomeOneSidebar className="bg-white-A700 border-gray-200 border-r border-solid flex flex-col gap-[18px] h-[963px] md:h-auto items-start justify-start mb-[276px] md:px-5 w-[214px]" />
          <div className="flex md:flex-1 flex-col font-inter justify-start md:px-5 w-[88%] md:w-full">
            <div className="bg-white-A700 border-b border-gray-200 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start p-[7px] w-full">
              <Img
                className="h-6 md:ml-[0] ml-[5px] w-6"
                src="images/img_materialsymbolsmenu.svg"
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
            <Text
              className="bg-white-A700 border-b border-gray-200 border-solid h-[50px] justify-center max-w-[1514px] md:max-w-full sm:px-5 px-[35px] py-3 text-blue_gray-900 text-xl w-full"
              size="txtInterSemiBold20"
            >
              Home
            </Text>
            <div className="flex flex-col gap-5 items-start justify-start ml-10 md:ml-[0] mt-[15px] w-auto sm:w-full">
              <div className="flex flex-col gap-1 items-start justify-start w-auto">
                <Text
                  className="text-blue_gray-900 text-xl w-auto"
                  size="txtInterSemiBold20"
                >
                  Hello, Anthony
                </Text>
                <Text
                  className="text-base text-blue_gray-500 w-auto"
                  size="txtInterRegular16"
                >
                  Welcome to Driva, here is your dashboard
                </Text>
              </div>
              <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col items-start justify-start p-5 rounded-lg w-auto sm:w-full">
                <div className="flex flex-col items-start justify-start w-auto">
                  <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                    <div className="flex sm:flex-col flex-row gap-3 items-start justify-start w-auto sm:w-full">
                      <div className="bg-white-A700 border border-gray-200 border-solid flex flex-row gap-3 items-center justify-start p-3 rounded-lg w-auto">
                        <Button
                          className="flex h-11 items-center justify-center w-11"
                          shape="round"
                          color="gray_100"
                          size="lg"
                          variant="fill"
                        >
                          <Img
                            className="h-4"
                            src="images/img_menu.svg"
                            alt="menu"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start w-auto">
                          <div className="flex flex-col gap-1 items-start justify-center w-auto">
                            <Text
                              className="text-base text-blue_gray-900 w-auto"
                              size="txtInterSemiBold16"
                            >
                              12th December, 2023
                            </Text>
                            <Text
                              className="text-blue_gray-500 text-sm w-auto"
                              size="txtInterRegular14"
                            >
                              Last Check-up Date
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700 border border-gray-200 border-solid flex flex-row gap-3 items-center justify-start p-3 rounded-lg w-auto">
                        <Button
                          className="flex h-11 items-center justify-center w-11"
                          shape="round"
                          color="gray_100"
                          size="lg"
                          variant="fill"
                        >
                          <Img
                            className="h-4"
                            src="images/img_menu.svg"
                            alt="menu_One"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start w-[171px]">
                          <div className="flex flex-col gap-1 items-start justify-center w-full">
                            <div className="flex flex-row gap-1 items-center justify-start w-full">
                              <Img
                                className="h-5 w-5"
                                src="images/img_iconparkoutlinecaution.svg"
                                alt="iconparkoutline"
                              />
                              <Text
                                className="text-base text-red-A700 w-auto"
                                size="txtInterBold16"
                              >
                                5th January, 2024
                              </Text>
                            </div>
                            <Text
                              className="text-blue_gray-500 text-sm w-full"
                              size="txtInterRegular14"
                            >
                              Upcoming Check-up Date
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 items-start justify-start ml-10 md:ml-[0] mt-10 w-auto md:w-full">
              <div className="flex flex-col gap-1 items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-blue_gray-900 text-xl w-auto"
                  size="txtInterSemiBold20"
                >
                  Upcoming Check-ups
                </Text>
                <Text
                  className="text-base text-blue_gray-500 w-auto"
                  size="txtInterRegular16"
                >
                  Below are locations and schedules for upcoming check-ups
                </Text>
              </div>
              <List
                className="flex flex-col gap-2 items-start w-auto"
                orientation="vertical"
              >
                <div className="bg-white-A700 border-[3px] border-solid border-yellow-900 flex md:h-auto my-0 pl-5 relative rounded-lg w-[1410px] md:w-full">
                  <div className="flex flex-col h-full items-start justify-start my-auto py-5 w-full">
                    <div className="flex flex-col gap-[17px] h-[175px] md:h-auto items-start justify-start w-auto">
                      <div className="flex flex-col gap-2 items-start justify-start w-auto">
                        <div className="flex flex-col gap-2 items-start justify-center w-auto">
                          <div className="flex flex-row gap-1 items-center justify-start w-auto">
                            <Img
                              className="h-5 w-5"
                              src="images/img_calendar.svg"
                              alt="calendar"
                            />
                            <Text
                              className="text-base text-blue_gray-900 w-auto"
                              size="txtInterMedium16"
                            >
                              5th January, 2024
                            </Text>
                          </div>
                          <div className="flex flex-row gap-1 items-center justify-start w-auto">
                            <Img
                              className="h-5 w-5"
                              src="images/img_timecircle.svg"
                              alt="timecircle"
                            />
                            <Text
                              className="text-base text-blue_gray-900 w-auto"
                              size="txtInterMedium16"
                            >
                              12:00 PM
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                          <Img
                            className="h-5 w-5"
                            src="images/img_fluentlocation28regular.svg"
                            alt="fluentlocationTwo"
                          />
                          <Text
                            className="text-base text-blue_gray-900 w-auto"
                            size="txtInterMedium16"
                          >
                            25, Opic Estate Avenue, Ikeja, Lagos.
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer min-w-[179px] text-center text-sm"
                        shape="round"
                        color="yellow_900"
                        size="sm"
                        variant="fill"
                      >
                        View in Google Maps
                      </Button>
                    </div>
                  </div>
                  <div className="h-[215px] ml-[-117px] my-auto w-[31%] sm:w-full z-[1]">
                    <div className="absolute h-[215px] inset-y-[0] my-auto right-[0] w-[72%]">
                      <Img
                        className="h-[215px] m-auto object-cover rounded-br-lg rounded-tr-lg w-full"
                        src="images/img_screenshot20231222.png"
                        alt="screenshot20231"
                      />
                      <Img
                        className="absolute h-8 inset-[0] justify-center m-auto w-8"
                        src="images/img_ionlocation.svg"
                        alt="ionlocation"
                      />
                    </div>
                    <div className="absolute bg-white-A700 border border-gray-200 border-solid flex flex-row gap-[17px] items-center justify-center left-[0] p-5 rounded-lg top-[19%] w-auto">
                      <div className="flex flex-col gap-[17px] items-start justify-center w-auto">
                        <div className="flex flex-col gap-1 items-start justify-start w-auto">
                          <Text
                            className="text-blue_gray-900 text-sm w-auto"
                            size="txtInterSemiBold14Bluegray900"
                          >
                            Ikeja Mechanic Garage
                          </Text>
                          <Text
                            className="text-blue_gray-500 text-xs w-auto"
                            size="txtInterRegular12"
                          >
                            25, Opic Estate Avenue, Ikeja, Lagos.
                          </Text>
                        </div>
                        <Text
                          className="text-base text-yellow-900 underline w-auto"
                          size="txtInterMedium16Yellow900"
                        >
                          2.4586089, 9.4949532
                        </Text>
                      </div>
                      <div className="bg-white-A700 h-[43px] rotate-[90deg] w-[5%]"></div>
                      <Img
                        className="h-[30px] rounded-[1px] w-[3px]"
                        src="images/img_vector1.svg"
                        alt="vectorOne"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border border-gray-200 border-solid flex md:h-auto my-0 pl-5 relative rounded-lg w-[1410px] md:w-full">
                  <div className="flex flex-col h-full items-start justify-start my-auto py-5 w-full">
                    <div className="flex flex-col gap-[17px] h-[175px] md:h-auto items-start justify-start w-auto">
                      <div className="flex flex-col gap-2 items-start justify-start w-auto">
                        <div className="flex flex-col gap-2 items-start justify-center w-auto">
                          <div className="flex flex-row gap-1 items-center justify-start w-auto">
                            <Img
                              className="h-5 w-5"
                              src="images/img_calendar.svg"
                              alt="calendar"
                            />
                            <Text
                              className="text-base text-blue_gray-900 w-auto"
                              size="txtInterMedium16"
                            >
                              5th January, 2024
                            </Text>
                          </div>
                          <div className="flex flex-row gap-1 items-center justify-start w-auto">
                            <Img
                              className="h-5 w-5"
                              src="images/img_timecircle.svg"
                              alt="timecircle"
                            />
                            <Text
                              className="text-base text-blue_gray-900 w-auto"
                              size="txtInterMedium16"
                            >
                              12:00 PM
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                          <Img
                            className="h-5 w-5"
                            src="images/img_fluentlocation28regular.svg"
                            alt="fluentlocationTwo"
                          />
                          <Text
                            className="text-base text-blue_gray-900 w-auto"
                            size="txtInterMedium16"
                          >
                            25, Opic Estate Avenue, Ikeja, Lagos.
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer min-w-[179px] text-center text-sm"
                        shape="round"
                        color="yellow_900"
                        size="sm"
                        variant="fill"
                      >
                        View in Google Maps
                      </Button>
                    </div>
                  </div>
                  <div className="h-[215px] ml-[-117px] my-auto w-[31%] sm:w-full z-[1]">
                    <div className="absolute h-[215px] inset-y-[0] my-auto right-[0] w-[72%]">
                      <Img
                        className="h-[215px] m-auto object-cover rounded-br-lg rounded-tr-lg w-full"
                        src="images/img_screenshot20231222.png"
                        alt="screenshot20231"
                      />
                      <Img
                        className="absolute h-8 inset-[0] justify-center m-auto w-8"
                        src="images/img_ionlocation.svg"
                        alt="ionlocation"
                      />
                    </div>
                    <div className="absolute bg-white-A700 border border-gray-200 border-solid flex flex-row gap-[17px] items-center justify-center left-[0] p-5 rounded-lg top-[19%] w-auto">
                      <div className="flex flex-col gap-[17px] items-start justify-center w-auto">
                        <div className="flex flex-col gap-1 items-start justify-start w-auto">
                          <Text
                            className="text-blue_gray-900 text-sm w-auto"
                            size="txtInterSemiBold14Bluegray900"
                          >
                            Ikeja Mechanic Garage
                          </Text>
                          <Text
                            className="text-blue_gray-500 text-xs w-auto"
                            size="txtInterRegular12"
                          >
                            25, Opic Estate Avenue, Ikeja, Lagos.
                          </Text>
                        </div>
                        <Text
                          className="text-base text-yellow-900 underline w-auto"
                          size="txtInterMedium16Yellow900"
                        >
                          2.4586089, 9.4949532
                        </Text>
                      </div>
                      <div className="bg-white-A700 h-[43px] rotate-[90deg] w-[5%]"></div>
                      <Img
                        className="h-[30px] rounded-[1px] w-[3px]"
                        src="images/img_vector1.svg"
                        alt="vectorOne"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border border-gray-200 border-solid flex md:h-auto my-0 pl-5 relative rounded-lg w-[1410px] md:w-full">
                  <div className="flex flex-col h-full items-start justify-start my-auto py-5 w-full">
                    <div className="flex flex-col gap-[17px] h-[175px] md:h-auto items-start justify-start w-auto">
                      <div className="flex flex-col gap-2 items-start justify-start w-auto">
                        <div className="flex flex-col gap-2 items-start justify-center w-auto">
                          <div className="flex flex-row gap-1 items-center justify-start w-auto">
                            <Img
                              className="h-5 w-5"
                              src="images/img_calendar.svg"
                              alt="calendar"
                            />
                            <Text
                              className="text-base text-blue_gray-900 w-auto"
                              size="txtInterMedium16"
                            >
                              5th January, 2024
                            </Text>
                          </div>
                          <div className="flex flex-row gap-1 items-center justify-start w-auto">
                            <Img
                              className="h-5 w-5"
                              src="images/img_timecircle.svg"
                              alt="timecircle"
                            />
                            <Text
                              className="text-base text-blue_gray-900 w-auto"
                              size="txtInterMedium16"
                            >
                              12:00 PM
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                          <Img
                            className="h-5 w-5"
                            src="images/img_fluentlocation28regular.svg"
                            alt="fluentlocationTwo"
                          />
                          <Text
                            className="text-base text-blue_gray-900 w-auto"
                            size="txtInterMedium16"
                          >
                            25, Opic Estate Avenue, Ikeja, Lagos.
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer min-w-[179px] text-center text-sm"
                        shape="round"
                        color="yellow_900"
                        size="sm"
                        variant="fill"
                      >
                        View in Google Maps
                      </Button>
                    </div>
                  </div>
                  <div className="h-[215px] ml-[-117px] my-auto w-[31%] sm:w-full z-[1]">
                    <div className="absolute h-[215px] inset-y-[0] my-auto right-[0] w-[72%]">
                      <Img
                        className="h-[215px] m-auto object-cover rounded-br-lg rounded-tr-lg w-full"
                        src="images/img_screenshot20231222.png"
                        alt="screenshot20231"
                      />
                      <Img
                        className="absolute h-8 inset-[0] justify-center m-auto w-8"
                        src="images/img_ionlocation.svg"
                        alt="ionlocation"
                      />
                    </div>
                    <div className="absolute bg-white-A700 border border-gray-200 border-solid flex flex-row gap-[17px] items-center justify-center left-[0] p-5 rounded-lg top-[19%] w-auto">
                      <div className="flex flex-col gap-[17px] items-start justify-center w-auto">
                        <div className="flex flex-col gap-1 items-start justify-start w-auto">
                          <Text
                            className="text-blue_gray-900 text-sm w-auto"
                            size="txtInterSemiBold14Bluegray900"
                          >
                            Ikeja Mechanic Garage
                          </Text>
                          <Text
                            className="text-blue_gray-500 text-xs w-auto"
                            size="txtInterRegular12"
                          >
                            25, Opic Estate Avenue, Ikeja, Lagos.
                          </Text>
                        </div>
                        <Text
                          className="text-base text-yellow-900 underline w-auto"
                          size="txtInterMedium16Yellow900"
                        >
                          2.4586089, 9.4949532
                        </Text>
                      </div>
                      <div className="bg-white-A700 h-[43px] rotate-[90deg] w-[5%]"></div>
                      <Img
                        className="h-[30px] rounded-[1px] w-[3px]"
                        src="images/img_vector1.svg"
                        alt="vectorOne"
                      />
                    </div>
                  </div>
                </div>
              </List>
            </div>
            <Text
              className="md:ml-[0] ml-[482px] mt-[130px] text-blue_gray-500 text-center text-sm"
              size="txtInterSemiBold14"
            >
              <span className="text-blue_gray-500 font-inter font-semibold">
                Copyright ©2024. All rights reserved. |{" "}
              </span>
              <a
                href="javascript:"
                className="text-yellow-900 font-inter font-semibold underline"
              >
                Driva️.com
              </a>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHomeOnePage;
