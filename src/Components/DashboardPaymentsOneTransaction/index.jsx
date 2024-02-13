import React from "react";

import { Button, Text } from "../../Components";

const DashboardPaymentsOneTransaction = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-center px-3 py-1 w-[50px]">
          <Text
            className="text-blue_gray-900 text-sm w-auto"
            size="txtInterRegular14Bluegray900"
          >
            {props?.amounttext}
          </Text>
        </div>
        <div className="flex flex-col items-start justify-start px-3 py-1 w-[163px]">
          <Text
            className="text-blue_gray-900 text-sm w-auto"
            size="txtInterRegular14Bluegray900"
          >
            {props?.weektext}
          </Text>
        </div>
        <div className="flex flex-col items-start justify-start px-3 py-1 w-[100px]">
          <Text
            className="text-blue_gray-900 text-sm w-auto"
            size="txtInterMedium14Bluegray900"
          >
            {props?.paymenttext}
          </Text>
        </div>
        <div className="flex flex-col items-start justify-start px-3 py-1 w-[212px]">
          <Text
            className="text-blue_gray-900 text-sm w-auto"
            size="txtInterRegular14Bluegray900"
          >
            {props?.paymentmethodtext}
          </Text>
        </div>
        <Button
          className="!text-teal-500 cursor-pointer font-inter min-w-[89px] rounded-lg text-center text-sm"
          shape="round"
          color="teal_500_19"
          size="sm"
          variant="fill"
        >
          {props?.completed}
        </Button>
      </div>
    </>
  );
};

DashboardPaymentsOneTransaction.defaultProps = {
  amounttext: "1",
  weektext: "Week 1 - 23/12/2023",
  paymenttext: "#30,000",
  paymentmethodtext: "Bank Transfer",
  completed: "Completed",
};

export default DashboardPaymentsOneTransaction;
