import React from "react";
import { Link } from "react-router-dom";

import { Button, Img, Input, List, Text } from "../../Components";
import Desktop3GuarantorInformationGuarantorinfo from "../../Components/Desktop3GuarantorInformationGuarantorinfo";
import Desktop3GuarantorInformationSidebar from "../../Components/Desktop3GuarantorInformationSidebar";

const Desktop3GuarantorInformationPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-zonapro items-center justify-start mx-auto pb-[30px] w-full">
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
            <Desktop3GuarantorInformationSidebar className="bg-white-A700 border border-gray-300 border-solid flex md:flex-1 flex-col gap-[-1px] h-[567px] md:w-full items-start justify-start rounded-lg w-[310px]" />
            <div className="bg-white-A700 border border-gray-200 border-solid flex flex-1 flex-col h-[567px] md:h-auto items-start justify-start max-w-[970px] rounded-lg w-full">
              <div className="flex flex-col h-full items-center justify-start rounded-lg w-full">
                <div className="flex flex-col gap-3 h-full items-center justify-start py-5 rounded-lg w-full">
                  <div className="border-b border-gray-200 border-solid flex flex-col gap-5  items-center justify-start pb-5 px-10 sm:px-5 w-full">
                    <div className="flex flex-col items-start justify-center w-full">
                      <div className="flex flex-col gap-2 items-start justify-center w-full">
                        <div className="flex flex-col gap-1 items-start justify-center w-full">
                          <Text
                            className="text-base text-blue_gray-900 w-full"
                            size="txtInterSemiBold16"
                          >
                            Guarantor Information
                          </Text>
                          <Text
                            className="leading-[21.00px] text-blue_gray-500 text-sm"
                            size="txtInterRegular14"
                          >
                            <>
                              Kindly enter your guarantor’s information here,
                              <br />
                              make sure all information are correct
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
                    <Desktop3GuarantorInformationGuarantorinfo
                      className="bg-white-A700 border border-gray-200 border-solid flex flex-col gap-6 items-center justify-start p-5 rounded-lg w-full"
                      label={
                        <Text className="font-medium text-gray-900 text-sm w-full">
                          <span className="text-gray-900 font-inter text-left">
                            Guarantor’s Full Name
                          </span>
                          <span className="text-red-400 font-inter text-left">
                            *
                          </span>
                        </Text>
                      }
                      labelOne={
                        <Text className="font-medium text-gray-900 text-sm w-full">
                          <span className="text-gray-900 font-inter text-left">
                            Guarantor’s Email
                          </span>
                          <span className="text-red-400 font-inter text-left">
                            *
                          </span>
                        </Text>
                      }
                      labelTwo={
                        <Text className="font-medium text-gray-900 text-sm w-full">
                          <span className="text-gray-900 font-inter text-left">
                            Guarantor’s Phone Number
                          </span>
                          <span className="text-red-400 font-inter text-left">
                            *
                          </span>
                        </Text>
                      }
                      labelThree={
                        <Text className="font-medium text-gray-900 text-sm w-full">
                          <span className="text-gray-900 font-inter text-left">
                            Guarantor’s Address
                          </span>
                          <span className="text-red-400 font-inter text-left">
                            *
                          </span>
                        </Text>
                      }
                      label1={
                        <Text className="font-medium text-gray-900 text-sm w-full">
                          <span className="text-gray-900 font-inter text-left">
                            Guarantor’s Passport Photograph
                          </span>
                          <span className="text-red-400 font-inter text-left">
                            *
                          </span>
                        </Text>
                      }
                      label2={
                        <Text className="font-medium text-gray-900 text-sm w-full">
                          <span className="text-gray-900 font-inter text-left">
                            Upload Signed Guarantor Letter
                          </span>
                          <span className="text-red-400 font-inter text-left">
                            *
                          </span>
                        </Text>
                      }
                    />
                    <div className="flex flex-col items-start justify-center w-full">
                      <Button
                        className="border border-gray-200 border-solid cursor-pointer flex items-center justify-center min-w-[176px]"
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
                        <div className="text-left text-sm">
                          Add New Guarantor
                        </div>
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 items-start justify-center pb-5 pt-2 px-10 sm:px-5 w-full">
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
                      <Link to="/desktop4documentupload"> Continue</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <Text
              className="mt-[45px] text-blue_gray-500 text-center text-sm hidden sm:block"
              size="txtInterSemiBold14"
            >
              <span className="text-blue_gray-500 font-inter font-semibold">
                Copyright ©2024. All rights <br />
                reserved. |{" "}
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

export default Desktop3GuarantorInformationPage;
