/* eslint-disable react/prop-types */
import { useState } from "react";

export default function InputField({ field, value, setValue }) {
  const [warning, setWarning] = useState("");

  const judge = (field, value) => {
    if (field === "이름") {
      if (!/^[가-힣]{2,}$/.test(value) && value !== "") {
        setWarning("이름은 한글자로 두 글자 이상 입력해주세요.");
      } else {
        setWarning("");
      }
    } else if (field === "전화번호") {
      if (!/^010-\d{4}-\d{4}$/.test(value) && value !== "") {
        setWarning("전화번호는 010-0000-0000 형식으로 입력해주세요.");
      } else {
        setWarning("");
      }
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setValue(value);
    judge(field, value);
  };

  return (
    <>
      <div className="inputField">
        <label htmlFor="">{field}</label>
        <input
          type="text"
          placeholder={field}
          value={value}
          onChange={handleChange}
        />
      </div>
      <p className={`warning ${warning ? "on" : ""}`}>{warning}</p>
    </>
  );
}
