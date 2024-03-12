const BASE_URL = "http://localhost:3000";

const USERS_URL = `${BASE_URL}/users`;
const REGISTER_URL = `${USERS_URL}/register`;
const LOGIN_URL = `${USERS_URL}/login`;
const LOGOUT_URL = `${USERS_URL}/logout`;
const ADD_NOTE_URL = `${USERS_URL}/addNote`;
const DELETE_NOTE_URL = `${USERS_URL}/deleteNote`;
const EDIT_NOTE_URL = `${USERS_URL}/editNote`;

export {
  USERS_URL,
  REGISTER_URL,
  LOGIN_URL,
  LOGOUT_URL,
  ADD_NOTE_URL,
  DELETE_NOTE_URL,
  EDIT_NOTE_URL,
};
