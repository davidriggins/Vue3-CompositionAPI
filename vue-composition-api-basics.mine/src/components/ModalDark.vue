<template>
  <teleport to=".modals-container">
    <div v-if="modelValue" class="modal-dark">
      <h1>{{ title }}</h1>
      <slot />
      <!-- <pre>{{ $slots.title() }}</pre> -->
      <button @click="$emit('update:modelValue')">Hide modal</button>
    </div>
  </teleport>
</template>

<script setup>
// import { useSlots } from "vue";

// const slots = useSlots();

// console.log(slots.title());

/*
  props
*/
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "No title specified",
  },
});

/*
  emits
*/
const emit = defineEmits(["update:modelValue", "hideModal"]);

/*
  handle button click
*/
// const handleButtonClick = () => {
//   // emit("hideModal");
//   emit("update:modelValue", false);
// };

console.log(props.title);
</script>

<style>
.modal-dark {
  background: #333;
  color: white;
  padding: 10px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
