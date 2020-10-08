import React, { useState } from "react";
import Router, { useRouter } from "next/router";
import LoginPresenter from "./LoginPresenter";
import { postData } from "../../api";

const LoginContainer = () => {
  const router = useRouter();
  const [LoginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const setState = (property, event) => {
    setLoginData({
      ...LoginData,
      [property]: event.target.value
    });
  }

  const post = async () => {
    // 로그인 JSON 폼 데이터 작성
    const form = new FormData();
    form.append("method", "proc_member_login");
    form.append("mb_id", LoginData.email);
    form.append("mb_password", LoginData.password);
    // JSON 데이터 저장
    const {
      data: { message, result, mb_token: token }
    } = await postData(form);
    // 상태 조회
    if (result === "0") {
      console.log(message);
      return;
    }
    // 토큰값 저장
    localStorage.setItem("token", JSON.stringify(token));
    // 회원정보 JSON 폼 데이터 작성
    const form2 = new FormData();
    form2.append("method", "proc_member_get_one");
    form2.append("mb_token", token);
    // JSON 데이터 저장
    const {
      data : { 
        member: { mb_email ,mb_hp, mb_name }
      }
    } = await postData(form2);
    // 회원 정보저장
    localStorage.setItem("userInformation", JSON.stringify({
      "email": mb_email,
      "phone": mb_hp,
      "name": mb_name
    }));
    router.push("/"); 
  }

  return (
    <LoginPresenter 
      setState={setState}
      post={post}
    />
  )
}

export default LoginContainer;