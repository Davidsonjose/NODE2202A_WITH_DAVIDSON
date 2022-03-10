//today class talking on file system and path

//fs File system
const fs = require("fs");
const path = require("path");

//SYNCRONOUS METHOD OF READING AND WRITING TO A FILE
let pathFolderOne = path.join(__dirname, "files/fileOne.txt");

const findContent = fs.readFileSync(pathFolderOne, "utf-8");
console.log(findContent);

console.log("Syncronous method is just there jire");

let writeToPathFolderOne = fs.writeFileSync(pathFolderOne, 'Sorry you have just been overwritten');

console.log("You have successfully written to" + pathFolderOne);

console.log(pathFolderOne);

// ASYNCRONOUS METHOD OF READING, WRITING, CREATING A FOLDER, RENAMING A FOLDER, DELETING A FOLDER, CREATING A FILE, DELETING A FILE

//READING A FILE
fs.readFile(pathFolderOne, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(
      "You just read to a file from " +
        pathFolderOne +
        " " +
        "here is the the result we got: " +
        data
    );
  }
});

console.log("I love all the asyncronous methods .........");

const pathFolderTwo = path.join(__dirname, "files/filetwo.txt ");

//CREATING A FILE
fs.appendFile(pathFolderTwo, "I am the second file just created", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(
      "A new file " +
        pathFolderTwo +
        " " +
        "has been created successfully " +
        "content: "
    );
  }
});

const newFolder = path.join(__dirname, "file2/");
//creating a folder
fs.mkdir(newFolder, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("a new folder has been created");
    //CREATING A FILE
    fs.appendFile(
      newFolder + "/one.txt",
      "I am the second file just created",
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log(
            "A new file " +
              newFolder +
              " " +
              "has been created successfully " +
              "content: "
          );
        }
      }
    );

    fs.readFile(newFolder + "/one.txt", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Here is the content you requested: " + data);
      }
    });
  }
});

const removeFolder = path.join(__dirname, "one");
fs.rmdir(removeFolder, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Folder: " + removeFolder + " has been removed successfully");
  }
});


const renameFilePath = path.join(__dirname, 'file2/one.txt');
const renameFilePathNew = path.join(__dirname, 'file2/five.txt')
fs.rename(renameFilePath, renameFilePathNew, (err)=>{
  if (err) {
    console.log(err);
  }else{
    console.log("File: " + renameFilePath + " " + "has been renamed to " + renameFilePathNew)
  }
})
