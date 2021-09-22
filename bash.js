process.stdout.write("prompt > ");
const commands = require("./commands");
process.stdin.on("data", function (data) {
  let cmd = data.toString().trim().split(" ");

  if (cmd[0] === "pwd") {
    commands.pwd();
  }

  if (cmd[0] === "date") {
    commands.date();
  }

  if (cmd[0] === "ls") {
    commands.ls();
  }

  if (cmd[0] === "echo") {
    cmd.shift();
    let mensaje = cmd.join(" ").trim();
    commands.echo(mensaje);
  }

  if (cmd[0] === "cat") {
    cmd.shift();
    let filename = cmd.join(" ").trim();
    commands.cat(filename);
  }
  if (cmd[0] === "head") {
    cmd.shift();

    let filename = cmd[0];
    let lineNumber = cmd[1];

    commands.head(filename, lineNumber);
  }

  if (cmd[0] === "tail") {
    cmd.shift();

    let filename = cmd[0];
    let lineNumber = cmd[1];

    commands.tail(filename, lineNumber);
  }

  if (cmd[0] === "curl") {
    cmd.shift();

    let url = cmd[0];

    commands.curl(url);
  }
  process.stdout.write("prompt > ");
});
