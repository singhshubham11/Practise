//-----------------------------------------------------unlink--------------------------------------------------------------------------------------

// const fs = require('fs');

// fs.unlink('a.txt',(err)=>{
//     if (err) {
//         console.error('error: '+ err)
//     } else {
//         console.log('file deleted sucessfully');
//     }
// })


//-----------------------------------------------------sync----------------------------------------------------------------------------

// const fs = require('fs');
// try {
//     fs.unlinkSync('a.txt');
//     console.log('file deleted sucessfully')
// } catch (error) {
//     console.error('error while deleting file: '+ error);
// }


//------------------------------------------------------file-acess---------------------------------------------------------------------

// const fs = require('fs');

// fs.access('a.txt',fs.constants.F_OK,(err)=>{
//     if (err) {
//         console.error('file is not present '+ err);
//         return;
//     }

//     fs.unlink('a.txt',(err)=>{
//         if (err) {
//             console.error('file is not deleted: '+err);
//         }
//         console.log('file deleted sucessfully');
//     });
// });


//-------------------------------------------------------backup file and delete it------------------------------------------------------

const { error } = require('console');
const fs = require('fs');

fs.copyFile('a.txt','b.txt',(err)=>{
    if (err) {
        console.error('no backup file is created: '+ err);
    }
    console.log('file is sucessfully copied');

    fs.unlink('a.txt',(err)=>{
        if (err) {
            console.error('file is not deleted: '+err);
        }
        console.log('file deleted sucessfully');
    });
});