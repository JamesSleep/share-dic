import React from "react";

export default ({ officeList=[] }) => (
  <div>
    <div>
      <div>
        <input 
          type="text" 
          placeholder="원하시는 지역이나 지하철역을 입력해주세요."
        />
      </div>
      <div>
        <span>(지역/지하철역명) 주변 매물 총 {officeList.length}개</span>
      </div>
      <div>
        {
          officeList.map(office => (
            <div key={office.of_idx}>
              <span>{office.of_name}</span>
              <span>{`월세 ${office.of_deposit}/${office.of_monthly}`}</span>
              <span>{`${office.of_area}평`}</span>
            </div>
          ))
        }
      </div>
    </div>
    <div>kakao map api</div>
  </div>
)