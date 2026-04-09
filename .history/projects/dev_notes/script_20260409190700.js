//! Elementos

const notesContainer = document.querySelector("#notes-container");
const noteInput = document.querySelector("#note-content");
const addNoteBtn = document.querySelector(".add-note");

//! Funções

function addNote() {
  const noteObject = {
    id: generateId(),
    content: noteInput.value,
    fixed: false,
  };

  const noteElement = createNote(noteObject.id,noteObject.content)
}

function generateId() {
  return Math.floor(Math.random() * 5000);
}

function createNote(id, content){

}

//! Eventos
addNoteBtn.addEventListener("click", () => addNote());
