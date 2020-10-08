import React, { useState } from "react";
import RegistOfficePresenter from "./RegistOfficePresenter";

const RegistOfficeContainer = () => {
  const [registData, setRegistData] = useState({
    companyName: "",
    president: "",
    userName,
    userEmail,
    phoneNum: "",
    certification: "", //휴대폰 인증 번호
    category: "", // 사무실 등록 구분
    businessPaper: {}, // 사업자 등록증
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
    option: [],
    keyword: [],
    description: "",
    pictures: []
  });

  const setState = (property, event) => {
    setRegistData({
      ...registData,
      [property]: event.target.value
    });
  }

  return (
    <RegistOfficePresenter 
      setState={setState}
    />
  )
}

export default RegistOfficeContainer;