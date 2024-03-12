import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Modal } from "flowbite-react";

const pStyle = {
  overflowWrap: "anywhere",
};

const NoteDetails = ({ notes }) => {
  const { id } = useParams();
  const currentNote = notes.filter((note) => note._id == id)[0];
  const nav = useNavigate();
  return (
    <div className="absolute top-[60px] left-0 w-full h-full">
      <Modal show={true} size="xl" onClose={() => nav("/notes")} popup>
        <Modal.Header
          className="text-lg text-gray-900 text-center rounded-none"
          style={{ backgroundColor: currentNote?.bgColor }}
        >
          {currentNote?.date}
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: currentNote?.bgColor }}>
          <p style={pStyle} className="mb-5 text-lg text-gray-900">
            {currentNote?.content}
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default NoteDetails;
