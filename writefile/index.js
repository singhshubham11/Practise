//----------------------------------------------------------------------Asynchronously------------------------------------------------------------------------

//-------1----this is a basic approach to save data into a file

// const fs = require('fs');

// fs.writeFile('a.txt',"hello world",(err)=>{
//     if (err) {
//         throw err;
//     }
//     console.log("data is saved in a file");
    
// })

//----------------------------------------------------------------------Asynchronously------------------------------------------------------------------------

//-------2----this is a JSON approach to save data into a file

// const fs = require('fs');

// const data = {
//     fullName: "Shubham Singh",
//     age: 27,
// };

// fs.writeFile('a.txt',JSON.stringify(data),(err)=>{
//     if (err) {
//         throw err;
//     }
//     console.log("JSON data is saved in file");
// })


//-------------------------------------------------------Synchronously---------------------------------------------------------------------------------------

//-------3----this is a basic approach to save data into a file
//If you prefer a synchronous version, you can use fs.writeFileSync. This function doesn’t need a callback and will block the execution until the file is written.

// const fs = require('fs');

// fs.writeFileSync('a.txt','writing file synchronously');
// console.log("data saved sucessfully in file");



//--------------------------------------------------------AppendFile without overwriting------------------------------------------------

// const fs = require('fs');
// fs.appendFile('a.txt','\nmy name is shubham singh.\n ','utf-8',(err)=>{
//     if (err) {
//         throw err;
//     }
//     console.log("data saved sucessfully");
    
// })

//fs.promises.appendFile() for more complex file operations, consider using promises or async/await to handle asynchronous operations gracefully

// const fs = require('fs');

// fs.promises.appendFile('a.txt','add me fast as possible.\n','utf-8')
// .then(()=>{console.log('data added susessfully')})
// .catch((err)=>{console.log(`the error is: ${err}`);
// })

//-------------------------------------------------------------

// const fs = require('fs');

// async function appendData() {
//     try {
//         await fs.promises.appendFile('a.txt','async/await data','utf-8');
//         console.log('data adeed successfully')
//     } catch (error) {
//         console.log(`the error is: ${err}`)
//     }
// }
// appendData();

//------------------------------------------------------------------creating temp file then storing data to original file--------------------------

const fs = require('fs');
const tempFile = "file.tmp";
const originalFile = 'a.txt';

fs.writeFile(tempFile,'you are looking good\n','utf-8',(err)=>{
    if (err) {
        throw err;
    }
    fs.rename(tempFile,originalFile,(err)=>{
        if (err) {
            throw err;
        }
        console.log('data written sucessfully');
    })
})
