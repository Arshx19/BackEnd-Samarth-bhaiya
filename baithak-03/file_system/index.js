const fs  = require('fs');
// console.log(fs);

//create
// let data = "mai hoon janvar kaat lunga";
// let data2 = "baaad mai chai thandi ho jaati hai "; 
// fs.writeFile('mav.txt' , data, {
//     flag:'w',
//     encoding: 'utf-8'
// } , (err,resp)=>{
//     if(err){
//         throw err;
//     }
//     else{
//         console.log("file written successfully");
//     }
// })

// fs.writeFileSync('ars.txt', data2 , {
//     flag:'w',
//     encoding: 'utf-8'
// })


//READ

// fs.readFile('mav.txt', {encoding:'utf-8'}, (err,res)=>{
//     if(err){
//         throw err;
//     }
//     else{
//         console.log(res);
//     }
// });
// const res = fs.readFileSync('ars.txt',{encoding:'utf-8'});
// console.log(res , "res");

// //update 
// fs.appendFile();
// fs.appendFileSync();
// //copy
// fs.copyFile();
// fs.copyFileSync();
// //delete
// fs.unlink();
// fs.unlinkSync();