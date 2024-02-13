import React from "react";

import { Button, Img, Input, List, Text } from "components";

const Desktop3GuarantorInformationGuarantorinfo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-2 items-start justify-start w-full">
          <div className="flex md:flex-col flex-row gap-[18px] items-start justify-start w-full">
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="flex flex-col gap-1 items-start justify-start w-full">
                {props?.label}
                <Input
                  name="inputframe"
                  placeholder="Enter Guarantor’s Full Name"
                  className="font-inter p-0 placeholder:text-blue_gray-500 text-left text-sm w-full"
                  wrapClassName="border border-gray-200 border-solid flex w-full"
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
                {props?.labelOne}
                <Input
                  name="email"
                  placeholder="example@gmail.com"
                  className="font-inter p-0 placeholder:text-blue_gray-500 text-left text-sm w-full"
                  wrapClassName="border border-gray-200 border-solid flex w-full"
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
          </div>
          <div className="flex md:flex-col flex-row gap-[18px] items-start justify-start w-full">
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="flex flex-col gap-1 items-start justify-start w-full">
                {props?.labelTwo}
                <Input
                  name="inputframe_One"
                  placeholder="Enter Guarantor’s Phone Number"
                  className="font-inter p-0 placeholder:text-blue_gray-500 text-left text-sm w-full"
                  wrapClassName="border border-gray-200 border-solid flex w-full"
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
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="flex flex-col gap-1 items-start justify-start w-full">
                {props?.labelThree}
                <Input
                  name="inputframe_Two"
                  placeholder="Enter Guarantor’s House Address"
                  className="font-inter p-0 placeholder:text-blue_gray-500 text-left text-sm w-full"
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
          <List
            className="sm:flex-col flex-row gap-[18px] grid md:grid-cols-1 grid-cols-2 justify-start w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="flex flex-col gap-1 items-start justify-start w-full">
                {props?.label1}
                <div className="bg-gray-100 border border-gray-200 border-solid flex flex-col items-center justify-start pl-3 pr-1 py-1 rounded-md w-full">
                  <Button
                    className="border border-gray-300 border-solid cursor-pointer flex items-center justify-center min-w-[92px]"
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
                    <div className="!text-gray-900 font-inter text-left text-sm">
                      {props?.upload}
                    </div>
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="flex flex-col gap-1 items-start justify-start w-full">
                {props?.label2}
                <div className="bg-gray-100 border border-gray-200 border-solid flex flex-col items-center justify-start pl-3 pr-1 py-1 rounded-md w-full">
                  <Button
                    className="border border-gray-300 border-solid cursor-pointer flex items-center justify-center min-w-[92px]"
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
                    <div className="!text-gray-900 font-inter text-left text-sm">
                      {props?.upload1}
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

Desktop3GuarantorInformationGuarantorinfo.defaultProps = {
  label: (
    <Text
      className="text-gray-900 text-sm w-full"
      size="txtInterMedium14Gray900"
    >
      <span className="text-gray-900 font-inter text-left font-medium">
        Guarantor’s Full Name
      </span>
      <span className="text-red-400 font-inter text-left font-medium">*</span>
    </Text>
  ),
  labelOne: (
    <Text
      className="text-gray-900 text-sm w-full"
      size="txtInterMedium14Gray900"
    >
      <span className="text-gray-900 font-inter text-left font-medium">
        Guarantor’s Email
      </span>
      <span className="text-red-400 font-inter text-left font-medium">*</span>
    </Text>
  ),
  labelTwo: (
    <Text
      className="text-gray-900 text-sm w-full"
      size="txtInterMedium14Gray900"
    >
      <span className="text-gray-900 font-inter text-left font-medium">
        Guarantor’s Phone Number
      </span>
      <span className="text-red-400 font-inter text-left font-medium">*</span>
    </Text>
  ),
  labelThree: (
    <Text
      className="text-gray-900 text-sm w-full"
      size="txtInterMedium14Gray900"
    >
      <span className="text-gray-900 font-inter text-left font-medium">
        Guarantor’s Address
      </span>
      <span className="text-red-400 font-inter text-left font-medium">*</span>
    </Text>
  ),
  label1: (
    <Text
      className="text-gray-900 text-sm w-full"
      size="txtInterMedium14Gray900"
    >
      <span className="text-gray-900 font-inter text-left font-medium">
        Guarantor’s Passport Photograph
      </span>
      <span className="text-red-400 font-inter text-left font-medium">*</span>
    </Text>
  ),
  upload: "Upload",
  label2: (
    <Text
      className="text-gray-900 text-sm w-full"
      size="txtInterMedium14Gray900"
    >
      <span className="text-gray-900 font-inter text-left font-medium">
        Upload Signed Guarantor Letter
      </span>
      <span className="text-red-400 font-inter text-left font-medium">*</span>
    </Text>
  ),
  upload1: "Upload",
};

export default Desktop3GuarantorInformationGuarantorinfo;
