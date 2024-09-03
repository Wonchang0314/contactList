import "./App.css";
import { useState } from "react";
import InputCon from "./InputArea/InputCon";
import SearchCon from "./ListArea/SearchCon";

function App() {
  const defaultContactList = JSON.parse(
    localStorage.getItem("contactList")
  ) || [
    { name: "박은규", phone: "010-7777-8888", group: "가족" },
    { name: "김영희", phone: "010-5555-5555", group: "직장" },
    { name: "박민수", phone: "010-2222-2222", group: "직장" },
    { name: "손심이", phone: "010-3333-3333", group: "친구" },
    { name: "홍길동", phone: "010-0000-0000", group: "친구" },
  ];

  const [contactList, setContactList] = useState(defaultContactList);

  return (
    <>
      <div className="wrap">
        <h1>연락처 리스트</h1>
        <main>
          <div className="inputArea">
            <InputCon
              contactList={contactList}
              setContactList={setContactList}
            />
          </div>
          <div>
            <div className="listArea">
              <SearchCon
                contactList={contactList}
                setContactList={setContactList}
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
