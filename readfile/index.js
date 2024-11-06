//-----------------------------------------------------------asynchronously--------------------------------------------------------------------
// const fs = require('fs');

// fs.readFile('a.txt','utf-8',(err,data)=>{
//     if (err) {
//         console.error('error reading file: '+ err);
//     } else {
//         console.log(data);
//     }
// })

//-----------------------------------------------above code using async/await------------------------------------------------------------------

// const fs = require('fs');

// async function readData() {
//     try {
//         const data = await fs.promises.readFile('a.txt','utf-8');
//         console.log(data);
//     } catch (error) {
//         console.error('error while raeding:'+error);
        
//     }
// }
// readData();

//------------------------------------------------------sync/async---------------------------------------------------------------------

const fs = require('fs');

try {
    const data =fs.readFileSync('a.txt','utf-8');
    console.log(data);
} catch (error) {
    console.error(error);
}