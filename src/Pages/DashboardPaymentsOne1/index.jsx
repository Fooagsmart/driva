import React from "react";

import { Button, Img, Input, List, SelectBox, Text } from "components";
import DashboardPaymentsOneTransaction from "components/DashboardPaymentsOneTransaction";
import DashboardPaymentsSidebar from "components/DashboardPaymentsSidebar";

const decemberOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const buttonOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DashboardPaymentsOne1Page = () => {
  const dashboardPaymentsOneTransactionPropList = [
    {},
    {
      weektext: "Week 2 - 30/12/2023",
      amounttext: "2",
      paymentmethodtext: "Recurring Payment",
    },
    { weektext: "Week 3 - 23/12/2023", amounttext: "3" },
    {
      weektext: "Week 4 - 23/12/2023",
      amounttext: "4",
      paymentmethodtext: "Recurring Payment",
    },
  ];

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-zonapro items-center justify-start mx-auto pb-[17px] w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <DashboardPaymentsSidebar className="bg-white-A700 border-gray-200 border-r border-solid flex flex-col gap-[18px] h-[963px] md:h-auto items-start justify-start mb-[91px] md:px-5 w-[214px]" />
          <div className="flex md:flex-1 flex-col font-inter items-center justify-start md:px-5 w-[88%] md:w-full">
            <div className="bg-white-A700 border-b border-gray-200 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start p-[7px] w-full">
              <Img
                className="h-6 md:ml-[0] ml-[5px] w-6"
                src="images/img_materialsymbolsmenu.svg"
                alt="materialsymbols"
              />
              <Img
                className="h-9 md:ml-[0] ml-[1350px] rounded w-9"
                src="images/img_notification.svg"
                alt="notification"
              />
              <Img
                className="h-9 md:h-auto ml-4 md:ml-[0] object-cover rounded w-9"
                src="images/img_rectangle1.png"
                alt="rectangleOne"
              />
            </div>
            <Text
              className="bg-white-A700 border-b border-gray-200 border-solid h-[50px] justify-center max-w-[1514px] md:max-w-full pb-2.5 pt-3.5 sm:px-5 px-[35px] text-blue_gray-900 text-xl w-full"
              size="txtInterSemiBold20"
            >
              Payments
            </Text>
            <Input
              name="frame1618867841"
              placeholder="You will be charged #30,000 once every week (Saturday). Choose either payment methods below to get started"
              className="!placeholder:text-red-A700 !text-red-A700 font-medium p-0 text-base text-left w-full"
              wrapClassName="border border-gray-200 border-solid flex mt-5 rounded-lg w-[95%]"
              prefix={
                <Img
                  className="h-6 mr-2 my-auto"
                  src="images/img_materialsymbolsinfooutline.svg"
                  alt="material-symbols:info-outline"
                />
              }
              shape="round"
              color="white_A700"
              size="lg"
              variant="fill"
            ></Input>
            <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col gap-3 items-start justify-start max-w-[1434px] mt-3 p-5 rounded-lg w-full">
              <Text
                className="text-base text-blue_gray-900 w-full"
                size="txtInterSemiBold16"
              >
                Available Payments Options
              </Text>
              <List
                className="sm:flex-col flex-row gap-5 grid md:grid-cols-1 grid-cols-2 justify-start w-full"
                orientation="horizontal"
              >
                <div className="bg-white-A700 border border-gray-200 border-solid flex flex-1 flex-col items-start justify-start rounded-lg w-full">
                  <div className="flex md:flex-col flex-row gap-3 items-start justify-start p-5 rounded-lg w-full">
                    <div className="flex flex-1 flex-col gap-3 items-start justify-center w-full">
                      <div className="flex flex-col gap-3 items-start justify-center w-full">
                        <Button
                          className="flex items-center justify-center w-[9%]"
                          shape="round"
                          color="yellow_900_19"
                          size="xl"
                          variant="fill"
                        >
                          <Img
                            src="images/img_thumbsup_yellow_900.svg"
                            alt="thumbsup"
                          />
                        </Button>
                        <div className="flex flex-col gap-1 items-start justify-center w-full">
                          <Text
                            className="text-base text-blue_gray-900 w-auto"
                            size="txtInterSemiBold16"
                          >
                            Bank Transfer
                          </Text>
                          <Text
                            className="text-blue_gray-500 text-sm w-full"
                            size="txtInterRegular14"
                          >
                            You will make a transfer to our bank account
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer min-w-[138px] text-center text-sm"
                        shape="round"
                        color="yellow_900"
                        size="sm"
                        variant="fill"
                      >
                        Make Payment
                      </Button>
                    </div>
                    <Img
                      className="h-6 w-6"
                      src="images/img_materialsymbolsinfooutline_gray_400.svg"
                      alt="materialsymbols"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 border border-gray-200 border-solid flex flex-1 flex-col items-start justify-start rounded-lg w-full">
                  <div className="flex md:flex-col flex-row gap-3 items-start justify-start p-5 rounded-lg w-full">
                    <div className="flex flex-1 flex-col gap-3 items-start justify-center w-full">
                      <div className="flex flex-col gap-3 items-start justify-center w-full">
                        <Button
                          className="flex h-[52px] items-center justify-center w-[52px]"
                          shape="round"
                          color="yellow_900_19"
                          size="xl"
                          variant="fill"
                        >
                          <Img
                            className="h-5"
                            src="images/img_megaphone.svg"
                            alt="megaphone"
                          />
                        </Button>
                        <div className="flex flex-col gap-1 items-start justify-center w-full">
                          <Text
                            className="text-base text-blue_gray-900 w-auto"
                            size="txtInterSemiBold16"
                          >
                            Automatic Recurring Payment
                          </Text>
                          <Text
                            className="text-blue_gray-500 text-sm w-full"
                            size="txtInterRegular14"
                          >
                            Here, you will link your card to paystack
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer min-w-[138px] text-center text-sm"
                        shape="round"
                        color="yellow_900"
                        size="sm"
                        variant="fill"
                      >
                        Make Payment
                      </Button>
                    </div>
                    <Img
                      className="h-6 w-6"
                      src="images/img_materialsymbolsinfooutline_gray_400.svg"
                      alt="materialsymbols"
                    />
                  </div>
                </div>
              </List>
            </div>
            <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col items-start justify-start max-w-[1434px] mt-3 py-5 rounded-lg w-full">
              <div className="flex flex-col gap-5 items-start justify-start px-5 w-full">
                <div className="flex flex-row gap-3 items-center justify-start w-full">
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtInterSemiBold16"
                  >
                    Recent Transactions
                  </Text>
                  <Button
                    className="border border-gray-200 border-solid cursor-pointer flex items-center justify-center min-w-[76px]"
                    leftIcon={
                      <Img
                        className="h-5 mr-1"
                        src="images/img_calendar.svg"
                        alt="Calendar"
                      />
                    }
                    shape="round"
                    color="gray_100_01"
                    size="sm"
                    variant="fill"
                  >
                    <div className="font-semibold text-left text-sm">2024</div>
                  </Button>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <div className="bg-gray-50 border border-gray-200 border-solid flex flex-col items-start justify-start rounded-lg w-full">
                    <div className="flex md:flex-col flex-row gap-3 items-center justify-start px-5 py-2 rounded-lg w-full">
                      <div className="flex flex-1 flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-start justify-center w-full">
                          <Text
                            className="text-base text-blue_gray-900 w-auto"
                            size="txtInterSemiBold16"
                          >
                            November
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-5 w-5"
                        src="images/img_arrowright.svg"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 items-center justify-start w-full">
                    <SelectBox
                      className="!text-blue_gray-900 font-semibold text-base text-left w-full"
                      placeholderClassName="!text-blue_gray-900"
                      indicator={
                        <Img
                          className="h-5 w-5"
                          src="images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="frameEight"
                      options={decemberOptionsList}
                      isSearchable={false}
                      placeholder="December"
                      shape="round"
                      size="sm"
                    />
                    <div className="flex flex-col gap-4 items-start justify-start px-10 sm:px-5 w-full">
                      <div className="flex flex-col gap-[-1px] items-start justify-start w-full">
                        <div className="bg-blue_gray-50 border border-gray-200 border-solid flex sm:flex-col flex-row sm:gap-5 h-[37px] md:h-auto items-center justify-start rounded-tl-lg rounded-tr-lg w-full">
                          <div className="flex flex-1 flex-col h-[37px] md:h-auto items-center justify-center px-3 py-1 w-full">
                            <Text
                              className="text-blue_gray-900 text-sm w-auto"
                              size="txtInterRegular14Bluegray900"
                            >
                              S/N
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col h-[37px] md:h-auto items-center justify-start px-3 py-1 w-full">
                            <Text
                              className="text-blue_gray-900 text-sm w-auto"
                              size="txtInterRegular14Bluegray900"
                            >
                              Date
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col h-[37px] md:h-auto items-center justify-start px-3 py-1 w-full">
                            <Text
                              className="text-blue_gray-900 text-sm w-auto"
                              size="txtInterRegular14Bluegray900"
                            >
                              Amount
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col h-[37px] md:h-auto items-center justify-start px-3 py-1 w-full">
                            <Text
                              className="text-blue_gray-900 text-sm w-auto"
                              size="txtInterRegular14Bluegray900"
                            >
                              Payment Method
                            </Text>
                          </div>
                          <div className="flex flex-col h-[37px] md:h-auto items-center justify-start px-3 py-1">
                            <Text
                              className="text-blue_gray-900 text-sm w-auto"
                              size="txtInterRegular14Bluegray900"
                            >
                              Status
                            </Text>
                          </div>
                        </div>
                        <List
                          className="flex flex-col gap-[-1px] items-start w-full"
                          orientation="vertical"
                        >
                          {dashboardPaymentsOneTransactionPropList.map(
                            (props, index) => (
                              <React.Fragment
                                key={`DashboardPaymentsOneTransaction${index}`}
                              >
                                <DashboardPaymentsOneTransaction
                                  className="bg-white-A700 border border-gray-200 border-solid flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start my-0 py-2 w-full"
                                  {...props}
                                />
                              </React.Fragment>
                            ),
                          )}
                        </List>
                      </div>
                      <div className="border-gray-200 border-solid border-t flex md:flex-col flex-row gap-5 items-center justify-start pt-5 px-5 w-full">
                        <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                          <Text
                            className="text-base text-blue_gray-900 w-auto"
                            size="txtInterMedium16"
                          >
                            Showing 1-4 of 10 results
                          </Text>
                          <SelectBox
                            className="border border-gray-200 border-solid sm:flex-1 font-medium rounded-md text-left text-sm w-[6%] sm:w-full"
                            placeholderClassName="text-blue_gray-900"
                            indicator={
                              <Img
                                className="h-5 w-5"
                                src="images/img_arrowdown_blue_gray_500.svg"
                                alt="arrow_down"
                              />
                            }
                            isMulti={false}
                            name="button"
                            options={buttonOptionsList}
                            isSearchable={false}
                            placeholder="4"
                            shape="round"
                            color="gray_100"
                            size="xs"
                            variant="fill"
                          />
                        </div>
                        <div className="flex flex-row gap-2 items-start justify-center w-auto">
                          <Button
                            className="border border-gray-200_99 border-solid cursor-pointer font-semibold min-w-[99px] text-center text-sm"
                            shape="round"
                            color="gray_100_99"
                            size="sm"
                            variant="fill"
                          >
                            Previous
                          </Button>
                          <Button
                            className="cursor-pointer font-semibold min-w-[72px] text-center text-sm"
                            shape="round"
                            color="yellow_900"
                            size="sm"
                            variant="fill"
                          >
                            Next
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Text
              className="mt-[45px] text-blue_gray-500 text-center text-sm"
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
        </div>
      </div>
    </>
  );
};

export default DashboardPaymentsOne1Page;
