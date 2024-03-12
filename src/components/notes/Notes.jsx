import React, { useState, useEffect } from "react";
import AddNote from "./AddNote";
import Note from "./Note";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { DELETE_NOTE_URL } from "../../routes/urls";

const Notes = ({ notes, setNotes }) => {
  const deleteNote = async (id) => {
    try {
      const updatedNotes = notes.filter((note) => note._id !== id);
      const user = JSON.parse(localStorage.getItem("user"));
      await axios.delete(`${DELETE_NOTE_URL}/${user._id}`, { _id: id });
      setNotes(updatedNotes);
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-[100vh] bg-gray-700">
      <AddNote setNotes={setNotes} notes={notes} />
      <div className="flex flex-col">
        <div className="mx-auto w-[90%] flex flex-wrap justify-evenly">
          {notes.map(
            (note) =>
              note.pin && (
                <Note
                  key={note._id}
                  content={note.content}
                  id={note._id}
                  bgColor={note.bgColor}
                  date={note.date}
                  deleteNote={deleteNote}
                  pin={note.pin}
                  notes={notes}
                  setNotes={setNotes}
                />
              )
          )}
        </div>
        <div className="mx-auto w-[90%] flex flex-wrap justify-evenly">
          {notes.map(
            (note) =>
              !note.pin && (
                <Note
                  key={note._id}
                  content={note.content}
                  id={note._id}
                  bgColor={note.bgColor}
                  date={note.date}
                  deleteNote={deleteNote}
                  pin={note.pin}
                  notes={notes}
                  setNotes={setNotes}
                />
              )
          )}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Notes;
