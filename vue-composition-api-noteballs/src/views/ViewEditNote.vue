<template>
  <div class="edit-note">
    <AddEditNote
      v-model="noteContentRef"
      bgColor="link"
      placeholder="Edit note"
      label="Edit Note"
      ref="addEditNoteRef"
    >
      <template v-slot:buttons>
        <button @click="$router.back()" class="button is-link is-light">
          Cancel
        </button>
        <button
          class="button is-link has-background-link"
          :disabled="!noteContentRef"
        >
          Save Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
// imports
import { ref } from "vue";
import { useRoute } from "vue-router";
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { useStoreNotes } from "@/stores/storeNotes";

// router
const route = useRoute();

// store
const storeNotes = useStoreNotes();

// notes
const noteContentRef = ref("");
console.log(route.params.id);
noteContentRef.value = storeNotes.getNoteContent(route.params.id);
</script>
