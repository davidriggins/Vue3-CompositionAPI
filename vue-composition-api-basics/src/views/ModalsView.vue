<template>
  <div class="modals">
    <h1>Modals</h1>
    <div>
      <label>
        Show dark modals?
        <input type="checkbox" v-model="showDarkModals" />
      </label>
    </div>

    <button @click="showModal = true">Show Modal</button>
    <component
      :is="showDarkModals ? ModalDark : Modal"
      v-model="showModal"
      title="My modal title (via prop)"
    >
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia nobis
        tenetur minus architecto necessitatibus saepe consequatur et numquam.
        Vel asperiores provident omnis veritatis harum corrupti! Aut aspernatur
        sed eos commodi?
      </p>
    </component>
  </div>
</template>

<script setup>
/*
  imports
*/
import { ref } from "vue";
import Modal from "@/components/Modal.vue";
import ModalDark from "@/components/ModalDark.vue";

/*
  Modals
*/

const showDarkModals = ref(false);
const showModal = ref(false);
</script>
