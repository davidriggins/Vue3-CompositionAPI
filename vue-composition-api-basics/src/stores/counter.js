import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  // Data/State
  const count = ref(0);
  const title = ref("My Counter Title");

  // Getters
  const doubleCount = computed(() => count.value * 2);
  const oddOrEven = computed(() => {
    if (count.value % 2 === 0) return "even";
    return "odd";
  });

  // Actions
  function increment() {
    count.value++;
  }

  function increaseCount(amount) {
    count.value += amount;
  }

  function decreaseCount(amount) {
    count.value -= amount;
  }

  // Export data and methods
  return {
    count,
    doubleCount,
    increment,
    title,
    increaseCount,
    decreaseCount,
    oddOrEven,
  };
});
