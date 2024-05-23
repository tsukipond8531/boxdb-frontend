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
      <h2>ID: {id}</h2>
      <div className="flex">
        <form action="">
          <div>
            <label htmlFor="height">Height</label>
            <input
              name="height"
              type="number"
              value={height}
              onChange={(e) => setHeight(parseInt(e.target.value))}
            />
          </div>
          <div>
            <label htmlFor="depth">Depth</label>
            <input
              name="depth"
              type="number"
              value={depth}
              onChange={(e) => setDepth(parseInt(e.target.value))}
            />
          </div>
          <div>
            <label htmlFor="length">Length</label>
            <input
              name="length"
              type="number"
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
            />
          </div>
          <div>
            <label htmlFor="comment">Comment</label>
            <input
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
