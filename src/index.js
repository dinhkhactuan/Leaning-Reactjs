import ReactDOM from "react-dom/client";
// import "../src/UI-UX/Styles/style.css";
// import HeaderPage from "./UI-UX/Header/Header";
// import Content from "./UI-UX/Container/Content";
// import Footer from "./UI-UX/Footer/Footer";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <div class="justify">
//     <HeaderPage />
//     <Content />
//     <Footer />
//   </div>,
// );

import "../src/Character/Style/style.css";
import Main from "./Character/Main/Main";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
