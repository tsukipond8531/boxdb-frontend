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
      title={box.comment}
    >
      <div className="grid grid-cols-4 md:grid-cols-5">
        <p className="truncate">{box.id}</p>
        <p className="truncate">
          {box.height} x {box.depth} x {box.length}
        </p>
        <p className="truncate">{new Date(box.addedAt).toLocaleString()}</p>
        <div className="hidden md:block">
          {box.modifiedAt ? (
            <p className="truncate">
              {new Date(box.modifiedAt).toLocaleString()}
            </p>
          ) : (
            <p className="truncate">Not modified</p>
          )}
        </div>
        <p className="truncate">{box.comment}</p>
      </div>
    </button>
  );
};

export default BoxList;
