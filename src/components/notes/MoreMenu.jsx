import React from "react";
import { useNavigate } from "react-router-dom";

const MoreMenu = ({ deleteNote, id, setIsMoreMenuOpen }) => {
  const nav = useNavigate();
  return (
    <div className="absolute top-10 left-6 w-[100px] bg-white text-center rounded">
      <ul>
        <li
          className="hover:bg-gray-200 p-2 rounded"
          onClick={(e) => {
            nav(`/notes/edit/${id}`);
            setIsMoreMenuOpen(false);
            e.stopPropagation();
          }}
        >
          Edit
        </li>
        <li
          className="hover:bg-gray-200 p-2 rounded"
          onClick={(e) => (deleteNote(id), e.stopPropagation())}
        >
          Remove
        </li>
      </ul>
    </div>
  );
};

export default MoreMenu;
