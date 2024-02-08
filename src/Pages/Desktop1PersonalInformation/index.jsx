import React from "react";

import { Button, Img, Input, List, Text } from "../../Components";
import Desktop1PersonalInformationSchoolinfo from "../../Components/Desktop1PersonalInformationSchoolinfo";
import Desktop1PersonalInformationSidebar from "../../Components/Desktop1PersonalInformationSidebar";

const Desktop1PersonalInformationPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-zonapro items-center justify-start mx-auto pb-[353px] w-full">
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
          <div className="flex md:flex-col flex-row font-inter gap-5 items-start justify-start max-w-[1300px] mx-auto md:px-5 w-full">
            <Desktop1PersonalInformationSidebar className="bg-white-A700 border border-gray-300 border-solid flex md:flex-1 flex-col gap-[-1px] h-[567px] items-start mb-[832px] rounded-lg w-[310px] md:w-full" />
            <div className="bg-white-A700 border border-gray-200 border-solid flex flex-1 flex-col items-start justify-start max-w-[970px] rounded-lg w-full">
              <div className="flex flex-col gap-8 items-center justify-start rounded-lg w-full">
                <div className="border-b border-gray-200 border-solid flex flex-col gap-5 items-center justify-start px-10 sm:px-5 py-5 w-full">
                  <div className="flex flex-col items-start justify-center w-full">
                    <div className="flex flex-col gap-2 items-start justify-center w-auto">
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
                          Fill in your personal information here.
                        </Text>
                      </div>
                      <Text
                        className="text-red-400 text-sm w-auto"
                        size="txtInterMedium14"
                      >
                        *Required Fields
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <div className="flex md:flex-col flex-row gap-[18px] items-start justify-start w-full">
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <div className="flex flex-col gap-1 items-start justify-start w-full">
                            <Text
                              className="text-blue_gray-900 text-sm w-full"
                              size="txtInterMedium14Bluegray900"
                            >
                              <span className="text-blue_gray-900 font-inter text-left font-medium">
                                First Name
                              </span>
                              <span className="text-red-400 font-inter text-left font-medium">
                                *
                              </span>
                            </Text>
                            <Input
                              name="inputframe"
                              placeholder="Enter First Name"
                              className="p-0 placeholder:text-blue_gray-500 text-left text-sm w-full"
                              wrapClassName="border border-gray-200 border-solid flex w-full"
                              type="text"
                              prefix={
                                <Img
                                  className="h-5 mr-2 my-auto"
                                  src="images/img_profile.svg"
                                  alt="Profile"
                                />
                              }
                              shape="round"
                              color="white_A700"
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
                              <span className="text-blue_gray-900 font-inter text-left font-medium">
                                Last Name
                              </span>
                              <span className="text-red-400 font-inter text-left font-medium">
                                *
                              </span>
                            </Text>
                            <Input
                              name="inputframe_One"
                              placeholder="Enter Last Name"
                              className="p-0 placeholder:text-blue_gray-500 text-left text-sm w-full"
                              wrapClassName="border border-gray-200 border-solid flex w-full"
                              type="text"
                              prefix={
                                <Img
                                  className="h-5 mr-2 my-auto"
                                  src="images/img_profile.svg"
                                  alt="Profile"
                                />
                              }
                              shape="round"
                              color="white_A700"
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
                              <span className="text-blue_gray-900 font-inter text-left font-medium">
                                Email Address
                              </span>
                              <span className="text-red-400 font-inter text-left font-medium">
                                *
                              </span>
                            </Text>
                            <Input
                              name="email"
                              placeholder="example@gmail.com"
                              className="p-0 placeholder:text-blue_gray-500 text-left text-sm w-full"
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
                              color="white_A700"
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
                              <span className="text-blue_gray-900 font-inter text-left font-medium">
                                Phone Number
                              </span>
                              <span className="text-red-400 font-inter text-left font-medium">
                                *
                              </span>
                            </Text>
                            <Input
                              name="inputframe_Two"
                              placeholder="Enter Phone Number"
                              className="p-0 placeholder:text-blue_gray-500 text-left text-sm w-full"
                              wrapClassName="border border-gray-200 border-solid flex w-full"
                              type="number"
                              prefix={
                                <Img
                                  className="h-5 mr-2 my-auto"
                                  src="images/img_call.svg"
                                  alt="Call"
                                />
                              }
                              shape="round"
                              color="white_A700"
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
                              <span className="text-blue_gray-900 font-inter text-left font-medium">
                                Date of Birth (D.O.B)
                              </span>
                              <span className="text-red-400 font-inter text-left font-medium">
                                *
                              </span>
                            </Text>
                            <Input
                              name="inputframe_Three"
                              placeholder="DD / MM / YYYY"
                              className="p-0 placeholder:text-blue_gray-500 text-left text-sm w-full"
                              wrapClassName="border border-gray-200 border-solid flex w-full"
                              prefix={
                                <Img
                                  className="h-5 mr-2 my-auto"
                                  src="images/img_phcakelight.svg"
                                  alt="ph:cake-light"
                                />
                              }
                              suffix={
                                <Img
                                  className="h-5 ml-[35px] my-auto"
                                  src="images/img_calendar.svg"
                                  alt="Calendar"
                                />
                              }
                              shape="round"
                              color="white_A700"
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
                              <span className="text-blue_gray-900 font-inter text-left font-medium">
                                Home Address
                              </span>
                              <span className="text-red-400 font-inter text-left font-medium">
                                *
                              </span>
                            </Text>
                            <Input
                              name="inputframe_Four"
                              placeholder="Enter Home Address"
                              className="p-0 placeholder:text-blue_gray-500 text-left text-sm w-full"
                              wrapClassName="border border-gray-200 border-solid flex w-full"
                              prefix={
                                <Img
                                  className="h-5 mr-2 my-auto"
                                  src="images/img_fluentlocation28regular.svg"
                                  alt="fluent:location-28-regular"
                                />
                              }
                              shape="round"
                              color="white_A700"
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
                              <span className="text-blue_gray-900 font-inter text-left font-medium">
                                NIN (National Identification Number)
                              </span>
                              <span className="text-red-400 font-inter text-left font-medium">
                                *
                              </span>
                            </Text>
                            <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col items-center justify-start px-3 py-2 rounded-md w-full">
                              <div className="flex flex-col items-center justify-start w-full">
                                <Input
                                  name="textcursor"
                                  placeholder="Enter NIN"
                                  className="p-0 placeholder:text-blue_gray-500 text-blue_gray-500 text-left text-sm w-full"
                                  wrapClassName="w-full"
                                  size="xs"
                                ></Input>
                              </div>
                            </div>
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
                            <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col items-center justify-start px-3 py-2 rounded-md w-full">
                              <div className="flex flex-col items-center justify-start w-full">
                                <Input
                                  name="textcursor_One"
                                  placeholder="Enter LASDRI Number"
                                  className="p-0 placeholder:text-blue_gray-500 text-blue_gray-500 text-left text-sm w-full"
                                  wrapClassName="w-full"
                                  type="number"
                                  size="xs"
                                ></Input>
                              </div>
                            </div>
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
                              <span className="text-gray-500 font-inter text-left font-medium">
                                (e.g., defensive driving, hazardous materials
                                handling)
                              </span>
                              <span className="text-red-400 font-inter text-left font-medium">
                                *
                              </span>
                            </Text>
                            <div className="bg-gray-100 border border-gray-200 border-solid flex flex-col items-center justify-start pl-3 pr-1 py-1 rounded-md w-full">
                              <Button
                                className="border border-gray-200 border-solid cursor-pointer flex items-center justify-center min-w-[92px]"
                                leftIcon={
                                  <Img
                                    className="h-5 mb-px mr-2"
                                    src="images/img_simplelineiconscloudupload.svg"
                                    alt="simple-line-icons:cloud-upload"
                                  />
                                }
                                shape="round"
                                color="white_A700"
                                size="sm"
                                variant="fill"
                              >
                                <div className="text-left text-sm">Upload</div>
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-start my-0 w-full">
                          <div className="flex flex-col gap-1 items-start justify-start w-full">
                            <Text
                              className="text-blue_gray-900 text-sm w-full"
                              size="txtInterMedium14Bluegray900"
                            >
                              <span className="text-blue_gray-900 font-inter text-left font-medium">
                                Upload Passport Photograph (White Background)
                              </span>
                              <span className="text-red-400 font-inter text-left font-medium">
                                *
                              </span>
                            </Text>
                            <div className="bg-gray-100 border border-gray-200 border-solid flex flex-col items-center justify-start pl-3 pr-1 py-1 rounded-md w-full">
                              <Button
                                className="border border-gray-200 border-solid cursor-pointer flex items-center justify-center min-w-[92px] "
                                leftIcon={
                                  <Img
                                    className="h-5 mb-px mr-2"
                                    src="images/img_simplelineiconscloudupload.svg"
                                    alt="simple-line-icons:cloud-upload"
                                  />
                                }
                                shape="round"
                                color="white_A700"
                                size="sm"
                                variant="fill"
                              >
                                <div className="text-left text-sm">Upload</div>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="border-b border-gray-200 border-solid flex flex-col gap-5 items-center justify-start pb-5 px-10 sm:px-5 w-full">
                    <div className="flex flex-col items-start justify-center w-full">
                      <div className="flex flex-col gap-2 items-start justify-center w-full">
                        <div className="flex flex-col gap-1 items-start justify-center w-full">
                          <Text
                            className="text-base text-blue_gray-900 w-full"
                            size="txtInterSemiBold16"
                          >
                            Driver Information
                          </Text>
                          <Text
                            className="text-blue_gray-500 text-sm w-full"
                            size="txtInterRegular14"
                          >
                            Fill in all information requested here.
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
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-[416px] sm:w-full">
                            <div className="flex flex-col gap-1 items-start justify-start w-full">
                              <Text
                                className="text-gray-900 text-sm w-full"
                                size="txtInterMedium14Gray900"
                              >
                                <span className="text-gray-900 font-inter text-left font-medium">
                                  Upload recent Driver License
                                </span>
                                <span className="text-red-400 font-inter text-left font-medium">
                                  *
                                </span>
                              </Text>
                              <div className="bg-gray-100 border border-gray-200 border-solid flex flex-col items-center justify-start pl-3 pr-1 py-1 rounded-md w-full">
                                <Button
                                  className="border border-gray-300 border-solid cursor-pointer flex items-center justify-center min-w-[92px]"
                                
                                  shape="round"
                                  color="white_A700"
                                  size="sm"
                                  variant="fill"
                                >
                                    <Img
                                      className="h-5 mb-px mr-2"
                                      src="images/img_simplelineiconscloudupload.svg"
                                      alt="simple-line-icons:cloud-upload"
                                    />
                                  <div className="!text-gray-900 text-left text-sm">
                                    Upload
                                  </div>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 items-center justify-start w-full">
                  <div className="border-b border-gray-200 border-solid flex flex-col gap-5 items-center justify-start pb-5 px-10 sm:px-5 w-full">
                    <div className="flex flex-col items-start justify-center w-full">
                      <div className="flex flex-col gap-2 items-start justify-center w-full">
                        <div className="flex flex-col gap-1 items-start justify-center w-full">
                          <Text
                            className="text-base text-blue_gray-900 w-full"
                            size="txtInterSemiBold16"
                          >
                            School Information
                          </Text>
                          <Text
                            className="leading-[21.00px] text-blue_gray-500 text-sm"
                            size="txtInterRegular14"
                          >
                            <>
                              Kindly enter your school information here, every
                              school
                              <br />
                              attended must be added
                            </>
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
                    <Desktop1PersonalInformationSchoolinfo
                      className="bg-white-A700 border border-gray-200 border-solid flex flex-col gap-6 items-center justify-start p-5 rounded-lg w-full"
                      label={
                        <Text className="font-medium text-gray-900 text-sm w-full">
                          <span className="text-gray-900 font-inter text-left">
                            Name of School
                          </span>
                          <span className="text-red-400 font-inter text-left">
                            *
                          </span>
                        </Text>
                      }
                      label1={
                        <Text className="font-medium text-gray-900 text-sm w-full">
                          <span className="text-gray-900 font-inter text-left">
                            Location of School
                          </span>
                          <span className="text-red-400 font-inter text-left">
                            *
                          </span>
                        </Text>
                      }
                      label2={
                        <Text className="font-medium text-gray-900 text-sm w-full">
                          <span className="text-gray-900 font-inter text-left">
                            Year In
                          </span>
                          <span className="text-red-400 font-inter text-left">
                            *
                          </span>
                        </Text>
                      }
                      label3={
                        <Text className="font-medium text-gray-900 text-sm w-full">
                          <span className="text-gray-900 font-inter text-left">
                            Year Out
                          </span>
                          <span className="text-red-400 font-inter text-left">
                            *
                          </span>
                        </Text>
                      }
                    />
                    <div className="flex flex-col items-start justify-center w-full">
                      <Button
                        className="border border-gray-200 border-solid cursor-pointer flex items-center justify-center min-w-[154px]"
                        leftIcon={
                          <Img
                            className="h-5 mr-2"
                            src="images/img_icon.svg"
                            alt="Icon"
                          />
                        }
                        shape="round"
                        color="gray_100"
                        size="sm"
                        variant="fill"
                      >
                        <div className="text-left text-sm">Add New School</div>
                      </Button>
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
        </div>
      </div>
    </>
  );
};

export default Desktop1PersonalInformationPage;
