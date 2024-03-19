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
                        SWAT模型推理
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
                        src="@/assets/geoAgents/sensityvityAnalysis.jpeg"
                        alt=""
                      />
                    </div>
                    <div class="ml-4">
                      <p class="text-sm font-medium text-navy-700">
                        敏感性分析推理
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
                      <svg
                        t="1699327159328"
                        class="icon h-12 w-12 rounded-full"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="2564"
                        width="200"
                        height="200"
                      >
                        <path
                          d="M512 96c229.76 0 416 186.24 416 416S741.76 928 512 928 96 741.76 96 512 282.24 96 512 96z m-32 448l-127.317333 0.021333c0.896 20.48 2.624 40.405333 5.12 59.669334l1.984 14.293333 2.474666 15.253333c19.754667 112.896 65.728 197.738667 117.76 222.997334L480 544z m191.317333 0.021333L544 544v312.234667c50.858667-24.725333 95.936-106.368 116.373333-215.509334l1.365334-7.488 2.474666-15.232a701.013333 701.013333 0 0 0 7.104-73.984z m-382.698666 0H161.429333c11.648 129.066667 92.992 238.08 206.101334 289.066667-22.122667-34.282667-40.362667-76.416-53.76-124.032l-3.029334-11.093333-3.52-14.165334-3.242666-14.464a744.490667 744.490667 0 0 1-15.36-125.312z m573.952 0H735.36a752.661333 752.661333 0 0 1-12.672 112.128l-2.688 13.184-3.242667 14.464-3.52 14.186667c-13.653333 52.138667-32.96 98.197333-56.789333 135.104 113.109333-50.986667 194.453333-160 206.08-289.066667zM367.530667 190.890667l-2.858667 1.301333C253.013333 243.733333 172.970667 352 161.429333 480h127.189334c1.536-39.04 5.866667-76.693333 12.672-112.149333l2.688-13.184 3.242666-14.464 3.52-14.186667c13.653333-52.138667 32.96-98.197333 56.789334-135.104zM480 167.765333c-50.709333 24.618667-95.68 105.898667-116.202667 214.592l-1.536 8.405334-2.474666 15.232a701.034667 701.034667 0 0 0-7.104 74.005333H480V167.765333z m176.469333 23.146667l2.56 4.053333c20.906667 33.429333 38.229333 73.984 51.093334 119.552l3.136 11.52 3.52 14.165334 3.242666 14.464c8.362667 39.253333 13.632 81.408 15.36 125.333333h127.189334c-11.626667-129.088-92.970667-238.101333-206.101334-289.066667zM544 167.765333L544 480h127.317333a707.136 707.136 0 0 0-5.333333-61.376l-1.770667-12.629333-2.474666-15.232c-19.754667-112.874667-65.706667-197.717333-117.717334-222.997334z"
                          fill="#1677FF"
                          p-id="2565"
                        ></path>
                      </svg>
                    </div>
                    <div class="ml-4">
                      <p class="text-sm font-medium text-navy-700">网络检索</p>
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
                        SWAT模型详细教程
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
                        SWATCUP2012理论与操作
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </el-aside>
      <el-main><swatSAQA> </swatSAQA></el-main>
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
                class="w-30 h-30 object-cover rounded-t-lg"
                alt="Card Image"
                src="https://geomodeling.njnu.edu.cn/static/modelItem///////////5299fa74-0d3a-4cd5-a005-d2613b0b51f9.jpg"
              />
              <div class="p-4">
                <h2 class="text-sm font-semibold">模型资源：SWAT</h2>

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
                src="@/assets/SAPackage.png"
              />
              <div class="p-4">
                <h2 class="text-sm font-semibold">
                  模型资源：敏感性分析工具包
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
              <svg
                t="1699348557810"
                class="icon rounded-t-lg"
                viewBox="0 0 1280 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="6210"
                width="120"
                height="120"
              >
                <path
                  d="M714.5728 150.5792L320 229.1968v565.6064l394.5728 78.6304V150.5792z m-202.2144 384.768l-40.9856 88.9216-47.296-3.3024 59.8656-108.7232-53.5552-118.4768 47.2576-3.3024 31.5392 88.8704h6.2592l34.688-95.4752 50.432-3.264-63.04 125.0816 63.0784 128.4352-50.432-3.3024-37.8112-95.4624z"
                  fill="#23B08D"
                  p-id="6211"
                ></path>
                <path
                  d="M714.5728 243.6608H960V817.792H714.5728z"
                  fill="#E5E7E6"
                  p-id="6212"
                ></path>
                <path
                  d="M714.5728 371.2512h173.4784v53.7216H714.5728zM714.5728 484.4288h173.4784v53.7216H714.5728zM714.5728 612.5056h173.4784v53.7216H714.5728z"
                  fill="#FFFFFF"
                  p-id="6213"
                ></path>
              </svg>

              <div class="p-1">
                <h2 class="text-sm font-semibold">
                  数据资源：敏感性分析结果.xlsx
                </h2>

                <div class="flex justify-between items-center mt-4">
                  <button
                    type="submit"
                    class="rounded-lg bg-blue-700 px-3 py-1 text-sm font-medium text-slate-200 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    <a
                      href="https://geomodeling.njnu.edu.cn/computableModel/16e31602-bd05-4da4-bd01-cb7582c21ae8"
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
              <div class="flex justify-center mt-7">
                <svg
                  t="1699348741945"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="7268"
                  width="70"
                  height="70"
                >
                  <path
                    d="M535.119473 0h69.599248v95.247413C729.226717 96.331138 853.614299 93.92286 977.881468 96.331138a40.459078 40.459078 0 0 1 44.914393 45.516463c2.047037 234.566322 0 469.614299 1.204139 703.819379-1.204139 24.082785 2.287865 50.694262-11.318909 72.248354-16.978363 12.041392-38.893697 10.837253-58.761994 12.041392h-349.200376V1023.518344h-72.248354C354.980245 990.886171 177.490122 960.541863 0 928.752587V95.488241C178.33302 63.578551 356.786453 32.511759 535.119473 0z"
                    fill="#2A5699"
                    p-id="7269"
                  ></path>
                  <path
                    d="M604.718721 131.010348H988.598307v761.979304H604.718721v-95.247413h302.479774v-48.165569H604.718721v-59.002822h302.479774v-48.16557H604.718721v-59.002822h302.479774v-48.165569H604.718721v-60.206961h302.479774V428.673565H604.718721v-60.206961h302.479774v-46.96143H604.718721v-59.604892h302.479774V214.336783H604.718721zM240.827846 341.373471c22.156162-1.324553 44.19191-2.287865 66.348071-3.492003 15.533396 80.4365 31.30762 160.632173 48.165569 240.827845 13.125118-82.724365 27.695202-165.087488 41.783632-247.571025 23.239887-0.842897 46.479774-2.167451 69.719661-3.612418-26.370649 115.356538-49.369708 231.796802-78.148636 346.430856-19.386642 10.355597-48.165569 0-71.52587 1.204139C301.034807 596.169332 283.093133 517.779868 269.245532 438.667921c-13.606773 76.944497-31.30762 153.16651-46.841016 229.508937-22.39699-1.204139-44.793979-2.528692-67.311383-4.094073-19.266228-104.760113-42.024459-208.918156-60.206962-313.919097 19.868297-0.963311 39.857008-1.806209 60.206962-2.528693 12.041392 75.860771 25.648166 151.360301 36.124177 227.341487 16.135466-77.907808 32.873001-155.695202 49.610536-233.603011z"
                    fill="#FFFFFF"
                    p-id="7270"
                  ></path>
                </svg>
              </div>

              <div class="p-4">
                <h2 class="text-sm font-semibold">数据资源：结果分析报告</h2>

                <div class="flex justify-between items-center mt-4">
                  <button
                    type="submit"
                    class="rounded-lg bg-blue-700 px-3 py-1 text-sm font-medium text-slate-200 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    <a
                      href="https://gitee.com/MpLebron/my-data-repo/raw/master/word/%E5%88%86%E6%9E%90%E6%8A%A5%E5%91%8A_20231107002.docx"
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
import swatSAQA from '@/components/modelingDemos/swatSAQA';
</script>
<style scoped>
.el-main {
  --el-main-padding: 2px;
}
</style>
