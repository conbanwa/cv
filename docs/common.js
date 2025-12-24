'use strict'
const projects = [
  {
    cls: 'tdd',
    title: 'TDD Framework & Automated Testing System for Mobile App',
    time: '2025/1 ~ 2025/6',
    affiliated: 'Huawei',
    description: `
    Built a comprehensive Test-Driven Development (TDD) system for Open Harmony Next mobile App, 
    including self-test module development and full-version automated testing pipeline construction.
    <br />
    Monitored core metrics (quality, performance, stability) throughout the automated testing phase, 
    ensuring compliance with delivery standards.
    <br />
    Leveraged Jenkins and CI/CD pipelines to streamline testing workflows, 
    reducing manual intervention by 40% and improving test efficiency by 50%.
    <br />
    Technologies: Jenkins, CI/CD, TDD, Automated Testing, Performance Monitoring
    <br />`,
  },
  {
    cls: 'server',
    title: 'Decentralized Derivatives Exchange Server',
    time: '2022/8 ~ 2022/11',
    affiliated: 'Bybit',
    description: `
    Developed a decentralized, non-custodial derivatives protocol supporting perpetual swap markets for any token pair.
    <br />
    Responsible for high-precision, high-performance trade processing in decentralized derivatives markets.
    <br />
    Collected smart contract data and built GraphQL interfaces for server & web access.
    <br />
    Led back-end design and implementation of airdrop events, and developed user staking calculation logic.
    <br />`,
  },
  {
    cls: 'banana',
    title: 'DeFi Trade Mining System',
    time: '2022/6 ~ 2022/11',
    affiliated: 'Bybit',
    description: `
    Designed and implemented the back-end of a trade mining event to boost user open interest.
    <br />
    Developed bonus calculation logic based on user behavior analysis to optimize event effectiveness.
    <br />
    Built core framework with Go, interacted with Ethereum smart contracts, and managed event data via Redis & MySQL.
    <br />
    Integrated DEX protocol with immutable smart contracts on Ethereum blockchain.
    <br />`,
  },
  {
    cls: 'erp',
    title: 'Enterprise CMS & ERP Platform',
    time: '2016/9 ~ 2017/9',
    description: `
    Built a Gin + MySQL-based CMS for enterprise resource visualization and decision-making.
    <br />
    Developed ERP modules including BOM management, production control, order processing, and role-based access control.
    <br />
    Technologies: HTML, Golang, MySQL, JavaScript, Node.js, Vue.js, GORM
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
      <li>Designed and developed core features for Open Harmony Next mobile applications.</li>
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
      <li>Designed and developed full-stack systems (front-end + back-end) for DeFi products.</li>
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
      <li>Maintained an Android cloud server-based coordinator system, ensuring high availability.</li>
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
  let ifrHeights = [490, 1560, 770]
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
