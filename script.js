const http = require("https");
const fs = require("fs");

const filePath = "./t.txt";
const url = "https://raw.githubusercontent.com/4nth0nyl1MHC/UK-Scanning-Directory-2019/77136ccadea675af2345a40a0287f93ebe40e51f/UK%20Scanning%20Directory%20-%20January%202019/Various%20Misc%20Files/UK%20Airports%202019%20(VHF%20%26%20UHF)/London%20Swanwick%20Control%202017.txt";

//1
https.get(url, (response) => {
    let data = "";
    response.on("data", (chunk) => {
      data += chunk;
    });
    response.on("end", () => {
      // Підрахунок кількості рядків
      const lines = data.split("\n");
      const count = lines.length;
      console.log(`Number of lines: ${count}`);
  });
});

//2
const reversed = data.split("").reverse().join("");
      fs.writeFile("reversed.txt", reversed, (error) => {
        if (error) {
          console.error(error);
        } else {
          console.log("File saved successfully");
        }
      });
    });
  })
  .on("error", (error) => {
    console.error(error);
  });
