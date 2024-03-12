import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import { EDIT_NOTE_URL } from "../../routes/urls";

const EditNote = ({ notes, setNotes }) => {
  const { id } = useParams();
  const [currentNote, setCurrentNote] = useState(
    notes.filter((note) => note._id == id)[0]
  );
  const nav = useNavigate();

  const editNote = async () => {
    try {
      const index = notes.findIndex((note) => note._id == id);
      const user = JSON.parse(localStorage.getItem("user"));
      await axios.put(`${EDIT_NOTE_URL}/${user._id}`, currentNote);
      const updatedNotes = [...notes];
      updatedNotes[index] = currentNote;
      setNotes(updatedNotes);
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      nav("/notes");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.body.classList.add("no-scroll");
    window.addEventListener("click", () => {
      nav("/notes");
    });
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);
  return (
    <div
      className={`absolute w-full h-full top-[60px] left-0 z-10 bg-opacity-20 bg-slate-300`}
    >
      <form
        className="text-center border-2 w-[500px] max-w-[80%] h-[400px] absolute inset-0  mx-auto mt-10 p-4 shadow-2xl bg-white rounded-xl flex flex-col justify-between items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <IoMdClose
          className="cursor-pointer size-8 ml-auto hover:bg-slate-400 rounded p-[2px]"
          onClick={() => nav("/notes")}
        />
        <h2 className="text-4xl mb-2">Edit Your Note</h2>
        <br />
        <textarea
          type="text"
          value={currentNote?.content}
          onChange={(e) =>
            setCurrentNote({ ...currentNote, content: e.target.value })
          }
          className="w-[90%] h-[200px] rounded border-2 focus:outline-none focus:border-blue-500 p-2"
        />
        <br />
        <button
          onClick={(e) => {
            e.preventDefault();
            editNote();
          }}
          className="bg-blue-500 px-8 py-3 w-[90%] rounded-lg mt-auto text-white"
        >
          Edit
        </button>
      </form>
    </div>
  );
};

export default EditNote;
