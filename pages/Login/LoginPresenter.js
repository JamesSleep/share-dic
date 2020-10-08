import React from "react";
import Link from "next/link";

const LoginPresenter = ({ setState, post }) => (
  <div>
    <Link href="/">홈</Link>
    <input type="text" placeholder="email" onChange={event=>setState("email", event)} />
    <input type="text" placeholder="password" onChange={event=>setState("password", event)}/>
    <input type="submit" value="login" onClick={()=>post()} />
    <Link href="/SignUp">
      <input type="submit" value="signUp" />
    </Link>
  </div>
);

export default LoginPresenter;