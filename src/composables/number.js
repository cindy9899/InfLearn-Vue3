import { computed } from 'vue';
import { unref } from 'vue';
const useNumber = number => {
  const isOdd = computed(() => unref(number) % 2 === 1);
  const isEven = computed(() => !isOdd.value);

  return {
    isOdd,
    isEven,
  };
};

export default useNumber;
