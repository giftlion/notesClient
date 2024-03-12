import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import Notes from "../components/notes/Notes";
import NoteDetails from "../components/notes/NoteDetails";
import EditNote from "../components/notes/EditNote";
import Error from "../pages/Error";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import loggedInContext from "../context/loggedIn";

const AppRoutes = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);
  const { loggedIn } = useContext(loggedInContext);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login setNotes={setNotes} notes={notes} />}
        />
        <Route path="/signup" element={<SignUp />} />
        {loggedIn && (
          <Route
            path="/notes"
            element={<Notes notes={notes} setNotes={setNotes} />}
          >
            <Route
              path="/notes/edit/:id"
              element={<EditNote notes={notes} setNotes={setNotes} />}
            />
            <Route path=":id" element={<NoteDetails notes={notes} />} />
          </Route>
        )}
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
