import React from "react";
import Link from "next/link";

export default ({ setState, post }) => (
  <div>
    <Link>Home</Link>
    <p>
      <label>회사명</label> 
      <input type="text" onChange={event=>setState("companyName", event)} />
    </p>
    <p>
      <label>대표자 이름</label> 
      <input type="text" onChange={event=>setState("companyName", event)} />
    </p>
    <p>
      <label>회사명</label> 
      <input type="text" onChange={event=>setState("companyName", event)} />
    </p>
  </div>
)