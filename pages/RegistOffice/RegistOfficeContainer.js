import React, { useState, useEffect } from "react";
import RegistOfficePresenter from "./RegistOfficePresenter";

const RegistOfficeContainer = () => {
  const [registData, setRegistData] = useState({
    token: "" ,
    companyName: "",
    president: "",
    userName: "",
    userEmail: "",
    phoneNum: "",
    certification: "", //휴대폰 인증 번호
    category: "", // 사무실 등록 구분
    businessPaper: [], // 사업자 등록증
    zipcode: "",
    address1: "", 
    address2: "",
    officeNickname: "", 
    workStyle: "", // 업종
    totalFloor: "", // 전체 층 수
    myFloor: "", // 해당 층 수
    areaSize: "", // 면적
    headCount: "", // 인원 수
    leaseSystem: "", // 임대 방식
    recruitCount : "", // 모집인원
    businessRegist: null, // 사업자 등록 가능 여부
    deposit: "", // 보증금
    monthly: "", // 월세
    managementFee: "", // 관리비
    option: "",
    keyword: "",
    description: "",
    pictures: []
  });

  const setState = (property, event) => {
    if (property === "businessPaper" || property === "pictures") {
      setRegistData({
        ...registData,
        [property]: event.target.files
      });
    } else {
      setRegistData({
        ...registData,
        [property]: event.target.value
      });
    }
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const userInfo = JSON.parse(localStorage.getItem("userInformation"));
    setRegistData({
      ...registData,
      token,
      userName: userInfo.name,
      userEmail: userInfo.email
    });
  }

  const setHash = (property, event) => {
    setRegistData({
      ...registData,
      [property]: registData[property] + event.target.value + "#"
    });
  }

  const post = async () => {
    console.log(registData);
    const form = new FormData();
    form.append("method", "proc_office_add");
    form.append("mb_token", registData.token);
    form.append("of_cate", registData.category);
    form.append("of_work_auth", registData.businessPaper);
    form.append("of_zip", registData.zipcode);
    form.append("of_address", registData.address1);
    form.append("of_address_detail", registData.address2);
    form.append("of_name", registData.officeNickname);
    form.append("of_sectors", registData.workStyle);
    form.append("of_layer_all", registData.totalFloor);
    form.append("of_layer_this", registData.myFloor);
    form.append("of_area", registData.areaSize);
    form.append("of_member_all", registData.headCount);
    form.append("of_system", registData.leaseSystem);
    form.append("of_member_want", registData.recruitCount);
    form.append("of_work_ok", registData.businessRegist);
    form.append("of_deposit", registData.deposit);
    form.append("of_monthly", registData.monthly);
    form.append("of_man_price", registData.managementFee);
    form.append("of_option", registData.option);
    form.append("of_keyword", registData.keyword);
    form.append("of_img", registData.pictures);
  }

  return (
    <RegistOfficePresenter 
      state={registData}
      setState={setState}
      setHash={setHash}
      post={post}
    />
  )
}

export default RegistOfficeContainer;