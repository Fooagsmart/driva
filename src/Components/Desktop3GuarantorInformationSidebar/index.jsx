import React from "react";

import { Button, Img, List, Text } from "../../Components";

const Desktop3GuarantorInformationSidebar = (props) => {
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
                  {props?.personalinfotext1}
                </Text>
                <Text
                  className="text-blue_gray-500 text-xs w-auto"
                  size="txtInterRegular12"
                >
                  {props?.fillinfotext1}
                </Text>
              </div>
            </div>
          </div>
          <div className="border-gray-300 border-solid border-t flex flex-1 flex-col items-center justify-start p-4 w-full">
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
                  {props?.vehicleinfotext}
                </Text>
                <Text
                  className="text-blue_gray-500 text-xs w-auto"
                  size="txtInterRegular12"
                >
                  {props?.fillinfotext2}
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
                {props?.button3}
              </Button>
              <div className="flex flex-col gap-1 items-start justify-start w-auto">
                <Text
                  className="text-blue_gray-900 text-sm w-auto"
                  size="txtInterSemiBold14Bluegray900"
                >
                  {props?.guarantorinfotext}
                </Text>
                <Text
                  className="text-blue_gray-500 text-xs w-auto"
                  size="txtInterRegular12"
                >
                  {props?.fillinfotext3}
                </Text>
              </div>
            </div>
          </div>
        </List>
        <div className="border-gray-300 border-solid border-t flex flex-col items-center justify-start p-4 w-full">
          <div className="flex flex-row gap-2 items-center justify-start w-full ">
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
                {props?.documentuploadtext}
              </Text>
              <Text
                className="text-blue_gray-500 text-xs w-auto"
                size="txtInterRegular12"
              >
                {props?.uploadinfotext}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Desktop3GuarantorInformationSidebar.defaultProps = {
  personalinfotext1: "Personal Information",
  fillinfotext1: "Fill in your personal information",
  vehicleinfotext: "Vehicle Information",
  fillinfotext2: "Fill in your vehicle information",
  button3: "3",
  guarantorinfotext: "Guarantor Information",
  fillinfotext3: "Fill in your guarantor’s information",
  button4: "4",
  documentuploadtext: "Document Upload",
  uploadinfotext: "Upload the document(s) requested",
};

export default Desktop3GuarantorInformationSidebar;
