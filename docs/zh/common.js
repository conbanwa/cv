'use strict'
// 项目经历与工作经历数据
const projects = [
  {
    cls: 'codecheck',
    title: '代码质量与安全治理体系搭建',
    time: '2024/1 ~ 2024/4',
    affiliated: '跨项目专项',
    description: {
      situation:
        '多团队维护的高频迭代项目安全风险频发（外部输入漏洞、内存泄漏等），代码质量参差不齐，导致产品性能、可靠性下降30%。',
      actions: [
        '搭建全维度代码质量治理体系，实现安全校验自动化、代码提交规范化，最小化维护过程中的副作用。',
        '设计并落地基于正则的全局代码扫描工具，对全代码库的外部输入、内存管理、异常恢复、敏感数据及IO安全进行全量排查校验；',
        '针对高频维护项目搭建定制化质量拦截系统，开发自动化测试脚本替代手工自测，覆盖90%核心业务场景；',
        '优化代码管理机制：通过权限管控、制定代码规范/提交拦截规则，在代码提交阶段强制保障质量；',
        '建立代码提交质量实时监控机制，在代码合并前识别并拦截不合规代码。通过增量扫描与差异化检测扫描每笔提交，溯源责任人。',
      ],
      result: '安全漏洞检出率提升75%，手工自测时间减少60%，性能损耗相关代码减少90%，代码可维护性与可靠性大幅提升。',
    },
  },
  {
    cls: 'tdd',
    title: '移动端App TDD框架与自动化测试体系',
    time: '2025/1 ~ 2025/6',
    affiliated: 'Huawei',
    description: {
      situation:
        'Open Harmony Next 移动应用在快速迭代中面临测试效率低和质量不稳定的问题，25% 的 Bug 流到了生产环境中被发现。',
      tasks: '构建测试驱动开发 (TDD) 系统和自动化测试流水线，以提高测试效率和产品稳定性。',
      actions: [
        '为 HarmonyOS 移动应用设计并构建了全面的 TDD 系统，包括针对 ArkTS/ArkUI 代码的自测模块和自动化流水线；',
        /* 精准注入：排列组合测试，提升充分度并缩短开发时长 */
        '引入正交排列组合等测试矩阵，充分覆盖不同参数与配置的交叉组合，在极大提升测试充分度的同时缩短了整体开发与调试时长；',
        '利用 Github Actions 和 CI/CD 流水线简化 HarmonyOS 构建/测试工作流，集成了安全扫描和性能检查；',
        /* 精准注入：边界条件、状态Mock、时间旅行测试闹钟 */
        '构建了强大的状态 Mock 机制以完整覆盖各种极端的边界条件，实现**时间旅行（Time-Travel）测试**（如 Mock 未来时间戳）来充分验证闹钟等时间敏感型核心组件。',
      ],
      result:
        '减少90%人工干预，全量测试频率从每周一次提升至每小时一次，缺陷密度减少65%，发布周期缩短一半。测试覆盖率达99%以上，为团队能更加放心大胆的进行代码重构。',
    },
  },
  {
    cls: 'inclinometer',
    title: '水平仪动态校准系统',
    time: '2024/7 ~ 2024/8',
    affiliated: 'Huawei',
    description: {
      situation: '原水平仪依赖重力感应，在动态加速度状态下会出现倾斜失效问题，严重影响移动端设备姿态估计的准确性。',
      actions: [
        '构建刚体运动学模型以将真实重力与动态惯性噪声解耦，准确隔离快速旋转过程中的向心加速度 ω × (ω × r) 和切向加速度 α × r。',
        '实现延迟状态磁力计校准回路并结合互补滤波器，在强力抑制长期航向漂移的同时，避免在瞬态磁异常期间引入相位滞后。',
        '开发实时运动状态机，根据加速度方差动态切换鸿蒙传感器的采样频率（50Hz ↔ 200Hz）和算法复杂度，从策略层遏制电池消耗。',
        '优化姿态追踪架构，在准静态下将高开销的双重积分循环替换为陀螺仪一阶积分 (∫ω dt)，从根本上解决微分带来的噪声放大问题。',
        '将核心融合算法下沉至鸿蒙 Native C++ (NDK) 层，直接订阅底层 HarmonyOS Sensor Service，绕过高频 IMU 数据流的 NAPI 序列化性能瓶颈。',
      ],
      result:
        '在静态和高动态场景下均实现了亚度（Sub-degree）级的姿态估计精度；成功大幅降低了鸿蒙设备上的 CPU 计算开销与功耗，彻底消除了长时间校准任务中的发热降频现象。',
    },
  },
  {
    cls: 'server',
    title: '去中心化衍生品交易所服务端',
    time: '2022/8 ~ 2022/11',
    affiliated: 'Bybit',
    description: {
      situation:
        '现有中心化衍生品交易所存在扩展性不足、安全风险高等问题，需搭建去中心化非托管解决方案，支持任意代币对的永续掉期交易市场。',
      actions: [
        '开发去中心化衍生品交易所高性能后端系统，保障交易处理的精准性与稳定性。',
        '开发去中心化非托管衍生品协议，支持任意代币对的永续掉期交易市场搭建；',
        '实现去中心化衍生品市场的高精准、高性能交易处理逻辑，支撑1万+ TPS交易并发；',
        '采集智能合约数据并构建GraphQL接口供服务端及前端调用，将数据查询速度优化40%；',
        '主导空投活动后端设计与落地，开发精准的用户质押计算逻辑，实现0计算误差。',
      ],
      result: '成功上线去中心化交易市场，支撑2万+日活用户，交易撮合与查询延迟降低40%。',
    },
  },
  {
    cls: 'banana',
    title: 'DeFi交易挖矿系统',
    time: '2022/6 ~ 2022/11',
    affiliated: 'Bybit',
    description: {
      situation: 'DeFi平台用户参与度低，需搭建交易挖矿机制提升用户持仓量与平台流动性。',
      actions: [
        '设计并实现交易挖矿活动后端，优化奖励计算逻辑提升活动效果。',
        '设计并实现交易挖矿活动后端，提升用户持仓量参与率；',
        '基于用户行为分析开发奖励计算逻辑，将活动转化率提升35%；',
        '采用Go语言构建核心框架，对接以太坊智能合约，基于Redis和MySQL管理活动数据并保障数据一致性；',
        '集成去中心化交易所（DEX）协议与以太坊区块链上的不可变智能合约，保障交易安全。',
      ],
      result: '平台流动性提升50%，用户持仓量增长45%，日均处理10万+笔交易挖矿订单，实现0数据丢失。',
    },
  },
  {
    cls: 'erp',
    title: '企业级CMS与ERP平台',
    time: '2016/9 ~ 2017/9',
    description: {
      situation: '企业管理层缺乏资源可视化管理工具，导致运营效率低，各部门数据碎片化。',
      actions: [
        '搭建全维度CMS & ERP平台，实现企业资源可视化与业务流程标准化。',
        '基于Gin+MySQL构建企业资源可视化CMS系统，支持实时数据监控与决策分析；',
        '开发ERP核心模块，涵盖物料清单（BOM）、生产管控、订单处理、角色权限管理等；',
        '优化数据库结构，支撑日均100万+数据条目处理，查询时间减少50%；',
        '基于Vue.js和Node.js集成前后端系统，将系统响应速度提升30%。',
      ],
      result: '企业运营效率提升40%，手工录单错误率降低80%，统一5+部门数据管理，支撑500+并发用户访问。',
    },
  },
]
const works = [
  {
    cls: 'Huawei',
    title: 'Open Harmony高级开发工程师(OD)',
    time: '2023/4 ~ 至今',
    affiliated: 'https://pic1.zhimg.com/v2-e4d64b5e553899079c856727e6f12eae_xll.jpg',
    description: `
      <li>在华为科智锐部负责媒体（媒资）方向 Open Harmony Next 移动应用开发，聚焦 ArkTS/ArkWeb/ArkUI 生态。</li>
      <li>负责 HarmonyOS 移动应用核心功能的设计与开发，结合微内核架构和移动工程最佳实践。</li>
      <li>设计并实现 ArkTS/TypeScript、ArkWeb、ArkUI 声明式 UI 部件，与后端服务和云 API 深度集成，保障安全、性能和跨设备一致性。</li>
      <li>搭建移动端 App 的 TDD 体系与自测试能力；全量自动化测试阶段监控质量/性能/稳定性指标；通过 Github Actions 与 CI/CD 流水线优化测试流程，保障交付质量。</li>
      <li>推动清洁代码规范、分支策略与发布准备检查落地，解决设备/OS 版本兼容问题，提升 HarmonyOS 生产环境稳定性。</li>`,
  },
  {
    cls: 'Bybit',
    title: '后端开发工程师',
    time: '2022/6 ~ 2023/3',
    affiliated:
      'http://jfz-erp2.oss-cn-hangzhou.aliyuncs.com/images/dc_upload/a1XE4Zom1pbNOZ4LZ1eKVodAbagpmI1mmMAWhu3K.png',
    description: `
      <li>负责DeFi产品全栈系统（前端+后端）的设计与开发。</li>
      <li>维护、升级并优化系统，解决高并发、稳定性及海量数据场景下的技术难题。</li>
      <li>参与业务重构研讨，提出可行的技术解决方案，
      独立撰写技术文档。</li>
      <li>构建基于Go语言的核心框架，对接链上智能合约，
      采用Redis和MySQL管理活动数据。</li>
      <li>研究去中心化技术，优化后端服务器性能。</li>`,
  },
  {
    cls: 'Intel',
    title: '后端开发工程师',
    time: '2019/1 ~ 2022/5',
    affiliated: 'http://img07.51jobcdn.com/fansImg/CompLogo/2/1999/1998540/1998540_300.jpg',
    description: `
      <li>维护基于安卓云服务器的协调器系统，保障高可用运行。</li>
      <li>主导日活10万+用户管理平台的开发与维护。</li>
      <li>统筹数据库维护、优化及容灾方案规划。</li>
      <li>主导业务产品落地与技术调研；
      制定开发计划并维护技术文档。</li>`,
  },
  {
    cls: 'ACCU',
    title: '后端开发工程师',
    time: '2015/7 ~ 2017/12',
    affiliated:
      'https://tse2-mm.cn.bing.net/th/id/OIP-C.3JfCz-BhoNINfTobcRg2vgAAAA?w=150&h=150&c=7&r=0&o=5&dpr=1.4&pid=1.7',
    description: `
      ACCU为汽车/电子制造供应链提供端到端质量管理解决方案（客户：奔驰、宝马、大众）。
      <li>开发面向海外汽车生产线的质检数据管理服务。</li>
      <li>主导一线质检人员人工成本核算系统开发。</li>
      <li>参与需求设计、后端代码重构、单元测试及生产环境问题排查。</li>
      <li>负责多国家系统本地化部署：收集区域化需求，维护多语言包。</li>`,
  },
  {
    cls: 'Rolls-Royce',
    title: '实习工程师',
    time: '2014/9 ~ 2014/10',
    affiliated:
      'https://www.bing.com/th?id=OSK.by68J9786kXt3Rf2wwSHYuyJB8Aa5EajCKHT-3O4lQk&w=102&h=102&c=7&o=6&pid=SANGAM',
    description: `
      验证生产线产品测量数据，确保符合劳斯莱斯质量标准，支撑高精度制造流程。`,
  },
]
$(document).ready(() => {
  let ifrs = ['personal', 'open', 'education']
  let ifrHeights = [970, 1275, 870]

  const normalizeIframeHeight = (height) => {
    const parsed = parseInt(height, 10)
    return Number.isNaN(parsed) ? 0 : parsed
  }

  const getIframePageHeight = (iframe) => {
    const doc = iframe.contentDocument || (iframe.contentWindow && iframe.contentWindow.document)
    if (!doc) return 0

    const values = [
      doc.documentElement && doc.documentElement.scrollHeight,
      doc.body && doc.body.scrollHeight,
      doc.documentElement && doc.documentElement.offsetHeight,
      doc.body && doc.body.offsetHeight,
      doc.documentElement && doc.documentElement.clientHeight,
      doc.body && doc.body.clientHeight,
    ].filter((value) => typeof value === 'number' && value > 0)

    return values.length ? Math.max(...values) : 0
  }

  ifrs.forEach((ifr, i) => {
    const $iframe = $('iframe.' + ifr)
    $iframe.attr({
      align: 'center',
      width: '100%',
      scrolling: 'no',
      frameborder: 'no',
      border: '0',
      marginwidth: '0',
      marginheight: '0',
    })
    $iframe.attr('src', ifr + '.html')
    $iframe.attr('height', ifrHeights[i])
    $iframe.on('load', function () {
      const iframeHeight = normalizeIframeHeight($(this).attr('height'))
      const pageHeight = getIframePageHeight(this)
      const minHeight = Math.min(iframeHeight || 0, pageHeight || 0)
      console.log(`[iframe-height] ${ifr}.html: iframe=${iframeHeight}, page=${pageHeight}, min=${minHeight}`)

      if (pageHeight > iframeHeight) {
        $(this).attr('height', pageHeight)
      }
    })
  })

  projects.forEach((j) => {
    $('tr.project.' + j.cls).html(
      `
<td class="p15">
  <table cellspacing="0" cellpadding="0" border="0">
    <tbody>
      <tr>
        <td class="phd tb1" colspan="3"><strong>` +
        j.title +
        `</strong></td>
        <td valign="top" class="time">` +
        j.time +
        `</td></tr>` +
        (j.affiliated
          ? `<tr>
          <td valign="top" class="tb keys"> 所属:</td>
          <td valign="top" colspan="3" class="txt1">` +
            j.affiliated +
            `</td></tr>`
          : '') +
        `<tr>
        <td valign="top" colspan="3" class="txt1">
          <div class="project-bg"><strong>背景：</strong>${j.description.situation}</div>
          <div class="project-duty"><strong>职责：</strong>
            <ul style="margin:0 0 0 1.5em;padding:0;">
              ${j.description.actions.map((d) => `<li>${d}</li>`).join('')}
            </ul>
          </div>
          <div class="project-result"><strong>成果：</strong>${j.description.result}</div>
        </td>
      </tr>
    </tbody>
  </table>
</td>`
    )
  })
  works.forEach((j) => {
    $('tr.work.' + j.cls).html(
      `
        <tr>
          <td class="p15 pd_20">
            <table cellspacing="0" cellpadding="0" border="0">
              <tbody>
                <tr>
                  <td width="52" height="52" rowspan="2" class="companyLogo">
                    <p>
                      <img
                        src="` +
        j.affiliated +
        `"
                        alt="" width="48" height="48" /><i></i>
                    </p>
                  </td>

                  <td class="phd tb1 p_12"><strong>` +
        j.cls +
        `</strong><span class="gray">&nbsp;</span></td>
                  <td valign="top" class="time">` +
        j.time +
        `</td>
                </tr>
                <tr>
                  <td valign="top" class="tb1 p_12" colspan="3">
                    <span>` +
        j.title +
        `</span>
                  </td>
                </tr>
                <tr>
                  <td class="h_16" colspan="3"></td>
                </tr>
                <tr>
                  <td class="tb1" colspan="3">
                    <table cellspacing="0" cellpadding="0" border="0">
                      <tbody>
                        <tr>
                          <td valign="top" class="keys"></td>
                          <td valign="top" class="txt1">
                          ` +
        j.description +
        `
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>`
    )
  })
})
