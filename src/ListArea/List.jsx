/* eslint-disable react/prop-types */
import "./List.css";
import { useState } from "react";
import DetailModal from "../DetailModal";
export default function List({ contactList, setContactList }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const showModal = (item) => {
    if (isModalOpen === true) {
      setSelectedItem(null);
      setIsModalOpen(false);
    } else {
      setSelectedItem(item);
      setIsModalOpen(true);
    }
  };

  const deleteList = (item) => {
    const updatedList = contactList.filter((e) => e.name !== item.name);
    setContactList(updatedList);
    localStorage.setItem("contactList", JSON.stringify(updatedList));
  };

  return (
    <>
      <ul className="list">
        {contactList.map((item, i) => (
          <li key={i} className="list-item">
            <div className="item-inner">
              <p className="content">
                <span>{item.name}</span>
                <span>{item.phone}</span>
                <span>{item.group}</span>
              </p>

              <div>
                <button className="detailBtn" onClick={() => showModal(item)}>
                  세부사항
                </button>
                <button className="deleteBtn" onClick={() => deleteList(item)}>
                  삭제
                </button>
              </div>
            </div>
            <div className="border"></div>
          </li>
        ))}
        {isModalOpen && (
          <DetailModal
            setModal={showModal}
            name={selectedItem.name}
            phone={selectedItem.phone}
            group={selectedItem.group}
          />
        )}
      </ul>
    </>
  );
}
