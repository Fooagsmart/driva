import React from "react";

import { Button, Img, List, Text } from "../../Components";
import Desktop4DocumentUploadSidebar from "../../Components/Desktop4DocumentUploadSidebar";

const Desktop5SuccessPage = () => {
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
            <div className="bg-white-A700 border border-gray-200 border-solid flex flex-1 flex-col items-start justify-start max-w-[970px] rounded-lg w-full">
              <div className="flex flex-col items-center justify-start rounded-lg w-full">
                <div className="flex flex-col h-[567px] md:h-auto items-center justify-center py-5 rounded-lg w-full">
                  <div className="flex flex-col gap-5 items-center justify-start px-10 sm:px-5 w-full">
                    <Img
                      className="h-[60px] w-[60px]"
                      src="images/img_iconparksolidcheckone.svg"
                      alt="iconparksolidch"
                    />
                    <div className="flex flex-col items-center justify-center w-full">
                      <div className="flex flex-col items-center justify-center w-auto">
                        <Text
                          className="leading-[24.00px] text-base text-blue_gray-900 text-center"
                          size="txtInterSemiBold16"
                        >
                          <>
                            Thank your for applying! We will get back to
                            <br />
                            you within 14 working days
                          </>
                        </Text>
                      </div>
                    </div>
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

export default Desktop5SuccessPage;
