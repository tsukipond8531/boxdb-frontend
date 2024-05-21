import { useState } from "react";
import "./App.css";

interface Box {
  id: number;
  height: number;
  depth: number;
  length: number;
  comment?: string;
}

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
  const [selectedBox, setSelectedBox] = useState<Box>();
  return (
    <div className="m-3 flex min-h-screen flex-col bg-slate-50">
      <h1 className="text-2xl">Box dimensions database</h1>
      <div className="mt-5 grid grid-cols-2">
        <div className="mr-3">
          <h2 className="text-xl">
            Entries (id, height, depth, length, comment)
          </h2>
          {boxes.map((box) => (
            <div
              key={box.id}
              className="mb-2 grid grid-cols-3 rounded-lg bg-white p-2"
            >
              <p>{box.id}</p>
              <p>
                {box.height} x {box.depth} x {box.length}
              </p>
              <p className="truncate">{box.comment}</p>
            </div>
          ))}
        </div>
        <div className="ml-3">
          <h2 className="text-xl">Detailed info</h2>
          {!selectedBox ? (
            <p className="mt-10 text-center italic text-gray-600">
              Click on a box to edit its info
            </p>
          ) : (
            <h2 className="text-xl">{selectedBox?.id}</h2>
          )}
        </div>
      </div>
      <p>Source code available at</p>
    </div>
  );
}

export default App;
