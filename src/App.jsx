import { useEffect, useState } from "react";
import "./App.css";
import InforUser from "./components/InforUser";
import Title from "./components/Title";

const App = () => {
  // hook của reactjs
  // useState, useEffect, useMemo, useContext, useCallback, useRef
  // re-render -> chạy lại components
  // useState - nó sẽ là trang thái cua components re-render theo state
  const [text, setText] = useState("hello")
  const [a, setA] = useState(1)
  const [dataUser, setDataUser] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://69606493e7aa517cb795f700.mockapi.io/users",
      );
      res.json().then((data) => {
        setDataUser(data)
      });
    };

    fetchData();
    // call api
  }, []);

  console.log(dataUser);
  

  useEffect(()=>{
    setA(20)
    
  }, [])

  // có cách sử dụng
  // th1 ko có dependencies
  // - luôn chạy khi component được re-render lần đầu 
  // - luôn chạy khi component đc re-render
  // th2 có dependencies là []
  // - luôn chạy khi component được re-render lần đầu
  // - re-render lần tiếp theo ko gọi lại useEffect
  // th3 có dependencies là [biến]
  // - luôn chạy khi component được re-render lần đầu
  // - gọi lại useEffect khi value dependencies thay đổi

  const handleChangesText = ()=>{
    setText("welcones")
  }

  return (
    <div className="App">
      <p>{text}</p>
      <p>{a}</p>
      {dataUser.map((item)=> {

        return <InforUser name={item.username}/>
      })}
      <button
        onClick={handleChangesText}
      >
        render
      </button>
    </div>
  );
};

export default App;
