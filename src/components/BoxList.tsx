import { Box } from "../../types";

interface props {
  box: Box;
  setSelectedBox: (box: Box) => void;
}

const BoxList = ({ box, setSelectedBox }: props) => {
  const setSelected = () => {
    console.log("setSelected");
    setSelectedBox(box);
  };

  return (
    <button
      onClick={setSelected}
      className="mb-2 w-full rounded-md bg-white p-2 text-left hover:bg-gray-100"
    >
      <div className="grid grid-cols-3">
        <p>{box.id}</p>
        <p>
          {box.height} x {box.depth} x {box.length}
        </p>
        <p className="truncate">{box.comment}</p>
      </div>
    </button>
  );
};

export default BoxList;
