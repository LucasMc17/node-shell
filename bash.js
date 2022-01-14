process.stdout.write("prompt > ");

const pwd = require("./pwd");
const cat = require("./cat")
const ls = require("./ls");
const curl = require('./curl')
const getDate = require('./date')

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    pwd(done);
  }
  if (cmd === "ls") {
    ls(done);
  }
  if(cmd.split(' ')[0] === 'cat'){
    cat(`${process.cwd()}/${cmd.split(' ')[1]}`, done)
  }
  if(cmd.split(' ')[0] === 'curl'){
    curl(cmd.split(' ')[1], done)
  }
  if (cmd === "date") {
    getDate(done)
  }
});


const done = (output) => {
  process.stdout.write(output)
  process.stdout.write("\nprompt > ");
}

module.exports = done;
