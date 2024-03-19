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
              我想要开展SWAT模型在渭河流域的参数敏感性分析实验，该怎么做呢？<br />
            </p>
          </div>
        </div>
        <div class="flex items-start">
          <img class="mr-2 h-8 w-8 rounded-full" src="@/assets/IME_logo.png" />
          <div
            class="flex rounded-b-xl rounded-tr-xl bg-slate-50 p-4 dark:bg-slate-800 sm:max-w-md md:max-w-2xl"
          >
            <p>
              SWAT模型专家：SWAT（Soil and Water Assessment
              Tool）是一个广泛用于水资源管理和土地利用规划的集成水文模型。在进行SWAT模型的参数敏感性分析实验之前，首先需要了解研究区域的背景和特点。
            </p>
          </div>
        </div>
        <div class="flex items-start">
          <img class="mr-2 h-8 w-8 rounded-full" src="@/assets/IME_logo.png" />
          <div
            class="flex rounded-b-xl rounded-tr-xl bg-slate-50 p-4 dark:bg-slate-800 sm:max-w-md md:max-w-2xl"
          >
            <div>
              水文领域专家：渭河是黄河的第一大支流，发源于甘肃省渭源县的鸟鼠山，至陕西省潼关县汇入黄河。渭河上游是指干流林家村以上区域，其南岸气候湿润、植被茂盛，是渭河的主要水源涵养区；北岸气候干燥、降水稀少、水土流失严重，是渭河泥沙的主要来源。该区域年平均降水量为400~600mm，年平均蒸发量为1270~1660mm，年平均气温为4-10度。渭河上游干流武山站以上区域，距河口693km，海拔高度为1460~3900m，控制流域面积8080km²。以下是从论文中的渭河上游干流武山站以上区域示意图。是否可以以该区域为例开展敏感性分析呢？
              <img
                src="@/assets/qaPic/studyArea.png"
                alt=""
                style="width: 50%"
              />
              <a
                href="https://gitee.com/MpLebron/my-data-repo/raw/master/pdf/%E9%9D%A2%E5%90%91%E6%B5%81%E5%9F%9F%E6%B0%B4%E6%96%87%E6%A8%A1%E5%9E%8B%E6%9C%8D%E5%8A%A1%E7%9A%84%E5%8F%82%E6%95%B0%E6%95%8F%E6%84%9F%E6%80%A7%E5%9C%A8%E7%BA%BF%E5%88%86%E6%9E%90%E6%96%B9%E6%B3%95%E7%A0%94%E7%A9%B6%20-%20%E6%89%93%E5%8D%B0%E7%89%88.pdf"
                >参考资料来源</a
              >
              <button
                class="flex w-full items-center justify-between rounded-2xl bg-white border hover:border-indigo-300 p-2 mb-3 shadow-3xl shadow-shadow-500"
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
                  <div class="ml-4" style="text-align: left">
                    <p class="text-sm font-medium text-navy-700">
                      面向流域水文模型服务的参数敏感性在线分析方法研究
                    </p>
                    <p class="mt-2 text-sm text-gray-600">7.63MB</p>
                  </div>
                </div>
              </button>
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
            <p>可以，就在这个区域做实验就行，那具体怎么做？<br /></p>
          </div>
        </div>
        <div class="flex items-start">
          <img class="mr-2 h-8 w-8 rounded-full" src="@/assets/IME_logo.png" />
          <div
            class="flex rounded-b-xl rounded-tr-xl bg-slate-50 p-4 dark:bg-slate-800 sm:max-w-md md:max-w-2xl"
          >
            <p>
              SWAT模型专家：好的，在对SWAT模型进行敏感性分析之前，首先需要完整运行一次SWAT模型。而根据《SWAT模型用户手册》，完整运行一次SWAT模型需要多种地理数据，包括DEM数据、土地利用数据、土壤类型数据等。
            </p>
          </div>
        </div>
        <div class="flex items-start">
          <img class="mr-2 h-8 w-8 rounded-full" src="@/assets/IME_logo.png" />
          <div
            class="flex rounded-b-xl rounded-tr-xl bg-slate-50 p-4 dark:bg-slate-800 sm:max-w-md md:max-w-2xl"
          >
            <p>
              正在使用联网查找及私有知识库查找工具查询上述数据集的获取来源。
            </p>
          </div>
        </div>
        <div class="flex items-start">
          <img class="mr-2 h-8 w-8 rounded-full" src="@/assets/IME_logo.png" />
          <div
            class="flex rounded-b-xl rounded-tr-xl bg-slate-50 p-4 dark:bg-slate-800 sm:max-w-md md:max-w-2xl"
          >
            <div>
              根据查询结果可知：DEM数据在<a href="http://www.gscloud.cn/"
                >地理空间数据云</a
              >中的ASTERGDEM 30M 数据集；土地利用数据在<a
                href="http://www.resdc.cn"
                >中国科学院资源环境科学数据中心</a
              >;土壤类型数据在联合国粮农组织(FAO)和维也纳国际应用研究所(IIASA)所构建的世界土壤数据库(HWSD,
              Harmonized World Soil Database);气象数据来自于<a
                href="https://ncar.ucar.edu/"
                >美国环境预测中心(NCEP)</a
              >所提供的全球气象预测数据集(CFSR_World);渭河水系水文站的径流量实测数据来自于<a
                href="http://www.geodata.cn"
                >国家科学基础条件平台——国家地球系统科学数据</a
              >中。
              <div
                class="flex-1 cursor-pointer w-full rounded-2xl bg-slate-200 border hover:border-indigo-300 p-2 mb-3 shadow-3xl shadow-shadow-500"
                style="font-size: 0.8rem"
              >
                正在尝试使用联网查找及私有知识库查找工具查询上述数据集的获取来源...
                <br />
                开始获取资料...
                <br />
                找到了ASTERGDEM 30M 数据集：<a href="http://www.gscloud.cn/"
                  >ASTERGDEM 30M 数据集(http://www.gscloud.cn/)</a
                >
                <br />
                找到了土地利用数据：<a href="http://www.resdc.cn"
                  >中国科学院资源环境科学数据中心(http://www.resdc.cn)</a
                >
                <br />
                气象数据获取网站：<a href="https://ncar.ucar.edu//"
                  >美国环境预测中心(NCEP)(https://ncar.ucar.edu/)</a
                >
                <br />
                径流实测数据：<a href="http://www.geodata.cn"
                  >国家科学基础条件平台——国家地球系统科学数据(http://www.geodata.cn)</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-start">
          <img class="mr-2 h-8 w-8 rounded-full" src="@/assets/IME_logo.png" />
          <butt
            class="flex rounded-b-xl rounded-tr-xl bg-slate-50 p-4 dark:bg-slate-800 sm:max-w-md md:max-w-2xl"
          >
            <p>
              根据OpenGMS门户上，对于SWAT模型的运行要求，需要提供的数据详情可见：<a
                href="https://geomodeling.njnu.edu.cn/computableModel/16e31602-bd05-4da4-bd01-cb7582c21ae8"
                >OpenGMS-计算模型-SWAT模型</a
              >
              <OpenGMSModel></OpenGMSModel>
            </p>
          </butt>
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
              请你调用调用相关的地理空间分析工具对数据进行处理，然后帮我运行SWAT模型。<br />
            </p>
          </div>
        </div>

        <div class="flex items-start">
          <img class="mr-2 h-8 w-8 rounded-full" src="@/assets/IME_logo.png" />
          <butt
            class="flex rounded-b-xl rounded-tr-xl bg-slate-50 p-4 dark:bg-slate-800 sm:max-w-md md:max-w-2xl"
          >
            <div>
              我已经基于OpenGMS平台的数据处理工具对输入数据进行了预处理，已满足SWAT模型条目所要求提供的数据要求。正在调用SWAT模型…
              <br />
              以下为OpenGMS模型服务容器返回的TxtInOut文件输出结果。<br />
              <button
                class="flex w-full items-center justify-between rounded-2xl bg-white border hover:border-indigo-300 p-2 mt-2 shadow-3xl shadow-shadow-500"
              >
                <div class="flex items-center">
                  <div class="">
                    <svg
                      t="1699337025521"
                      class="icon h-8 w-8 fill-white"
                      viewBox="0 0 1140 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="4991"
                      width="200"
                      height="200"
                    >
                      <path
                        d="M1079.048591 1022.302497H56.746094c-31.187329 0-56.746094-21.778899-56.746094-48.224215V681.537289h1135.574765v292.389798c0 26.452188-25.565638 48.231087-56.746094 48.231087l0.21992 0.144323z"
                        fill="#5ACC9B"
                        p-id="4992"
                      ></path>
                      <path
                        d="M56.746094 0H1079.048591c31.187329 0 56.746094 21.785772 56.746094 48.224215v292.540993H0.219919V48.382282C0.219919 21.923221 25.785557 0.151195 56.972886 0.151195L56.746094 0z"
                        fill="#6CCBFF"
                        p-id="4993"
                      ></path>
                      <path
                        d="M0.219919 340.840805h1135.423571v340.620886H0.219919z"
                        fill="#FFD766"
                        p-id="4994"
                      ></path>
                      <path
                        d="M378.694443 0.219919h378.474523v1021.862658H378.694443z"
                        fill="#FF5562"
                        p-id="4995"
                      ></path>
                      <path
                        d="M487.444617 56.972886h75.714148v56.814819H487.444617V56.966013zM563.158765 0.213047H638.86604V56.972886H563.158765V0.219919z m0 113.567785H638.86604v56.5949H563.158765v-56.5949z m-75.714148 56.5949h75.714148v56.746094H487.444617v-56.746094z m75.714148 56.746094H638.86604v56.821691H563.158765v-56.821691z m-75.714148 56.821691h75.714148v56.814819H487.444617v-56.814819z m75.714148 56.746094H638.86604v56.746094H563.158765v-56.746094zM487.444617 397.435705h75.714148v56.814818H487.444617v-56.814818z m75.714148 56.814818H638.86604v56.897289H563.158765v-56.897289z m-75.714148 56.897289h75.714148v56.746094H487.444617v-56.746094z m75.714148 56.746094H638.86604V624.708725H563.158765v-56.814819zM487.444617 624.708725h75.714148v56.821691H487.444617V624.708725z m75.714148 56.746094H638.86604v56.746094H563.158765v-56.746094z m-75.714148 56.746094h75.714148v56.821691H487.444617v-56.821691z m75.714148 56.821691H638.86604v56.890416H563.158765v-56.890416z m-75.714148 56.890416h75.714148v56.746094H487.444617v-56.746094z m0 113.567785h75.714148v56.814819H487.444617v-56.814819z m75.714148-56.821691H638.86604v56.821691H563.158765v-56.821691z"
                        fill="#FFFFFF"
                        p-id="4996"
                      ></path>
                    </svg>
                  </div>
                  <div class="ml-4" style="text-align: left">
                    <p class="text-sm font-medium text-navy-700">
                      TxtInOut.zip
                    </p>
                    <p class="mt-2 text-sm text-gray-600">86.7MB</p>
                  </div>
                </div>
              </button>
            </div>
          </butt>
        </div>

        <div class="flex items-start">
          <img class="mr-2 h-8 w-8 rounded-full" src="@/assets/IME_logo.png" />
          <div
            class="flex rounded-b-xl rounded-tr-xl bg-slate-50 p-4 dark:bg-slate-800 sm:max-w-md md:max-w-2xl"
          >
            <p>
              SWAT模型专家：现在已经满足了SWAT模型一次完整运行的要求，接下来进入敏感性分析环节。
            </p>
          </div>
        </div>

        <div class="flex items-start">
          <img class="mr-2 h-8 w-8 rounded-full" src="@/assets/IME_logo.png" />
          <div
            class="flex rounded-b-xl rounded-tr-xl bg-slate-50 p-4 dark:bg-slate-800 sm:max-w-md md:max-w-2xl"
          >
            <p>
              敏感性分析专家：敏感性分析流程主要包括参数选择、SA方法选择、模型模拟与结果评估、SA
              评估与后处理等四个环节。
              我的知识库中有一套SWAT模型敏感性分析的论文知识库。
              <br />
              <a href="http://172.21.213.191:7474/browser/">点击查看</a>
              <br />
              经过知识库筛选后得知：刘闻等人曾在渭河流域对SWAT
              模型进行过参数敏感性分析研究，可以作为本项实验的重点参考案例。在该案例中，研究人员应用LH-OAT
              方法对径流量相关的21
              个参数进行了敏感性分析，并根据得分对模型参数的敏感性进行了分级，其中极为敏感的有三个参数，敏感的有八个参数，一般敏感和不敏感的各有五个参数。因此，本项实验将着重评估极为敏感和敏感两个等级的十一个模型参数，分别是土壤蒸发补偿系数（ESCO）、基流α系数（ALPHA_BF）、SCS
              径流曲线系数（CN2）、最大冠层蓄水量（CANMX）、主河道曼宁系数（CH_N2）、浅层地下水径流系数（GWQMN）、主河道水力传导率（CH_K2）、地表径流滞后系数（SURLAG）、地下水延迟时间（GW_DELAY）、土壤深度（SOL_Z）和浅层地下水再蒸发系数（REVAPMIN）。您是否同意实验筛选以上参数进行敏感性分析？
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
            <p>
              好的，请你直接把后面的实验全都做完，然后告诉我结论就好。<br />
            </p>
          </div>
        </div>
        <div class="flex items-start">
          <img class="mr-2 h-8 w-8 rounded-full" src="@/assets/IME_logo.png" />
          <div
            class="flex rounded-b-xl rounded-tr-xl bg-slate-50 p-4 dark:bg-slate-800 sm:max-w-md md:max-w-2xl"
          >
            <p>
              好的。本实验共使用Morris、eFAST 和PAWN 三种类型的方法对SWAT 模型参
              数的敏感性进行评估，模型参数的波动范围为上下20%，目标函数选择使用评价
              整体拟合程度的Nash 效率系数。
            </p>
          </div>
        </div>
        <div class="flex items-start">
          <img class="mr-2 h-8 w-8 rounded-full" src="@/assets/IME_logo.png" />
          <div
            class="flex rounded-b-xl rounded-tr-xl bg-slate-50 p-4 dark:bg-slate-800 sm:max-w-md md:max-w-2xl"
          >
            <p>正在调用参数采样工具与敏感性分析工具。</p>
          </div>
        </div>
        <div class="flex items-start">
          <img class="mr-2 h-8 w-8 rounded-full" src="@/assets/IME_logo.png" />
          <div
            class="flex rounded-b-xl rounded-tr-xl bg-slate-50 p-4 dark:bg-slate-800 sm:max-w-md md:max-w-2xl"
          >
            <div>
              经过10000次的SWAT模型运算任务，以及Morris、eFAST 和PAWN 三种
              方法的参数敏感性评估过程，我们已经得到了三组通过收敛性检验的敏感性分析
              结果，分别是1800组样本的Morris结果、2200组样本的eFAST
              结果、以及2000组样本的PAWN
              结果。排除不敏感参数之后（小于0.1），下表中展示了三种方
              法的参数敏感性分析结果的排名情况。可以看出，本实验参与敏感性分析的十一
              个模型参数中，有四个参数的敏感度明显高于其他参数，分别是SCS
              径流曲线
              系数（CN2）、土壤蒸发补偿系数（ESCO）、浅层地下水径流系数（GWQMN）和
              土壤深度（SOL_Z），并且两两之间的相似度𝑆𝑐𝑟𝑒分别为1（Morris
              与eFAST）、 0.75（Morris 与PAWN）和0.75（eFAST
              与PAWN），相互证明了敏感性分析结果的可信度。
              <div class="flex flex-col">
                <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                  <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                      <table class="min-w-full">
                        <thead class="bg-white border-b">
                          <tr>
                            <th
                              scope="col"
                              class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                              排名
                            </th>
                            <th
                              scope="col"
                              class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                              Morris(|u|)
                            </th>
                            <th
                              scope="col"
                              class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                              eFast(ST)
                            </th>
                            <th
                              scope="col"
                              class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                              PAWN(中值)
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="bg-gray-100 border-b">
                            <td
                              class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                            >
                              1
                            </td>
                            <td
                              class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                            >
                              CN2
                            </td>
                            <td
                              class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                            >
                              CN2
                            </td>
                            <td
                              class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                            >
                              ESCO
                            </td>
                          </tr>
                          <tr class="bg-white border-b">
                            <td
                              class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                            >
                              2
                            </td>
                            <td
                              class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                            >
                              ESCO
                            </td>
                            <td
                              class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                            >
                              ESCO
                            </td>
                            <td
                              class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                            >
                              CN2
                            </td>
                          </tr>
                          <tr class="bg-gray-100 border-b">
                            <td
                              class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                            >
                              3
                            </td>
                            <td
                              class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                            >
                              GWQMN
                            </td>
                            <td
                              class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                            >
                              *
                            </td>
                            <td
                              class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                            >
                              GWQMN
                            </td>
                          </tr>
                          <tr class="bg-white border-b">
                            <td
                              class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                            >
                              4
                            </td>
                            <td
                              class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                            >
                              SOL_Z
                            </td>
                            <td
                              class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                            >
                              *
                            </td>
                            <td
                              class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                            >
                              SOL_Z
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-start">
          <img class="mr-2 h-8 w-8 rounded-full" src="@/assets/IME_logo.png" />
          <div
            class="flex rounded-b-xl rounded-tr-xl bg-slate-50 p-4 dark:bg-slate-800 sm:max-w-md md:max-w-2xl"
          >
            <p>
              在本实验中，渭河上游流域的参数敏感性分析结果与专家知识库中渭河中下
              游流域的参考案例有所不同。参数CN2和ESCO的敏感程度依然很高，而参数
              ALPHA_BF的敏感度不明显，主要由于CN2与土壤的渗透率、土地利用类型和
              前期土壤湿度密切相关，直接影响地表径流的计算过程，CN2的值越大说明流域的截留量越小，地表径流的产流量也就越大；ESCO
              是模型为调整土壤因毛细作
              用和土壤裂隙等因素对不同土层蒸发量而设计的参数，ESCO的值越小，越能够
              从更深的土壤获得水分供给蒸发；而ALPHA_BF
              是河道常年基流占河流径流总
              量的百分比，本实验研究区相对于渭河中下游而言，河道较窄，对于径流总量的
              影响也较小。此外，参数GWQMN和SOL_Z分别控制浅层地下水产流的临界含
              水量和土壤层的深度，也会对下渗过程和浅层地下水产流（排入河道）产生直接
              影响。
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
