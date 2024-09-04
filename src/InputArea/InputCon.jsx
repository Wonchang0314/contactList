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

  const checkDuplicate = (newContact) => {
    return contactList.some(
      (contact) =>
        contact.name === newContact.name || contact.phone === newContact.phone
    );
  };

  const saveContact = () => {
    const newContact = {
      name: name,
      phone: phone,
      group: selectedGroup,
    };
    if (checkDuplicate(newContact) === false) {
      const newContactList = [...contactList, newContact];
      setContactList(newContactList);
      localStorage.setItem("contactList", JSON.stringify(newContactList));
    } else {
      alert("이미 등록되어 있는 연락처입니다!");
    }
    setName("");
    setPhone("");
  };
  return (
    <form className="inputCon">
      <InputField id="name" field="이름" value={name} setValue={setName} />
      <InputField
        id="phone"
        field="전화번호"
        value={phone}
        setValue={setPhone}
      />
      <SelectField
        group={group}
        setGroup={setGroup}
        selectedGroup={selectedGroup}
        setSelectedGroup={setSelectedGroup}
      />
      <InputField id="record" field="간단한 기록" />
      <button className="saveBtn" onClick={() => saveContact()}>
        저장
      </button>
    </form>
  );
}
