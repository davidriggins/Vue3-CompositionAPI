<template>
  <div class="home">
    <h2 ref="appTitleRef">{{ appTitle }}</h2>

    <h3>{{ counter.title }}:</h3>

    <div>
      <button @click="counter.decreaseCount(2)" class="btn">--</button>
      <button @click="counter.decreaseCount(1)" class="btn">-</button>
      <span class="counter">{{ counter.count }}</span>
      <button @click="counter.increaseCount(1)" class="btn">+</button>
      <button @click="counter.increaseCount(2)" class="btn">++</button>
    </div>

    <p>This counter is {{ counter.oddOrEven }}</p>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="counter.title" type="text" v-autofocus />
    </div>
  </div>
</template>

<script setup>
import {
  ref,
  reactive,
  computed,
  watch,
  nextTick,
  onBeforeMount,
  onMounted,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
} from "vue";
import { vAutofocus } from "@/directives/vAutofocus";
import { useCounterStore } from "@/stores/counter";
// import { useCounter } from "@/use/useCounter";

// const counter = ref(0);
// const counterTitle = ref("My Counter:");

const appTitle = "My Amazing Counter App";

const appTitleRef = ref(null);

/*
  counter
*/
const counter = useCounterStore();

// Destructuring approach preferred
// const { counterData, oddOrEven, increaseCounter, decreaseCounter } =
//   useCounter();

// // or
// const counter = useCounter();
// then counter.oddOrEven.... etc.  prepend with counter.

// const counterData = reactive({
//   count: 0,
//   title: "My Counter:",
// });

// watch(
//   () => counterData.count,
//   (newCount, oldCount) => {
//     if (newCount == 20) {
//       alert("Way to go! You made it to 20");
//     }
//   }
// );
// const oddOrEven = computed(() => {
//   if (counterData.count % 2 === 0) return "even";

//   return "odd";
// });

// const increaseCounter = async (amount, e) => {
//   //console.log(e);
//   counterData.count += amount;
//   await nextTick();
//   console.log("do something when the counter has updated i the dom");
// };

// const decreaseCounter = (amount) => {
//   counterData.count -= amount;
// };

// onBeforeMount(() => {
//   console.log("onBeforeMount");
// });

// onMounted(() => {
//   console.log(`The app title is ${appTitleRef.value.offsetWidth} px wide!`);
//   console.log("onMounted");
// });

// onBeforeUnmount(() => {
//   console.log("onBeforeUnmount");
// });

// onUnmounted(() => {
//   console.log("onUnmounted");
// });

// onActivated(() => {
//   console.log("onActivated");
// });

/*
  Directives
*/
// const vAutofocus = {
//   // v-autofocus
//   mounted: (el) => {
//     el.focus();
//   },
// };
</script>

<!-- Options API way for computed and watch -->

<!--
<script>
export default {
  data() {
    count: 0;
  },
  computed: {
    myComputedProperty() {
      // perform logic based on a data property
      return "my result";
    },
  },

  watch: {
    count(newCount, oldCount) {
      if (newCount == 20) alert("hello");
    },
  },
};
</script>
-->

<!--Composition API -->
<!--
<script>
import { ref } from "vue";
export default {
  setup() {
    const counter = ref(0);

    const increaseCounter = () => {
      counter.value++;
    };

    const decreaseCounter = () => {
      counter.value--;
    };

    return {
      counter,
      increaseCounter,
      decreaseCounter,
    };
  },
};
</script>
-->

<!--Options API -->
<!--
<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },

  methods: {
    increaseCounter() {
      this.counter++;
    },

    decreaseCounter() {
      this.counter--;
    },
  },
};
</script>
-->

<style>
.home {
  text-align: center;
  padding: 20px;
}

.btn,
.counter {
  font-size: 40px;
  margin: 10px;
}

.edit {
  margin-top: 60px;
}
</style>
