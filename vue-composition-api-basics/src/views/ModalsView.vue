<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show Modal</button>
    <Modal v-model="showModal" title="My modal title (via prop)">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia nobis
        tenetur minus architecto necessitatibus saepe consequatur et numquam.
        Vel asperiores provident omnis veritatis harum corrupti! Aut aspernatur
        sed eos commodi?
      </p>
    </Modal>
  </div>
</template>

<script setup>
/*
  imports
*/
import { ref } from "vue";
import Modal from "@/components/Modal.vue";

/*
  Modals
*/

const showModal = ref(false);
</script>
