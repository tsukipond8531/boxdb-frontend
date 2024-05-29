import "./App.css";
import { useState } from "react";
import { Box } from "../types";
import Header from "./components/Header";
import Search from "./components/Search";
import BoxDetails from "./components/BoxDetails";
import BoxList from "./components/BoxList";
import { boxes } from "./dummydata";
import Sort from "./components/Buttons/Sort";
import Refresh from "./components/Buttons/Refresh";
import NewBox from "./components/Buttons/NewBox";

function App() {
  const [selectedBox, setSelectedBox] = useState<Box>();
  const [search, setSearch] = useState("");

  // Filter boxes based on search input
  // updating the list as the user types. not case-sensitive
  const filteredBoxes = boxes.filter((box) => {
    return (
      search === "" || box.comment?.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Header />
      <div className="m-3 mt-5 grid sm:grid-cols-1 md:grid-cols-5">
        <div className="m-3 md:col-span-3">
          <div className="mb-3 flex flex-wrap items-center justify-between">
            <h2 className="mb-5 text-xl">Entries</h2>
            <div className="flex">
              <Search setSearch={setSearch} />
              <Sort />
              <NewBox />
              <Refresh />
            </div>
          </div>
          <BoxList
            setSelectedBox={setSelectedBox}
            filteredBoxes={filteredBoxes}
          />
        </div>
        <div className="m-3 md:order-2 md:col-span-2">
          <h2 className="mb-5 text-xl">Detailed info</h2>
          {!selectedBox ? (
            <p className="mt-10 text-center italic text-gray-600">
              Click on a box to edit its info
            </p>
          ) : (
            <BoxDetails box={selectedBox} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
