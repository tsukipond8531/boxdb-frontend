import "./App.css";
import { useState } from "react";
import { Box } from "../types";
import Header from "./components/Header";
import Search from "./components/Search";
import BoxDetails from "./components/BoxDetails";
import BoxList from "./components/BoxList";

const boxes: Box[] = [
  {
    id: "1122142121444212415",
    height: 104,
    depth: 204,
    length: 304,
    comment: "Box 1",
    addedAt: "2024-05-28T09:49:59Z",
    modifiedAt: "2024-05-28T10:49:59Z",
  },
  {
    id: "2",
    height: 15,
    depth: 25,
    length: 35,
    comment: "Box 2",
    addedAt: "2024-05-28T09:49:59Z",
  },
  {
    id: "3",
    height: 20,
    depth: 30,
    length: 40,
    comment: "Box 3",
    addedAt: "2024-05-28T09:49:59Z",
  },
  {
    id: "4",
    height: 25,
    depth: 35,
    length: 45,
    comment: "Box 4",
    addedAt: "2024-05-28T09:49:59Z",
  },
  {
    id: "5",
    height: 30,
    depth: 40,
    length: 50,
    comment: "Box 5",
    addedAt: "2024-05-28T09:49:59Z",
  },
  {
    id: "6",
    height: 35,
    depth: 45,
    length: 55,
    comment: "Box 6",
    addedAt: "2024-05-28T09:49:59Z",
  },
  {
    id: "7",
    height: 40,
    depth: 50,
    length: 60,
    comment: "Box 7",
    addedAt: "2024-05-28T09:49:59Z",
  },
  {
    id: "8",
    height: 45,
    depth: 55,
    length: 65,
    comment: "Box 8",
    addedAt: "2024-05-21T14:45:55Z",
  },
  {
    id: "9",
    height: 50,
    depth: 60,
    length: 70,
    comment: "Box 9",
    addedAt: "2024-03-25T15:32:42Z",
  },
  {
    id: "10",
    height: 55,
    depth: 65,
    length: 75,
    comment: "Box 10 pppppppppppppppppppppppppppppppppppppppppppppppp",
    addedAt: "2024-05-30T09:42:52Z",
  },
];

function App() {
  const [selectedBox, setSelectedBox] = useState<Box>();
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Header />
      <div className="m-3 mt-5 grid sm:grid-cols-1 md:grid-cols-3">
        <div className="m-3 md:col-span-2">
          <div className="mb-3 flex flex-wrap items-center justify-between">
            <h2 className="mb-5 text-xl">Entries</h2>
            <div className="flex">
              <Search />
              <button
                type="button"
                className="m-1 inline-flex items-center rounded-lg border border-gray-300 bg-gray-50 px-5 py-2.5 text-center text-sm font-medium hover:bg-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="mr-2 size-6"
                >
                  <path d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
                Sort
              </button>

              <button
                type="button"
                title="Refresh list"
                className="m-1 inline-flex items-center rounded-lg border border-gray-300 bg-gray-50 px-5 py-2.5 text-center text-sm font-medium hover:bg-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </button>
            </div>
          </div>
          <div className="mb-3 grid grid-cols-4 rounded-md bg-white p-5 md:grid-cols-5 md:p-3">
            <span>ID</span>
            <span>H x D x L (cm)</span>
            <span>Added at</span>
            <span className="hidden md:block">Modified at</span>
            <span>Comment</span>
          </div>
          {boxes.map((box) => (
            <BoxList key={box.id} box={box} setSelectedBox={setSelectedBox} />
          ))}
        </div>
        <div className="m-3 md:order-2">
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
