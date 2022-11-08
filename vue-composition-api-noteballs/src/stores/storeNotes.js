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
});
