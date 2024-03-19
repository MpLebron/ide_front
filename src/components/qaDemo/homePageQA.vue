<template>
  <div>
    <div class="flex w-full flex-col">
      <!-- Prompt Messages -->
      <div
        class="flex-1 space-y-6 overflow-y-auto rounded-xl bg-slate-200/70 p-4 text-sm leading-6 text-slate-900 shadow-sm dark:bg-slate-900 dark:text-slate-300 sm:text-base sm:leading-7"
      >
        <div
          id="question1"
          class="flex flex-row-reverse items-start"
          v-if="showQuestion1"
        >
          <img
            class="ml-2 h-8 w-8 rounded-full"
            src="https://dummyimage.com/128x128/354ea1/ffffff&text=G"
          />

          <div
            class="flex min-h-[85px] rounded-b-xl rounded-tl-xl bg-slate-50 p-4 dark:bg-slate-800 sm:min-h-0 sm:max-w-md md:max-w-2xl"
          >
            <p>你是谁</p>
          </div>
        </div>

        <div id="answer1" class="flex items-start" v-if="showAnswer1">
          <img class="mr-2 h-8 w-8 rounded-full" src="@/assets/IME_logo.png" />
          <div
            class="flex rounded-b-xl rounded-tr-xl bg-slate-50 p-4 dark:bg-slate-800 sm:max-w-md md:max-w-2xl"
          >
            <p>{{ displayedText1 }}</p>
          </div>
        </div>

        <div
          id="question1"
          class="flex flex-row-reverse items-start"
          v-if="showQuestion2"
        >
          <img
            class="ml-2 h-8 w-8 rounded-full"
            src="https://dummyimage.com/128x128/354ea1/ffffff&text=G"
          />

          <div
            class="flex min-h-[85px] rounded-b-xl rounded-tl-xl bg-slate-50 p-4 dark:bg-slate-800 sm:min-h-0 sm:max-w-md md:max-w-2xl"
          >
            <p>你能做什么</p>
          </div>
        </div>

        <div id="answer2" class="flex items-start" v-if="showAnswer2">
          <img class="mr-2 h-8 w-8 rounded-full" src="@/assets/IME_logo.png" />
          <div
            class="flex rounded-b-xl rounded-tr-xl bg-slate-50 p-4 dark:bg-slate-800 sm:max-w-md md:max-w-2xl"
          >
            <p>{{ displayedText2 }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
let showQuestion1 = ref(false);
let showAnswer1 = ref(false);
let showQuestion2 = ref(false);
let showAnswer2 = ref(false);
let displayedText1 = ref('');
let displayedText2 = ref('');

onMounted(() => {
  const answer1 = '我是OpenGMS-IDE，一个由OpenGMS开发的智能建模环境。';
  const answer2 =
    '我可以依据您的地理建模问题，智能化地进行数据准备与处理、模型构建与集成、模型评价与优化等，并提供一系列智能建模辅助工具。';
  let index1 = 0;
  let index2 = 0;

  showQuestion1.value = true;

  const intervalId1 = setInterval(() => {
    if (index1 < answer1.length) {
      setTimeout(() => {
        showAnswer1.value = true;
      }, 300);
      displayedText1.value += answer1[index1];
      index1++;
    } else {
      clearInterval(intervalId1);

      setTimeout(() => {
        showQuestion2.value = true;
      }, 300);

      setTimeout(() => {
        showAnswer2.value = true;
      }, 600);

      const intervalId2 = setInterval(() => {
        if (index2 < answer2.length) {
          displayedText2.value += answer2[index2];
          index2++;
        } else {
          clearInterval(intervalId2);
        }
      }, 30);
    }
  }, 30);
});
</script>
<style scoped></style>
