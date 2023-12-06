# 将node_modules目录下的npm包压缩成tgz格式发tar包

## 步骤

- npm install
- 拷贝node_modules到当前根目录
- 执行脚本：node ./init.js
- 等待init.js执行完后执行upload.sh，需根据具体情况更改
- 执行upload.sh之后需要输入Nexus账号/密码/邮箱

## 说明

- 最终结果输出到results目录
- exculdeDirs定义需要排除压缩的目录，可根据具体情况更改
