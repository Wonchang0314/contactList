/* eslint-disable react/prop-types */
export default function DetailModal({ setModal, name, phone, group }) {
  return (
    <div className="modal">
      <div className="modalContent">
        <span className="close" onClick={setModal}>
          x
        </span>
        <h2>연락처 상세 정보</h2>
        <div className="detailContent">
          <p className="detailTitle">
            이름: <span>{name}</span>
          </p>
          <p className="detailTitle">
            전화번호: <span>{phone}</span>
          </p>
          <p className="detailTitle">
            그룹: <span>{group}</span>
          </p>
        </div>
        <p></p>
      </div>
    </div>
  );
}
