/* eslint-disable react/prop-types */
import { useState } from "react";
export default function GroupModal({ setModal, group, setGroup }) {
  const [newGroup, setNewGroup] = useState("");

  const deleteGroup = (option) => {
    const newOptions = group.filter((e) => e !== option.trim());
    setGroup(newOptions);
    localStorage.setItem("group", JSON.stringify(newOptions));
  };

  const addGroup = () => {
    const newItem = newGroup.trim();
    if (newItem && !group.includes(newItem)) {
      const newOptions = [...group, newItem];
      setGroup(newOptions);
      localStorage.setItem("group", JSON.stringify(newOptions));
      setNewGroup("");
    } else {
      alert("유효하지 않은 그룹 이름이거나 이미 존재하는 그룹입니다");
    }
  };

  return (
    <div className="modal">
      <div className="modalContent">
        <span className="close" onClick={setModal}>
          x
        </span>
        <h2>그룹 관리</h2>
        {group.map((option, i) => (
          <div className="groupManage" key={i}>
            <p>{option}</p>
            <span className="deleteGroup" onClick={() => deleteGroup(option)}>
              x
            </span>
          </div>
        ))}
        <input
          type="text"
          placeholder="새 그룹 이름"
          value={newGroup}
          onChange={(e) => setNewGroup(e.target.value)}
        />
        <button onClick={addGroup}>추가</button>
      </div>
    </div>
  );
}
