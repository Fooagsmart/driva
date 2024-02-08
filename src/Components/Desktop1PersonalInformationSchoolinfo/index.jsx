import React from "react";

import { Input, Text } from "../../Components";

const Desktop1PersonalInformationSchoolinfo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="gap-2 grid md:grid-cols-1 grid-cols-2 items-start min-h-[auto] w-full">
          <div className="flex flex-1 flex-col items-start justify-start w-full">
            <div className="flex flex-col gap-1 items-start justify-start w-full">
              {props?.label}
              <Input
                name="inputframe"
                placeholder="Enter Name of School"
                className="font-inter p-0 placeholder:text-blue_gray-500 text-left text-sm w-full"
                wrapClassName="border border-gray-200 border-solid w-full"
                shape="round"
                color="white_A700"
                size="sm"
                variant="fill"
              ></Input>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-start justify-start w-full">
            <div className="flex flex-col gap-1 items-start justify-start w-full">
              {props?.label1}
              <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col items-center justify-start px-3 py-2 rounded-md w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Input
                    name="textcursor"
                    placeholder="Enter Address of School"
                    className="font-inter p-0 placeholder:text-blue_gray-500 text-blue_gray-500 text-left text-sm w-full"
                    wrapClassName="w-full"
                    size="xs"
                  ></Input>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-start justify-start w-full">
            <div className="flex flex-col gap-1 items-start justify-start w-full">
              {props?.label2}
              <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col items-center justify-start px-3 py-2 rounded-md w-full">
                <div className="flex flex-col items-center justify-start w-full">
                <Input
                    name="textcursor"
                    placeholder="What Year did you Enter The School?"
                    className="font-inter p-0 placeholder:text-blue_gray-500 text-blue_gray-500 text-left text-sm w-full"
                    wrapClassName="w-full"
                    size="xs"
                  ></Input>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-start justify-start w-full">
            <div className="flex flex-col gap-1 items-start justify-start w-full">
              {props?.label3}
              <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col items-center justify-start px-3 py-2 rounded-md w-full">
                <div className="flex flex-col items-center justify-start w-full">
                <Input
                    name="textcursor"
                    placeholder="What Year did you Enter The School?"
                    className="font-inter p-0 placeholder:text-blue_gray-500 text-blue_gray-500 text-left text-sm w-full"
                    wrapClassName="w-full"
                    size="xs"
                  ></Input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Desktop1PersonalInformationSchoolinfo.defaultProps = {
  label: (
    <Text
      className="text-gray-900 text-sm w-full"
      size="txtInterMedium14Gray900"
    >
      <span className="text-gray-900 font-inter text-left font-medium">
        Name of School
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
        Location of School
      </span>
      <span className="text-red-400 font-inter text-left font-medium">*</span>
    </Text>
  ),
  label2: (
    <Text
      className="text-gray-900 text-sm w-full"
      size="txtInterMedium14Gray900"
    >
      <span className="text-gray-900 font-inter text-left font-medium">
        Year In
      </span>
      <span className="text-red-400 font-inter text-left font-medium">*</span>
    </Text>
  ),
  yearin: "What year did you enter the school?",
  label3: (
    <Text
      className="text-gray-900 text-sm w-full"
      size="txtInterMedium14Gray900"
    >
      <span className="text-gray-900 font-inter text-left font-medium">
        Year Out
      </span>
      <span className="text-red-400 font-inter text-left font-medium">*</span>
    </Text>
  ),
  yearout: "What year did you leave the school?",
};

export default Desktop1PersonalInformationSchoolinfo;
