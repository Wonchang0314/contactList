/* eslint-disable react/prop-types */
import { useState } from "react";
import GroupModal from "../GroupModal";

export default function SelectField({
  group,
  setGroup,
  selectedGroup,
  setSelectedGroup,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addOption = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="selectField">
      <label htmlFor="group" className="selectLabel">
        그룹
      </label>
      <select
        name="group"
        id="group"
        value={selectedGroup}
        onChange={(e) => setSelectedGroup(e.target.value)}
      >
        {group.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <button onClick={addOption}>조직추가</button>

      {isModalOpen && (
        <GroupModal setModal={addOption} group={group} setGroup={setGroup} />
      )}
    </div>
  );
}
