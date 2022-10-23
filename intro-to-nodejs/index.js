const file_system = require("fs")
// make a copy for file1.txt and named it to file1.txt
file_system.copyFileSync("file1.txt", "file2.txt")
