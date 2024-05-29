import { Box } from "../../types";
import { Pagination } from "flowbite-react";
import BoxListHeaders from "./BoxListHeaders";
import BoxListItem from "./BoxListItem";
import { useState } from "react";

interface props {
  filteredBoxes: Box[];
  setSelectedBox: (box: Box) => void;
}

const BoxList = ({ filteredBoxes, setSelectedBox }: props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Change this to control how many boxes are displayed per page

  const onPageChange = (page: number) => setCurrentPage(page);

  const displayedBoxes = filteredBoxes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div>
      <BoxListHeaders />
      {displayedBoxes.map((box) => (
        <BoxListItem key={box.id} box={box} setSelectedBox={setSelectedBox} />
      ))}
      <div className="mt-4 flex overflow-x-auto sm:justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredBoxes.length / itemsPerPage)}
          onPageChange={onPageChange}
          showIcons
        />
      </div>
    </div>
  );
};

export default BoxList;
