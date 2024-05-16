import "./App.css";

import Header from "./components/Header";
import SideNav from "./components/SideNav";

function App() {
  return (
    <>
      <Header />
      <div className="w-64 fixed">
        <SideNav selectedIndex={(value) => console.log(value)} />
      </div>
      <div className="ml-64 grid grid-cols-1 md:grid-cols-6 ">
        <div className="md:col-span-2">control</div>
        <div className="md:col-span-3">ICon</div>
        <div className="">add</div>
      </div>
    </>
  );
}

export default App;
