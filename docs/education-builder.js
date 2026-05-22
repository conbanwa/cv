'use strict'

const TEXTS = {
  en: {
    educationTitle: 'Educational experience',
    skillsTitle: 'Technology stack',
    languageTitle: 'Language',
    socialTitle: 'Social account',
    frontend: 'Front-end',
    backend: 'Back-end',
    om: 'O&M',
    english: 'English',
    japanese: 'Japanese',
    mandarin: 'Mandarin',
    shanghainese: 'Shanghainese',
    zhihu: 'Zhihu',
    github: 'Github',
    likes: 'Total likes',
    followers: 'Followers',
    commits: 'Total commits',
    universityBadge: 'QS Top 100',
    highSchool: 'High School',
    physics: 'Physics',
    cs: 'Computer Science',
    undergraduate: 'Undergraduate',
    postgraduate: 'Postgraduate',
  },
  zh: {
    educationTitle: '教育经历',
    skillsTitle: '技术栈',
    languageTitle: '语言',
    socialTitle: '社交账号',
    frontend: '前端',
    backend: '后端',
    om: '运维',
    english: '英语',
    japanese: '日语',
    mandarin: '普通话',
    shanghainese: '吴语',
    zhihu: '知乎',
    github: 'Github',
    likes: '获赞数',
    followers: '粉丝数',
    commits: '总提交数',
    universityBadge: 'QS前100',
    highSchool: '高中',
    physics: '物理学',
    cs: '计算机科学',
    undergraduate: '本科',
    postgraduate: '研究生',
  },
}

const EDUCATION_ITEMS = [
  {
    logo: 'https://www.studyabroad.sg/site/wp-content/uploads/jack-studyabroad-logo2.gif',
    title: 'Leicester ISC International Student Center',
    noteKey: 'highSchool',
    time: '2011/10',
  },
  {
    logo: 'https://img01.51jobcdn.com/im/school/%25E8%258E%25B1%25E6%2596%25AF%25E7%2589%25B9%25E5%25A4%25A7%25E5%25AD%25A6.jpg',
    title: 'University of Leicester',
    noteKey: 'physics',
    badgeKey: 'universityBadge',
    degreeKey: 'undergraduate',
    time: '2012/10',
  },
  {
    logo: 'https://logowik.com/content/uploads/images/438_monash_university_logo.jpg',
    title: 'Monash University',
    noteKey: 'cs',
    badgeKey: 'universityBadge',
    degreeKey: 'postgraduate',
    time: '2018/07',
  },
]

const SKILL_GROUPS = [
  {
    labelKey: 'frontend',
    items: [
      { name: 'Javascript', levelKey: 'proficient' },
      { name: 'Typescript', levelKey: 'proficient' },
      { name: 'Vue', levelKey: 'good' },
      { name: 'React', levelKey: 'good' },
      { name: 'NodeJS', levelKey: 'good' },
      { name: 'HTML', levelKey: 'proficient' },
    ],
  },
  {
    labelKey: 'backend',
    items: [
      { name: 'Go', levelKey: 'proficient' },
      { name: 'Python', levelKey: 'good' },
    ],
  },
  {
    labelKey: 'om',
    items: [
      { name: 'MySQL', levelKey: 'proficient' },
      { name: 'MongoDB', levelKey: 'intermediate' },
      { name: 'Git', levelKey: 'proficient' },
      { name: 'Shell', levelKey: 'intermediate' },
      { name: 'VBA', levelKey: 'intermediate' },
      { name: 'Kubernetes', levelKey: 'intermediate' },
    ],
  },
]

const LANGUAGE_ITEMS = [
  { nameKey: 'english', levelKey: 'proficient' },
  { nameKey: 'japanese', levelKey: 'intermediate' },
  { nameKey: 'mandarin', levelKey: 'native' },
  { nameKey: 'shanghainese', levelKey: 'native' },
]

const SOCIALS = [
  {
    icon: 'https://z.zhipin.com/web/wxapp/resource/zhipin/icon/icon_zhihu.png',
    labelKey: 'zhihu',
    href: 'https://www.zhihu.com/people/4dspace',
    counts: [
      { key: 'likes', value: '630 k' },
      { key: 'followers', value: '60k' },
    ],
  },
  {
    icon: 'https://z.zhipin.com/web/wxapp/resource/zhipin/icon/icon_github.png',
    labelKey: 'github',
    href: 'http://github.com/conbanwa',
    counts: [{ key: 'commits', value: '2.5 k' }],
  },
]

const LEVEL_TEXT = {
  en: {
    proficient: 'proficient',
    good: 'good',
    intermediate: 'intermediate',
    native: 'native',
    native: 'native',
  },
  zh: {
    proficient: '精通',
    good: '良好',
    intermediate: '中级',
    native: '母语',
  },
}

