// 通过shell脚本执行新增组件的命令 通过readline 获取用户在cmd里面的输入
var shell = require('shelljs');
const readline = require('readline');
function readSyncByRl(tips) {
  tips = tips || '>';
  // eslint-disable-next-line no-undef
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question(tips, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}
readSyncByRl('组件名=>组件描述：').then((res) => {
  shell.exec(`node  build/bin/new.js ${res}`);
});
