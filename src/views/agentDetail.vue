<template>
  <div class="agentDetail" style="margin: 40px 0">
    <div class="agentInfo">
      <div class="avatar">
        <img src="@/assets/geoAgents/sensityvityAnalysis.jpeg" />
      </div>
      <div>敏感性分析智能体</div>
      <selection>
        <div class="provider">&nbsp; @OpenGMS &nbsp;</div>
      </selection>
    </div>
    <div
      class="agentDesc rounded-2xl shadow-xl"
      style="border: 1px solid #ececf1"
    >
      <div class="px-4 sm:px-0 rounded" style="padding: 30px">
        <h3 class="text-base font-semibold leading-7 text-gray-900">
          敏感性分析智能体
        </h3>
      </div>
      <div class="mt-6 border-t border-gray-100" style="padding: 0 30px">
        <dl class="divide-y divide-gray-100">
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-900">描述</dt>
            <dd
              class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
            >
              这个助手是一个参数敏感性分析助手，用于帮助用户分析参数对系统模型的影响程度。它提供了一种直观的方式来理解参数的重要性和敏感性。通过使用该助手，用户可以更好地了解系统模型的行为，并做出相应的决策。
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-900">
              访问权限
            </dt>
            <dd
              class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
            >
              公开
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-900">唤起词</dt>
            <dd
              class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
            >
              我是地理分析模型参数敏感性分析助手，搭载全面的知识体系。您可以这样问我：
              - "在水文模型中，如何量化参数的相对敏感性？" <br />
              - "如何选择适当的敏感性分析方法？"<br />
              - "如何评估水文模型的不确定性？"<br />
              - "如何利用敏感性分析结果优化水文模型？"<br />
              - "如何解释敏感性分析结果以提高模型的可靠性？"<br />
              无论您对地理信息模型的哪个方面感兴趣，我都将尽力为您提供有关参数敏感性分析的相关信息。
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-900">
              大模型基座
            </dt>
            <dd
              class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
            >
              gpt-3.5-turbo-0613
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-900">
              可用工具
            </dt>
            <dd
              class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
            >
              <el-check-tag checked style="margin-right: 8px"
                >联网查找</el-check-tag
              >
              <el-check-tag checked style="margin-right: 8px"
                >私有知识库查询</el-check-tag
              >
              <el-check-tag checked style="margin-right: 8px"
                >专家知识约束</el-check-tag
              >
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-900">思维链</dt>
            <dd
              class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
            >
              <div class="px-2 py-4">
                <label
                  class="relative flex cursor-pointer items-center"
                  style="cursor: not-allowed"
                >
                  <input
                    type="checkbox"
                    value=""
                    class="peer sr-only"
                    style=""
                  />
                  <div
                    class="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:border-slate-600 dark:bg-slate-700 dark:peer-focus:ring-blue-800"
                  ></div>
                  <span
                    class="ml-3 text-sm font-medium text-slate-800 dark:text-slate-200"
                    >开启</span
                  >
                </label>
              </div>
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-900">
              知识增强数据集
            </dt>
            <dd class="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul
                role="list"
                class="divide-y divide-gray-100 rounded-md border border-gray-200"
              >
                <li
                  class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6"
                >
                  <div class="flex w-0 flex-1 items-center">
                    <PaperClipIcon
                      class="h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <div class="ml-4 flex min-w-0 flex-1 gap-2">
                      <span class="truncate font-medium"
                        >全局敏感性分析.pdf</span
                      >
                      <span class="flex-shrink-0 text-gray-400">2.4mb</span>
                    </div>
                  </div>
                  <div class="ml-4 flex-shrink-0">
                    <a
                      href="#"
                      class="font-medium text-indigo-600 hover:text-indigo-500"
                      >下载</a
                    >
                  </div>
                </li>
                <li
                  class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6"
                >
                  <div class="flex w-0 flex-1 items-center">
                    <PaperClipIcon
                      class="h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <div class="ml-4 flex min-w-0 flex-1 gap-2">
                      <span class="truncate font-medium"
                        >敏感性分析与概率分析.pdf</span
                      >
                      <span class="flex-shrink-0 text-gray-400">4.5mb</span>
                    </div>
                  </div>
                  <div class="ml-4 flex-shrink-0">
                    <a
                      href="#"
                      class="font-medium text-indigo-600 hover:text-indigo-500"
                      >下载</a
                    >
                  </div>
                </li>
                <li
                  class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6"
                >
                  <div class="flex w-0 flex-1 items-center">
                    <PaperClipIcon
                      class="h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <div class="ml-4 flex min-w-0 flex-1 gap-2">
                      <span class="truncate font-medium"
                        >SWAT-CUP2012理论与操作.pdf</span
                      >
                      <span class="flex-shrink-0 text-gray-400">5.4mb</span>
                    </div>
                  </div>
                  <div class="ml-4 flex-shrink-0">
                    <a
                      href="https://gitee.com/MpLebron/my-data-repo/raw/master/pdf/SWAT-CUP2012%E7%90%86%E8%AE%BA%E5%8F%8A%E6%93%8D%E4%BD%9C(%E8%8B%B1%E6%96%87).pdf"
                      class="font-medium text-indigo-600 hover:text-indigo-500"
                      >下载</a
                    >
                  </div>
                </li>
              </ul>
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-900">
              问答案例
            </dt>
            <dd class="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul
                role="list"
                class="divide-y divide-gray-100 rounded-md border border-gray-200"
              >
                <li
                  class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6"
                >
                  <div class="flex w-0 flex-1 items-center">
                    <div class="ml-4 flex min-w-0 flex-1 gap-2">
                      <span class="truncate font-medium">问答案例1</span>
                    </div>
                  </div>
                  <div class="ml-4 flex-shrink-0">
                    <a
                      href="qapage"
                      class="font-medium text-indigo-600 hover:text-indigo-500"
                      >查看</a
                    >
                  </div>
                </li>
                <li
                  class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6"
                >
                  <div class="flex w-0 flex-1 items-center">
                    <div class="ml-4 flex min-w-0 flex-1 gap-2">
                      <span class="truncate font-medium">问答案例2</span>
                    </div>
                  </div>
                  <div class="ml-4 flex-shrink-0">
                    <a
                      href="qapage"
                      class="font-medium text-indigo-600 hover:text-indigo-500"
                      >查看</a
                    >
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {} from 'vue';
import { PaperClipIcon } from '@heroicons/vue/24/solid';
</script>
<style scoped>
.agentInfo {
  height: 345px;
  width: 468px;
  border-radius: 8px;
  background: linear-gradient(180deg, #e8f3ff 0%, #fafcff 54.03%);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: #1d2129;
  font-size: 16px;
  font-weight: 600;
}

.avatar {
  margin-top: 50px;
  margin-bottom: 8px;
  width: 150px;
  height: 150px;
  border-radius: 8px;
  overflow: hidden;
}

.provider {
  background-color: rgb(231, 245, 255);
  color: rgb(22, 93, 255);
  border-radius: 50px;
  font-weight: 500;
}

.agentDetail {
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  padding: 0 30px;
}

img {
  transition: all 0.2s ease-in-out;
}

img:hover {
  transform: scale(1.1);
}
</style>
