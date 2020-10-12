import React from "react";
import Link from "next/link";

const RegistOfficePresenter = ({ state, setState, setHash, post }) => (
  <div>
    <Link href="/">Home</Link>
    <p>
      <label>회사명</label> 
      <input type="text" onChange={event=>setState("companyName", event)} />
    </p>
    <p>
      <label>대표자 이름</label> 
      <input type="text" onChange={event=>setState("president", event)} />
    </p>
    <p>
      <label>회원정보</label> 
      <input type="text" disabled value={state.userName} />
      <input type="text" disabled value={state.userEmail} />
      <input type="text" placeholder="휴대폰번호" onChange={event=>setState("phoneNum", event)} />
      <input type="button" value="인증번호 받기" />
      <input type="text" placeholder="인증번호" onChange={event=>setState("certification", event)} />
    </p>
    <p>
      <label>등록구분</label> 
      <select value={state.category} onChange={event=>setState("category", event)}>
        <option value="">등록 구분 선택</option>
        <option value="month">월세</option>
        <option value="day">1일</option>
        <option value="freepass">프리패스</option>
      </select>
    </p>
    <p>
      <label>사업자등록증</label> 
      <input 
        type="file" 
        accept="image/*"
        multiple 
        onChange={event=>setState("businessPaper", event)} 
      />
    </p>
    <p>
      <label>사무실 주소</label> 
      <input type="text" onChange={event=>setState("zipcode", event)} />
      <input type="text" onChange={event=>setState("address1", event)} />
      <input type="text" onChange={event=>setState("address2", event)} />
    </p>
    <p>
      <label>사무실 별명</label> 
      <input type="text" onChange={event=>setState("officeNickname", event)} />
    </p>
    <p>
      <label>업종 선택</label> 
      <input type="text" onChange={event=>setState("workStyle", event)} />
    </p>
    <p>
      <label>층수</label> 
      <input type="text" onChange={event=>setState("totalFloor", event)} />
      <input type="text" onChange={event=>setState("myFloor", event)} />
    </p>
    <p>
      <label>면적</label> 
      <input type="text" onChange={event=>setState("areaSize", event)} />
    </p>
    <p>
      <label>전체인원</label> 
      <input type="text" onChange={event=>setState("headCount", event)} />
    </p>
    <p>
      <label>임대 방식</label> 
      <select value={state.leaseSystem} onChange={event=>setState("leaseSystem", event)}>
        <option value="">등록 구분 선택</option>
        <option value="001">1일</option>
        <option value="002">월세</option>
        <option value="003">프리패스</option>
      </select>
    </p>
    <p>
      <label>모집인원</label> 
      <input type="text" onChange={event=>setState("recruitCount", event)} />
    </p>
    <p>
      <label>사업자등록</label> 
      <select value={state.businessRegist} onChange={event=>setState("businessRegist", event)}>
        <option value="">등록 가능 여부</option>
        <option value="001">가능</option>
        <option value="002">불가능</option>
      </select>
    </p>
    <p>
      <label>보증금</label> 
      <input type="text" onChange={event=>setState("deposit", event)} />
    </p>
    <p>
      <label>월세</label> 
      <input type="text" onChange={event=>setState("monthly", event)} />
    </p>
    <p>
      <label>관리비</label> 
      <input type="text" onChange={event=>setState("managementFee", event)} />
    </p>
    <p>
      <label>옵션</label> 
      <input type="text" onChange={event=>setState("category", event)} />
    </p>
    <p>
      <label>키워드</label> 
      <input type="text" onChange={event=>setState("category", event)} />
    </p>
    <p>
      <label>임대인 한마디</label> 
      <input type="text" onChange={event=>setState("description", event)} />
    </p>
    <p>
      <label>사진 등록</label> 
      <input 
        type="file" 
        accept="image/*" 
        multiple
        onChange={event=>setState("pictures", event)} 
      />
    </p>
    <p>
      <button onClick={()=>post()}>사무실 등록 신청</button>
    </p>
  </div>
);

export default RegistOfficePresenter;