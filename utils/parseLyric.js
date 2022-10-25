function parseLyric (lrcString) {
  const lyricInfos = []
  const timeReg = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
  const lyricLines = lrcString.split('\n')
  for (let i = 0; i < lyricLines.length; i++) {
    // [00:00.000] 作词 : 潘云安
    let res = timeReg.exec(lyricLines[i])
    if (!res) continue
    let minute = res[1] * 60 * 1000
    let second = res[2] * 1000
    let mSecond = res[3].length === 2 ? res[3] * 10 : res[3] * 1
    let time = minute + second + mSecond
    let text = lyricLines[i].replace(timeReg, "")
    lyricInfos.push({
      text,
      time
    })
  }
  return lyricInfos
}

module.exports = {
  parseLyric
}
