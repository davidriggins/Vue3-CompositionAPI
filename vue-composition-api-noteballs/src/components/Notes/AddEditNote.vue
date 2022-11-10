<template>
  <div class="card p-4 mb-5" :class="`has-background-${props.bgColor}-dark`">
    <label v-if="props.label" class="label has-text-white">{{ label }}</label>
    <div class="field">
      <div class="control">
        <textarea
          v-model="modelValue"
          @input="$emit('update:modelValue', modelValue)"
          class="textarea"
          ref="textareaRef"
          :placeholder="props.placeholder"
          maxlength="100"
          v-autofocus
        />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control"><slot name="buttons" />></div>
    </div>
  </div>
</template>

<script setup>
/*
  imports
*/
import { ref } from "vue";
import { vAutofocus } from "@/directives/vAutofocus";
/*
  props
*/
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    default: "success",
  },
  placeholder: {
    type: String,
    default: "Type something...",
  },
  label: {
    type: String,
  },
});

/*
  emits
*/
const emit = defineEmits(["update:modelValue"]);

/*
  focus textarea
*/
const textareaRef = ref(null);

const focusTextarea = () => {
  textareaRef.value.focus();
};

// Show any methods you want available to a parent component
defineExpose({
  focusTextarea,
});
</script>
