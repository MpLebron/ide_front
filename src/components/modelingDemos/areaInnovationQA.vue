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
            <p>我想要评价一下长三角区域的创新发展情况。<br /></p>
          </div>
        </div>
        <div class="flex items-start">
          <img class="mr-2 h-8 w-8 rounded-full" src="@/assets/IME_logo.png" />
          <div
            class="flex rounded-b-xl rounded-tr-xl bg-slate-50 p-4 dark:bg-slate-800 sm:max-w-md md:max-w-2xl"
          >
            <div>
              长三角区域，包括上海市、江苏省、浙江省和安徽省的部分地区，是中国最重要的经济区域之一，同时也是科技创新的重要中心。以下是一些关于长三角区域科技创新的关键点：
              <br />
              科技创新中心建设：上海作为长三角的核心城市，被定位为全球科技创新中心。这里聚集了大量的研发机构、创新企业和高等教育机构。
              <br />
              产业集群：长三角区域拥有多个高科技产业集群，包括半导体、生物医药、人工智能、新能源汽车等领域。这些产业集群促进了技术创新和产业升级。
              <br />
              科研机构和高等教育：该区域拥有众多知名的科研机构和高等教育机构，如中国科学院、清华大学、复旦大学等，为科技创新提供了人才和技术支持。
              <br />
              综上所述，长三角区域在中国的科技创新中扮演着极其重要的角色，是推动中国科技进步和经济发展的重要引擎。
              <br />
              下图是长三角的地理位置：
              <img
                src="@/assets/qaPic/changsanjiao.png"
                alt=""
                style="width: 50%"
              />
            </div>
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
            <div>
              请你根据我给你的这些文件，帮我对长三角区域的创新发展做一下分析。<br />
              <button
                class="flex w-full items-center justify-between rounded-2xl bg-white border hover:border-indigo-300 p-2 mt-2 shadow-3xl shadow-shadow-500"
              >
                <div class="flex items-center">
                  <div class="">
                    <svg
                      t="1699778399518"
                      class="icon h-[30px] w-[30px]"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="6205"
                      width="200"
                      height="200"
                    >
                      <path
                        d="M682.666667 42.666667H298.666667c-25.6 0-42.666667 17.066667-42.666667 42.666666v213.333334l426.666667 213.333333 170.666666 64 170.666667-64V298.666667l-341.333333-256z"
                        fill="#21A366"
                        p-id="6206"
                      ></path>
                      <path
                        d="M256 298.666667h426.666667v213.333333H256z"
                        fill="#107C41"
                        p-id="6207"
                      ></path>
                      <path
                        d="M1024 85.333333v213.333334h-341.333333V42.666667h298.666666c21.333333 0 42.666667 21.333333 42.666667 42.666666z"
                        fill="#33C481"
                        p-id="6208"
                      ></path>
                      <path
                        d="M682.666667 512H256v426.666667c0 25.6 17.066667 42.666667 42.666667 42.666666h682.666666c25.6 0 42.666667-17.066667 42.666667-42.666666v-213.333334l-341.333333-213.333333z"
                        fill="#185C37"
                        p-id="6209"
                      ></path>
                      <path
                        d="M588.8 256H256v597.333333h324.266667c29.866667 0 59.733333-29.866667 59.733333-59.733333V307.2c0-29.866667-21.333333-51.2-51.2-51.2z"
                        opacity=".5"
                        p-id="6210"
                      ></path>
                      <path
                        d="M546.133333 810.666667H51.2C21.333333 810.666667 0 789.333333 0 759.466667V264.533333C0 234.666667 21.333333 213.333333 51.2 213.333333h499.2c25.6 0 46.933333 21.333333 46.933333 51.2v499.2c0 25.6-21.333333 46.933333-51.2 46.933334z"
                        fill="#107C41"
                        p-id="6211"
                      ></path>
                      <path
                        d="M145.066667 682.666667L256 512 153.6 341.333333h81.066667l55.466666 106.666667c8.533333 12.8 8.533333 21.333333 12.8 25.6l12.8-25.6L375.466667 341.333333h76.8l-102.4 170.666667 106.666666 170.666667h-85.333333l-64-119.466667c0-4.266667-4.266667-8.533333-8.533333-17.066667 0 4.266667-4.266667 8.533333-8.533334 17.066667L226.133333 682.666667H145.066667z"
                        fill="#FFFFFF"
                        p-id="6212"
                      ></path>
                      <path
                        d="M682.666667 512h341.333333v213.333333h-341.333333z"
                        fill="#107C41"
                        p-id="6213"
                      ></path>
                    </svg>
                  </div>
                  <div class="ml-4" style="text-align: left">
                    <p class="text-sm font-medium text-navy-700">
                      长三角城市创新力指数数据集(2019年).xlsx
                    </p>
                    <p class="mt-2 text-sm text-gray-600">17KB</p>
                  </div>
                </div>
              </button>
              <button
                class="flex w-full items-center justify-between rounded-2xl bg-white border hover:border-indigo-300 p-2 mt-2 shadow-3xl shadow-shadow-500"
              >
                <div class="flex items-center">
                  <div class="">
                    <svg
                      t="1699778399518"
                      class="icon h-[30px] w-[30px]"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="6205"
                      width="200"
                      height="200"
                    >
                      <path
                        d="M682.666667 42.666667H298.666667c-25.6 0-42.666667 17.066667-42.666667 42.666666v213.333334l426.666667 213.333333 170.666666 64 170.666667-64V298.666667l-341.333333-256z"
                        fill="#21A366"
                        p-id="6206"
                      ></path>
                      <path
                        d="M256 298.666667h426.666667v213.333333H256z"
                        fill="#107C41"
                        p-id="6207"
                      ></path>
                      <path
                        d="M1024 85.333333v213.333334h-341.333333V42.666667h298.666666c21.333333 0 42.666667 21.333333 42.666667 42.666666z"
                        fill="#33C481"
                        p-id="6208"
                      ></path>
                      <path
                        d="M682.666667 512H256v426.666667c0 25.6 17.066667 42.666667 42.666667 42.666666h682.666666c25.6 0 42.666667-17.066667 42.666667-42.666666v-213.333334l-341.333333-213.333333z"
                        fill="#185C37"
                        p-id="6209"
                      ></path>
                      <path
                        d="M588.8 256H256v597.333333h324.266667c29.866667 0 59.733333-29.866667 59.733333-59.733333V307.2c0-29.866667-21.333333-51.2-51.2-51.2z"
                        opacity=".5"
                        p-id="6210"
                      ></path>
                      <path
                        d="M546.133333 810.666667H51.2C21.333333 810.666667 0 789.333333 0 759.466667V264.533333C0 234.666667 21.333333 213.333333 51.2 213.333333h499.2c25.6 0 46.933333 21.333333 46.933333 51.2v499.2c0 25.6-21.333333 46.933333-51.2 46.933334z"
                        fill="#107C41"
                        p-id="6211"
                      ></path>
                      <path
                        d="M145.066667 682.666667L256 512 153.6 341.333333h81.066667l55.466666 106.666667c8.533333 12.8 8.533333 21.333333 12.8 25.6l12.8-25.6L375.466667 341.333333h76.8l-102.4 170.666667 106.666666 170.666667h-85.333333l-64-119.466667c0-4.266667-4.266667-8.533333-8.533333-17.066667 0 4.266667-4.266667 8.533333-8.533334 17.066667L226.133333 682.666667H145.066667z"
                        fill="#FFFFFF"
                        p-id="6212"
                      ></path>
                      <path
                        d="M682.666667 512h341.333333v213.333333h-341.333333z"
                        fill="#107C41"
                        p-id="6213"
                      ></path>
                    </svg>
                  </div>
                  <div class="ml-4" style="text-align: left">
                    <p class="text-sm font-medium text-navy-700">
                      长三角重点城市创新概况数据集(2018年).xlsx
                    </p>
                    <p class="mt-2 text-sm text-gray-600">10KB</p>
                  </div>
                </div>
              </button>
              <button
                class="flex w-full items-center justify-between rounded-2xl bg-white border hover:border-indigo-300 p-2 mt-2 shadow-3xl shadow-shadow-500"
              >
                <div class="flex items-center">
                  <div class="">
                    <svg
                      t="1699778399518"
                      class="icon h-[30px] w-[30px]"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="6205"
                      width="200"
                      height="200"
                    >
                      <path
                        d="M682.666667 42.666667H298.666667c-25.6 0-42.666667 17.066667-42.666667 42.666666v213.333334l426.666667 213.333333 170.666666 64 170.666667-64V298.666667l-341.333333-256z"
                        fill="#21A366"
                        p-id="6206"
                      ></path>
                      <path
                        d="M256 298.666667h426.666667v213.333333H256z"
                        fill="#107C41"
                        p-id="6207"
                      ></path>
                      <path
                        d="M1024 85.333333v213.333334h-341.333333V42.666667h298.666666c21.333333 0 42.666667 21.333333 42.666667 42.666666z"
                        fill="#33C481"
                        p-id="6208"
                      ></path>
                      <path
                        d="M682.666667 512H256v426.666667c0 25.6 17.066667 42.666667 42.666667 42.666666h682.666666c25.6 0 42.666667-17.066667 42.666667-42.666666v-213.333334l-341.333333-213.333333z"
                        fill="#185C37"
                        p-id="6209"
                      ></path>
                      <path
                        d="M588.8 256H256v597.333333h324.266667c29.866667 0 59.733333-29.866667 59.733333-59.733333V307.2c0-29.866667-21.333333-51.2-51.2-51.2z"
                        opacity=".5"
                        p-id="6210"
                      ></path>
                      <path
                        d="M546.133333 810.666667H51.2C21.333333 810.666667 0 789.333333 0 759.466667V264.533333C0 234.666667 21.333333 213.333333 51.2 213.333333h499.2c25.6 0 46.933333 21.333333 46.933333 51.2v499.2c0 25.6-21.333333 46.933333-51.2 46.933334z"
                        fill="#107C41"
                        p-id="6211"
                      ></path>
                      <path
                        d="M145.066667 682.666667L256 512 153.6 341.333333h81.066667l55.466666 106.666667c8.533333 12.8 8.533333 21.333333 12.8 25.6l12.8-25.6L375.466667 341.333333h76.8l-102.4 170.666667 106.666666 170.666667h-85.333333l-64-119.466667c0-4.266667-4.266667-8.533333-8.533333-17.066667 0 4.266667-4.266667 8.533333-8.533334 17.066667L226.133333 682.666667H145.066667z"
                        fill="#FFFFFF"
                        p-id="6212"
                      ></path>
                      <path
                        d="M682.666667 512h341.333333v213.333333h-341.333333z"
                        fill="#107C41"
                        p-id="6213"
                      ></path>
                    </svg>
                  </div>
                  <div class="ml-4" style="text-align: left">
                    <p class="text-sm font-medium text-navy-700">
                      长三角高技术产业从业人员年平均数数据集(1995-2019年).xlsx
                    </p>
                    <p class="mt-2 text-sm text-gray-600">71KB</p>
                  </div>
                </div>
              </button>
              <button
                class="flex w-full items-center justify-between rounded-2xl bg-white border hover:border-indigo-300 p-2 mt-2 shadow-3xl shadow-shadow-500"
              >
                <div class="flex items-center">
                  <div class="">
                    <svg
                      t="1699778399518"
                      class="icon h-[30px] w-[30px]"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="6205"
                      width="200"
                      height="200"
                    >
                      <path
                        d="M682.666667 42.666667H298.666667c-25.6 0-42.666667 17.066667-42.666667 42.666666v213.333334l426.666667 213.333333 170.666666 64 170.666667-64V298.666667l-341.333333-256z"
                        fill="#21A366"
                        p-id="6206"
                      ></path>
                      <path
                        d="M256 298.666667h426.666667v213.333333H256z"
                        fill="#107C41"
                        p-id="6207"
                      ></path>
                      <path
                        d="M1024 85.333333v213.333334h-341.333333V42.666667h298.666666c21.333333 0 42.666667 21.333333 42.666667 42.666666z"
                        fill="#33C481"
                        p-id="6208"
                      ></path>
                      <path
                        d="M682.666667 512H256v426.666667c0 25.6 17.066667 42.666667 42.666667 42.666666h682.666666c25.6 0 42.666667-17.066667 42.666667-42.666666v-213.333334l-341.333333-213.333333z"
                        fill="#185C37"
                        p-id="6209"
                      ></path>
                      <path
                        d="M588.8 256H256v597.333333h324.266667c29.866667 0 59.733333-29.866667 59.733333-59.733333V307.2c0-29.866667-21.333333-51.2-51.2-51.2z"
                        opacity=".5"
                        p-id="6210"
                      ></path>
                      <path
                        d="M546.133333 810.666667H51.2C21.333333 810.666667 0 789.333333 0 759.466667V264.533333C0 234.666667 21.333333 213.333333 51.2 213.333333h499.2c25.6 0 46.933333 21.333333 46.933333 51.2v499.2c0 25.6-21.333333 46.933333-51.2 46.933334z"
                        fill="#107C41"
                        p-id="6211"
                      ></path>
                      <path
                        d="M145.066667 682.666667L256 512 153.6 341.333333h81.066667l55.466666 106.666667c8.533333 12.8 8.533333 21.333333 12.8 25.6l12.8-25.6L375.466667 341.333333h76.8l-102.4 170.666667 106.666666 170.666667h-85.333333l-64-119.466667c0-4.266667-4.266667-8.533333-8.533333-17.066667 0 4.266667-4.266667 8.533333-8.533334 17.066667L226.133333 682.666667H145.066667z"
                        fill="#FFFFFF"
                        p-id="6212"
                      ></path>
                      <path
                        d="M682.666667 512h341.333333v213.333333h-341.333333z"
                        fill="#107C41"
                        p-id="6213"
                      ></path>
                    </svg>
                  </div>
                  <div class="ml-4" style="text-align: left">
                    <p class="text-sm font-medium text-navy-700">
                      长三角R&D经费投入强度数据集(2006-2019年).xlsx
                    </p>
                    <p class="mt-2 text-sm text-gray-600">71KB</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div class="flex items-start">
          <img class="mr-2 h-8 w-8 rounded-full" src="@/assets/IME_logo.png" />
          <div
            class="flex rounded-b-xl rounded-tr-xl bg-slate-50 p-4 dark:bg-slate-800 sm:max-w-md md:max-w-2xl"
          >
            <div>
              根据表格数据，我们可以观察和分析以下几个方面：<br />
              高被引科学家数：高被引科学家是指那些在其领域内被引用次数处于前列的科学家。这个指标可以反映出一个城市科研水平的高度。上海市在这个指标上领先，这可能表明上海在科研影响力和学术领导力方面处于该区域的前列。<br />
              普通高校数量：普通高校数量是教育资源丰富的一个体现，更多的高校意味着更强的科研能力和更丰富的高等教育资源。在这个指标上，上海市和合肥市相比于南京市和杭州市拥有更多的高校。<br />
              高校毕业生留存率：这个指标反映了一个城市对高校毕业生的吸引力以及留住人才的能力。上海市和杭州市的高校毕业生留存率较高，这可能意味着这些城市对于高校毕业生有更大的吸引力，也可能有更多的就业机会。<br />
              常住人口增量：这个指标可以反映一个城市的人口增长趋势，间接体现其经济发展和生活条件的吸引力。从数据来看，杭州市的人口增量远超其他城市，表明其可能具有较强的人口吸引力。<br />
              R&D人员：研发人员数量直接关联到一个城市的创新和研发能力。上海市在这个指标上远超其他城市，表明其在研发领域的人力资源投入最为充分。<br />
              总体来说，上海市在多个指标上都显示出较强的创新和发展潜力，尤其是在高被引科学家数量和研发人员数量上。而杭州市在人口增长率上表现出强劲的动力，可能在未来有更多的发展潜力。南京市和合肥市虽然在某些指标上不如上海和杭州，但也展现出了一定的创新和教育资源优势。
            </div>
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
            <p>请帮我用柱状图可视化一下这些数据<br /></p>
          </div>
        </div>

        <div class="flex items-start">
          <img class="mr-2 h-8 w-8 rounded-full" src="@/assets/IME_logo.png" />
          <div
            class="flex rounded-b-xl rounded-tr-xl bg-slate-50 p-4 dark:bg-slate-800 sm:max-w-md md:max-w-2xl"
          >
            <div>
              好的，我将使用Echarts可视化工具为您绘制柱状图
              <div id="main" style="height: 500px; width: 600px"></div>
            </div>
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
            <p>是否有关于长三角创新评估的相关专题案例呢？<br /></p>
          </div>
        </div>

        <div class="flex items-start">
          <img class="mr-2 h-8 w-8 rounded-full" src="@/assets/IME_logo.png" />
          <div
            class="flex rounded-b-xl rounded-tr-xl bg-slate-50 p-4 dark:bg-slate-800 sm:max-w-md md:max-w-2xl"
          >
            <div>
              关于长三角创新评估的相关专题，根据检索结果，我们在长三角虚拟地理实验平台中找到了长三角区域创新的专题，您可点击如下链接跳转：<br />
              <img src="@/assets/demo2.png" alt="" style="width: 100%" />
              <br />
              <div
                class="flex-1 cursor-pointer w-full rounded-2xl bg-slate-200 border hover:border-indigo-300 p-2 mb-3 shadow-3xl shadow-shadow-500"
                style="font-size: 0.8rem"
              >
                长三角区域创新专题：<a
                  href="https://geomodeling.njnu.edu.cn/YangtzeVGLab/#/case/RegionInnovation/"
                  >长三角区域创新专题(https://geomodeling.njnu.edu.cn/YangtzeVGLab/#/case/RegionInnovation/)</a
                >
              </div>
            </div>
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
import { onMounted } from 'vue';
import * as echarts from 'echarts';

onMounted(() => {
  init();
});

function init() {
  var chartDom = document.getElementById('main');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: [
        '高被引科学家',
        '普通高校数量',
        '高校毕业生留存率',
        '常住人口增量',
        'R&D人员',
      ],
    },
    calculable: true,
    xAxis: [
      {
        type: 'category',
        // prettier-ignore
        data: ['上海', '南京', '杭州', '合肥'],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: '高被引科学家',
        type: 'bar',
        data: [40, 29, 23, 16],
      },
      {
        name: '普通高校数量',
        type: 'bar',
        data: [64, 53, 40, 50],
      },
      {
        name: '高校毕业生留存率',
        type: 'bar',
        data: [70, 50, 60, 54],
      },
      {
        name: '常住人口增量',
        type: 'bar',
        data: [5.45, 10.12, 33.8, 12.17],
      },
      {
        name: ' R&D人员',
        type: 'bar',
        data: [27.12, 12.94, 9.28, 8.6],
      },
    ],
  };

  option && myChart.setOption(option);
}
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
