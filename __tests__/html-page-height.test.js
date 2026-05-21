/**
 * HTML 页面高度测试
 * ifrHeights 至少为 [1390, 1560, 870] 和 [970, 1275, 870]
 * 主要特点：详细的错误报告，脚本追踪，
 */
const fs = require('node:fs')
const path = require('node:path')
const { JSDOM } = require('jsdom')

const iframeKeys = ['personal', 'open', 'education']

const parseIframeHeights = (source) => {
  const match = source.match(/let ifrHeights\s*=\s*\[([^\]]+)\]/)
  if (!match) {
    throw new Error('Unable to parse ifrHeights from source')
  }

  const values = match[1]
    .split(',')
    .map((entry) => parseInt(entry.trim(), 10))
    .filter((value) => !Number.isNaN(value))

  if (values.length !== iframeKeys.length) {
    throw new Error(`Expected ${iframeKeys.length} iframe heights, found ${values.length}`)
  }

  return iframeKeys.reduce((result, key, index) => {
    result[key] = values[index]
    return result
  }, {})
}

const loadIframeSources = (htmlSource) => {
  const dom = new JSDOM(htmlSource)
  const document = dom.window.document
  return iframeKeys.reduce((result, key) => {
    const iframe = document.querySelector(`iframe.${key}`)
    if (!iframe) {
      result[key] = null
      return result
    }

    const src = iframe.getAttribute('src')
    result[key] = src || `${key}.html`
    return result
  }, {})
}

const computePageHeight = (htmlPath) => {
  const html = fs.readFileSync(htmlPath, 'utf8')
  const dom = new JSDOM(html, { pretendToBeVisual: true, url: `file://${htmlPath}` })
  const document = dom.window.document

  const candidates = [
    document.documentElement && document.documentElement.scrollHeight,
    document.body && document.body.scrollHeight,
    document.documentElement && document.documentElement.offsetHeight,
    document.body && document.body.offsetHeight,
    document.documentElement && document.documentElement.clientHeight,
    document.body && document.body.clientHeight,
  ].filter((value) => typeof value === 'number' && value >= 0)

  return candidates.length ? Math.max(...candidates) : 0
}

describe('HTML iframe height versus page height', () => {
  const docsRoot = path.join(__dirname, '..', 'docs')
  const cases = [
    { label: 'English', dir: docsRoot, indexHtml: 'index.html', commonJs: 'common.js' },
    { label: 'Chinese', dir: path.join(docsRoot, 'zh'), indexHtml: 'index.html', commonJs: 'common.js' },
  ]

  cases.forEach(({ label, dir, indexHtml, commonJs }) => {
    test(`${label} iframe heights should cover page heights`, () => {
      const indexPath = path.join(dir, indexHtml)
      const commonPath = path.join(dir, commonJs)
      const iframeSources = loadIframeSources(fs.readFileSync(indexPath, 'utf8'))
      const iframeHeights = parseIframeHeights(fs.readFileSync(commonPath, 'utf8'))

      iframeKeys.forEach((key) => {
        const iframeSrc = iframeSources[key]
        const iframeHeight = iframeHeights[key]

        expect(iframeSrc).toBeTruthy()

        const sourcePath = path.join(dir, iframeSrc)
        expect(fs.existsSync(sourcePath)).toBe(true)

        const pageHeight = computePageHeight(sourcePath)
        const minHeight = Math.min(iframeHeight, pageHeight)

        console.log(`${label} ${iframeSrc}: iframe=${iframeHeight}, page=${pageHeight}, min=${minHeight}`)

        if (pageHeight > 0) {
          expect(iframeHeight).toBeGreaterThanOrEqual(pageHeight)
        } else {
          console.warn(`Unable to determine page height for ${iframeSrc}; iframe height=${iframeHeight}`)
        }
      })
    })
  })
})
