import React from "react";

import { Button, List, Text } from "../../Components";

const Desktop1PersonalInformationSidebar = (props) => {
  return (
    <>
      <List className={props.className} orientation="vertical">
        <div className="flex flex-col items-center justify-start p-4 w-full">
          <div className="flex flex-row gap-2 items-center justify-start w-auto">
            <Button
              className="cursor-pointer font-bold font-inter h-[31px] rounded-[15px] text-base text-center tracking-[-0.32px] w-[30px]"
              color="yellow_900"
              size="xs"
              variant="fill"
            >
              {props?.button1}
            </Button>
            <div className="flex flex-col gap-1 items-start justify-start w-auto">
              <Text
                className="text-blue_gray-900 text-sm w-auto"
                size="txtInterSemiBold14Bluegray900"
              >
                {props?.text1}
              </Text>
              <Text
                className="text-blue_gray-500 text-xs w-auto"
                size="txtInterRegular12"
              >
                {props?.text2}
              </Text>
            </div>
          </div>
        </div>
        <div className="border-gray-300 border-solid border-y flex flex-col items-center justify-start p-4 w-full">
          <div className="flex flex-row gap-2 items-center justify-start w-auto">
            <Button
              className="!text-blue_gray-500 cursor-pointer font-bold font-inter h-[31px] rounded-[15px] text-base text-center tracking-[-0.32px] w-[30px]"
              color="blue_gray_500"
              size="xs"
              variant="outline"
            >
              {props?.button2}
            </Button>
            <div className="flex flex-col gap-1 items-start justify-start w-auto">
              <Text
                className="text-blue_gray-900 text-sm w-auto"
                size="txtInterSemiBold14Bluegray900"
              >
                {props?.text3}
              </Text>
              <Text
                className="text-blue_gray-500 text-xs w-auto"
                size="txtInterRegular12"
              >
                {props?.text4}
              </Text>
            </div>
          </div>
        </div>
        <div className="border-gray-300 border-solid border-y flex flex-col items-center justify-start p-4 w-full">
          <div className="flex flex-row gap-2 items-center justify-start w-auto">
            <Button
              className="!text-blue_gray-500 cursor-pointer font-bold font-inter h-[31px] rounded-[15px] text-base text-center tracking-[-0.32px] w-[30px]"
              color="blue_gray_500"
              size="xs"
              variant="outline"
            >
              {props?.button3}
            </Button>
            <div className="flex flex-col gap-1 items-start justify-start w-auto">
              <Text
                className="text-blue_gray-900 text-sm w-auto"
                size="txtInterSemiBold14Bluegray900"
              >
                {props?.text5}
              </Text>
              <Text
                className="text-blue_gray-500 text-xs w-auto"
                size="txtInterRegular12"
              >
                {props?.text6}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start p-4 w-full">
          <div className="flex flex-row gap-2 items-center justify-start w-auto">
            <Button
              className="!text-blue_gray-500 cursor-pointer font-bold font-inter h-[31px] rounded-[15px] text-base text-center tracking-[-0.32px] w-[30px]"
              color="blue_gray_500"
              size="xs"
              variant="outline"
            >
              {props?.button4}
            </Button>
            <div className="flex flex-col gap-1 items-start justify-start w-auto">
              <Text
                className="text-blue_gray-900 text-sm w-auto"
                size="txtInterSemiBold14Bluegray900"
              >
                {props?.text7}
              </Text>
              <Text
                className="text-blue_gray-500 text-xs w-auto"
                size="txtInterRegular12"
              >
                {props?.text8}
              </Text>
            </div>
          </div>
        </div>
      </List>
    </>
  );
};

Desktop1PersonalInformationSidebar.defaultProps = {
  button1: "1",
  text1: "Personal Information",
  text2: "Fill in your personal information",
  button2: "2",
  text3: "Vehicle Information",
  text4: "Fill in your vehicle information",
  button3: "3",
  text5: "Guarantor Information",
  text6: "Fill in your guarantor’s information",
  button4: "4",
  text7: "Document Upload",
  text8: "Upload the document(s) requested",
};

export default Desktop1PersonalInformationSidebar;
