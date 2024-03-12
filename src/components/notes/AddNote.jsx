import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { HiInformationCircle } from "react-icons/hi";
import Alert from "@mui/material/Alert";
import axios from "axios";
import { ADD_NOTE_URL } from "../../routes/urls";

const AddNote = ({ setNotes, notes }) => {
  const [addMode, setAddMode] = useState(false);
  const [content, setContent] = useState("");
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    // Add or remove 'no-scroll' class based on addMode
    if (addMode) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup function to remove the class when component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [addMode]);
  useEffect(() => {
    window.addEventListener("click", () => {
      setAddMode(false);
    });
  }, []);

  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0");
    const g = Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0");
    const b = Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0");

    return `#${r}${g}${b}`;
  };

  const addNote = async () => {
    if (!content) {
      // Check if content is empty
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 3000);
      return;
    }
    const newNote = {
      _id: notes.length > 0 ? +notes[notes.length - 1]._id + 1 : 1,
      content: content,
      bgColor: getRandomColor(),
      date: new Date().toLocaleString().slice(0, -3),
      pin: false,
    };
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      await axios.put(`${ADD_NOTE_URL}/${user._id}`, newNote);
      const updatedNotes = [...notes, newNote];
      setNotes(updatedNotes); // Update notes state
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      setContent(""); // Clear content input
      setAddMode(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {alert && (
        <div className="absolute top-5 left-0 w-full flex justify-center">
          <Alert className=" w-[40%]" severity="error" variant="filled">
            Please fill the content field
          </Alert>
        </div>
      )}
      <div className="mx-auto w-[100%] h-[100px] bg-gray-700 text-center p-6 mb-2">
        <button
          onClick={(e) => {
            setAddMode(true), e.stopPropagation();
          }}
          className="bg-blue-500 px-10 py-4 rounded-lg text-white"
        >
          Add Note
        </button>
      </div>
      {addMode && (
        <div
          className={`absolute w-full h-full top-[60px] left-0 z-10 bg-opacity-20 bg-slate-300`}
        >
          <form
            className="text-center border-2 w-[500px] max-w-[80%] h-[400px] absolute inset-0  mx-auto mt-10 p-4 shadow-2xl bg-white rounded-xl flex flex-col justify-between items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <IoMdClose
              className="cursor-pointer size-8 ml-auto hover:bg-slate-400 rounded p-[2px]"
              onClick={() => setAddMode(false)}
            />
            <h2 className="text-4xl mb-2">Write Your Note</h2>
            <br />
            <textarea
              autoFocus
              type="text"
              placeholder="Your note"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-[90%] h-[200px] rounded border-2 focus:outline-none focus:border-blue-500 p-2"
            />
            <br />
            <button
              onClick={(e) => {
                e.preventDefault();
                addNote();
              }}
              className="bg-blue-500 px-8 py-3 w-[90%] rounded-lg mt-auto text-white"
            >
              Add
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default AddNote;
