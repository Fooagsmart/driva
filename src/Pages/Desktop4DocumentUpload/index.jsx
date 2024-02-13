import React from "react";

import { Button, Img, List, Text } from "components";
import Desktop4DocumentUploadSidebar from "components/Desktop4DocumentUploadSidebar";

const Desktop4DocumentUploadPage = () => {
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
            <div className="bg-white-A700 border border-gray-200 border-solid flex flex-1 flex-col h-[567px] md:h-auto items-start justify-start max-w-[970px] rounded-lg w-full">
              <div className="flex flex-col h-full items-center justify-start rounded-lg w-full">
                <div className="flex flex-col gap-3 h-full items-center justify-start py-5 rounded-lg w-full">
                  <div className="border-b border-gray-200 border-solid flex flex-col gap-5 h-full items-center justify-start pb-5 px-10 sm:px-5 w-full">
                    <div className="flex flex-col items-start justify-center w-full">
                      <div className="flex flex-col gap-2 items-start justify-center w-full">
                        <div className="flex flex-col gap-1 items-start justify-center w-full">
                          <Text
                            className="text-base text-blue_gray-900 w-full"
                            size="txtInterSemiBold16"
                          >
                            Documents Upload
                          </Text>
                          <Text
                            className="leading-[21.00px] text-blue_gray-500 text-sm"
                            size="txtInterRegular14"
                          >
                            <>
                              Please kindly upload the requested documents,
                              <br />
                              as this will help us decide.
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
                    <div className="flex flex-col items-center justify-start w-full">
                      <List
                        className="flex flex-col gap-6 items-start w-full"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-col items-start justify-start my-0 w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-col gap-1 items-start justify-start w-full">
                              <Text
                                className="text-blue_gray-900 text-sm w-full"
                                size="txtInterMedium14Bluegray900"
                              >
                                <span className="text-blue_gray-900 font-inter text-left font-medium">
                                  Copy of recent NIN{" "}
                                </span>
                                <span className="text-gray-500 font-inter text-left font-medium">
                                  (.JPG, .PNG)
                                </span>
                                <span className="text-red-400 font-inter text-left font-medium">
                                  *
                                </span>
                              </Text>
                              <div className="bg-gray-100 border border-gray-200 border-solid flex flex-col items-center justify-start pl-2 pr-1 py-1 rounded-md w-full">
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
                                  <div className="text-left text-sm">
                                    Upload
                                  </div>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-start my-0 w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-col gap-1 items-start justify-start w-full">
                              <Text
                                className="text-blue_gray-900 text-sm w-full"
                                size="txtInterMedium14Bluegray900"
                              >
                                <span className="text-blue_gray-900 font-inter text-left font-medium">
                                  Copy of recent International Passport{" "}
                                </span>
                                <span className="text-gray-500 font-inter text-left font-medium">
                                  (.JPG, .PNG)
                                </span>
                                <span className="text-red-400 font-inter text-left font-medium">
                                  *
                                </span>
                              </Text>
                              <div className="bg-gray-100 border border-gray-200 border-solid flex flex-col items-center justify-start pl-2 pr-1 py-1 rounded-md w-full">
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
                                  <div className="text-left text-sm">
                                    Upload
                                  </div>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center pt-2 px-10 sm:px-5 w-full">
                    <Button
                      className="cursor-pointer min-w-[87px] text-center text-sm"
                      shape="round"
                      color="yellow_900"
                      size="sm"
                      variant="fill"
                    >
                      Submit
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

export default Desktop4DocumentUploadPage;
