/* eslint-disable react/prop-types */
import "./SearchCon.css";
import List from "./List";
import { useState, useEffect } from "react";

export default function SearchCon({ contactList, setContactList }) {
  const [inputValue, setInputValue] = useState("");
  const [filterdList, setFilteredList] = useState(contactList);

  useEffect(() => {
    setFilteredList(contactList);
  }, [contactList]);

  const search = () => {
    setFilteredList(
      contactList.filter(
        (e) =>
          e.name.includes(inputValue) ||
          e.phone.includes(inputValue) ||
          e.group.includes(inputValue)
      )
    );
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  const displayAll = () => {
    setFilteredList(contactList);
    setInputValue("");
  };

  return (
    <>
      <div className="searchCon">
        <input
          type="text"
          placeholder="검색어를 입력 후 엔터를 누르세요"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyUp={handleEnter}
        />
        <button onClick={displayAll}>전체보기</button>
      </div>
      <List contactList={filterdList} setContactList={setContactList} />
    </>
  );
}
