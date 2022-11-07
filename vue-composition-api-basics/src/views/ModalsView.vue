<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show Modal</button>

    <!-- <teleport to="body"> -->
    <teleport to=".modals-container">
      <div v-if="showModal" class="modal">
        <h1>This is a modal</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
          nobis tenetur minus architecto necessitatibus saepe consequatur et
          numquam. Vel asperiores provident omnis veritatis harum corrupti! Aut
          aspernatur sed eos commodi?
        </p>
        <button @click="showModal = false">Hide modal</button>
      </div>
    </teleport>
  </div>
</template>

<script setup>
/*
  imports
*/
import { ref } from "vue";

/*
  Modals
*/

const showModal = ref(false);
</script>

<style>
.modal {
  background: beige;
  padding: 10px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
