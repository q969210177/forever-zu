
/* eslint-disable no-unused-vars */
'use strict';
//
var shell = require('shelljs');
var fs = require('fs');
var path = require('path');
const fileFilterArr = ['.git', 'node_modules' ];// '.git', '', '.git', '', '.git', '', '.git', '', '.git', '', '.git', '', '.git', ''
function copyFile(path) {
  let files = [];
  files = fs.readdirSync(path);
  files.forEach(fileName=>{
    var curPath = path + '/' + fileName;
    const testComsssPath = ('D:/procject/forever-zu' + path + '/' + fileName).replace('./', '');
    if (!fileFilterArr.includes(fileName)) {
      if (fs.statSync(curPath).isDirectory()) {
        shell.rm('-rf', testComsssPath);
        //   console.log(testComsssPath, 'testComsssPath');
        fs.mkdirSync(testComsssPath);
        copyFile(curPath);
      }
      // 强制递归删除`out/Release目录`
      shell.cp('-R', curPath, testComsssPath);
    }

  });
}
copyFile('./');
shell.exec('git add .');
shell.exec('git commit -m"自动提交更新"');
shell.exec('git push');
