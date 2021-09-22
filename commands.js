const fs = require("fs");

module.exports = {
  pwd: function () {
    process.stdout.write(process.argv[1]);
  },
  date: function () {
    let date = new Date();
    process.stdout.write(date.toString() + "\n");
  },
  ls: function () {
    const fs = require("fs");
    fs.readdir(".", function (err, files) {
      if (err) throw err;
      files.forEach(function (file) {
        process.stdout.write(file.toString() + "\n");
      });
      process.stdout.write("prompt > ");
    });
  },

  echo: function (mensaje) {
    console.log(mensaje);
  },

  cat: function (filename) {
    fs.readFile(filename, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("\n" + data);
      process.stdout.write("prompt > ");
      //return data;
    });
  },

  head: function(filename, lineNumber = 10) {
    const fs = require("fs");

    fs.readFile(filename, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }

      let splitData = data.split("\n")

      if(splitData.length < lineNumber) {
        lineNumber = splitData.length
      }

      let firstLines = "\n"

      for (let i = 0; i < lineNumber - 1; i++) {
        firstLines += splitData[i] + "\n"
      }

      firstLines += splitData[lineNumber - 1]

      console.log(firstLines)

      process.stdout.write("prompt > ");
    });
  },

  tail: function(filename, lineNumber = 10) {
    fs.readFile(filename, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }

      let splitData = data.split("\n")

      if(splitData.length < lineNumber) {
        lineNumber = splitData.length
      }

      let lastLines = "\n" + splitData.slice(splitData.length - lineNumber, splitData.length).join("\n")

      console.log(lastLines)

      process.stdout.write("prompt > ");
    });
  },

  curl: function(url){
    
    const request = require('request');
    request(url , function (error, response, body) {
      console.error('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.
    });


  },
};
