function createFrame(names: string[]): string {
  let frame = "", decoratedNames = "", maxLengthName = ""
  names.forEach(name => {
    if (name.length > maxLengthName.length) {
      maxLengthName = name
      frame = `**${name.replace(name, "*").repeat(name.length)}**\n`
    }
  })
  names.forEach(name => {
    decoratedNames += `* ${name}${maxLengthName.replace(maxLengthName, " ").repeat(maxLengthName.length - name.length)} *\n`
  })
  console.log(frame + decoratedNames + frame)
  return frame + decoratedNames + frame.replace("\n", "")
}

createFrame(['midu'])

export default createFrame;