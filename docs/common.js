'use strict'

// Global language setting (default: 'en', can be 'zh')
let currentLanguage = 'en'

// Unified data structure with both EN and ZH descriptions
const projects = [
  {
    cls: 'codecheck',
    title: 'Code Quality & Security Governance System',
    titleZH: '代码质量与安全治理系统',
    time: '2024/1 ~ 2024/4',
    affiliated: 'Cross-project Initiative',
    descriptionEN: {
      situation:
        'Frequent iteration of multi-team maintained projects led to rising security risks (external input vulnerabilities, memory leaks) and inconsistent code quality, which degraded product performance and reliability by 30%.',
      tasks:
        'Build a full-dimensional code quality governance system to automate security verification, standardize code submission, and minimize side effects during maintenance.',
      actions: [
        'Designed and implemented regex-based global code scanning tools to validate external input, memory management, exception recovery, sensitive data handling and IO security across all codebases;',
        'Built project-specific quality interception systems for high-frequency maintenance projects, developed automated test scripts to replace manual self-testing covering 90% of core business scenarios;',
        'Optimized code management mechanisms: restricted access permissions and formulated coding standards/submission interception rules to enforce code quality at commit stage;',
        'Established real-time monitoring of code submission quality to identify and block non-compliant code before merge. Performed incremental and differential scans on each commit to trace the responsible author.',
      ],
      result:
        'Reduced security vulnerabilities by 75%, cut manual testing time by 60%, minimized related code might cause performance degradation during maintenance by 90%, and improved code maintainability & reliability.',
    },
    descriptionZH: {
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
    title: 'TDD Framework & Automated Testing System for Mobile App',
    titleZH: '移动应用 TDD 框架与自动化测试系统',
    time: '2025/1 ~ 2025/6',
    affiliated: 'Huawei',
    descriptionEN: {
      situation:
        'Open Harmony Next mobile App faced low test efficiency and unstable quality during rapid iteration, with 25% of bugs detected only in production environment.',
      tasks:
        'Build a Test-Driven Development (TDD) system and automated testing pipeline to improve test efficiency and product stability.',
      actions: [
        'Designed and built a comprehensive TDD system for HarmonyOS mobile App, including self-test modules and automated pipelines for ArkTS/ArkUI code;',
        /* 精准注入：排列组合测试，提升充分度并缩短开发时长 */
        'Utilized combinatorial and pairwise testing matrices to thoroughly execute diverse parameter permutations, significantly maximizing test adequacy while cutting down overall development and debugging cycles;',
        'Leveraged Github Actions and CI/CD pipelines to streamline HarmonyOS build/test workflows, integrating security scans and performance checks;',
        /* 精准注入：边界条件、状态Mock、时间旅行测试闹钟 */
        'Engineered robust state-mocking capabilities to validate complex boundary conditions, implementing time-travel testing (e.g., injection of future timestamps) to thoroughly verify time-sensitive components like alarms.',
      ],
      result:
        'Reduced manual intervention by 90%, increased full-test frequency from once a week to once an hour, reduced defect density by 65%, and shortened release cycle by half. Test coverage exceeded 99%, enabling the team to refactor code more confidently.',
    },
    descriptionZH: {
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
    title: 'Inclinometer Calibration System',
    titleZH: '水平仪动态校准系统',
    time: '2024/7 ~ 2024/8',
    affiliated: 'Huawei',
    descriptionEN: {
      situation:
        'The original inclinometer relied on gravity sensing and produced tilt errors during acceleration, causing measurement failure and severely degrading dynamic attitude estimation accuracy.',
      actions: [
        'Formulated a rigid-body kinematic model to decouple true gravity from dynamic inertial noise, isolating centripetal ω × (ω × r) and tangential α × r accelerations during rapid rotation.',
        'Implemented a delayed-state magnetometer calibration loop coupled with a complementary filter to bound long-term heading drift without inducing phase lag.',
        'Developed a real-time kinematic state machine to dynamically toggle HarmonyOS sensor sampling rates (50Hz ↔ 200Hz) and algorithm complexity based on acceleration variance.',
        'Optimized the tracking architecture by replacing a high-overhead double-integration loop with a first-order gyroscope integration (∫ω dt) for steady states, eliminating derivative noise amplification.',
        'Ported core fusion algorithms to HarmonyOS Native C++ (NDK), directly subscribing to the low-level HarmonyOS Sensor Service to bypass NAPI serialization bottlenecks for high-frequency IMU data streams.',
      ],
      result:
        'Achieved sub-degree attitude accuracy under both static and high-dynamic scenarios; successfully slashed CPU compute overhead and power consumption on HarmonyOS devices, eliminating thermal throttling.',
    },
    descriptionZH: {
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
    title: 'Decentralized Derivatives Exchange Server',
    titleZH: '去中心化衍生品交易所服务端',
    time: '2022/8 ~ 2022/11',
    affiliated: 'Bybit',
    descriptionEN: {
      situation:
        'The existing centralized derivatives exchange faced scalability issues and security risks, requiring a decentralized non-custodial solution to support any token pair perpetual swap markets.',
      tasks:
        'Develop high-performance backend system for decentralized derivatives exchange, ensuring precision and stability of trade processing.',
      actions: [
        'Developed a decentralized non-custodial derivatives protocol supporting perpetual swap markets for any token pair;',
        'Implemented high-precision, high-performance trade processing logic for decentralized derivatives markets, handling 10k+ TPS;',
        'Collected smart contract data and built GraphQL interfaces for server & web access, optimizing data query speed by 40%;',
        'Led backend design and implementation of airdrop events, developed accurate user staking calculation logic with 0 calculation errors.',
      ],
      result:
        'Successfully launched perpetual swap markets, supported 20k+ daily active users, and reduced trade matching and query latency by 40%',
    },
    descriptionZH: {
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
    title: 'DeFi Trade Mining System',
    titleZH: 'DeFi 交易挖矿系统',
    time: '2022/6 ~ 2022/11',
    affiliated: 'Bybit',
    descriptionEN: {
      situation:
        'The DeFi platform had low user engagement, requiring a trade mining mechanism to boost user open interest and platform liquidity.',
      tasks:
        'Design and implement trade mining event backend, optimize bonus calculation logic to improve event effectiveness.',
      actions: [
        'Designed and implemented trade mining event backend to boost user open interest participation rate;',
        'Developed bonus calculation logic based on user behavior analysis, improving event conversion rate by 35%;',
        'Built core framework with Go, interacted with Ethereum smart contracts, and managed event data via Redis & MySQL with data consistency guarantee;',
        'Integrated DEX protocol with immutable smart contracts on Ethereum blockchain, ensuring transaction security.',
      ],
      result:
        'Increased platform liquidity by 50%, raised user open interest by 45%, processed 100k+ daily trade mining transactions with 0 data loss.',
    },
    descriptionZH: {
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
    title: 'Enterprise CMS & ERP Platform',
    titleZH: '企业 CMS 与 ERP 平台',
    time: '2016/9 ~ 2017/9',
    descriptionEN: {
      situation:
        'Enterprise managers lacked visualized tools to manage resources, leading to low operational efficiency and fragmented data across departments.',
      tasks:
        'Build a comprehensive CMS & ERP platform to visualize enterprise resources and streamline business processes.',
      actions: [
        'Built a Gin + MySQL-based CMS for enterprise resource visualization, supporting real-time data monitoring and decision-making;',
        'Developed core ERP modules including BOM management, production control, order processing, and role-based access control;',
        'Optimized database structure to handle 1M+ daily data entries, reducing query time by 50%;',
        'Integrated front-end and back-end systems using Vue.js and Node.js, improving system response speed by 30%.',
      ],
      result:
        'Improved enterprise operational efficiency by 40%, reduced manual data entry errors by 80%, unified data management across 5+ departments, and supported 500+ concurrent users.',
    },
    descriptionZH: {
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
    title: 'Open Harmony Senior Developer(OD)',
    titleZH: 'Open Harmony 高级开发工程师(OD)',
    time: '2023/4 ~ Present',
    affiliated: 'https://pic1.zhimg.com/v2-e4d64b5e553899079c856727e6f12eae_xll.jpg',
    descriptionEN: {
      lead: 'Worked in Huawei media department on Open Harmony Next mobile application development, focusing on ArkTS/ArkWeb/ArkUI and enterprise-grade mobile delivery.',
      bullets: [
        'Built HarmonyOS applications and components using ArkTS/TypeScript, ArkWeb, and ArkUI declarative UI, aligned with microkernel architecture and mobile engineering best practices.',
        'Integrated mobile apps with backend services and cloud APIs, ensuring secure data flow, reliable performance, and cross-device compatibility across HarmonyOS devices.',
        'Led mobile engineering quality governance: clean architecture, unit tests, peer code reviews, branch strategy, and release readiness checks for regulated delivery.',
        'Resolved device and OS version issues, optimized startup, rendering, memory usage, and stability for production HarmonyOS deployments.',
      ],
    },
    descriptionZH: {
      lead: '在华为媒体部门负责 Open Harmony Next 移动应用开发，聚焦 ArkTS/ArkWeb/ArkUI 及企业级移动交付。',
      bullets: [
        '使用 ArkTS/TypeScript、ArkWeb 和 ArkUI 声明式 UI 构建 HarmonyOS 应用及组件，符合微内核架构和移动工程最佳实践。',
        '将移动应用与后端服务和云 API 集成，确保安全数据流、稳定性能和跨设备兼容性。',
        '主导移动工程质量治理：清晰架构、单元测试、同伴评审、分支策略和发布就绪检查，保障规范交付。',
        '解决设备与系统版本问题，优化启动、渲染、内存使用和稳定性，支持生产环境 HarmonyOS 部署。',
      ],
    },
  },
  {
    cls: 'Career',
    title: 'Open Harmony Senior Developer',
    time: '2023/4 ~ Present',
    affiliated: 'https://pic1.zhimg.com/v2-e4d64b5e553899079c856727e6f12eae_xll.jpg',
    descriptionEN: {
      lead: 'Worked with Huawei media department on Open Harmony Next mobile application development, focusing on ArkTS/ArkWeb/ArkUI and enterprise-grade mobile delivery.',
      bullets: [
        'Built HarmonyOS applications and components using ArkTS/TypeScript, ArkWeb, and ArkUI declarative UI, aligned with ArkTS architecture and mobile engineering best practices.',
        'Integrated mobile apps with backend services and cloud APIs, ensuring secure data flow, reliable performance, and cross-device compatibility across HarmonyOS devices.',
        'Led mobile engineering quality governance: clean architecture, unit tests, peer code reviews, branch strategy, and release readiness checks for regulated delivery.',
        'Resolved device and OS version issues, optimized startup, rendering, memory usage, and stability for production HarmonyOS deployments.',
      ],
    },
  },
  {
    cls: 'Bybit',
    title: 'Back-End Developer',
    titleZH: '后端开发工程师',
    time: '2022/6 ~ 2023/3',
    affiliated:
      'http://jfz-erp2.oss-cn-hangzhou.aliyuncs.com/images/dc_upload/a1XE4Zom1pbNOZ4LZ1eKVodAbagpmI1mmMAWhu3K.png',
    descriptionEN: {
      lead: 'Designed and developed full-stack systems (front-end + back-end) for DeFi products.',
      bullets: [
        'Maintained, upgraded and optimized systems to address high concurrency, stability and massive data challenges.',
        'Participated in business restructuring discussions, proposed feasible technical solutions, and independently authored technical documentation.',
        'Built Go-based core frameworks, interacted with on-chain smart contracts, and managed event data using Redis and MySQL.',
        'Researched decentralized technologies to optimize back-end server performance.',
      ],
    },
    descriptionZH: {
      lead: '为 DeFi 产品设计并开发全栈系统（前端 + 后端）。',
      bullets: [
        '维护、升级并优化系统，以应对高并发、稳定性和海量数据挑战。',
        '参与业务重构讨论，提出可行技术方案，并独立撰写技术文档。',
        '构建 Go 核心框架，连接链上智能合约，使用 Redis 和 MySQL 管理事件数据。',
        '研究去中心化技术以优化后端服务器性能。',
      ],
    },
  },
  {
    cls: 'Intel',
    title: 'Back-End Developer',
    titleZH: '后端开发工程师',
    time: '2019/1 ~ 2022/5',
    affiliated: 'http://img07.51jobcdn.com/fansImg/CompLogo/2/1999/1998540/1998540_300.jpg',
    descriptionEN: {
      lead: 'Maintained an Android cloud server-based coordinator system, ensuring high availability.',
      bullets: [
        'Led development and maintenance of a user management platform with 100k+ daily active users.',
        'Oversaw database maintenance, optimization and disaster recovery planning.',
        'Led business product implementation and technical research; formulated development plans and maintained technical documentation.',
      ],
    },
    descriptionZH: {
      lead: '维护基于 Android 云服务器的协同系统，确保高可用性。',
      bullets: [
        '负责日活 10 万+ 的用户管理平台开发与维护。',
        '监督数据库维护、优化与灾备规划。',
        '负责业务产品落地与技术研究；制定开发方案并维护技术文档。',
      ],
    },
  },
  {
    cls: 'Hyeco',
    title: 'Full Stack Engineer',
    titleZH: '全栈工程师',
    time: '2021/2 ~ 2021/12',
    affiliated:
      'https://media.licdn.com/dms/image/v2/C4E0BAQEpiPiXLqi9Rw/company-logo_200_200/company-logo_200_200/0/1631311837863?e=2147483647&v=beta&t=rngfG1Hw6GJ34ht2J72BhzbdI3fkka5ciT7WbI-XAKc',
    descriptionEN: `
      <li>Corely responsible for designing, implementing, and maintaining the B-side IoT (Internet of Things) device management platform.</li>
      <li>Collaborated closely with designers, clients, and backend developers to realize product user interfaces, interaction flows, and core features end-to-end.</li>
      <li>Continuously optimized front-end user experience and page response speed, while heavily tuning backend server-side code execution and high-frequency IoT data processing efficiency.</li>
      <li>Developed, expanded, and maintained reusable front-end component libraries and high-performance backend API services.</li>
      <li>Led cross-team communication and department coordination to ensure smooth and efficient delivery of responsible business modules.</li>
      <li><strong>Technical Stack:</strong> Golang, Gin, Beego, MySQL, Vue, Ant Design, JavaScript, HTML, CSS</li>
    `,
    descriptionZH: `
      <li>负责设计、实现和维护 B 端物联网设备管理平台。</li>
      <li>与设计师、客户和后端开发人员紧密协作，实现产品界面、交互流程和核心功能的端到端交付。</li>
      <li>持续优化前端用户体验和页面响应速度，同时深入调优后端服务器代码执行和高频物联网数据处理效率。</li>
      <li>开发、扩展并维护可复用前端组件库和高性能后端 API 服务。</li>
      <li>领导跨团队沟通与部门协调，确保负责业务模块平稳高效交付。</li>
      <li><strong>技术栈：</strong>Golang, Gin, Beego, MySQL, Vue, Ant Design, JavaScript, HTML, CSS</li>
    `,
  },
  {
    cls: 'Wood',
    title: 'Go Development Engineer',
    titleZH: 'Go 开发工程师',
    time: '2017/12 ~ 2021/2',
    affiliated:
      'https://bkimg.cdn.bcebos.com/pic/3bf33a87e950352ad7e150e15d43fbf2b3118b52?x-bce-process=image/format,f_auto/resize,m_lfit,limit_1,w_335',
    descriptionEN: `
      <li>Aligned with the company's product development directions, corely responsible for the architectural design, coding, and development of WEB servers.</li>
      <li>Actively participated in requirement design, technical review, architecture discussion, and led full backend code refactoring and optimization.</li>
      <li>Executed high-quality unit testing to ensure delivery readiness, and troubleshot critical production environment issues, bug fixes, and performance bottlenecks in high-concurrency scenarios.</li>
      <li><strong>Technical Stack:</strong> Go, Gin, Python, MySQL, Vue, Bootstrap</li>
    `,
    descriptionZH: `
      <li>根据公司产品发展方向，负责 WEB 服务器的架构设计、编码与开发。</li>
      <li>积极参与需求设计、技术评审、架构讨论，并主导后端代码重构与优化。</li>
      <li>执行高质量单元测试以保障交付准备，排查高并发场景下关键生产问题、Bug 修复与性能瓶颈。</li>
      <li><strong>技术栈：</strong>Go, Gin, Python, MySQL, Vue, Bootstrap</li>
    `,
  },
  {
    cls: 'ACCU',
    title: 'Back-End Developer',
    titleZH: '后端开发工程师',
    time: '2015/7 ~ 2017/12',
    affiliated:
      'https://tse2-mm.cn.bing.net/th/id/OIP-C.3JfCz-BhoNINfTobcRg2vgAAAA?w=150&h=150&c=7&r=0&o=5&dpr=1.4&pid=1.7',
    descriptionEN: {
      lead: 'ACCU provides end-to-end quality management solutions for automotive/electronics manufacturing supply chains (clients: Mercedes-Benz, BMW, Volkswagen).',
      bullets: [
        'Developed quality inspection data management services for overseas automotive production lines.',
        'Led development of a labor cost accounting system for front-line quality inspection staff.',
        'Participated in requirement design, back-end code refactoring, unit testing and production issue resolution.',
        'Deployed system localization across countries: collected regional requirements and maintained multi-language packages.',
      ],
    },
    descriptionZH: {
      lead: 'ACCU 提供面向汽车/电子制造供应链的端到端质量管理解决方案（客户：奔驰、宝马、大众）。',
      bullets: [
        '为海外汽车生产线开发质量检验数据管理服务。',
        '主导面向一线检验人员的人工成本核算系统开发。',
        '参与需求设计、后端代码重构、单元测试与生产问题解决。',
        '部署跨国本地化系统：收集区域需求并维护多语言包。',
      ],
    },
  },
  {
    cls: 'Rolls-Royce',
    title: 'Intern Engineer',
    titleZH: '实习工程师',
    time: '2014/9 ~ 2014/10',
    affiliated:
      'https://www.bing.com/th?id=OSK.by68J9786kXt3Rf2wwSHYuyJB8Aa5EajCKHT-3O4lQk&w=102&h=102&c=7&o=6&pid=SANGAM',
    descriptionEN: {
      lead: 'Verified production line product measurement data to ensure compliance with Rolls-Royce quality standards, supporting high-precision manufacturing processes.',
    },
    descriptionZH: {
      lead: '校验生产线产品测量数据，确保满足劳斯莱斯质量标准，支持高精度制造流程。',
    },
  },
]
const LABELS = {
  en: {
    affiliated: 'Affiliated:',
    situation: 'Situation:',
    tasks: 'Tasks:',
    actions: 'Actions:',
    result: 'Result:',
    description: 'Description:',
  },
  zh: {
    affiliated: '关联项目：',
    situation: '现状：',
    tasks: '任务：',
    actions: '行动：',
    result: '结果：',
    description: '描述：',
  },
}

let isDomReady = false

function getLabel(key) {
  return (LABELS[currentLanguage] && LABELS[currentLanguage][key]) || LABELS.en[key]
}

function getLocalizedTitle(item) {
  return currentLanguage === 'zh' ? item.titleZH || item.title : item.title
}

// Function to set the current language
function setLanguage(lang) {
  currentLanguage = lang
  if (isDomReady) {
    renderDynamicContent()
  }
}

function renderDynamicContent() {
  projects.forEach((j) => {
    const title = getLocalizedTitle(j)
    // Select description based on current language
    const description = currentLanguage === 'zh' ? j.descriptionZH : j.descriptionEN
    // build description HTML from object or string
    let descHtml = ''
    let situationHtml = ''
    let tasksHtml = ''
    let resultHtml = ''
    let actionsHtml = ''
    if (typeof description === 'string') {
      descHtml = description
    } else if (typeof description === 'object' && description !== null) {
      const d = description
      if (d.situation) situationHtml = d.situation
      if (d.tasks) tasksHtml = d.tasks
      if (Array.isArray(d.actions) && d.actions.length) {
        actionsHtml += '<ol>'
        d.actions.forEach((t) => {
          actionsHtml += '<li>' + t + '</li>'
        })
        actionsHtml += '</ol>'
      }
      if (d.result) resultHtml = d.result
    }

    $('tr.project.' + j.cls).html(
      `
<td class="p15">
  <table cellspacing="0" cellpadding="0" border="0">
    <tbody>
      <tr>
        <td class="phd tb1" colspan="3"><strong>` +
        title +
        `</strong></td>
        <td valign="top" class="time">` +
        j.time +
        `</td></tr>` +
        (j.affiliated
          ? `<tr>
          <td valign="top" class="tb keys">` +
            getLabel('affiliated') +
            `</td>
          <td valign="top" colspan="3" class="txt1">` +
            j.affiliated +
            `</td></tr>`
          : '') +
        (situationHtml
          ? `<tr>
          <td valign="top" class="tb keys"><strong>` +
            getLabel('situation') +
            `</strong></td>
          <td valign="top" colspan="3" class="txt1">` +
            situationHtml +
            `</td></tr>`
          : '') +
        (tasksHtml
          ? `<tr>
          <td valign="top" class="tb keys"><strong>` +
            getLabel('tasks') +
            `</strong></td>
          <td valign="top" colspan="3" class="txt1">` +
            tasksHtml +
            `</td></tr>`
          : '') +
        (actionsHtml
          ? `<tr>
          <td valign="top" class="tb keys"><strong>` +
            getLabel('actions') +
            `</strong></td>
          <td valign="top" colspan="3" class="txt1">` +
            actionsHtml +
            `</td></tr>`
          : '') +
        (resultHtml
          ? `<tr>
          <td valign="top" class="tb keys"><strong>` +
            getLabel('result') +
            `</strong></td>
          <td valign="top" colspan="3" class="txt1">` +
            resultHtml +
            `</td></tr>`
          : '') +
        `</tbody>
  </table>
</td>`
    )
  })

  works.forEach((j) => {
    // Select description based on current language
    const description = currentLanguage === 'zh' ? j.descriptionZH : j.descriptionEN
    // build description for work entry
    let descHtml = ''
    if (typeof description === 'string') {
      descHtml = description
    } else if (typeof description === 'object' && description !== null) {
      const d = description
      if (d.lead) descHtml += '<p>' + d.lead + '</p>'
      if (Array.isArray(d.bullets) && d.bullets.length) {
        descHtml += '<ul>'
        d.bullets.forEach((b) => {
          descHtml += '<li>' + b + '</li>'
        })
        descHtml += '</ul>'
      }
    }

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
        getLocalizedTitle(j) +
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
                          <td valign="top" class="keys">` +
        getLabel('description') +
        `</td>
                          <td valign="top" class="txt1">
                          ` +
        descHtml +
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
}

$(document).ready(() => {
  isDomReady = true
  let ifrs = ['personal', 'personalHO', 'open', 'education']
  let ifrHeights = [1390, 1390, 1560, 870]

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

  renderDynamicContent()
})

$(document).ready(function () {
  if ($('tr.work.Hyeco').length > 0) {
    $('tr.work.Intel td.time').text('2021/12 ~ 2022/5')
    $('tr.work.ACCU td.time').text('2015/9 ~ 2017/12')
  }
})
