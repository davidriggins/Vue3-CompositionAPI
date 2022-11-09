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
import AddEditNote from "@/components/Notes/AddEditNote.vue";

// notes
const noteContentRef = ref("");
</script>
