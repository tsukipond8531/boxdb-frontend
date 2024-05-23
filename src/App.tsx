import "./App.css";
import { useState } from "react";
import { Box } from "../types";
import Header from "./components/Header";
import Search from "./components/Search";
import BoxDetails from "./components/BoxDetails";

const boxes = [
  { id: 1, height: 10, depth: 20, length: 30, comment: "Box 1" },
  { id: 2, height: 15, depth: 25, length: 35, comment: "Box 2" },
  { id: 3, height: 20, depth: 30, length: 40, comment: "Box 3" },
  { id: 4, height: 25, depth: 35, length: 45, comment: "Box 4" },
  { id: 5, height: 30, depth: 40, length: 50, comment: "Box 5" },
  { id: 6, height: 35, depth: 45, length: 55, comment: "Box 6" },
  { id: 7, height: 40, depth: 50, length: 60, comment: "Box 7" },
  { id: 8, height: 45, depth: 55, length: 65, comment: "Box 8" },
  { id: 9, height: 50, depth: 60, length: 70, comment: "Box 9" },
  {
    id: 10,
    height: 55,
    depth: 65,
    length: 75,
    comment: "Box 10 pppppppppppppppppppppppppppppppppppppppppppppppp",
  },
];

function App() {
  const [selectedBox, setSelectedBox] = useState<Box>(boxes[0]);
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Header />
      <div className="mt-5 grid grid-cols-2">
        <div className="m-3">
          <h2 className="mb-5 text-xl">Entries</h2>
          <div className="mb-3 flex">
            <div className="m-1 flex-grow">
              <Search />
            </div>
            <button
              type="button"
              className="m-1 inline-flex items-center rounded-lg border border-gray-300 bg-gray-50 px-5 py-2.5 text-center text-sm font-medium hover:bg-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="size-6"
              >
                <path d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
              Sort
            </button>

            <button
              type="button"
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
              Refresh
            </button>
          </div>
          <div className="mb-2 grid grid-cols-3 rounded-md bg-white p-3">
            <span>id</span>
            <span>height x depth x length</span>
            <span>comment</span>
          </div>
          {boxes.map((box) => (
            <div
              key={box.id}
              className="mb-2 grid grid-cols-3 rounded-md bg-white p-2"
            >
              <p>{box.id}</p>
              <p>
                {box.height} x {box.depth} x {box.length}
              </p>
              <p className="truncate">{box.comment}</p>
            </div>
          ))}
        </div>
        <div className="m-3">
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
