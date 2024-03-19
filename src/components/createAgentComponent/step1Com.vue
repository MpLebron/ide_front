<template>
  <form>
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">
          智能体基本信息
        </h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">
          该信息指导该智能体的基本行为准则。
        </p>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-2">
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900"
              >名称</label
            >
            <div class="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                class="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="请输入智能体名称"
              />
            </div>
          </div>
        </div>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label
              for="country"
              class="block text-sm font-medium leading-6 text-gray-900"
              >所属建模阶段</label
            >
            <div class="mt-2">
              <select
                id="simStage"
                name="simStage"
                autocomplete="country-name"
                class="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option>模拟方案讨论</option>
                <option>模型数据处理</option>
                <option>模型构建</option>
                <option>模型参数配置</option>
                <option>模拟结果分析</option>
                <option>模型优化</option>
              </select>
            </div>
          </div>
        </div>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="col-span-full">
            <label
              for="about"
              class="block text-sm font-medium leading-6 text-gray-900"
              >角色唤醒词</label
            >
            <div class="mt-2">
              <textarea
                id="about"
                name="about"
                rows="3"
                class="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="请以“我是”开头对角色进行定义和描述，例如角色“猪八戒”的描述为，“我是猪八戒，是古典名著《西游记》中的角色，原是天庭玉皇大帝手下的天蓬元帅，主管天河，因醉酒调戏嫦娥被玉皇大帝逐出天界，到人间投胎，变成小猪。”"
              />
            </div>
          </div>

          <div class="col-span-full">
            <label
              for="cover-photo"
              class="block text-sm font-medium leading-6 text-gray-900"
              >封面</label
            >
            <div
              class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
            >
              <div class="text-center">
                <PhotoIcon
                  class="mx-auto h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <!-- <img
                  src="@/assets/geoAgents/RSData.jpeg"
                  alt=""
                  style="width: 100px; height: 100px"
                /> -->

                <div class="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    for="file-upload"
                    class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>上传一张封面</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      class="sr-only"
                    />
                  </label>
                </div>
                <p class="text-xs leading-5 text-gray-600">
                  PNG, JPG &lt; 10MB
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">
          模型基座
        </h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">
          影响单轮对话的质量及多轮对话的推理效果
        </p>

        <div class="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label
              for="country"
              class="block text-sm font-medium leading-6 text-gray-900"
              >大模型</label
            >
            <div class="mt-2">
              <select
                id="simStage"
                name="simStage"
                autocomplete="country-name"
                class="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option>GPT 3.5</option>
                <option>GPT 4</option>
              </select>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label
              for="country"
              class="block text-sm font-medium leading-6 text-gray-900"
              >模型版本</label
            >
            <div class="mt-2">
              <select
                id="simStage"
                name="simStage"
                autocomplete="country-name"
                class="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option>GPT-3.5-turbo</option>
                <option>GPT-3.5-turbo-16k</option>
                <option>GPT-3.5-turbo-0613</option>
                <option>GPT-3.5-turbo-16k-0613</option>
              </select>
            </div>
          </div>
        </div>

        <div class="mt-10 space-y-10">
          <fieldset>
            <legend class="text-sm font-semibold leading-6 text-gray-900">
              思维链
            </legend>
            <p class="mt-1 text-sm leading-6 text-gray-600">
              思维链（CoT）是一种改进的提示策略，用于提高 LLM
              在复杂推理任务中的性能。
            </p>
            <div class="mt-6">
              <el-radio-group v-model="radio">
                <el-radio :label="3">Few Shot</el-radio>
                <el-radio :label="6">Lest to Most</el-radio>
                <el-radio :label="9">Self Consistency</el-radio>
              </el-radio-group>
            </div>
          </fieldset>
        </div>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button
        type="button"
        class="text-sm font-semibold leading-6 text-gray-900"
      >
        取消
      </button>
      <el-button
        class="inline-flex items-center gap-x-2 rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-medium text-slate-50 hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-300"
        >保存</el-button
      >
    </div>
  </form>
</template>

<script lang="ts" setup>
import { PhotoIcon } from '@heroicons/vue/24/solid';
import { ref } from 'vue';
const radio = ref(3);
</script>

<style scoped></style>
