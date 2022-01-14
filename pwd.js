function pwd() {
  process.stdout.write(process.cwd() + "\nprompt >");
}

module.exports = pwd;
