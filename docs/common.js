'use strict'
const projects = [
  {
    cls: 'server',
    title: 'Decentralized derivatives exchange server',
    time: '2022/8 ~ 2022/11',
    affiliated: 'Bybit',
    description: `
    A decentralized and non-custodial derivatives protocol that facilitates the
    creation of perpetual swap markets for any token pair.
    <br />
    Responsible for supporting high-performing precision trades in the
    decentralized derivatives market. <br />
    Collect smart contract information and provide GraphQL interface for server
    & web to access. <br />
    Responsible for airdrop event back-end design and achieve; Responsible for
    user staking calculates;
    <br />`,
  },
  {
    cls: 'banana',
    title: 'DeFi trade mining',
    time: '2022/6 ~ 2022/11',
    affiliated: 'Bybit',
    description: `
    Responsible for trade mining event back-end design and achieve;<br />
    Trade mining event encourages users increase their open interests, the
    program formulates the extra bonus per user bases on the analysis of user
    behaviors.<br />
    DEX protocol operates through a series of immutable and persistent smart
    contracts on the Ethereum blockchain<br />
    Build main framework by Go language, interact with smart contract on chain,
    manage event data by Redis and Mysql; <br />`,
  },
  {
    cls: 'erp',
    title: 'Enterprise CMS & ERP',
    time: '2016/9 ~ 2017/9',
    description: `
    CMS was built with Gin and MySQL, allows enterprise managers visualize enterprise resources. <br />
    ERP includes BOM, production management, order management, personnel
    authority, etc<br />
    language/frame: HTML, golang, MySQL, javascript, node, vue, gorm`,
  },
]
const works = [
  {
    cls: 'Huawei',
    title: 'Open Harmony Developer',
    time: '2023/4 ~ &emsp;&emsp;&emsp;',
    affiliated: 'https://pic1.zhimg.com/v2-e4d64b5e553899079c856727e6f12eae_xll.jpg',
    description: `
                            <li>Responsible for Open Harmony Next App design and development</li>
                            <li>Research software technology strategies and plans for multiple products/platforms across product lines/product lines, 
                            lead the software development direction in the industry, and make plans for software technology development challenges in advance.</li>
                            <li>Take the lead in implementing the architecture of cross-product line/product line main product/platform software, 
                            and lead the implementation of core code. 
                            Conduct special research on key technologies such as algorithms and databases to resolve corporate-level technical difficulties.</li>
                            <li>Lead the research and practice of software engineering methods across product lines/product lines, 
                            and propose innovative engineering methods.
                            </li>
                            <li>Responsible for Clean Code / Coding Standards planing and implementation.
                            </li>`,
  },
  {
    cls: 'Bybit',
    title: 'Back-End Developer',
    time: '2022/6 ~ 2023/3',
    affiliated:
      'http://jfz-erp2.oss-cn-hangzhou.aliyuncs.com/images/dc_upload/a1XE4Zom1pbNOZ4LZ1eKVodAbagpmI1mmMAWhu3K.png',
    description: `
                            <li>Responsible for front-end and back-end system design and development</li>
                            <li>
                              Responsible for system maintenance, upgrade and optimization and overcome
                              various technical difficulties caused by high concurrency, stability, and
                              massive data;
                            </li>
                            <li>
                              Participate in business restructuring discussions, propose feasible and
                              constructive solutions and be able to independently write relevant technical
                              documents;
                            </li>
                            <li>
                              Build main framework by Go language, interact with smart contract on chain,
                              manage event data by Redis and Mysql;
                            </li>
                            <li>
                              Participate in the research and practice of decentralized technologies,
                              promote the performance of the back-end server;
                            </li>`,
  },
  {
    cls: 'Intel',
    title: 'Back-End Developer',
    time: '2018/1 ~ 2022/5',
    affiliated: 'http://img07.51jobcdn.com/fansImg/CompLogo/2/1999/1998540/1998540_300.jpg',
    description: `
                            <li>
                              Take charge of the maintenance of coordinator system based on Android cloud
                              server.
                            </li>
                            <li>Lead the development and maintenance of user management platform.</li>
                            <li>Lead database maintenance.</li>
                            <li>
                              Lead business product implementation plan and technical research; take
                              charge of formulating development plans; write and maintain relevant
                              development documents.
                            </li>`,
  },
  {
    cls: 'ACCU',
    title: 'Back-End Developer',
    time: '2015/7 ~ 2017/12',
    affiliated:
      'https://tse2-mm.cn.bing.net/th/id/OIP-C.3JfCz-BhoNINfTobcRg2vgAAAA?w=150&h=150&c=7&r=0&o=5&dpr=1.4&pid=1.7',
    description: `
                            ACCU provides one-stop quality problem solutions for the entire supply chain
                            from raw materials to finished product delivery in the electronics,
                            automobile, machinery manufacturing and light industry manufacturing
                            industries. Its customers include Mercedes-Benz, BMW, Volkswagen and other
                            industry leaders.
                            <li>
                              Responsible for the company's quality inspection data management services on
                              overseas customers' automobile production lines.
                            </li>
                            <li>
                              Leading the human cost accounting system of the company's front-line quality
                              inspection staff.
                            </li>
                            <li>
                              Participate in requirement design and discussion, back-end coding
                              refactoring, unit testing, bug fixing, production environment problem
                              fixing, etc.
                            </li>
                            <li>
                              Deploy localization in different countries: Responsible for collecting and
                              confirming the requirements of team projects in different countries, and
                              maintaining national language packages.
                            </li>`,
  },
]
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
