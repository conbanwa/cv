'use strict'
const projects = [
  {
    cls: 'server',
    title: '移动端App的TDD框架与自动化测试体系',
    time: '2025/1 ~ 2025/6',
    affiliated: '华为',
    description: `
    为Open Harmony Next移动端App搭建完整的测试驱动开发（TDD）体系，
    涵盖自测试模块开发及全版本自动化测试流水线构建。
    <br />
    在自动化测试阶段全程监控质量、性能、稳定性核心指标，保障交付标准落地。
    <br />
    基于Jenkins和CI/CD流水线优化测试流程，减少40%人工干预，提升50%测试效率。
    <br />
    技术栈：Jenkins、CI/CD、TDD、自动化测试、性能监控
    <br />`,
  },
  {
    cls: 'server',
    title: '去中心化衍生品交易所服务端',
    time: '2022/8 ~ 2022/11',
    affiliated: 'Bybit',
    description: `
    开发去中心化非托管衍生品协议，支持任意代币对的永续掉期交易市场搭建。
    <br />
    负责去中心化衍生品市场的高精准、高性能交易处理。
    <br />
    采集智能合约数据并构建GraphQL接口，供服务端及前端网页调用。
    <br />
    主导空投活动后端设计与落地，开发用户质押计算核心逻辑。
    <br />`,
  },
  {
    cls: 'banana',
    title: 'DeFi交易挖矿系统',
    time: '2022/6 ~ 2022/11',
    affiliated: 'Bybit',
    description: `
    设计并实现交易挖矿活动后端，提升用户持仓量参与度。
    <br />
    基于用户行为分析开发奖励计算逻辑，优化活动效果。
    <br />
    采用Go语言构建核心框架，对接以太坊智能合约，基于Redis和MySQL管理活动数据。
    <br />
    集成去中心化交易所（DEX）协议与以太坊区块链上的不可变智能合约。
    <br />`,
  },
  {
    cls: 'erp',
    title: '企业级CMS与ERP平台',
    time: '2016/9 ~ 2017/9',
    description: `
    基于Gin+MySQL构建企业资源可视化CMS系统，支撑管理层决策。
    <br />
    开发ERP核心模块，涵盖物料清单（BOM）、生产管控、订单处理、角色权限管理等。
    <br />
    技术栈：HTML、Golang、MySQL、JavaScript、Node.js、Vue.js、GORM
    <br />`,
  },
];

const works = [
  {
    cls: 'Huawei',
    title: 'Open Harmony高级开发工程师',
    time: '2023/4 ~ 至今',
    affiliated: 'https://pic1.zhimg.com/v2-e4d64b5e553899079c856727e6f12eae_xll.jpg',
    description: `
      <li>负责Open Harmony Next移动端应用核心功能的设计与开发。</li>
      <li>研究跨产品线平台的软件技术策略，主导符合行业趋势的开发方向规划，提前布局技术挑战应对方案。</li>
      <li>牵头跨产品软件架构设计与核心代码实现；
      针对算法、数据库等关键技术开展专项研究，解决企业级技术瓶颈问题。</li>
      <li>搭建移动端App的TDD体系及自测试能力；
      全量自动化测试阶段监控质量/性能/稳定性指标；
      通过Jenkins & CI/CD流水线优化测试流程，保障交付质量。</li>
      <li>统筹并落地代码整洁度（Clean Code）规范及编码最佳实践。</li>`,
  },
  {
    cls: 'Bybit',
    title: '后端开发工程师',
    time: '2022/6 ~ 2023/3',
    affiliated: 'http://jfz-erp2.oss-cn-hangzhou.aliyuncs.com/images/dc_upload/a1XE4Zom1pbNOZ4LZ1eKVodAbagpmI1mmMAWhu3K.png',
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
    time: '2018/1 ~ 2022/5',
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
    affiliated: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.3JfCz-BhoNINfTobcRg2vgAAAA?w=150&h=150&c=7&r=0&o=5&dpr=1.4&pid=1.7',
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
    affiliated: 'https://www.bing.com/th?id=OSK.by68J9786kXt3Rf2wwSHYuyJB8Aa5EajCKHT-3O4lQk&w=102&h=102&c=7&o=6&pid=SANGAM',
    description: `
      验证生产线产品测量数据，确保符合劳斯莱斯质量标准，支撑高精度制造流程。`,
  },
];
$(document).ready(() => {
  let ifrs = ['personal', 'open', 'education']
  let ifrHeights = [490, 1560, 730]
  ifrs.forEach((ifr, i) => {
    $('iframe.' + ifr).attr({
      align: 'center',
      width: '100%',
      scrolling: 'no',
      frameborder: 'no',
      border: '0',
      marginwidth: '0',
      marginheight: '0',
    })
    $('iframe.' + ifr).attr('src', ifr + '.html')
    $('iframe.' + ifr).attr('height', ifrHeights[i])
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
          <td valign="top" class="tb keys"> Affiliated:</td>
          <td valign="top" colspan="3" class="txt1">` +
            j.affiliated +
            `</td></tr>`
          : '') +
        `<tr>
        <td valign="top" class="tb1 keys">Description:</td>
        <td valign="top" colspan="3" class="txt1">` +
        j.description +
        `</td>
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
                          <td valign="top" class="keys">Description:</td>
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
