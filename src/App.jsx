import "./App.css";
import InforUser from "./components/InforUser";
import Title from "./components/Title";

const App = () => {
  return (
    <div className="App">

      <div className="App">
        <Title title={"ok em"} color={"red"}/>
        <InforUser />
      </div>

      <div className="App">
        <Title title={"okok"} color={"green"}/>
        <InforUser />
      </div>

      <div className="App">
        <Title title={"no"} color={"black"}/>
        <InforUser />
      </div>

    </div>
  );
};

export default App;
