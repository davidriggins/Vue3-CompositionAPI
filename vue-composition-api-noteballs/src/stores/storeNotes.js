import { defineStore } from "pinia";

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [
        {
          id: "id1",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quide distinctio repellendus blanditiis neque optio, ipsum minima eum magnam eaque, voluptates accusamus nobis quisquam deserunt. Numquam quod ipsa voluptas quasi!",
        },
        {
          id: "id2",
          content: "This is a shorter note!",
        },
      ],
    };
  },

  actions: {
    addNote(newNoteContent) {
      let currentDate = new Date().getTime();
      let id = currentDate.toString();

      let note = {
        id: id,
        content: newNoteContent,
      };

      // unshift puts it to the bottom of the array
      this.notes.unshift(note);
    },

    deleteNote(idToDelete) {
      this.notes = this.notes.filter((note) => note.id != idToDelete);
    },

    updateNote(id, content) {
      // let index = this.notes.findIndex((note) => {
      //   return note.id === id;
      // });
      // short-hand version of above
      let index = this.notes.findIndex((note) => note.id === id);

      this.notes[index].content = content;
    },
  },

  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter((note) => {
          return note.id === id;
        })[0].content;
      };
    },
  },
});
