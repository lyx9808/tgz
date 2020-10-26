let fs = require('fs')
let path = require('path')
let shell = require("shelljs")

// 结果输出目录
let outputDir = 'results'

// 要排除的目录
let exculdeDirs = ['.DS_Store', '.bin', '.cache']

// 所有npm包
let dirs = fs.readdirSync(path.resolve(__dirname, 'node_moduless'))

// 进入outputDir，生成package目录
shell.cd(outputDir)
shell.mkdir('package')

// 遍历node_modules下的npm包
dirs.forEach(item => {
  if (!exculdeDirs.includes(item)) {
    // 将包内容复制到outputDir的package目录
    shell.exec(`cp -r ../node_moduless/${item}/* package`)
    // 将package压缩成tgz格式
    shell.exec(`tar -zcvf ${item}.tgz package`)
    // 清空package内容，进入下一个循环
    shell.rm('-rf', 'package/*')
  }
})

// 遍历完成，移除package目录
shell.rm('-rf', 'package')

console.log('tar success!!!')