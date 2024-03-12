import React, { useEffect, useState } from "react";
import { IoMdClose, IoMdMore } from "react-icons/io";
import { MdOutlinePushPin, MdPushPin } from "react-icons/md";
import MoreMenu from "./MoreMenu";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { EDIT_NOTE_URL } from "../../routes/urls";

const Note = ({
  content,
  id,
  bgColor,
  deleteNote,
  date,
  pin,
  notes,
  setNotes,
}) => {
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [isPinned, setIsPinned] = useState(pin);
  const nav = useNavigate();

  useEffect(() => {
    window.addEventListener("click", () => {
      setIsMoreMenuOpen(false);
    });
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const updatedNotes = notes.map((note) =>
          note._id === id ? { ...note, pin: isPinned } : note
        );
        const note = updatedNotes.filter((note) => note._id === id)[0];
        console.log(note);
        const user = JSON.parse(localStorage.getItem("user"));
        await axios.put(`${EDIT_NOTE_URL}/${user._id}`, note);
        setNotes(updatedNotes);
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
      } catch (error) {
        console.log(error);
      }
    })();
  }, [isPinned]);

  const pStyle = {
    overflowWrap: "anywhere",
  };

  const darkenColor = (hexColor, factor) => {
    // Remove '#' from the beginning of the color string
    const hex = hexColor.replace("#", "");
    // Convert hex to RGB
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
    // Apply the factor to each RGB component to darken the color
    r = Math.floor(r * factor);
    g = Math.floor(g * factor);
    b = Math.floor(b * factor);
    // Ensure the RGB components are within the valid range
    r = Math.min(Math.max(0, r), 255);
    g = Math.min(Math.max(0, g), 255);
    b = Math.min(Math.max(0, b), 255);
    // Convert the modified RGB components back to hexadecimal format
    const darkenedHex =
      "#" + (r * 0x10000 + g * 0x100 + b).toString(16).padStart(6, "0");

    return darkenedHex;
  };

  return (
    <>
      <div
        className="relative max-w-[90%] sm:w-[270px] w-[350px] h-[200px] border-4 border-gray-700 rounded-2xl p-2 flex flex-col items-center mb-4 cursor-pointer"
        style={{ backgroundColor: bgColor }}
        onClick={() => nav(`/notes/${id}`)}
      >
        <div className="w-full flex justify-between mb-3">
          <IoMdMore
            className="cursor-pointer rounded-full p-1 h-[30px] w-[30px] text-white mb-auto"
            onClick={(e) => {
              setIsMoreMenuOpen(!isMoreMenuOpen);
              e.stopPropagation();
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = darkenColor(bgColor, 0.8);
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = bgColor;
            }}
          />
          {!isPinned ? (
            <MdOutlinePushPin
              className="cursor-pointer rounded-full p-1 h-[27px] w-[27px] text-white mt-[2px]"
              onClick={(e) => {
                e.stopPropagation(), setIsPinned(!isPinned);
              }}
            />
          ) : (
            <MdPushPin
              className="cursor-pointer rounded-full p-1 h-[27px] w-[27px] text-white mt-[2px]"
              onClick={(e) => {
                e.stopPropagation(), setIsPinned(!isPinned);
              }}
            />
          )}
          <IoMdClose
            className={`cursor-pointer rounded-full p-1 h-[30px] w-[30px] size-6 text-white mb-auto ml-auto`}
            onClick={(e) => {
              deleteNote(id);
              e.stopPropagation();
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = darkenColor(bgColor, 0.8);
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = bgColor;
            }}
          />
        </div>
        {isMoreMenuOpen && (
          <MoreMenu
            setIsMoreMenuOpen={setIsMoreMenuOpen}
            deleteNote={deleteNote}
            id={id}
          />
        )}
        <div className="w-full h-full flex flex-col justify-between">
          <p
            className="w-full text-xl text-start text-slate-950"
            style={pStyle}
          >
            {content.toString().length > 70 ? content.substring(0, 70) + "..." : content}
          </p>
          <p className="w-full text-end">{date}</p>
        </div>
      </div>
    </>
  );
};

export default Note;
