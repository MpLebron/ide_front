<template>
  <div>
    <div
      class="bg-image"
      style="display: flex; justify-content: center; align-items: center"
    >
      <div style="width: 40%">
        <h1 style="font-size: 50px; color: white; margin-bottom: 120px">
          智能建模环境
        </h1>
        <h3 class="subTitle" style="font-size: 25px; color: white">
          地理建模知识及经验聚合
        </h3>
        <h3 class="subTitle" style="font-size: 25px; color: white">
          地理智能推理计算引擎搭建
        </h3>
        <h3 class="subTitle" style="font-size: 25px; color: white">
          知识数据双驱动的迭代交互式地理建模与模拟
        </h3>

        <el-button
          class="inline-flex text-xl items-center gap-x-2 rounded-md bg-blue-600 px-5 py-5 text-center font font-normal text-slate-50 hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-300"
          ><a @click="scrollTo('#demos')">查看案例</a></el-button
        >
      </div>
      <homePageQA
        style="width: 40%"
        class="border hover:border-dotted border-4 border-white rounded-2xl"
      ></homePageQA>
    </div>
    <div id="demos" class="demos" style="height: 100vh">
      <h1 style="font-size: xx-large">基于OpenGMS-IDE开展的智能建模案例</h1>
      <h3 style="font-size: larger">我是这个案例的描述诶</h3>
      <el-row justify="space-around">
        <el-col
          v-for="(item, index) in demos"
          :key="index"
          :span="6"
          :offset="0"
        >
          <!-- component -->
          <div
            class="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg hover:border-indigo-300 border"
          >
            <div
              class="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40"
            >
              <img :src="item.imageUrl" class="object-cover w-full h-48" />
              <div
                class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent"
              ></div>
              <button
                class="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              ></button>
            </div>
            <div class="p-5">
              <div class="mb-3 flex items-center justify-between">
                <h5
                  class="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased"
                >
                  {{ item.title }}
                </h5>
              </div>
              <p
                class="block float-left font-sans text-base font-light leading-relaxed text-justify text-gray-700 antialiased"
                style="text-align: left"
              >
                {{ item.description }}
              </p>
            </div>
            <div class="p-6 pt-3">
              <a
                class="w-full inline-flex items-center justify-center gap-x-2 rounded-md bg-blue-600 px-3 py-2 text-medium font-medium text-slate-50 hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-300"
                :href="item.url"
                >查看</a
              >
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {} from 'vue';
import homePageQA from '@/components/qaDemo/homePageQA.vue';

const demos = [
  {
    imageUrl: require('@/assets/demo1.png'),
    title: '渭河流域SWAT模型参数敏感性分析',
    description:
      '渭河流域SWAT模型参数敏感性分析是一种基于人工智能技术的智能服务代理，它能够根据用户的需求，自动完成建模任务，为用户提供智能化的地理建模服务。',
    url: '/swatSA',
  },
  {
    imageUrl: require('@/assets/demo3.png'),
    title: '流域集合预报模型使用案例',
    description:
      '流域集合预报模型是一种基于人工智能技术的智能服务代理，它能够根据用户的需求，自动完成建模任务，为用户提供智能化的建模服务，我是一段很长的文字。',
    url: '/hydroForecast',
  },
  {
    imageUrl: require('@/assets/demo2.png'),
    title: '长三角区域创新指数评估',
    description:
      '一种评估长三角地区创新能力和创新水平的方法。评估长三角地区在科技创新、产业创新、人才创新等方面的表现和潜力。这有助于推动长三角地区的创新发展。',
    url: '/areaInnovation',
  },
];

const scrollTo = (selector: string) => {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

.bg-image {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),
    url('@/assets/bgPic.jpg');
  background-size: cover;
  width: 100%;
  height: 100vh;
}

.demos {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),
    url('@/assets/bgPic.jpg');
  background-size: cover;
  width: 100%;
  color: white;
}

.demos > * {
  margin: auto;
  text-align: center;
}

.demos > *:first-child {
  padding-top: 10vh;
  padding-bottom: 5vh;
}

.demos > *:last-child {
  padding-top: 7vh;
}

.subTitle {
  margin: 40px 0;
}
</style>
