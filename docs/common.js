'use strict'
const projects = [
  {
    cls: 'codecheck',
    title: 'Code Quality & Security Governance System',
    time: '2024/1 ~ 2024/4',
    affiliated: 'Cross-project Initiative',
    description: `
    Background: Frequent iteration of multi-team maintained projects led to rising security risks (external input vulnerabilities, memory leaks) and inconsistent code quality, which degraded product performance and reliability by 30%.
    <br />
    Responsibility: Build a full-dimensional code quality governance system to automate security verification, standardize code submission, and minimize side effects during maintenance.
    <br />
    1. Designed and implemented regex-based global code scanning tools to validate external input, memory management, exception recovery, sensitive data handling and IO security across all codebases;
    <br />
    2. Built project-specific quality interception systems for high-frequency maintenance projects, developed automated test scripts to replace manual self-testing covering 90% of core business scenarios;
    <br />
    3. Optimized code management mechanisms: restricted access permissions and formulated coding standards/submission interception rules to enforce code quality at commit stage;
    <br />
    4. Established real-time monitoring of code submission quality to identify and block non-compliant code before merge.
    <br />
    Outcomes: Reduced security vulnerabilities by 75%, cut manual testing time by 60%, minimized performance degradation in maintenance by 90%, and improved code maintainability & reliability by 80%.
    <br />`,
  },
  {
    cls: 'tdd',
    title: 'TDD Framework & Automated Testing System for Mobile App',
    time: '2025/1 ~ 2025/6',
    affiliated: 'Huawei',
    description: `
    Background: Open Harmony Next mobile App faced low test efficiency and unstable quality during rapid iteration, with 25% of bugs detected only in production environment.
    <br />
    Responsibility: Build a Test-Driven Development (TDD) system and automated testing pipeline to improve test efficiency and product stability.
    <br />
    1. Designed and built a comprehensive TDD system for mobile App, including self-test module development and full-version automated testing pipeline construction;
    <br />
    2. Monitored core metrics (quality, performance, stability) throughout the automated testing phase to ensure compliance with delivery standards;
    <br />
    3. Leveraged Jenkins and CI/CD pipelines to streamline testing workflows, integrating automated security scans and performance tests;
    <br />
    4. Optimized test case design to cover edge scenarios, reducing production bugs by targeting root causes in development phase.
    <br />
    Outcomes: Reduced manual intervention by 40%, improved test efficiency by 50%, cut production bugs by 65%, and shortened release cycle by 30%.
    <br />`,
  },
  {
    cls: 'server',
    title: 'Decentralized Derivatives Exchange Server',
    time: '2022/8 ~ 2022/11',
    affiliated: 'Bybit',
    description: `
    Background: The existing centralized derivatives exchange faced scalability issues and security risks, requiring a decentralized non-custodial solution to support any token pair perpetual swap markets.
    <br />
    Responsibility: Develop high-performance backend system for decentralized derivatives exchange, ensuring precision and stability of trade processing.
    <br />
    1. Developed a decentralized non-custodial derivatives protocol supporting perpetual swap markets for any token pair;
    <br />
    2. Implemented high-precision, high-performance trade processing logic for decentralized derivatives markets, handling 10k+ TPS;
    <br />
    3. Collected smart contract data and built GraphQL interfaces for server & web access, optimizing data query speed by 40%;
    <br />
    4. Led backend design and implementation of airdrop events, developed accurate user staking calculation logic with 0 calculation errors.
    <br />
    Outcomes: Successfully launched 5+ perpetual swap markets, supported 20k+ daily active users, achieved 99.99% system availability, and reduced data query latency by 40%.
    <br />`,
  },
  {
    cls: 'banana',
    title: 'DeFi Trade Mining System',
    time: '2022/6 ~ 2022/11',
    affiliated: 'Bybit',
    description: `
    Background: The DeFi platform had low user engagement, requiring a trade mining mechanism to boost user open interest and platform liquidity.
    <br />
    Responsibility: Design and implement trade mining event backend, optimize bonus calculation logic to improve event effectiveness.
    <br />
    1. Designed and implemented trade mining event backend to boost user open interest participation rate;
    <br />
    2. Developed bonus calculation logic based on user behavior analysis, improving event conversion rate by 35%;
    <br />
    3. Built core framework with Go, interacted with Ethereum smart contracts, and managed event data via Redis & MySQL with data consistency guarantee;
    <br />
    4. Integrated DEX protocol with immutable smart contracts on Ethereum blockchain, ensuring transaction security.
    <br />
    Outcomes: Increased platform liquidity by 50%, raised user open interest by 45%, processed 100k+ daily trade mining transactions with 0 data loss.
    <br />`,
  },
  {
    cls: 'erp',
    title: 'Enterprise CMS & ERP Platform',
    time: '2016/9 ~ 2017/9',
    description: `
    Background: Enterprise managers lacked visualized tools to manage resources, leading to low operational efficiency and fragmented data across departments.
    <br />
    Responsibility: Build a comprehensive CMS & ERP platform to visualize enterprise resources and streamline business processes.
    <br />
    1. Built a Gin + MySQL-based CMS for enterprise resource visualization, supporting real-time data monitoring and decision-making;
    <br />
    2. Developed core ERP modules including BOM management, production control, order processing, and role-based access control;
    <br />
    3. Optimized database structure to handle 1M+ daily data entries, reducing query time by 50%;
    <br />
    4. Integrated front-end and back-end systems using Vue.js and Node.js, improving system response speed by 30%.
    <br />
    Outcomes: Improved enterprise operational efficiency by 40%, reduced manual data entry errors by 80%, unified data management across 5+ departments, and supported 500+ concurrent users.
    <br />`,
  },
];
const works = [
  {
    cls: 'Huawei',
    title: 'Open Harmony Senior Developer',
    time: '2023/4 ~ Present',
    affiliated: 'https://pic1.zhimg.com/v2-e4d64b5e553899079c856727e6f12eae_xll.jpg',
    description: `
      Designed and developed core features for Open Harmony Next mobile applications.
      <li>Researched software technology strategies for cross-product line platforms, 
      leading industry-aligned development direction and preemptive planning for technical challenges.</li>
      <li>Spearheaded cross-product software architecture design and core code implementation;
      Conducted research on key technologies (algorithms, databases) to resolve enterprise-level technical bottlenecks.</li>
      <li>Established TDD system and self-test capabilities for mobile Apps; 
      Monitored quality/performance/stability metrics during full-scale automated testing;
      Optimized testing workflows via Jenkins & CI/CD pipelines to ensure delivery quality.</li>
      <li>Planned and implemented Clean Code standards and coding best practices across teams.</li>`,
  },
  {
    cls: 'Bybit',
    title: 'Back-End Developer',
    time: '2022/6 ~ 2023/3',
    affiliated: 'http://jfz-erp2.oss-cn-hangzhou.aliyuncs.com/images/dc_upload/a1XE4Zom1pbNOZ4LZ1eKVodAbagpmI1mmMAWhu3K.png',
    description: `
      Designed and developed full-stack systems (front-end + back-end) for DeFi products.
      <li>Maintained, upgraded and optimized systems to address high concurrency, stability and massive data challenges.</li>
      <li>Participated in business restructuring discussions, proposed feasible technical solutions, 
      and independently authored technical documentation.</li>
      <li>Built Go-based core frameworks, interacted with on-chain smart contracts, 
      and managed event data using Redis and MySQL.</li>
      <li>Researched decentralized technologies to optimize back-end server performance.</li>`,
  },
  {
    cls: 'Intel',
    title: 'Back-End Developer',
    time: '2018/1 ~ 2022/5',
    affiliated: 'http://img07.51jobcdn.com/fansImg/CompLogo/2/1999/1998540/1998540_300.jpg',
    description: `
      Maintained an Android cloud server-based coordinator system, ensuring high availability.
      <li>Led development and maintenance of a user management platform with 100k+ daily active users.</li>
      <li>Oversaw database maintenance, optimization and disaster recovery planning.</li>
      <li>Led business product implementation and technical research; 
      formulated development plans and maintained technical documentation.</li>`,
  },
  {
    cls: 'ACCU',
    title: 'Back-End Developer',
    time: '2015/7 ~ 2017/12',
    affiliated: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.3JfCz-BhoNINfTobcRg2vgAAAA?w=150&h=150&c=7&r=0&o=5&dpr=1.4&pid=1.7',
    description: `
      ACCU provides end-to-end quality management solutions for automotive/electronics manufacturing supply chains 
      (clients: Mercedes-Benz, BMW, Volkswagen).
      <li>Developed quality inspection data management services for overseas automotive production lines.</li>
      <li>Led development of a labor cost accounting system for front-line quality inspection staff.</li>
      <li>Participated in requirement design, back-end code refactoring, unit testing and production issue resolution.</li>
      <li>Deployed system localization across countries: collected regional requirements and maintained multi-language packages.</li>`,
  },
  {
    cls: 'Rolls-Royce',
    title: 'Intern Engineer',
    time: '2014/9 ~ 2014/10',
    affiliated: 'https://www.bing.com/th?id=OSK.by68J9786kXt3Rf2wwSHYuyJB8Aa5EajCKHT-3O4lQk&w=102&h=102&c=7&o=6&pid=SANGAM',
    description: `
      Verified production line product measurement data to ensure compliance with Rolls-Royce quality standards, 
      supporting high-precision manufacturing processes.`,
  },
];
$(document).ready(() => {
  let ifrs = ['personal', 'open', 'education']
  let ifrHeights = [1390, 1560, 770]
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
