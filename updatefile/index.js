//----------------------------------------read and write = update----------------------------------------------------------------------------------

const fs = require('fs');

fs.readFile('a.txt','utf-8',(err,data)=>{
    if (err) {
        console.error('error while reading: '+ err);
        return;
    } 
    console.log(data);

    fs.appendFile('a.txt','all the best\n',(err)=>{
        if (err) {
            console.error('error while reading: '+ err);
        }else{
            console.log('new line added sucessfully');
            
        }
    })

})