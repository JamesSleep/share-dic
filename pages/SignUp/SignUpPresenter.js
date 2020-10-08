import React from "react";
import Link from "next/link";

const SignUpPresenter = ({ post, setState }) => (
  <div>
    <h2>회원가입</h2>
    <Link href="/">홈</Link><Link href="/Login">로그인</Link>
    <input type="text" placeholder="email" onChange={event=>setState("email", event)} />
    <input type="text" placeholder="password" onChange={event=>setState("password1", event)} />
    <input type="text" placeholder="password check" onChange={event=>setState("password2", event)} />
    <input type="text" placeholder="name" onChange={event=>setState("name", event)} />
    <input type="text" placeholder="phone" onChange={event=>setState("phone", event)} />
    <input type="submit" value="회원가입" onClick={()=>post()}/>
  </div>
);

export default SignUpPresenter;