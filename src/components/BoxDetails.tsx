import { useState } from "react";
import { Box } from "../../types";

interface props {
  box: Box;
}

const BoxDetails = ({ box }: props) => {
  const id = box.id;
  const [height, setHeight] = useState(box.height);
  const [depth, setDepth] = useState(box.depth);
  const [length, setLength] = useState(box.length);
  const [comment, setComment] = useState(box.comment);

  console.log("in box", box);
  return (
    <div className="rounded-md bg-white">
      <div className="m-3 mb-5 flex flex-col">
        <div className="m-1 flex items-center justify-between">
          <h2 className="text-2xl ">ID: {id}</h2>
          <button
            type="button"
            className="m-1 inline-flex items-center rounded-lg border border-gray-300 bg-gray-50 px-5 py-2.5 text-center text-sm font-medium hover:bg-red-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
            Delete
          </button>
        </div>
        <form action="">
          <div className="">
            <label htmlFor="height">Height: </label>
            <input
              className="w-full p-2"
              name="height"
              type="number"
              value={height}
              onChange={(e) => setHeight(parseInt(e.target.value))}
            />
          </div>
          <div>
            <label htmlFor="depth">Depth: </label>
            <input
              className="w-full p-2"
              name="depth"
              type="number"
              value={depth}
              onChange={(e) => setDepth(parseInt(e.target.value))}
            />
          </div>
          <div>
            <label htmlFor="length">Length: </label>
            <input
              className="w-full p-2"
              name="length"
              type="number"
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
            />
          </div>
          <div>
            <label htmlFor="comment">Comment: </label>
            <input
              className="w-full p-2"
              name="comment"
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <input type="submit" value="Save changes"></input>
        </form>
      </div>
    </div>
  );
};

export default BoxDetails;
