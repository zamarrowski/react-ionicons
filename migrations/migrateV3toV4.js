const fs = require('fs')

const readDirectory = path => {
  fs.readdir(path, { withFileTypes: true }, (err, entries) => {
    if (err) throw new Error(err)
    entries.forEach(entry => {
      if (entry.isDirectory()) {
        readDirectory(`${path}/${entry.name}`)
      } else {
        fs.readFile(`${path}/${entry.name}`, (err, file) => {
          if (err) throw new Error(err)
          searchAndReplace(String(file), `${path}/${entry.name}`)
        })
      }
    })
  })
}

const searchAndReplace = (file, path) => {
  let lines = file.split(/\r?\n/)
  let icons = []
  lines = lines.map(line => {
    if (line.includes('react-ionicons/lib')) {
      icons.push(line.split(' ')[1])
      line = line.replace(/(react-ionicons\/lib\/[a-zA-Z]*)/, 'react-ionicons')
      line = line.replace('Md', '')
      line = line.replace('Ios', '')
      line = line.replace('import', 'import {')
      line = line.replace('from', '} from')
    }
    return line
  })
  if (icons.length) {
    lines = lines.map(line => {
      icons.forEach(icon => {
        if (line.includes(icon)) {
          let newIcon = icon.replace('Md', '')
          newIcon = newIcon.replace('Ios', '')
          line = line.replace(icon, newIcon)
        }
      })
      return line
    })
  }
  fs.writeFile(path, lines.join('\n'), (err) => {
    if (err) throw new Error(err)
  })
}

readDirectory('./src')