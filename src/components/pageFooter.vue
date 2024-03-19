<template>
  <div>
    <footer class="bg-black">
      <div class="container px-6 py-12 mx-auto">
        <div
          class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-5"
        >
          <div class="sm:col-span-2">
            <h1
              class="max-w-lg text-xl font-semibold tracking-tight text-white"
            >
              订阅OpenGMS
            </h1>

            <div
              class="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row"
            >
              <input
                id="email"
                type="text"
                class="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                placeholder="邮箱地址"
              />

              <button
                class="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
              >
                提交
              </button>
            </div>
          </div>

          <div>
            <p class="font-semibold text-white">OpenGMS系统</p>

            <div class="flex flex-col items-start mt-5 space-y-2">
              <a
                href="https://geomodeling.njnu.edu.cn/"
                class="text-white transition-colors duration-300 hover:underline hover:text-blue-500"
                >OpenGMS门户</a
              >
              <a
                href="#"
                class="text-white transition-colors duration-300 hover:underline hover:text-blue-500"
                >地理问题求解平台</a
              >
              <a
                href="#"
                class="text-white transition-colors duration-300 hover:underline hover:text-blue-500"
                >模型比较平台</a
              >
              <a
                href="#"
                class="text-white transition-colors duration-300 hover:underline hover:text-blue-500"
                >长三角虚拟地理实验平台</a
              >
              <a
                href="#"
                class="text-white transition-colors duration-300 hover:underline hover:text-blue-500"
                >参与式地理建模平台</a
              >
              <a
                href="#"
                class="text-white transition-colors duration-300 hover:underline hover:text-blue-500"
                >地理模拟可复现平台</a
              >
            </div>
          </div>

          <div>
            <p class="font-semibold text-white">在线工具</p>

            <div class="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                class="text-white transition-colors duration-300 hover:underline hover:text-blue-500"
                >模型服务容器</a
              >
              <a
                href="#"
                class="text-white transition-colors duration-300 hover:underline hover:text-blue-500"
                >数据服务容器</a
              >
            </div>
          </div>

          <div>
            <p class="font-semibold text-white">关于我们</p>

            <div class="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                class="text-white transition-colors duration-30hover:underline hover:text-blue-500"
                >关于OpenGMS</a
              >
              <a
                href="#"
                class="text-white transition-colors duration-30hover:underline hover:text-blue-500"
                >加入我们</a
              >
              <a
                href="#"
                class="text-white transition-colors duration-30hover:underline hover:text-blue-500"
                >邮箱:opengms@njnu.edu.cn</a
              >
              <a
                href="#"
                class="text-white transition-colors duration-30hover:underline hover:text-blue-500"
                >微信公众号: VGETeam</a
              >
            </div>
          </div>
        </div>

        <hr class="my-6 border-gray-200 md:my-8 dark:border-gray-700" />

        <div class="flex items-center justify-between">
          <a href="#">
            <img class="w-auto h-7" src="@/assets/OpenGMS.png" alt="" />
          </a>

          <div class="flex -mx-2 font-semibold text-white">OpenGMS-IDE</div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import {} from 'vue';
</script>
<style scoped></style>
