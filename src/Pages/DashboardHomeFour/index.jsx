import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "../../Components";
import DashboardHomeOneSidebar from "../../Components/DashboardHomeOneSidebar";

const DashboardHomeFourPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 font-inter h-[2070px] mx-auto pb-[155px] relative w-full">
        <Button
          className="common-pointer absolute border border-gray-200 border-solid cursor-pointer flex items-center justify-center left-[0] min-w-[96px] ml-[254px] mt-[70px] rounded top-[0]"
          onClick={() => navigate("/dashboardhomethree")}
          leftIcon={
            <Img
              className="h-5 mr-1 right-[0] absolute"
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
        <div className="absolute sm:h-[1726px] h-[1915px] md:h-[3007px] inset-x-[0] mx-auto md:px-5 top-[0] w-full">
          <div className="absolute bottom-[0] sm:h-[1726px] h-[1788px] md:h-[3007px] right-[0] w-[1515px] md:w-full">
            <div className="absolute bg-white-A700 border border-gray-200 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto max-w-[1514px] w-full">
              <div className="bg-white-A700 flex flex-col gap-1 h-[62px] md:h-auto items-start justify-start pt-5 px-5 w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-full">
                  <Text
                    className="border-b-4 border-blue_gray-900 border-solid pb-[18px] pt-[3px] text-base text-blue_gray-900 w-auto"
                    size="txtInterSemiBold16"
                  >
                    Application Information
                  </Text>
                  <Button
                    className="common-pointer bg-transparent cursor-pointer font-medium min-w-[140px] text-blue_gray-500 text-center text-sm"
                    onClick={() => navigate("/dashboardhometwo")}
                    size="md"
                  >
                    Check-up Schedules
                  </Button>
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
            </div>
            <div className="absolute flex flex-col h-max inset-[0] items-center justify-start m-auto max-w-[1515px] w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <div className="bg-white-A700 border-b border-gray-200 border-r border-solid flex flex-1 flex-col h-[569px] md:h-auto items-center justify-start px-10 sm:px-5 py-5 w-full">
                  <div className="flex flex-col h-full items-start justify-start w-full">
                    <div className="flex flex-col gap-1 items-start justify-center w-auto">
                      <Text
                        className="text-base text-blue_gray-900 w-auto"
                        size="txtInterSemiBold16"
                      >
                        Personal Information
                      </Text>
                      <Text
                        className="text-blue_gray-500 text-sm w-auto"
                        size="txtInterRegular14"
                      >
                        Your personal information
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border-b border-gray-200 border-solid flex flex-1 flex-col items-center justify-start px-10 sm:px-5 py-5 w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <div className="flex md:flex-col flex-row gap-[18px] items-start justify-start w-full">
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <div className="flex flex-col gap-1 items-start justify-start w-full">
                            <Text
                              className="text-blue_gray-900 text-sm w-full"
                              size="txtInterMedium14Bluegray900"
                            >
                              First Name
                            </Text>
                            <Input
                              name="inputframe"
                              placeholder="John"
                              className="font-semibold p-0 placeholder:text-blue_gray-900 text-left text-sm w-full"
                              wrapClassName="border border-gray-200 border-solid flex w-full"
                              prefix={
                                <Img
                                  className="h-5 mr-2 my-auto"
                                  src="images/img_profile.svg"
                                  alt="Profile"
                                />
                              }
                              shape="round"
                              color="gray_100"
                              size="sm"
                              variant="fill"
                            ></Input>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <div className="flex flex-col gap-1 items-start justify-start w-full">
                            <Text
                              className="text-blue_gray-900 text-sm w-full"
                              size="txtInterMedium14Bluegray900"
                            >
                              Last Name
                            </Text>
                            <Input
                              name="inputframe_One"
                              placeholder="Anthony"
                              className="font-semibold p-0 placeholder:text-blue_gray-900 text-left text-sm w-full"
                              wrapClassName="border border-gray-200 border-solid flex w-full"
                              prefix={
                                <Img
                                  className="mt-auto mb-px h-5 mr-2"
                                  src="images/img_profile.svg"
                                  alt="Profile"
                                />
                              }
                              shape="round"
                              color="gray_100"
                              size="sm"
                              variant="fill"
                            ></Input>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row gap-[18px] items-start justify-start w-full">
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <div className="flex flex-col gap-1 items-start justify-start w-full">
                            <Text
                              className="text-blue_gray-900 text-sm w-full"
                              size="txtInterMedium14Bluegray900"
                            >
                              Email Address
                            </Text>
                            <Input
                              name="email"
                              placeholder="johnanthony@gmail.com"
                              className="font-semibold p-0 placeholder:text-blue_gray-900 text-left text-sm w-full"
                              wrapClassName="border border-gray-200 border-solid flex w-full"
                              type="email"
                              prefix={
                                <Img
                                  className="mt-auto mb-px h-5 mr-[7px]"
                                  src="images/img_checkmark.svg"
                                  alt="checkmark"
                                />
                              }
                              shape="round"
                              color="gray_100"
                              size="sm"
                              variant="fill"
                            ></Input>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <div className="flex flex-col gap-1 items-start justify-start w-full">
                            <Text
                              className="text-blue_gray-900 text-sm w-full"
                              size="txtInterMedium14Bluegray900"
                            >
                              Phone Number
                            </Text>
                            <Input
                              name="inputframe_Two"
                              placeholder="0816 842 2954"
                              className="font-semibold p-0 placeholder:text-blue_gray-900 text-left text-sm w-full"
                              wrapClassName="border border-gray-200 border-solid flex w-full"
                              prefix={
                                <Img
                                  className="h-5 mr-2 my-auto"
                                  src="images/img_call.svg"
                                  alt="Call"
                                />
                              }
                              shape="round"
                              color="gray_100"
                              size="sm"
                              variant="fill"
                            ></Input>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row gap-[18px] items-start justify-start w-full">
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <div className="flex flex-col gap-1 items-start justify-start w-full">
                            <Text
                              className="text-blue_gray-900 text-sm w-full"
                              size="txtInterMedium14Bluegray900"
                            >
                              Date of Birth (D.O.B)
                            </Text>
                            <Input
                              name="inputframe_Three"
                              placeholder="25 / 07 / 2024"
                              className="font-semibold p-0 placeholder:text-blue_gray-900 text-left text-sm w-full"
                              wrapClassName="border border-gray-200 border-solid flex w-full"
                              prefix={
                                <Img
                                  className="h-5 mr-2 my-auto"
                                  src="images/img_phcakelight.svg"
                                  alt="ph:cake-light"
                                />
                              }
                              shape="round"
                              color="gray_100"
                              size="sm"
                              variant="fill"
                            ></Input>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <div className="flex flex-col gap-1 items-start justify-start w-full">
                            <Text
                              className="text-blue_gray-900 text-sm w-full"
                              size="txtInterMedium14Bluegray900"
                            >
                              Home Address
                            </Text>
                            <Input
                              name="inputframe_Four"
                              placeholder="24, Estate Avenue, Norwegian, Alaska."
                              className="font-semibold p-0 placeholder:text-blue_gray-900 text-left text-sm w-full"
                              wrapClassName="border border-gray-200 border-solid flex w-full"
                              prefix={
                                <Img
                                  className="mt-auto mb-px h-5 mr-2"
                                  src="images/img_fluentlocation28regular.svg"
                                  alt="fluent:location-28-regular"
                                />
                              }
                              shape="round"
                              color="gray_100"
                              size="sm"
                              variant="fill"
                            ></Input>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row gap-[18px] items-start justify-start w-full">
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <div className="flex flex-col gap-1 items-start justify-start w-full">
                            <Text
                              className="text-blue_gray-900 text-sm w-full"
                              size="txtInterMedium14Bluegray900"
                            >
                              NIN (National Identification Number)*
                            </Text>
                            <Input
                              name="inputframe_Five"
                              placeholder="3456 5890 0125"
                              className="font-semibold p-0 placeholder:text-blue_gray-900 text-left text-sm w-full"
                              wrapClassName="border border-gray-200 border-solid w-full"
                              shape="round"
                              color="gray_100"
                              size="sm"
                              variant="fill"
                            ></Input>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <div className="flex flex-col gap-1 items-start justify-start w-full">
                            <Text
                              className="text-blue_gray-900 text-sm w-full"
                              size="txtInterMedium14Bluegray900"
                            >
                              LASDRI Number
                            </Text>
                            <Input
                              name="inputframe_Six"
                              placeholder="7854 9026 1234 62JA"
                              className="font-semibold p-0 placeholder:text-blue_gray-900 text-left text-sm w-full"
                              wrapClassName="border border-gray-200 border-solid w-full"
                              shape="round"
                              color="gray_100"
                              size="sm"
                              variant="fill"
                            ></Input>
                          </div>
                        </div>
                      </div>
                      <List
                        className="flex flex-col gap-[18px] items-start w-full"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-col items-start justify-start my-0 w-full">
                          <div className="flex flex-col gap-1 items-start justify-start w-full">
                            <Text
                              className="leading-[21.00px] max-w-[436px] md:max-w-full text-blue_gray-900 text-sm"
                              size="txtInterMedium14Bluegray900"
                            >
                              <span className="text-blue_gray-900 font-inter text-left font-medium">
                                Any specialised training or certifications
                                related to driving{" "}
                              </span>
                              <span className="text-blue_gray-200 font-inter text-left font-medium">
                                (e.g., defensive driving, hazardous materials
                                handling)
                              </span>
                            </Text>
                            <div className="bg-gray-100 border border-gray-200 border-solid flex flex-row gap-2 items-center justify-start px-3 py-2 rounded-md w-full">
                              <Text
                                className="flex-1 text-blue_gray-900 text-sm w-auto"
                                size="txtInterMedium14Bluegray900"
                              >
                                Defensive_Driving.JPG
                              </Text>
                              <Img
                                className="h-8 md:h-auto object-cover rounded w-8"
                                src="images/img_rectangle2.png"
                                alt="rectangleTwo"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-start my-0 w-full">
                          <div className="flex flex-col gap-1 items-start justify-start w-full">
                            <Text
                              className="text-blue_gray-900 text-sm w-full"
                              size="txtInterMedium14Bluegray900"
                            >
                              Upload Passport Photograph (White Background)
                            </Text>
                            <div className="bg-gray-100 border border-gray-200 border-solid flex flex-row gap-2 items-center justify-start px-3 py-2 rounded-md w-full">
                              <Text
                                className="flex-1 text-blue_gray-900 text-sm w-auto"
                                size="txtInterMedium14Bluegray900"
                              >
                                MyPassport.JPG
                              </Text>
                              <Img
                                className="h-8 md:h-auto object-cover rounded w-8"
                                src="images/img_rectangle2_32x32.png"
                                alt="rectangleTwo"
                              />
                            </div>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 h-[212px] md:h-auto items-start justify-start w-full">
                <div className="bg-white-A700 border-b border-gray-200 border-r border-solid flex flex-1 flex-col h-[212px] md:h-auto items-center justify-start px-10 sm:px-5 py-5 w-full">
                  <div className="flex flex-col h-full items-start justify-start w-full">
                    <div className="flex flex-col gap-1 items-start justify-center w-auto">
                      <Text
                        className="text-base text-blue_gray-900 w-auto"
                        size="txtInterSemiBold16"
                      >
                        School Information
                      </Text>
                      <Text
                        className="text-blue_gray-500 text-sm w-auto"
                        size="txtInterRegular14"
                      >
                        Your school information
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border-b border-gray-200 border-solid flex flex-1 flex-col items-center justify-start px-10 sm:px-5 py-5 w-full">
                  <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col items-center justify-start p-5 rounded-lg w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <div className="flex md:flex-col flex-row gap-[18px] items-start justify-start w-full">
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <div className="flex flex-col gap-1 items-start justify-start w-full">
                            <Text
                              className="text-blue_gray-900 text-sm w-full"
                              size="txtInterMedium14Bluegray900"
                            >
                              Name of School
                            </Text>
                            <Input
                              name="inputframe_Seven"
                              placeholder="Providence Avenue College"
                              className="font-semibold p-0 placeholder:text-blue_gray-900 text-left text-sm w-full"
                              wrapClassName="border border-gray-200 border-solid w-full"
                              shape="round"
                              color="gray_100"
                              size="md"
                              variant="fill"
                            ></Input>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <div className="flex flex-col gap-1 items-start justify-start w-full">
                            <Text
                              className="text-blue_gray-900 text-sm w-full"
                              size="txtInterMedium14Bluegray900"
                            >
                              Location of School
                            </Text>
                            <Input
                              name="inputframe_Eight"
                              placeholder="11, Daddy Savage Street, Fagba Estate, Ajegunle."
                              className="font-semibold p-0 placeholder:text-blue_gray-900 text-left text-sm w-full"
                              wrapClassName="border border-gray-200 border-solid w-full"
                              shape="round"
                              color="gray_100"
                              size="md"
                              variant="fill"
                            ></Input>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row gap-[18px] items-start justify-start w-full">
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <div className="flex flex-col gap-1 items-start justify-start w-full">
                            <Text
                              className="text-blue_gray-900 text-sm w-full"
                              size="txtInterMedium14Bluegray900"
                            >
                              Year In
                            </Text>
                            <Input
                              name="zipcode"
                              placeholder="2010"
                              className="font-semibold p-0 placeholder:text-blue_gray-900 text-left text-sm w-full"
                              wrapClassName="border border-gray-200 border-solid w-full"
                              shape="round"
                              color="gray_100"
                              size="sm"
                              variant="fill"
                            ></Input>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <div className="flex flex-col gap-1 items-start justify-start w-full">
                            <Text
                              className="text-blue_gray-900 text-sm w-full"
                              size="txtInterMedium14Bluegray900"
                            >
                              Year Out
                            </Text>
                            <Input
                              name="zipcode_One"
                              placeholder="2016"
                              className="font-semibold p-0 placeholder:text-blue_gray-900 text-left text-sm w-full"
                              wrapClassName="border border-gray-200 border-solid w-full"
                              shape="round"
                              color="gray_100"
                              size="sm"
                              variant="fill"
                            ></Input>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 h-[113px] md:h-auto items-start justify-start w-full">
                <div className="bg-white-A700 border-b border-gray-200 border-r border-solid flex flex-1 flex-col h-[113px] md:h-auto items-center justify-start px-10 sm:px-5 py-5 w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-col gap-1 items-start justify-center w-auto">
                      <Text
                        className="text-base text-blue_gray-900 w-auto"
                        size="txtInterSemiBold16"
                      >
                        Driver Information
                      </Text>
                      <Text
                        className="text-blue_gray-500 text-sm w-auto"
                        size="txtInterRegular14"
                      >
                        Your Driver information
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border-b border-gray-200 border-solid flex flex-1 flex-col items-center justify-start px-10 sm:px-5 py-5 w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-[416px] sm:w-full">
                          <div className="flex flex-col gap-1 items-start justify-start w-full">
                            <Text
                              className="text-blue_gray-900 text-sm w-full"
                              size="txtInterMedium14Bluegray900"
                            >
                              Upload recent Driver License
                            </Text>
                            <div className="bg-gray-100 border border-gray-200 border-solid flex flex-row gap-2 items-center justify-start px-3 py-2 rounded-md w-full">
                              <Text
                                className="flex-1 text-blue_gray-900 text-sm w-auto"
                                size="txtInterMedium14Bluegray900"
                              >
                                Driver_License.JPG
                              </Text>
                              <Img
                                className="h-8 md:h-auto object-cover rounded w-8"
                                src="images/img_rectangle2.png"
                                alt="rectangleThree"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 h-[366px] md:h-auto items-start justify-start w-full">
                <div className="bg-white-A700 border-b border-gray-200 border-r border-solid flex flex-1 flex-col h-[366px] md:h-auto items-center justify-start px-10 sm:px-5 py-5 w-full">
                  <div className="flex flex-col h-full items-start justify-start w-full">
                    <div className="flex flex-col gap-1 items-start justify-center w-auto">
                      <Text
                        className="text-base text-blue_gray-900 w-auto"
                        size="txtInterSemiBold16"
                      >
                        Vehicle Information
                      </Text>
                      <Text
                        className="text-blue_gray-500 text-sm w-auto"
                        size="txtInterRegular14"
                      >
                        Your Vehicle information
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border-b border-gray-200 border-solid flex flex-1 flex-col items-center justify-start px-10 sm:px-5 py-5 w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-col gap-1 items-start justify-start w-full">
                              <Text
                                className="text-blue_gray-900 text-sm w-full"
                                size="txtInterMedium14Bluegray900"
                              >
                                Number of Accidents or Traffic Violations in the
                                past [5] years*
                              </Text>
                              <div className="bg-gray-100 border border-gray-200 border-solid flex flex-col items-center justify-start px-3 py-2 rounded-md w-full">
                                <div className="flex flex-col items-center justify-start w-full">
                                  <div className="flex flex-col items-center justify-start w-auto">
                                    <Text
                                      className="text-blue_gray-900 text-sm w-auto"
                                      size="txtInterSemiBold14Bluegray900"
                                    >
                                      0
                                    </Text>
                                  </div>
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
                                Details of any accidents or violations
                              </Text>
                              <div className="flex flex-col gap-2 items-start justify-start w-full">
                                <Input
                                  name="inputframe_Nine"
                                  placeholder="23 / 12 / 2020"
                                  className="font-semibold p-0 placeholder:text-blue_gray-900 text-left text-sm w-full"
                                  wrapClassName="border border-gray-200 border-solid flex w-[21%]"
                                  prefix={
                                    <Img
                                      className="h-5 mr-2 my-auto"
                                      src="images/img_calendar.svg"
                                      alt="Calendar"
                                    />
                                  }
                                  shape="round"
                                  color="gray_100"
                                  size="sm"
                                  variant="fill"
                                ></Input>
                                <Input
                                  name="inputframe_Ten"
                                  placeholder="Describe what happened"
                                  className="font-semibold md:h-auto p-0 placeholder:text-blue_gray-900 sm:h-auto text-left text-sm w-full"
                                  wrapClassName="border border-gray-200 border-solid w-full"
                                  shape="round"
                                  color="gray_100"
                                  size="md"
                                  variant="fill"
                                ></Input>
                                <div className="bg-gray-100 border border-gray-200 border-solid flex flex-col h-20 md:h-auto items-start justify-start px-3 py-2 rounded-md w-full">
                                  <div className="flex flex-col h-full items-start justify-start w-full">
                                    <div className="flex flex-col items-center justify-start w-auto">
                                      <Text
                                        className="text-blue_gray-900 text-sm w-auto"
                                        size="txtInterSemiBold14Bluegray900"
                                      >
                                        What was the outcome?
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
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <div className="bg-white-A700 border-b border-gray-200 border-r border-solid flex flex-1 flex-col h-[293px] md:h-auto items-center justify-start px-10 sm:px-5 py-5 w-full">
                  <div className="flex flex-col h-full items-start justify-start w-full">
                    <div className="flex flex-col gap-1 items-start justify-center w-auto">
                      <Text
                        className="text-base text-blue_gray-900 w-auto"
                        size="txtInterSemiBold16"
                      >
                        Guarantor Information
                      </Text>
                      <Text
                        className="text-blue_gray-500 text-sm w-auto"
                        size="txtInterRegular14"
                      >
                        Your guarantor’s information
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border-b border-gray-200 border-solid flex flex-1 flex-col items-center justify-start px-10 sm:px-5 py-5 w-full">
                  <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col items-center justify-start p-5 rounded-lg w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <div className="flex md:flex-col flex-row gap-[18px] items-start justify-start w-full">
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <div className="flex flex-col gap-1 items-start justify-start w-full">
                            <Text
                              className="text-blue_gray-900 text-sm w-full"
                              size="txtInterMedium14Bluegray900"
                            >
                              Guarantor’s Full Name
                            </Text>
                            <Input
                              name="inputframe_Eleven"
                              placeholder="John Guarantor"
                              className="font-semibold p-0 placeholder:text-blue_gray-900 text-left text-sm w-full"
                              wrapClassName="border border-gray-200 border-solid flex w-full"
                              prefix={
                                <Img
                                  className="h-5 mr-2 my-auto"
                                  src="images/img_profile.svg"
                                  alt="Profile"
                                />
                              }
                              shape="round"
                              color="gray_100"
                              size="sm"
                              variant="fill"
                            ></Input>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <div className="flex flex-col gap-1 items-start justify-start w-full">
                            <Text
                              className="text-blue_gray-900 text-sm w-full"
                              size="txtInterMedium14Bluegray900"
                            >
                              Guarantor’s Email
                            </Text>
                            <Input
                              name="email_One"
                              placeholder="guarantor@gmail.com"
                              className="font-semibold p-0 placeholder:text-blue_gray-900 text-left text-sm w-full"
                              wrapClassName="border border-gray-200 border-solid flex w-full"
                              type="email"
                              prefix={
                                <Img
                                  className="mt-auto mb-px h-5 mr-2"
                                  src="images/img_checkmark.svg"
                                  alt="checkmark"
                                />
                              }
                              shape="round"
                              color="gray_100"
                              size="sm"
                              variant="fill"
                            ></Input>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row gap-[18px] items-start justify-start w-full">
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <div className="flex flex-col gap-1 items-start justify-start w-full">
                            <Text
                              className="text-blue_gray-900 text-sm w-full"
                              size="txtInterMedium14Bluegray900"
                            >
                              Guarantor’s Phone Number
                            </Text>
                            <Input
                              name="inputframe_Twelve"
                              placeholder="0816 842 2954"
                              className="font-semibold p-0 placeholder:text-blue_gray-900 text-left text-sm w-full"
                              wrapClassName="border border-gray-200 border-solid flex w-full"
                              prefix={
                                <Img
                                  className="h-5 mr-2 my-auto"
                                  src="images/img_call.svg"
                                  alt="Call"
                                />
                              }
                              shape="round"
                              color="gray_100"
                              size="sm"
                              variant="fill"
                            ></Input>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <div className="flex flex-col gap-1 items-start justify-start w-full">
                            <Text
                              className="text-blue_gray-900 text-sm w-full"
                              size="txtInterMedium14Bluegray900"
                            >
                              Guarantor’s Address
                            </Text>
                            <Input
                              name="inputframe_Thirteen"
                              placeholder="11, Daddy Savage Street, Fagba Estate, Ajegunle."
                              className="font-semibold p-0 placeholder:text-blue_gray-900 text-left text-sm w-full"
                              wrapClassName="border border-gray-200 border-solid flex w-full"
                              prefix={
                                <Img
                                  className="mt-auto mb-px h-5 mr-2"
                                  src="images/img_fluentlocation28regular.svg"
                                  alt="fluent:location-28-regular"
                                />
                              }
                              shape="round"
                              color="gray_100"
                              size="sm"
                              variant="fill"
                            ></Input>
                          </div>
                        </div>
                      </div>
                      <List
                        className="sm:flex-col flex-row gap-[18px] grid md:grid-cols-1 grid-cols-2 justify-start w-full"
                        orientation="horizontal"
                      >
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <div className="flex flex-col gap-1 items-start justify-start w-full">
                            <Text
                              className="text-blue_gray-900 text-sm w-full"
                              size="txtInterMedium14Bluegray900"
                            >
                              Guarantor’s Passport Photograph
                            </Text>
                            <div className="bg-gray-100 border border-gray-200 border-solid flex flex-row gap-2 items-center justify-start px-3 py-2 rounded-md w-full">
                              <Text
                                className="flex-1 text-blue_gray-900 text-sm w-auto"
                                size="txtInterMedium14Bluegray900"
                              >
                                Guarantor_Passport.JPG
                              </Text>
                              <Img
                                className="h-8 md:h-auto object-cover rounded w-8"
                                src="images/img_rectangle2_32x32.png"
                                alt="rectangleTwo"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <div className="flex flex-col gap-1 items-start justify-start w-full">
                            <Text
                              className="text-blue_gray-900 text-sm w-full"
                              size="txtInterMedium14Bluegray900"
                            >
                              Upload Signed Guarantor Letter
                            </Text>
                            <div className="bg-gray-100 border border-gray-200 border-solid flex flex-row gap-2 items-center justify-start px-3 py-2 rounded-md w-full">
                              <Text
                                className="flex-1 text-blue_gray-900 text-sm w-auto"
                                size="txtInterMedium14Bluegray900"
                              >
                                Guarantor_Letter.PDF
                              </Text>
                              <Img
                                className="h-8 md:h-auto object-cover rounded w-8"
                                src="images/img_rectangle2.png"
                                alt="rectangleThree"
                              />
                            </div>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 h-[173px] md:h-auto items-start justify-start w-full">
                <div className="bg-white-A700 border-b border-gray-200 border-r border-solid flex flex-1 flex-col h-[173px] md:h-auto items-center justify-start px-10 sm:px-5 py-5 w-full">
                  <div className="flex flex-col h-full items-start justify-start w-full">
                    <div className="flex flex-col gap-1 items-start justify-center w-auto">
                      <Text
                        className="text-base text-blue_gray-900 w-auto"
                        size="txtInterSemiBold16"
                      >
                        Documents Uploaded
                      </Text>
                      <Text
                        className="text-blue_gray-500 text-sm w-auto"
                        size="txtInterRegular14"
                      >
                        Your uploaded documents
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border-b border-gray-200 border-solid flex flex-1 flex-col items-center justify-start px-10 sm:px-5 py-[30px] w-full">
                  <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col items-center justify-start p-5 rounded-lg w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <List
                        className="sm:flex-col flex-row gap-[18px] grid md:grid-cols-1 grid-cols-2 justify-start w-full"
                        orientation="horizontal"
                      >
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <div className="flex flex-col gap-1 items-start justify-start w-full">
                            <Text
                              className="text-blue_gray-900 text-sm w-full"
                              size="txtInterMedium14Bluegray900"
                            >
                              <span className="text-blue_gray-900 font-inter text-left font-medium">
                                Copy of recent NIN{" "}
                              </span>
                              <span className="text-blue_gray-200 font-inter text-left font-medium">
                                (.JPG, .PNG)
                              </span>
                            </Text>
                            <div className="bg-gray-100 border border-gray-200 border-solid flex sm:flex-col flex-row gap-2 items-center justify-start px-3 py-2 rounded-md w-full">
                              <div className="flex flex-1 flex-col items-center justify-start w-full">
                                <div className="flex flex-col items-center justify-start w-auto">
                                  <Text
                                    className="text-blue_gray-900 text-sm w-auto"
                                    size="txtInterMedium14Bluegray900"
                                  >
                                    Recent_NIN.JPG
                                  </Text>
                                </div>
                              </div>
                              <Img
                                className="h-8 md:h-auto object-cover rounded w-8"
                                src="images/img_rectangle2.png"
                                alt="rectangleThree"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <div className="flex flex-col gap-1 items-start justify-start w-full">
                            <Text
                              className="text-blue_gray-900 text-sm w-full"
                              size="txtInterMedium14Bluegray900"
                            >
                              <span className="text-blue_gray-900 font-inter text-left font-medium">
                                Copy of recent International Passport{" "}
                              </span>
                              <span className="text-blue_gray-200 font-inter text-left font-medium">
                                (.JPG, .PNG)
                              </span>
                            </Text>
                            <div className="bg-gray-100 border border-gray-200 border-solid flex sm:flex-col flex-row gap-2 items-center justify-start px-3 py-2 rounded-md w-full">
                              <div className="flex flex-1 flex-col items-center justify-start w-full">
                                <div className="flex flex-col items-center justify-start w-auto">
                                  <Text
                                    className="text-blue_gray-900 text-sm w-auto"
                                    size="txtInterMedium14Bluegray900"
                                  >
                                    Recent_INTPassport.JPG
                                  </Text>
                                </div>
                              </div>
                              <Img
                                className="h-8 md:h-auto object-cover rounded w-8"
                                src="images/img_rectangle2.png"
                                alt="rectangleTwo"
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
          <div className="absolute bg-white-A700 border-b border-gray-300 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start p-[7px] right-[0] top-[0] w-[88%]">
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
          <DashboardHomeOneSidebar className="absolute bg-white-A700 border-gray-200 border-r border-solid flex flex-col font-zonapro gap-[18px] h-[963px] md:h-auto items-center justify-start left-[0] top-[0] w-[214px]" />
        </div>
      </div>
    </>
  );
};

export default DashboardHomeFourPage;
