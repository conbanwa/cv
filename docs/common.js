'use strict'
let projects = [
  {
    cls: 'server',
    title: 'Decentralized derivatives exchange server',
    time: '2022/8-2022/11',
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
    time: '2022/6-2022/11',
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
    time: '2016/9-2017/9',
    description: `
    CMS was built with Gin and MySQL, allows enterprise managers visualize enterprise resources. <br />
    ERP includes BOM, production management, order management, personnel
    authority, etc<br />
    language/frame: HTML, golang, MySQL, javascript, node, vue, gorm`,
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
  $('.work').html(`
  <td class="tbb">
    <table cellspacing="0" cellpadding="0" border="0">
      <tbody>
        <tr>
          <td class="p15 pd_20">
            <table cellspacing="0" cellpadding="0" border="0">
              <tbody>
                <tr>
                  <td width="52" height="52" rowspan="2" class="companyLogo">
                    <p>
                      <img
                        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fjfz-erp2.oss-cn-hangzhou.aliyuncs.com%2Fimages%2Fdc_upload%2Fa1XE4Zom1pbNOZ4LZ1eKVodAbagpmI1mmMAWhu3K.png&refer=http%3A%2F%2Fjfz-erp2.oss-cn-hangzhou.aliyuncs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668832822&t=a19a400485e8d99330f628d2f256e417"
                        alt="" width="48" height="48" /><i></i>
                    </p>
                  </td>

                  <td class="phd tb1 p_12"><strong>Bybit</strong><span class="gray">&nbsp;</span></td>
                  <td valign="top" class="time">2022/6-now</td>
                </tr>
                <tr>
                  <td valign="top" class="tb1 p_12" colspan="3">
                    <span>Software Architect</span>
                  </td>
                </tr>
                <tr>
                  <td class="h_16" colspan="3"></td>
                </tr>
                <tr>
                  <td class="phd tb1 gray2" colspan="3">
                    blockchain<span class="p5">|</span>1000-5000 staffs<span class="p5">|</span>Foreign
                    capital
                  </td>
                </tr>
                <tr>
                  <td class="tb1" colspan="3">
                    <table cellspacing="0" cellpadding="0" border="0">
                      <tbody>
                        <tr>
                          <td valign="top" class="keys">Description:</td>
                          <td valign="top" class="txt1">
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
                            </li>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td class="p15 con pd_20">
            <table cellspacing="0" cellpadding="0" border="0">
              <tbody>
                <tr>
                  <td width="52" height="52" rowspan="2" class="companyLogo">
                    <p>
                      <img
                        src="http://img07.51jobcdn.com/fansImg/CompLogo/2/1999/1998540/1998540_300.jpg?636534238676068635"
                        alt="" width="48" height="48" /><i></i>
                    </p>
                  </td>

                  <td class="phd tb1 p_12"><strong>Intel</strong><span class="gray">&nbsp;</span></td>
                  <td valign="top" class="time">2018/1-2022/5</td>
                </tr>
                <tr>
                  <td valign="top" class="tb1 p_12" colspan="3">
                    <span>Go Back-End Developer</span>
                  </td>
                </tr>
                <tr>
                  <td class="h_16" colspan="3"></td>
                </tr>
                <tr>
                  <td class="phd tb1 gray2" colspan="3">
                    chip<span class="p5">|</span>More than 10000<span class="p5">|</span>Foreign capital
                  </td>
                </tr>
                <tr>
                  <td class="tb1" colspan="3">
                    <table cellspacing="0" cellpadding="0" border="0">
                      <tbody>
                        <tr>
                          <td valign="top" class="keys">Description:</td>
                          <td valign="top" class="txt1">
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
                            </li>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td class="p15 con pd_20">
            <table cellspacing="0" cellpadding="0" border="0">
              <tbody>
                <tr>
                  <td width="52" height="52" rowspan="2" class="companyLogo">
                    <p>
                      <img src="http://img202.yun300.cn/img/5523.png?tenantId=244128&viewType=1&k=1657898382000"
                        alt="" width="48" height="48" /><i></i>
                    </p>
                  </td>

                  <td class="phd tb1 p_12"><strong>ACCU</strong><span class="gray">&nbsp;</span></td>
                  <td valign="top" class="time">2015/7-2017/12</td>
                </tr>
                <tr>
                  <td valign="top" class="tb1 p_12" colspan="3">
                    <span>Go Back-End Developer</span>
                    <span class="hai">Overseas experience</span>
                  </td>
                </tr>
                <tr>
                  <td class="h_16" colspan="3"></td>
                </tr>
                <tr>
                  <td class="phd tb1 gray2" colspan="3">
                    automobile<span class="p5">|</span>More than 10000<span class="p5">|</span>Foreign
                    capital
                  </td>
                </tr>
                <tr>
                  <td class="tb1" colspan="3">
                    <table cellspacing="0" cellpadding="0" border="0">
                      <tbody>
                        <tr>
                          <td valign="top" class="keys">Description:</td>
                          <td valign="top" class="txt1">
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
                            </li>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </td>`)
})
