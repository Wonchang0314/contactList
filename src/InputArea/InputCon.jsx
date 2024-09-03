/* eslint-disable react/prop-types */
import "./InputCon.css";
import { useState } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";

export default function InputCon({ contactList, setContactList }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const defaultGroup = JSON.parse(localStorage.getItem("group")) || [
    "가족",
    "친구",
    "직장",
    "스터디",
  ];
  const [group, setGroup] = useState(defaultGroup);
  const [selectedGroup, setSelectedGroup] = useState(defaultGroup[0]);

  const saveContact = () => {
    const newContact = {
      name: name,
      phone: phone,
      group: selectedGroup,
    };
    const newContactList = [...contactList, newContact];
    setContactList(newContactList);
    localStorage.setItem("contactList", JSON.stringify(newContactList));
  };
  return (
    <div className="inputCon">
      <InputField field="이름" value={name} setValue={setName} />
      <InputField field="전화번호" value={phone} setValue={setPhone} />
      <SelectField
        group={group}
        setGroup={setGroup}
        selectedGroup={selectedGroup}
        setSelectedGroup={setSelectedGroup}
      />
      <InputField field="간단한 기록" />
      <button className="saveBtn" onClick={() => saveContact()}>
        저장
      </button>
    </div>
  );
}
