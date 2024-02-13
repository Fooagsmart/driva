import React from "react";

import { Img, Text } from "components";

const DashboardHomeOneSidebar = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 border-b border-gray-200 border-solid flex flex-col items-start justify-start sm:px-5 px-7 py-3.5 w-full">
          <div className="flex flex-row gap-1 items-center justify-start w-auto">
            <Img className="h-5 w-5" src="images/img_car.svg" alt="car" />
            <Text
              className="text-blue_gray-900 text-xl tracking-[-0.60px] w-auto"
              size="txtZonaProBold20"
            >
              {props?.drivatext}
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-start justify-start w-full">
          <div className="bg-yellow-900_19 border-l-[3px] border-solid border-yellow-900 flex flex-row gap-2 items-center justify-start px-4 py-2 w-full">
            <Img className="h-5 w-5" src="images/img_home.svg" alt="home" />
            <Text
              className="text-sm text-yellow-900 w-auto"
              size="txtInterMedium14Yellow900"
            >
              {props?.hometext}
            </Text>
          </div>
          <div className="bg-white-A700 flex flex-row gap-2 items-center justify-start px-4 py-2 w-full">
            <Img
              className="h-5 w-5"
              src="images/img_thumbsup.svg"
              alt="thumbsup"
            />
            <Text
              className="text-blue_gray-900 text-sm w-auto"
              size="txtInterRegular14Bluegray900"
            >
              {props?.paymentstext}
            </Text>
          </div>
          <div className="bg-white-A700 flex flex-row gap-2 items-center justify-start px-4 py-2 w-full">
            <Img
              className="h-5 w-5"
              src="images/img_profile.svg"
              alt="profile"
            />
            <Text
              className="text-blue_gray-900 text-sm w-auto"
              size="txtInterRegular14Bluegray900"
            >
              {props?.profiletext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

DashboardHomeOneSidebar.defaultProps = {
  drivatext: "Driva",
  hometext: "Home",
  paymentstext: "Payments",
  profiletext: "Profile",
};

export default DashboardHomeOneSidebar;