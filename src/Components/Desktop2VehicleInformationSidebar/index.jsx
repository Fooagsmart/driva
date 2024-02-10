import React from "react";

import { Button, Img, List, Text } from "../../Components";

const Desktop2VehicleInformationSidebar = (props) => {
  return (
    <>
      <div className={props.className}>
        <List
          className="flex flex-col items-center w-full"
          orientation="vertical"
        >
          <div className="flex flex-1 flex-col items-center justify-start p-4 w-full">
            <div className="flex flex-row gap-2 items-center justify-start w-full">
              <Button
                className="flex h-[31px] items-center justify-center rounded-[15px] w-[30px]"
                color="yellow_900"
                size="sm"
                variant="fill"
              >
                <Img src="images/img_checkmark_gray_50.svg" alt="checkmark" />
              </Button>
              <div className="flex flex-col gap-1 items-start justify-start w-auto">
                <Text
                  className="text-blue_gray-900 text-sm w-auto"
                  size="txtInterSemiBold14Bluegray900"
                >
                  {props?.personalinformationtext}
                </Text>
                <Text
                  className="text-blue_gray-500 text-xs w-auto"
                  size="txtInterRegular12"
                >
                  {props?.fillinpersonalinformationtext}
                </Text>
              </div>
            </div>
          </div>
          <div className="border-gray-300 border-solid border-t flex flex-1 flex-col items-center justify-start p-4 w-full">
            <div className="flex flex-row gap-2 items-center justify-start w-full">
              <Button
                className="cursor-pointer font-bold font-inter h-[31px] rounded-[15px] text-base text-center tracking-[-0.32px] w-[30px]"
                color="yellow_900"
                size="xs"
                variant="fill"
              >
                {props?.buttontwo}
              </Button>
              <div className="flex flex-col gap-1 items-start justify-start w-auto">
                <Text
                  className="text-blue_gray-900 text-sm w-auto"
                  size="txtInterSemiBold14Bluegray900"
                >
                  {props?.vehicleinformationtext}
                </Text>
                <Text
                  className="text-blue_gray-500 text-xs w-auto"
                  size="txtInterRegular12"
                >
                  {props?.fillinvehicleinformationtext}
                </Text>
              </div>
            </div>
          </div>
          <div className="border-gray-300 border-solid border-t flex flex-1 flex-col items-center justify-start p-4 w-full">
            <div className="flex flex-row gap-2 items-center justify-start w-full">
              <Button
                className="!text-blue_gray-500 cursor-pointer font-bold font-inter h-[31px] rounded-[15px] text-base text-center tracking-[-0.32px] w-[30px]"
                color="blue_gray_500"
                size="xs"
                variant="outline"
              >
                {props?.buttonthree}
              </Button>
              <div className="flex flex-col gap-1 items-start justify-start w-auto">
                <Text
                  className="text-blue_gray-900 text-sm w-auto"
                  size="txtInterSemiBold14Bluegray900"
                >
                  {props?.guarantorinformationtext}
                </Text>
                <Text
                  className="text-blue_gray-500 text-xs w-auto"
                  size="txtInterRegular12"
                >
                  {props?.fillinguarantorinformationtext}
                </Text>
              </div>
            </div>
          </div>
        </List>
        <div className="flex flex-col items-center justify-start p-4 w-full border-gray-300 border-solid border-t">
          <div className="flex flex-row gap-2 items-center justify-start w-full">
            <Button
              className="!text-blue_gray-500 cursor-pointer font-bold font-inter h-[31px] rounded-[15px] text-base text-center tracking-[-0.32px] w-[30px]"
              color="blue_gray_500"
              size="xs"
              variant="outline"
            >
              {props?.buttonfour}
            </Button>
            <div className="flex flex-col gap-1 items-start justify-start w-auto">
              <Text
                className="text-blue_gray-900 text-sm w-auto"
                size="txtInterSemiBold14Bluegray900"
              >
                {props?.documentuploadtext}
              </Text>
              <Text
                className="text-blue_gray-500 text-xs w-auto"
                size="txtInterRegular12"
              >
                {props?.uploaddocumenttext}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Desktop2VehicleInformationSidebar.defaultProps = {
  personalinformationtext: "Personal Information",
  fillinpersonalinformationtext: "Fill in your personal information",
  buttontwo: "2",
  vehicleinformationtext: "Vehicle Information",
  fillinvehicleinformationtext: "Fill in your vehicle information",
  buttonthree: "3",
  guarantorinformationtext: "Guarantor Information",
  fillinguarantorinformationtext: "Fill in your guarantor’s information",
  buttonfour: "4",
  documentuploadtext: "Document Upload",
  uploaddocumenttext: "Upload the document(s) requested",
};

export default Desktop2VehicleInformationSidebar;
