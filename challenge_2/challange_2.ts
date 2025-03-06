function createFrame(names: string[]): string {
  let frame = "", decoratedNames = ""
  const longestName = names.toSorted((a, b) => b.length - a.length)
  frame = `**${longestName[0].replace(longestName[0], "*").repeat(longestName[0].length)}**\n`
  names.forEach(name => {
    decoratedNames += `* ${name}${longestName[0].replace(longestName[0], " ").repeat(longestName[0].length - name.length)} *\n`
  })
  return frame + decoratedNames + frame.replace("\n", "")
}

createFrame(['midu', 'madeval', 'educalvolpz', 'midu'])

export default createFrame;