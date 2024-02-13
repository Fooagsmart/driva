import React from "react";

import { Button, Img, Input, Text } from "../../Components";

const Desktop1ChangePasswordPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col items-center justify-start mx-auto pb-[17px] w-full">
        <div className="bg-white-A700 border-b border-gray-200 border-solid flex flex-col font-zonapro items-center justify-start p-[13px] w-full">
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
        <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col font-inter items-start justify-start mt-64 px-5 rounded-lg w-[500px] sm:w-full">
          <div className="border-b border-gray-200 border-solid flex flex-col gap-10 items-center justify-start p-5 w-full">
            <div className="flex flex-col gap-1 items-center justify-center w-full">
              <Text
                className="text-base text-blue_gray-900 w-auto"
                size="txtInterSemiBold16"
              >
                Create Password
              </Text>
              <Text
                className="leading-[21.00px] text-blue_gray-500 text-center text-sm"
                size="txtInterRegular14"
              >
                <>
                  This is the password you will use to log <br />
                  into your dashboard
                </>
              </Text>
            </div>
            <div className="flex flex-col gap-6 items-center justify-center w-full">
              <div className="flex flex-col gap-4 items-center justify-center w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-1 items-start justify-start w-full">
                    <Text
                      className="text-blue_gray-900 text-sm w-full"
                      size="txtInterMedium14Bluegray900"
                    >
                      <span className="text-blue_gray-900 font-inter text-left font-medium">
                        New Password
                      </span>
                      <span className="text-red-400 font-inter text-left font-medium">
                        *
                      </span>
                    </Text>
                    <Input
                      name="inputframe"
                      placeholder="Enter new password"
                      className="p-0 placeholder:text-blue_gray-500 text-left text-sm w-full"
                      wrapClassName="border border-gray-200 border-solid flex w-full"
                      type="password"
                      prefix={
                        <Img
                          className="mt-auto mb-px h-5 mr-2"
                          src="images/img_lock.svg"
                          alt="Lock"
                        />
                      }
                      shape="round"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-1 items-start justify-start w-full">
                    <Text
                      className="text-blue_gray-900 text-sm w-full"
                      size="txtInterMedium14Bluegray900"
                    >
                      <span className="text-blue_gray-900 font-inter text-left font-medium">
                        Confirm Password
                      </span>
                      <span className="text-red-400 font-inter text-left font-medium">
                        *
                      </span>
                    </Text>
                    <Input
                      name="inputframe_One"
                      placeholder="Confirm your password"
                      className="p-0 placeholder:text-blue_gray-500 text-left text-sm w-full"
                      wrapClassName="border border-gray-200 border-solid flex w-full"
                      type="password"
                      prefix={
                        <Img
                          className="mt-auto mb-px h-5 mr-2"
                          src="images/img_lock.svg"
                          alt="Lock"
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
              <Button
                className="cursor-pointer min-w-[173px] text-center text-sm"
                shape="round"
                color="yellow_900"
                size="sm"
                variant="fill"
              >
                Log In to dashboard
              </Button>
            </div>
          </div>
        </div>
        <Text
          className="mt-[264px] text-blue_gray-500 text-center text-sm"
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
    </>
  );
};

export default Desktop1ChangePasswordPage;
