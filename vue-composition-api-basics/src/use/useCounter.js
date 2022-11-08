import {
  reactive,
  computed,
  watch,
  nextTick,
  onBeforeMount,
  onMounted,
} from "vue";

// Moving the counter data line outside of the export makes it global

export function useCounter() {
  const counterData = reactive({
    count: 0,
    title: "My Counter:",
  });

  watch(
    () => counterData.count,
    (newCount, oldCount) => {
      if (newCount == 20) {
        alert("Way to go! You made it to 20");
      }
    }
  );
  const oddOrEven = computed(() => {
    if (counterData.count % 2 === 0) return "even";

    return "odd";
  });

  const increaseCounter = async (amount, e) => {
    //console.log(e);
    counterData.count += amount;
    await nextTick();
    console.log("do something when the counter has updated i the dom");
  };

  const decreaseCounter = (amount) => {
    counterData.count -= amount;
  };

  onBeforeMount(() => {
    console.log("onBeforeMount");
  });

  onMounted(() => {
    console.log("Do stuff related to Counter");
    console.log("onMounted");
  });

  return {
    counterData,
    oddOrEven,
    increaseCounter,
    decreaseCounter,
  };
}
