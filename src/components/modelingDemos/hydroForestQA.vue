<template>
  <div>
    <div class="flex h-[90vh] w-full flex-col">
      <!-- Prompt Messages -->
      <div
        class="flex-1 space-y-6 overflow-y-auto rounded-xl bg-slate-200 p-4 text-sm leading-6 text-slate-900 shadow-sm sm:text-base sm:leading-7"
      >
        <div class="flex items-start">
          <img class="mr-2 h-8 w-8 rounded-full" src="@/assets/IME_logo.png" />
          <div
            class="flex rounded-b-xl rounded-tr-xl bg-slate-50 p-4 dark:bg-slate-800 sm:max-w-md md:max-w-2xl"
          >
            <p>你好，我是OpenGMS-IDE智能建模平台，请问有什么可以帮助您？</p>
          </div>
        </div>
        <div class="flex flex-row-reverse items-start">
          <img
            class="ml-2 h-8 w-8 rounded-full"
            src="https://dummyimage.com/128x128/354ea1/ffffff&text=O"
          />

          <div
            class="flex min-h-[85px] rounded-b-xl rounded-tl-xl bg-blue-200 p-4 dark:bg-slate-800 sm:min-h-0 sm:max-w-md md:max-w-2xl"
          >
            <p>
              我想要对淮河流域内的屯溪区域构建流域集合预报模型，该怎么做呢？<br />
            </p>
          </div>
        </div>
        <div class="flex items-start">
          <img class="mr-2 h-8 w-8 rounded-full" src="@/assets/IME_logo.png" />
          <div
            class="flex rounded-b-xl rounded-tr-xl bg-slate-50 p-4 dark:bg-slate-800 sm:max-w-md md:max-w-2xl"
          >
            <p>
              第一步：准备基础地理数据：<br />
              DEM（数字高程模型）：用于获取地形信息，对水文模型和流域特征提取至关重要。
              集合降水预报数据：包括降雨量等气象信息，是水文模型的输入之一。
              产流模型和汇流模型：用于模拟流域内的水文过程，例如产生的径流和水流的路径。<br />
              第二步：流域特征提取： <br />
              利用 DEM数据进行流域划分和提取地形特征，如坡度、高程等。
              使用集合降水预报数据，结合产流和汇流模型，计算流域内的水文特征，例如径流量、蓄水量等。<br />
              第三步：集合预报后处理：<br />
              对集合降水预报数据进行后处理，以提高其质量和适应性。
              这可能包括降水数据的插值、平滑处理或其他统计方法，以获得更准确的降水信息。
            </p>
          </div>
        </div>

        <div class="flex flex-row-reverse items-start">
          <img
            class="ml-2 h-8 w-8 rounded-full"
            src="https://dummyimage.com/128x128/354ea1/ffffff&text=O"
          />

          <div
            class="flex min-h-[85px] rounded-b-xl rounded-tl-xl bg-blue-200 p-4 dark:bg-slate-800 sm:min-h-0 sm:max-w-md md:max-w-2xl"
          >
            <p>之前是否有人做过类似的实验呢？<br /></p>
          </div>
        </div>
        <div class="flex items-start">
          <img class="mr-2 h-8 w-8 rounded-full" src="@/assets/IME_logo.png" />
          <div
            class="flex rounded-b-xl rounded-tr-xl bg-slate-50 p-4 dark:bg-slate-800 sm:max-w-md md:max-w-2xl"
          >
            <p>
              之前有人做过相似的实验，同样是在淮河流域内的屯溪区域，基于OpenGMS的GHFS平台，构建了流域集合预报模型，并开展了相关的实验分析。
              您想要了解更多该次实验吗？
            </p>
          </div>
        </div>

        <div class="flex flex-row-reverse items-start">
          <img
            class="ml-2 h-8 w-8 rounded-full"
            src="https://dummyimage.com/128x128/354ea1/ffffff&text=O"
          />

          <div
            class="flex min-h-[85px] rounded-b-xl rounded-tl-xl bg-blue-200 p-4 dark:bg-slate-800 sm:min-h-0 sm:max-w-md md:max-w-2xl"
          >
            <p>是的，请告诉我他在水文后处理环节， 具体的实验细节。<br /></p>
          </div>
        </div>

        <div class="flex items-start">
          <img class="mr-2 h-8 w-8 rounded-full" src="@/assets/IME_logo.png" />
          <butt
            class="flex rounded-b-xl rounded-tr-xl bg-slate-50 p-4 dark:bg-slate-800 sm:max-w-md md:max-w-2xl"
          >
            <div>
              在该实验的水文后处理环节，处理流域设置的胃wangjiaba流域，出水口为xixian，开始时间为2011年，结束时间为2016年，时间步长为24，预见期为7，预报时间为2016年1月1日，产流模型为XAJ模型，流域汇流模型为LagK模型。以下为相关的实验结果。
              <img src="@/assets/预测期间图.png" alt="" style="width: 100%" />
              <img src="@/assets/超越概率图.png" alt="" style="width: 100%" />
            </div>
          </butt>
        </div>
      </div>
      <!-- Prompt message input -->
      <form class="mt-2">
        <label for="chat-input" class="sr-only">Enter your prompt</label>
        <div class="relative">
          <textarea
            id="chat-input"
            class="block w-full resize-none rounded-xl border-none bg-slate-200 p-4 pl-4 pr-20 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-slate-900 dark:text-slate-200 dark:placeholder-slate-400 dark:focus:ring-blue-600 sm:text-base"
            placeholder="输入您的提问"
            rows="1"
            required
          ></textarea>
          <button
            type="submit"
            class="absolute bottom-2 right-20 rounded-lg bg-cyan-700 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <div id="upload">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 fill-white stroke-indigo-500"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                /></svg
              >上传文件<span class="sr-only">Send message</span>
            </div>
          </button>
          <button
            type="submit"
            class="absolute bottom-2 right-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:text-base"
          >
            发送 <span class="sr-only">Send message</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {} from 'vue';
import OpenGMSModel from '@/components/ResourceCard/OpenGMSModel.vue';
</script>
<style scoped>
a {
  color: #3498db;
  text-decoration: underline;
  transition: color 0.2s;
}

a:hover {
  color: #2980b9;
}

#upload {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
