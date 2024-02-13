
    import React from 'react';

    

    import { createColumnHelper } from "@tanstack/react-table"
  
  import { Button, Img, Input, Line, ReactTable, SelectBox, Text } from "components"
  import DashboardHomeOneSidebar from "components/DashboardHomeOneSidebar"
  
  import { CloseSVG } from "../../assets/images"
  
  

    

    

    const buttonOptionsList = [{"label":"Option1","value":"option1"},{"label":"Option2","value":"option2"},{"label":"Option3","value":"option3"}]

    const DashboardHomeThreePage = () => {
      const tableData = React.useRef([{sn:  "1"   ,fullname:  "John Doe"   ,emailaddress:  "johndoe01@gmail.com"   ,phonenumber:  "08168422954"   ,houseaddress:  "24, Estate Avenue, 
Norwegian, Alaska."   ,status:  "Select Status"   ,},{sn:  "2"   ,fullname:  "John Doe"   ,emailaddress:  "johndoe01@gmail.com"   ,phonenumber:  "08168422954"   ,houseaddress:  "24, Estate Avenue, 
Norwegian, Alaska."   ,status:  "Select Status"   ,},{sn:  "3"   ,fullname:  "John Doe"   ,emailaddress:  "johndoe01@gmail.com"   ,phonenumber:  "08168422954"   ,houseaddress:  "24, Estate Avenue, 
Norwegian, Alaska."   ,status:  "Select Status"   ,},{sn:  "4"   ,fullname:  "John Doe"   ,emailaddress:  "johndoe01@gmail.com"   ,phonenumber:  "08168422954"   ,houseaddress:  "24, Estate Avenue, 
Norwegian, Alaska."   ,status:  "Select Status"   ,},{sn:  "5"   ,fullname:  "John Doe"   ,emailaddress:  "johndoe01@gmail.com"   ,phonenumber:  "08168422954"   ,houseaddress:  "24, Estate Avenue, 
Norwegian, Alaska."   ,status:  "Select Status"   ,},{sn:  "6"   ,fullname:  "John Doe"   ,emailaddress:  "johndoe01@gmail.com"   ,phonenumber:  "08168422954"   ,houseaddress:  "24, Estate Avenue, 
Norwegian, Alaska."   ,status:  "Select Status"   ,},{sn:  "7"   ,fullname:  "John Doe"   ,emailaddress:  "johndoe01@gmail.com"   ,phonenumber:  "08168422954"   ,houseaddress:  "24, Estate Avenue, 
Norwegian, Alaska."   ,status:  "Select Status"   ,},{sn:  "8"   ,fullname:  "John Doe"   ,emailaddress:  "johndoe01@gmail.com"   ,phonenumber:  "08168422954"   ,houseaddress:  "24, Estate Avenue, 
Norwegian, Alaska."   ,status:  "Select Status"   ,},{sn:  "9"   ,fullname:  "John Doe"   ,emailaddress:  "johndoe01@gmail.com"   ,phonenumber:  "08168422954"   ,houseaddress:  "24, Estate Avenue, 
Norwegian, Alaska."   ,status:  "Select Status"   ,},{sn:  "10"   ,fullname:  "John Doe"   ,emailaddress:  "johndoe01@gmail.com"   ,phonenumber:  "08168422954"   ,houseaddress:  "24, Estate Avenue, 
Norwegian, Alaska."   ,status:  "Select Status"   ,},{sn:  "11"   ,fullname:  "John Doe"   ,emailaddress:  "johndoe01@gmail.com"   ,phonenumber:  "08168422954"   ,houseaddress:  "24, Estate Avenue, 
Norwegian, Alaska."   ,status:  "Select Status"   ,},{sn:  "12"   ,fullname:  "John Doe"   ,emailaddress:  "johndoe01@gmail.com"   ,phonenumber:  "08168422954"   ,houseaddress:  "24, Estate Avenue, 
Norwegian, Alaska."   ,status:  "Select Status"   ,},{sn:  "13"   ,fullname:  "John Doe"   ,emailaddress:  "johndoe01@gmail.com"   ,phonenumber:  "08168422954"   ,houseaddress:  "24, Estate Avenue, 
Norwegian, Alaska."   ,status:  "Select Status"   ,},{sn:  "14"   ,fullname:  "John Doe"   ,emailaddress:  "johndoe01@gmail.com"   ,phonenumber:  "08168422954"   ,houseaddress:  "24, Estate Avenue, 
Norwegian, Alaska."   ,status:  "Select Status"   ,},{sn:  "15"   ,fullname:  "John Doe"   ,emailaddress:  "johndoe01@gmail.com"   ,phonenumber:  "08168422954"   ,houseaddress:  "24, Estate Avenue, 
Norwegian, Alaska."   ,status:  "Select Status"   ,},{sn:  "16"   ,fullname:  "John Doe"   ,emailaddress:  "johndoe01@gmail.com"   ,phonenumber:  "08168422954"   ,houseaddress:  "24, Estate Avenue, 
Norwegian, Alaska."   ,status:  "Select Status"   ,},{sn:  "17"   ,fullname:  "John Doe"   ,emailaddress:  "johndoe01@gmail.com"   ,phonenumber:  "08168422954"   ,houseaddress:  "24, Estate Avenue, 
Norwegian, Alaska."   ,status:  "Select Status"   ,},{sn:  "18"   ,fullname:  "John Doe"   ,emailaddress:  "johndoe01@gmail.com"   ,phonenumber:  "08168422954"   ,houseaddress:  "24, Estate Avenue, 
Norwegian, Alaska."   ,status:  "Select Status"   ,},{sn:  "19"   ,fullname:  "John Doe"   ,emailaddress:  "johndoe01@gmail.com"   ,phonenumber:  "08168422954"   ,houseaddress:  "24, Estate Avenue, 
Norwegian, Alaska."   ,status:  "Select Status"   ,},{sn:  "20"   ,fullname:  "John Doe"   ,emailaddress:  "johndoe01@gmail.com"   ,phonenumber:  "08168422954"   ,houseaddress:  "24, Estate Avenue, 
Norwegian, Alaska."   ,status:  "Select Status"   ,},]);
  const tableColumns = React.useMemo(() => {
          const tableColumnHelper = createColumnHelper();
          return [
    tableColumnHelper.accessor("row", {
      cell: (info) => <div
className="flex flex-row items-center justify-end p-4"


><div
  className="bg-white-A700 border-2 border-gray-200 border-solid h-5 my-[5px] rounded w-5"
  
  
></div></div>,
      header: (info) => <div
className="flex flex-row items-center justify-end min-w-[72px] p-3.5"


><div
  className="bg-white-A700 border-2 border-gray-200 border-solid h-5 rounded w-5"
  
  
></div></div>
    })
  ,
    tableColumnHelper.accessor("sn", {
      cell: (info) => <Text
  className="pl-2 py-[22px] text-blue_gray-900 text-sm"
  size="txtInterMedium14Bluegray900"
  
  
>{info?.getValue()}</Text>,
      header: (info) => <Text
  className="min-w-[40px] py-[15px] text-black-900 text-sm"
  size="txtInterMedium14Black900"
  
  
>S/N</Text>
    })
  ,
    tableColumnHelper.accessor("fullname", {
      cell: (info) => <Text
  className="py-[22px] text-blue_gray-900 text-sm"
  size="txtInterMedium14Bluegray900"
  
  
>{info?.getValue()}</Text>,
      header: (info) => <Text
  className="min-w-[115px] py-[15px] text-black-900 text-sm"
  size="txtInterMedium14Black900"
  
  
>Full Name</Text>
    })
  ,
    tableColumnHelper.accessor("emailaddress", {
      cell: (info) => <Text
  className="pb-5 pt-6 text-blue_gray-900 text-sm"
  size="txtInterMedium14Bluegray900"
  
  
>{info?.getValue()}</Text>,
      header: (info) => <Text
  className="min-w-[196px] py-[15px] text-black-900 text-sm"
  size="txtInterMedium14Black900"
  
  
>Email Address</Text>
    })
  ,
    tableColumnHelper.accessor("phonenumber", {
      cell: (info) => <Text
  className="py-[22px] text-blue_gray-900 text-sm"
  size="txtInterMedium14Bluegray900"
  
  
>{info?.getValue()}</Text>,
      header: (info) => <Text
  className="min-w-[136px] py-[15px] text-black-900 text-sm"
  size="txtInterMedium14Black900"
  
  
>Phone Number</Text>
    })
  ,
    tableColumnHelper.accessor("houseaddress", {
      cell: (info) => <Text
  className="leading-[21.00px] py-2.5 text-blue_gray-900 text-sm"
  size="txtInterMedium14Bluegray900"
  
  
>{info?.getValue()}</Text>,
      header: (info) => <Text
  className="min-w-[166px] py-[15px] text-black-900 text-sm"
  size="txtInterMedium14Black900"
  
  
>House Address</Text>
    })
  ,
    tableColumnHelper.accessor("status", {
      cell: (info) => <div
className="flex flex-row items-center justify-center pr-3 py-3"


><Button
className="border border-gray-200 border-solid cursor-pointer flex items-center justify-center min-w-[131px] mr-[23px] rounded"
  
  rightIcon={<Img className="h-5 ml-1" src="images/img_arrow_right_2.svg" alt="Arrow - Right 2" />}shape="round"
color="white_A700"
size="sm"
variant="fill"
><div className="font-semibold text-left text-sm">{info?.getValue()}</div></Button></div>,
      header: (info) => <Text
  className="min-w-[167px] py-[15px] text-black-900 text-center text-sm"
  size="txtInterMedium14Black900"
  
  
>Status</Text>
    })
  ];
        }, []);
  

      const [inputframevalue,setInputframevalue] = React.useState("")
  

      

      return (<><div
  className="bg-gray-50 flex flex-col font-zonapro items-center justify-start mx-auto pb-[180px] w-full"
  

  
  ><div
  className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full"
  
  
  ><DashboardHomeOneSidebar className="bg-white-A700 border-gray-200 border-r border-solid flex flex-col gap-[18px] h-[963px] md:h-auto items-start justify-start mb-[728px] md:px-5 w-[214px]"   /><div
  className="flex md:flex-1 flex-col font-inter items-start justify-start md:px-5 w-[88%] md:w-full"
  

  
  ><div
  className="bg-white-A700 border-b border-gray-200 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start p-[7px] w-full"
  
  
  ><Img className="h-6 md:ml-[0] ml-[5px] w-6" src="images/img_materialsymbolsmenu.svg" alt="materialsymbols" /><Img className="h-9 md:ml-[0] ml-[1350px] rounded w-9" src="images/img_notification.svg" alt="notification" /><Img className="h-9 md:h-auto ml-4 md:ml-[0] object-cover rounded w-9" src="images/img_rectangle1.png" alt="rectangleOne" /></div><Text
    className="bg-white-A700 border-b border-gray-200 border-solid h-[50px] justify-center max-w-[1514px] md:max-w-full sm:px-5 px-[35px] py-3 text-blue_gray-900 text-xl w-full"
    size="txtInterSemiBold20"
    
    
  >Home</Text><div
  className="flex flex-col items-center justify-start ml-10 md:ml-[0] mt-5 w-auto"
  

  
  ><Text
    className="text-blue_gray-900 text-xl w-auto"
    size="txtInterSemiBold20"
    
    
  >Applications (100)</Text></div><div
  className="bg-white-A700 border border-gray-200 border-solid flex flex-col gap-[18px] items-start justify-start ml-10 md:ml-[0] mt-5 py-5 rounded-lg w-[59%] md:w-full"
  

  
  ><div
  className="flex flex-col gap-1 items-start justify-start px-5 w-auto md:w-full"
  

  
  ><div
  className="flex flex-row gap-4 items-center justify-start w-auto"
  
  
  ><Text
    className="border-b-4 border-blue_gray-900 border-solid pb-[18px] pt-[3px] text-blue_gray-900 text-sm w-auto"
    size="txtInterSemiBold14Bluegray900"
    
    
  >All Applications</Text><div
  className="flex flex-row gap-1 items-center justify-start pb-[18px] w-auto"
  
  
  ><div
    className="bg-green-700 h-2 rounded-[50%] w-2"
    
    
  ></div><Text
    className="text-blue_gray-500 text-sm w-auto"
    size="txtInterMedium14Bluegray500"
    
    
  >Approved</Text></div><div
  className="flex flex-row gap-1 items-center justify-start pb-[18px] w-auto"
  
  
  ><div
    className="bg-red-400 h-2 rounded-[50%] w-2"
    
    
  ></div><Text
    className="text-blue_gray-500 text-sm w-auto"
    size="txtInterMedium14Bluegray500"
    
    
  >Cancelled</Text></div></div><Line
    className="bg-gray-200 h-0.5 w-full"
    
    
  /></div><div
  className="flex flex-col items-start justify-start px-5 w-auto sm:w-full"
  

  
  ><Input
    name="inputframe" placeholder="Search applications" value={inputframevalue} onChange={(e) => setInputframevalue(e)} className="!placeholder:text-blue_gray-900 !text-blue_gray-900 p-0 text-left text-sm w-full" wrapClassName="border border-gray-200 border-solid flex w-full"
    
    
    prefix={<Img className="mt-auto mb-px cursor-pointer h-5 mr-2" src="images/img_search.svg" alt="search" />}suffix={<CloseSVG fillColor="#32323e"
    className="cursor-pointer h-5 my-auto"
    onClick={()=>setInputframevalue("")} style={{ visibility:inputframevalue?.length<=0?"hidden":"visible" }} height={20} width={20} viewBox="0 0 20 20"
    />}shape="round"
color="white_A700"
size="sm"
variant="fill"
  ></Input></div><div className="overflow-auto w-full" >
<ReactTable  columns={tableColumns} data={tableData.current} rowClass={"bg-white-A700 border border-gray-200"} headerClass="bg-gray-100"
   />
</div><div
  className="border-gray-200 border-solid border-t flex md:flex-col flex-row gap-5 items-center justify-start max-w-[893px] pt-5 px-5 w-full"
  
  
  ><div
  className="flex flex-1 flex-row gap-3 items-center justify-start w-full"
  
  
  ><Text
    className="text-base text-blue_gray-900 w-auto"
    size="txtInterMedium16"
    
    
  >Showing 1-20 of 100 results</Text><SelectBox
className="border border-gray-200 border-solid sm:flex-1 font-medium rounded-md text-left text-sm w-[10%] sm:w-full" placeholderClassName="text-blue_gray-900" indicator={<Img className="h-5 w-5" src="images/img_arrowdown.svg" alt="arrow_down" />} isMulti={false} name="button" options={buttonOptionsList} isSearchable={false} placeholder="20"
shape="round"
color="gray_100"
size="xs"
variant="fill"
/></div><div
  className="flex flex-row gap-2 items-start justify-center w-auto"
  
  
  ><Button
  className="border border-gray-200_99 border-solid cursor-pointer font-semibold min-w-[99px] text-center text-sm"
    
    shape="round"
color="gray_100_99"
size="sm"
variant="fill"
  >Previous</Button><Button
  className="cursor-pointer font-semibold min-w-[72px] text-center text-sm"
    
    shape="round"
color="yellow_900"
size="sm"
variant="fill"
  >Next</Button></div></div></div></div></div></div></>);
    };

    

    export default DashboardHomeThreePage;
  