const LOGO_WIDTH = 52
const LOGO_STYLE = 'height:auto'

const buildEducationPage = () => {
  const lang = window.location.pathname.includes('/zh/') ? 'zh' : 'en'
  const texts = TEXTS[lang]
  const levels = LEVEL_TEXT[lang]

  const buildEducationSection = () => {
    return `
<table class="box column">
  <tbody>
    <tr>
      <td class="plate1">${texts.educationTitle}</td>
    </tr>
    ${EDUCATION_ITEMS.map((item) => {
      const degree = item.degreeKey ? texts[item.degreeKey] : ''
      const badge = item.badgeKey ? texts[item.badgeKey] : ''
      const note = item.noteKey ? texts[item.noteKey] : ''
      return `
    <tr>
      <td class="tba">
        <table cellspacing="0" cellpadding="0" border="0">
          <tbody>
            <tr>
              <td rowspan="2" class="schHead">
                <img src="${item.logo}" alt="" width="${LOGO_WIDTH}" style="${LOGO_STYLE}" />
              </td>
              <td valign="top" class="rtbox p_12">
                <strong>${item.title}</strong>
                ${degree ? `<span class="hai">${degree}</span>` : ''}
                ${badge ? `<span class="schGood">${badge}</span>` : ''}
              </td>
              <td valign="top" class="time schTime">${item.time}</td>
            </tr>
            <tr>
              <td class="rtbox p_12" colspan="2">${note}</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>`
    }).join('')}
  </tbody>
</table>`
  }

  const buildRow = (items) =>
    `<tr>${items
      .map(
        (skill) => `
        <td class="tb2 cell${['good', 'intermediate'].includes(skill.levelKey) ? ' ' + skill.levelKey : ''}" valign="top">
          <table cellspacing="0" cellpadding="0" border="0">
            <tbody>
              <tr>
                <td class="skill"><strong class="txt3">${skill.name || texts[skill.nameKey]}</strong></td>
                <td valign="top"><span class="skbg"><span class="skco">${levels[skill.levelKey]}</span></span></td>
              </tr>
            </tbody>
          </table>
        </td>`
      )
      .join('')}</tr>`

  const buildSkillSection = () => {
    return `
<table cellspacing="0" cellpadding="0" border="0" class="box column">
  <tbody>
    <tr>
      <td class="plate1">${texts.skillsTitle}</td>
    </tr>
    <tr>
      <td class="tbb">
        &emsp;&emsp;&emsp;${texts.frontend}
        <table cellspacing="0" cellpadding="0" border="0">
          <tbody>
            ${buildRow(SKILL_GROUPS[0].items.slice(0, 2))}
            ${buildRow(SKILL_GROUPS[0].items.slice(2, 4))}
            ${buildRow(SKILL_GROUPS[0].items.slice(4, 6))}
          </tbody>
        </table>
        &emsp;&emsp;&emsp;${texts.backend}
        <table cellspacing="0" cellpadding="0" border="0">
          <tbody>
            ${buildRow(SKILL_GROUPS[1].items)}
          </tbody>
        </table>
        &emsp;&emsp;&emsp;${texts.om}
        <table cellspacing="0" cellpadding="0" border="0">
          <tbody>
            ${buildRow(SKILL_GROUPS[2].items.slice(0, 2))}
            ${buildRow(SKILL_GROUPS[2].items.slice(2, 4))}
            ${buildRow(SKILL_GROUPS[2].items.slice(4, 6))}
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td class="plate1">${texts.languageTitle}</td>
    </tr>
    <tr>
      <td class="tbb">
        <table cellspacing="0" cellpadding="0" border="0">
          <tbody>
            ${buildRow(LANGUAGE_ITEMS.slice(0, 2))}
            ${buildRow(LANGUAGE_ITEMS.slice(2, 4))}
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>`
  }

  const buildSocialSection = () => {
    return `
<table class="box column">
  <tbody>
    <tr>
      <td class="plate1">${texts.socialTitle}</td>
    </tr>
    <tr>
      <td class="tba">
        <table cellspacing="0" cellpadding="0" border="0">
          <tbody>
            ${SOCIALS.map((item) => {
              const label = texts[item.labelKey]
              const text = item.counts
                .map((count) => `${texts[count.key]}: ${count.value}`)
                .join('; ')
              return `
            <tr>
              <td valign="top" class="keys">
                <img src="${item.icon}" alt="" class="social-img hai" />${label}
              </td>
              <td valign="top" class="txt1">
                <a target="_blank" href="${item.href}">${item.href}</a>
                &emsp;${text}
              </td>
            </tr>`
            }).join('')}
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>`
  }

  document.body.innerHTML = `${buildEducationSection()}${buildSkillSection()}${buildSocialSection()}`
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', buildEducationPage)
} else {
  buildEducationPage()
}
