import React, { useEffect, useState } from "react";
import SearchOfficePresenter from "./SearchOfficePresenter";
import { postData } from "../../api";

const SearchOfficeContainer = () => {
  const [officeList, setOfficeList] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const form = new FormData();
    form.append("method", "proc_office_list");
    form.append("keys[0]", "of_sectors");
    form.append("values[0]", "부동산");
    form.append("likes[0]", "Y");
    form.append("keys[1]", "of_address");
    form.append("values[1]", "서울");
    form.append("likes[1]", "Y");
    form.append("of_address_lat", "129.039685");
    form.append("of_address_lng", "35.160967");
    form.append("offset", "10");
    form.append("page", "1");

    const { 
      data: { list }
    } = await postData(form);
    console.log(list);
    setOfficeList(list);
  }

  return (
    <SearchOfficePresenter
      officeList={officeList}
    />
  )
}

export default SearchOfficeContainer