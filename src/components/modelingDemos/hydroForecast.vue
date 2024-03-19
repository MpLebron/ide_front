<template>
  <div class="common-layout" style="margin: 5px 5px">
    <el-container>
      <el-aside width="300px" class="h-[90vh] rounded-[5px]">
        <div class="flex flex-col justify-center items-center bg">
          <div
            class="relative flex max-w-[500px] w-full flex-col rounded-[5px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3]"
          >
            <div
              class="!z-5 relative flex h-full w-full flex-col rounded-[5px] bg-slate-300 bg-clip-border p-3 shadow-3xl shadow-shadow-500"
            >
              <div class="mb-2 w-full">
                <h4 class="text-xl font-bold text-navy-700 dark:text-white">
                  智能建模引擎
                </h4>
              </div>
              <div>
                <p class="mb-1 text-base text-gray-600">推理集合</p>
                <button
                  class="flex w-full items-center justify-between rounded-md bg-white p-2 mb-3 shadow-3xl shadow-shadow-500 hover:border-indigo-300 border"
                >
                  <div class="flex items-center">
                    <div class="">
                      <img
                        class="h-12 w-12 rounded-full"
                        src="https://geomodeling.njnu.edu.cn/static/modelItem///////////5299fa74-0d3a-4cd5-a005-d2613b0b51f9.jpg"
                        alt=""
                      />
                    </div>
                    <div class="ml-4">
                      <p class="text-sm font-medium text-navy-700">
                        流域集合预报推理
                      </p>
                    </div>
                  </div>
                </button>

                <button
                  class="flex w-full items-center justify-between rounded bg-white p-2 mb-3 shadow-3xl shadow-shadow-500 hover:border-indigo-300 border"
                >
                  <div class="flex items-center">
                    <div class="">
                      <img
                        class="h-12 w-12 rounded-full"
                        src="@/assets/geoAgents/水文.jpeg"
                        alt=""
                      />
                    </div>
                    <div class="ml-4">
                      <p class="text-sm font-medium text-navy-700">
                        水文模型推理
                      </p>
                    </div>
                  </div>
                </button>

                <button
                  class="flex w-full items-center justify-between rounded bg-white p-2 mb-3 shadow-3xl shadow-shadow-500 hover:border-indigo-300 border"
                >
                  <div class="flex items-center">
                    <div class="">
                      <img
                        class="h-12 w-12 rounded-full"
                        src="https://inews.gtimg.com/newsapp_bt/0/14253063249/1000"
                        alt=""
                      />
                    </div>
                    <div class="ml-4">
                      <p class="text-sm font-medium text-navy-700">
                        水文后处理推理
                      </p>
                    </div>
                  </div>
                </button>
              </div>
              <div>
                <p class="mb-1 text-base text-gray-600">工具集合</p>
                <button
                  class="flex w-full items-center justify-between rounded bg-white p-2 mb-3 shadow-3xl shadow-shadow-500 hover:border-indigo-300 border"
                >
                  <div class="flex items-center">
                    <div class="">
                      <svg
                        t="1699327082559"
                        class="icon h-12 w-12 rounded-full"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="1499"
                        width="200"
                        height="200"
                      >
                        <path
                          d="M768 1024v-85.333333h170.666667v-170.666667h85.333333v256h-256z m170.666667-938.666667h-170.666667V0h256v256h-85.333333V85.333333z m-231.253334 562.346667l113.066667 112.853333-60.586667 60.330667-112.64-112.853333a303.402667 303.402667 0 1 1 60.16-60.330667zM469.333333 255.658667A213.674667 213.674667 0 1 0 683.093333 469.333333 213.632 213.632 0 0 0 469.333333 255.658667zM85.333333 256H0V0h256v85.333333H85.333333v170.666667z m0 682.666667h170.666667v85.333333H0v-256h85.333333v170.666667z"
                          fill="#546176"
                          p-id="1500"
                        ></path>
                      </svg>
                    </div>
                    <div class="ml-4">
                      <p class="text-sm font-medium text-navy-700">
                        OpenGMS资源检索
                      </p>
                    </div>
                  </div>
                </button>

                <button
                  class="flex w-full items-center justify-between rounded bg-white p-2 mb-3 shadow-3xl shadow-shadow-500 hover:border-indigo-300 border"
                >
                  <div class="flex items-center">
                    <div class="">
                      <img
                        class="h-12 w-12 rounded-full"
                        src="https://img2.baidu.com/it/u=2204530127,4067186909&fm=253&fmt=auto&app=138&f=JPG?w=360&h=201"
                        alt=""
                      />
                    </div>
                    <div class="ml-4">
                      <p class="text-sm font-medium text-navy-700">
                        气象后处理
                      </p>
                    </div>
                  </div>
                </button>

                <button
                  class="flex w-full items-center justify-between rounded bg-white p-2 mb-3 shadow-3xl shadow-shadow-500 hover:border-indigo-300 border"
                >
                  <div class="flex items-center">
                    <div class="">
                      <svg
                        t="1699327221671"
                        class="icon h-12 w-12 rounded-full"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="7183"
                        width="200"
                        height="200"
                      >
                        <path
                          d="M512 512m-448 0a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z"
                          fill="#55A7F7"
                          p-id="7184"
                        ></path>
                        <path
                          d="M256 256m64 0l384 0q64 0 64 64l0 384q0 64-64 64l-384 0q-64 0-64-64l0-384q0-64 64-64Z"
                          fill="#E2BF7A"
                          p-id="7185"
                        ></path>
                        <path
                          d="M332 302h360v420H332z"
                          fill="#FFFFFF"
                          p-id="7186"
                        ></path>
                        <path
                          d="M322 342h380v360H322z"
                          fill="#E9EBF1"
                          p-id="7187"
                        ></path>
                        <path
                          d="M302 382h420v300H302z"
                          fill="#FFFFFF"
                          p-id="7188"
                        ></path>
                        <path
                          d="M282 422h460v300H282z"
                          fill="#E9EBF1"
                          p-id="7189"
                        ></path>
                        <path
                          d="M768 412.192V704c0 35.346-28.654 64-64 64H320c-35.346 0-64-28.654-64-64V412.187a32 32 0 0 0 15.27 27.278C380.543 506.488 460.787 540 512 540c51.212 0 131.456-33.512 240.73-100.535A32 32 0 0 0 768 412.192z"
                          fill="#FFD786"
                          p-id="7190"
                        ></path>
                        <path
                          d="M512 604m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                          fill="#CBA559"
                          p-id="7191"
                        ></path>
                      </svg>
                    </div>
                    <div class="ml-4">
                      <p class="text-sm font-medium text-navy-700">文件读写</p>
                    </div>
                  </div>
                </button>
              </div>

              <div>
                <p class="mb-1 text-base text-gray-600">知识集合</p>
                <button
                  class="flex w-full items-center justify-between rounded bg-white p-2 mb-3 shadow-3xl shadow-shadow-500 hover:border-indigo-300 border"
                >
                  <div class="flex items-center">
                    <div class="">
                      <svg
                        t="1699327292979"
                        class="icon h-12 w-12 rounded-full"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="12290"
                        width="200"
                        height="200"
                      >
                        <path
                          d="M704 0H192c-35.328 0-64 28.672-64 64v320h576c35.328 0 64 28.672 64 64v415.744c0 35.328-28.672 64-64 64H128v31.744c0 35.328 28.672 64 64 64h768c35.328 0 64-28.672 64-64v-640L704 0z"
                          fill="#EAEAEA"
                          p-id="12291"
                        ></path>
                        <path
                          d="M704 0v256c0 35.328 28.672 64 64 64h256L704 0z"
                          fill="#434854"
                          p-id="12292"
                        ></path>
                        <path
                          d="M768 320l256 256V320z"
                          opacity=".1"
                          p-id="12293"
                        ></path>
                        <path
                          d="M704 832c0 17.92-14.336 31.744-31.744 31.744H31.744C13.824 863.744 0 849.408 0 832V480.256c0-17.92 14.336-31.744 31.744-31.744h640c17.92 0 31.744 14.336 31.744 31.744V832z"
                          fill="#CD4050"
                          p-id="12294"
                        ></path>
                        <path
                          d="M192 544.256h-48.128c-8.704 0-15.872 7.168-15.872 15.872v192c0 8.704 7.168 15.872 15.872 15.872s15.872-7.168 15.872-15.872v-79.872h31.744c35.328 0 64-28.672 64-64s-28.16-64-63.488-64z m158.72 0c34.816 0 62.976 27.648 64 62.464v97.792c0 34.816-27.648 62.976-62.464 64h-49.664c-8.704 0-15.36-6.656-15.872-14.848V560.64c0-8.704 6.656-15.36 14.848-15.872h49.152z m227.328 0c8.704 0 15.872 7.168 15.872 15.872S586.752 576 578.048 576h-80.384v64h48.128c8.704 0 15.872 7.168 15.872 15.872s-7.168 15.872-15.872 15.872h-48.128v79.872c0 8.704-7.168 15.872-15.872 15.872s-15.872-7.168-15.872-15.872v-192c0-8.704 7.168-15.872 15.872-15.872h96.256zM350.72 576h-31.744v159.744h31.744c17.408 0 31.232-13.824 31.744-30.72v-97.28C382.976 590.336 368.64 576 350.72 576zM192 576c17.92 0 31.744 14.336 31.744 31.744S209.92 640 192 640h-31.744v-64H192z"
                          fill="#FFFFFF"
                          p-id="12295"
                        ></path>
                      </svg>
                    </div>
                    <div class="ml-4">
                      <p class="text-sm font-medium text-navy-700">
                        水文集合预报概述.pdf
                      </p>
                    </div>
                  </div>
                </button>

                <button
                  class="flex w-full items-center justify-between rounded bg-white p-2 mb-3 shadow-3xl shadow-shadow-500 hover:border-slate-600 border"
                >
                  <div class="flex items-center">
                    <div class="">
                      <svg
                        t="1699327292979"
                        class="icon h-12 w-12 rounded-full"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="12290"
                        width="200"
                        height="200"
                      >
                        <path
                          d="M704 0H192c-35.328 0-64 28.672-64 64v320h576c35.328 0 64 28.672 64 64v415.744c0 35.328-28.672 64-64 64H128v31.744c0 35.328 28.672 64 64 64h768c35.328 0 64-28.672 64-64v-640L704 0z"
                          fill="#EAEAEA"
                          p-id="12291"
                        ></path>
                        <path
                          d="M704 0v256c0 35.328 28.672 64 64 64h256L704 0z"
                          fill="#434854"
                          p-id="12292"
                        ></path>
                        <path
                          d="M768 320l256 256V320z"
                          opacity=".1"
                          p-id="12293"
                        ></path>
                        <path
                          d="M704 832c0 17.92-14.336 31.744-31.744 31.744H31.744C13.824 863.744 0 849.408 0 832V480.256c0-17.92 14.336-31.744 31.744-31.744h640c17.92 0 31.744 14.336 31.744 31.744V832z"
                          fill="#CD4050"
                          p-id="12294"
                        ></path>
                        <path
                          d="M192 544.256h-48.128c-8.704 0-15.872 7.168-15.872 15.872v192c0 8.704 7.168 15.872 15.872 15.872s15.872-7.168 15.872-15.872v-79.872h31.744c35.328 0 64-28.672 64-64s-28.16-64-63.488-64z m158.72 0c34.816 0 62.976 27.648 64 62.464v97.792c0 34.816-27.648 62.976-62.464 64h-49.664c-8.704 0-15.36-6.656-15.872-14.848V560.64c0-8.704 6.656-15.36 14.848-15.872h49.152z m227.328 0c8.704 0 15.872 7.168 15.872 15.872S586.752 576 578.048 576h-80.384v64h48.128c8.704 0 15.872 7.168 15.872 15.872s-7.168 15.872-15.872 15.872h-48.128v79.872c0 8.704-7.168 15.872-15.872 15.872s-15.872-7.168-15.872-15.872v-192c0-8.704 7.168-15.872 15.872-15.872h96.256zM350.72 576h-31.744v159.744h31.744c17.408 0 31.232-13.824 31.744-30.72v-97.28C382.976 590.336 368.64 576 350.72 576zM192 576c17.92 0 31.744 14.336 31.744 31.744S209.92 640 192 640h-31.744v-64H192z"
                          fill="#FFFFFF"
                          p-id="12295"
                        ></path>
                      </svg>
                    </div>
                    <div class="ml-4">
                      <p class="text-sm font-medium text-navy-700">
                        流域汇流计算模型.pdf
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </el-aside>
      <el-main><hydroForestQA> </hydroForestQA></el-main>
      <el-aside width="350px" class="h-[90vh]">
        <div
          class="relative flex p-2 w-full flex-col rounded-[5px] border-[1px] border-gray-200 bg-slate-300 bg-clip-border shadow-md shadow-[#F3F3F3]"
        >
          <div class="mb-2 w-full">
            <h4 class="text-xl font-bold text-navy-700 dark:text-white">
              关联资源
            </h4>
          </div>
          <div class="flex space-x-4">
            <div
              class="w-40 p-2 bg-white rounded shadow-md transform hover:scale-[1.02] transition-transform duration-300 ease-in-out"
            >
              <img
                class="w-30 h-30 rounded-t-lg"
                alt="Card Image"
                src="@/assets/GHFS.png"
              />
              <div class="p-4">
                <h2 class="text-sm font-semibold">平台资源：GHFS</h2>

                <div class="flex justify-between items-center mt-4">
                  <button
                    type="submit"
                    class="rounded-lg bg-blue-700 px-3 py-1 text-sm font-medium text-slate-200 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    <a
                      href="https://geomodeling.njnu.edu.cn/computableModel/16e31602-bd05-4da4-bd01-cb7582c21ae8"
                      target="_blank"
                      >跳转</a
                    >
                  </button>
                </div>
              </div>
            </div>
            <div
              class="w-40 p-2 bg-white rounded shadow-md transform hover:scale-[1.02] transition-transform duration-300 ease-in-out"
            >
              <img
                class="w-30 h-30 object-cover rounded-t-lg"
                alt="Card Image"
                src="https://geomodeling.njnu.edu.cn/static/modelItem///////////5299fa74-0d3a-4cd5-a005-d2613b0b51f9.jpg"
              />
              <div class="p-4">
                <h2 class="text-sm font-semibold">
                  模型资源：水文后处理工具包
                </h2>

                <div class="flex justify-between items-center mt-4">
                  <button
                    type="submit"
                    class="rounded-lg bg-blue-700 px-3 py-1 text-sm font-medium text-slate-200 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    <a
                      href="https://geomodeling.njnu.edu.cn/computableModel/16e31602-bd05-4da4-bd01-cb7582c21ae8"
                      target="_blank"
                      >跳转</a
                    >
                  </button>
                </div>
              </div>
            </div>
            <br />
          </div>
          <br />
          <div class="flex space-x-4">
            <div
              class="w-40 p-2 bg-white rounded shadow-md transform hover:scale-[1.02] transition-transform duration-300 ease-in-out"
            >
              <img
                class="w-30 h-30 object-cover rounded-t-lg"
                alt="Card Image"
                src="https://geomodeling.njnu.edu.cn/YangtzeVGLabBack/store/resourceData/62f4785da5c5809f99a9b783.png"
              />

              <div class="p-1">
                <h2 class="text-sm font-semibold">
                  数据资源：长三角降雨数据（2009-2010）
                </h2>

                <div class="flex justify-between items-center mt-4">
                  <button
                    type="submit"
                    class="rounded-lg bg-blue-700 px-3 py-1 text-sm font-medium text-slate-200 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    <a
                      href="https://geomodeling.njnu.edu.cn/YangtzeVGLab/#/resourse?searchValue=%E9%95%BF%E4%B8%89%E8%A7%92%E9%99%8D%E9%9B%A8%E6%95%B0%E6%8D%AE%EF%BC%882009-2010%EF%BC%89"
                      target="_blank"
                      >预览</a
                    >
                  </button>
                </div>
              </div>
            </div>
            <div
              class="w-40 p-2 bg-white rounded shadow-md transform hover:scale-[1.02] transition-transform duration-300 ease-in-out"
            >
              <div class="flex justify-center">
                <img
                  class="w-30 h-30 object-cover rounded-t-lg"
                  alt="Card Image"
                  src="https://geomodeling.njnu.edu.cn/YangtzeVGLabBack/store/resourceData/62f4c82fa5c5628f4d970543.png"
                />
              </div>

              <div class="p-4">
                <h2 class="text-sm font-semibold">数据资源：全国水系数据</h2>

                <div class="flex justify-between items-center mt-4">
                  <button
                    type="submit"
                    class="rounded-lg bg-blue-700 px-3 py-1 text-sm font-medium text-slate-200 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    <a
                      href="https://geomodeling.njnu.edu.cn/YangtzeVGLab/#/resourse?searchValue=%E5%85%A8%E5%9B%BD%E6%B0%B4%E7%B3%BB%E6%95%B0%E6%8D%AE"
                      target="_blank"
                      >预览</a
                    >
                  </button>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </el-aside>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import {} from 'vue';
import hydroForestQA from '@/components/modelingDemos/hydroForestQA.vue';
</script>
<style scoped>
.el-main {
  --el-main-padding: 2px;
}
</style>
