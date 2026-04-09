//! Elementos

const notesContainer = document.querySelector("#notes-container");
const noteInput = document.querySelector("#note-content");
const addNoteBtn = document.querySelector(".add-note");

//! Funções

function addNote() {
  const noteObject = {
    id: 1,
    content: "",
    fixed: false,
  };
}

function generateId() {
  return Math.floor(Math.random() * 5000);
}

//! Eventos
addNoteBtn.addEventListener("click", () => addNote());
