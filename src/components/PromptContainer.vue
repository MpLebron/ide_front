<template>
  <div>
    <!-- Prompt Messages Container - Modify the height according to your need -->
    <!-- Prompt Messages Container - Modify the height according to your need -->
    <div class="flex h-[97vh] w-full flex-col">
      <!-- Prompt Messages -->
      <div
        class="flex-1 space-y-6 overflow-y-auto rounded-xl bg-slate-200 p-4 text-sm leading-6 text-slate-900 shadow-sm dark:bg-slate-900 dark:text-slate-300 sm:text-base sm:leading-7"
      >
        <div class="flex flex-row-reverse items-start">
          <img
            class="ml-2 h-8 w-8 rounded-full"
            src="https://dummyimage.com/128x128/354ea1/ffffff&text=O"
          />

          <div
            class="flex min-h-[85px] rounded-b-xl rounded-tl-xl bg-slate-50 p-4 dark:bg-slate-800 sm:min-h-0 sm:max-w-md md:max-w-2xl"
          >
            <p>在水文模型中，如何量化参数的相对敏感性？<br /></p>
          </div>
        </div>
        <div class="flex items-start">
          <img class="mr-2 h-8 w-8 rounded-full" src="@/assets/IME_logo.png" />
          <div
            class="flex rounded-b-xl rounded-tr-xl bg-slate-50 p-4 dark:bg-slate-800 sm:max-w-md md:max-w-2xl"
          >
            <p>
              在水文模型中，可以使用相对敏感性指数（如t-statistic和p-value）来量化参数的相对敏感性。t-statistic是参数估计值与其标准误差的比值，表示参数估计值的显著性。p-value是t-statistic对应的概率值，用于判断参数估计值是否显著不同于零。较小的p-value（通常小于0.05）表示参数对模型输出具有显著影响。
            </p>
          </div>
        </div>

        <div class="flex flex-row-reverse items-start">
          <img
            class="ml-2 h-8 w-8 rounded-full"
            src="https://dummyimage.com/128x128/354ea1/ffffff&text=O"
          />

          <div
            class="flex min-h-[85px] rounded-b-xl rounded-tl-xl bg-slate-50 p-4 dark:bg-slate-800 sm:min-h-0 sm:max-w-md md:max-w-2xl"
          >
            <p>如何选择适当的敏感性分析方法？ <br /></p>
          </div>
        </div>
        <div class="flex items-start">
          <img class="mr-2 h-8 w-8 rounded-full" src="@/assets/IME_logo.png" />
          <div
            class="flex rounded-b-xl rounded-tr-xl bg-slate-50 p-4 dark:bg-slate-800 sm:max-w-md md:max-w-2xl"
          >
            <p>
              选择适当的敏感性分析方法取决于模型的类型和目标。对于线性模型，可以使用局部敏感性分析方法，如一阶敏感性分析和主效应分析。对于非线性模型，可以使用全局敏感性分析方法，如Sobol'敏感性分析和Morris敏感性分析。此外，还可以根据模型的复杂性和计算资源选择适当的方法。
            </p>
          </div>
        </div>

        <div class="flex flex-row-reverse items-start">
          <img
            class="ml-2 h-8 w-8 rounded-full"
            src="https://dummyimage.com/128x128/354ea1/ffffff&text=O"
          />

          <div
            class="flex min-h-[85px] rounded-b-xl rounded-tl-xl bg-slate-50 p-4 dark:bg-slate-800 sm:min-h-0 sm:max-w-md md:max-w-2xl"
          >
            <p>如何评估水文模型的不确定性？<br /></p>
          </div>
        </div>
        <div class="flex items-start">
          <img class="mr-2 h-8 w-8 rounded-full" src="@/assets/IME_logo.png" />
          <div
            class="flex rounded-b-xl rounded-tr-xl bg-slate-50 p-4 dark:bg-slate-800 sm:max-w-md md:max-w-2xl"
          >
            <p>
              评估水文模型的不确定性需要考虑模型参数的不确定性、输入数据的不确定性和模型结构的不确定性。可以使用蒙特卡洛模拟、拉丁超立方采样等方法对模型参数进行采样，然后运行模型以评估模型输出的不确定性。此外，还可以使用贝叶斯方法对模型参数进行后验概率分析，以评估模型参数的不确定性。
            </p>
          </div>
        </div>

        <div class="flex flex-row-reverse items-start">
          <img
            class="ml-2 h-8 w-8 rounded-full"
            src="https://dummyimage.com/128x128/354ea1/ffffff&text=O"
          />

          <div
            class="flex min-h-[85px] rounded-b-xl rounded-tl-xl bg-slate-50 p-4 dark:bg-slate-800 sm:min-h-0 sm:max-w-md md:max-w-2xl"
          >
            <p>如何利用敏感性分析结果优化水文模型？ <br /></p>
          </div>
        </div>
        <div class="flex items-start">
          <img class="mr-2 h-8 w-8 rounded-full" src="@/assets/IME_logo.png" />
          <div
            class="flex rounded-b-xl rounded-tr-xl bg-slate-50 p-4 dark:bg-slate-800 sm:max-w-md md:max-w-2xl"
          >
            <p>
              根据敏感性分析结果，可以识别对模型输出影响较大的参数，然后针对这些参数进行优化。可以使用全局优化算法（如粒子群优化、遗传算法等）对模型参数进行搜索，以找到使模型输出与观测数据最佳匹配的参数组合。此外，还可以使用局部优化算法（如牛顿法、拟牛顿法等）对敏感参数进行微调，以提高模型的预测精度。
            </p>
          </div>
        </div>

        <div class="flex flex-row-reverse items-start">
          <img
            class="ml-2 h-8 w-8 rounded-full"
            src="https://dummyimage.com/128x128/354ea1/ffffff&text=O"
          />

          <div
            class="flex min-h-[85px] rounded-b-xl rounded-tl-xl bg-slate-50 p-4 dark:bg-slate-800 sm:min-h-0 sm:max-w-md md:max-w-2xl"
          >
            <p>如何解释敏感性分析结果以提高模型的可靠性？ <br /></p>
          </div>
        </div>
        <div class="flex items-start">
          <img class="mr-2 h-8 w-8 rounded-full" src="@/assets/IME_logo.png" />
          <div
            class="flex rounded-b-xl rounded-tr-xl bg-slate-50 p-4 dark:bg-slate-800 sm:max-w-md md:max-w-2xl"
          >
            <p>
              敏感性分析结果可以帮助我们了解模型参数对模型输出的影响程度。通过分析敏感性指数和敏感性图，可以识别关键参数，从而为模型参数的优化和不确定性分析提供依据。此外，敏感性分析结果还可以用于评估模型的不确定性，为模型结果的可靠性提供依据。通过综合考虑敏感性分析结果和其他模型评估指标（如预测误差、模型稳定性等），可以提高模型的可靠性。
            </p>
          </div>
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
</script>
<style scoped></style>
