const fs = require("fs");// require is just like import in other languages (and) fs standss for File System.
const http = require("http");
//let name = 'Welcome to Predrag System';
//console.log(name);

//Bloking
// console.log('Reading start ...');
// const readFile = fs.readFileSync('./textread.txt','utf-8');
// console.log('File read ...', readFile);
// console.log('Reading Done...');
 


//Non Blocking
//  console.log("reading start ...");
//  const readFile1 = fs.readFile('./textread.txt', 'utf-8',(err,data)=>{
//     console.log('File reading',data);
//     console.log("reading complete ...");
//  });
//  console.log("Waiting for response ...");


 //assignment : First read the textread.txt file and if it has student written in it then read the student file (if exists) and then 
 //append the content of student.txt into append.txt file and then read the append.txt file. Use any of the suitable method i.e 
 //sync or async



//  fs.readFile('./textread.txt','utf-8',(err,data)=>{
//    if(err){
//       console.log('Error reading textread.txt File');
//       return;
//    }
//    console.log("textread.txt has been read successfully!");
//    if(data.includes('student')){
//       fs.readFile('./student.txt','utf-8',(err,studentData)=>{
//          if(err){
//             console.log("Error student data ", err);
//             return;
            
//          }
//       console.log('student.txt has been read successfully!');
//        fs.appendFile('./append.txt',studentData,(err)=>{
//           if(err){
//               console.log("Error appending student data to append.txt:", err);
//              return;
//          }
//        console.log('data has been appended successfully!');
//        fs.readFile('./append.txt','utf-8',(err,appendData)=>{
//          if(err){
//             console.log("Error reading append.txt File")
//             return;
//          }
//          console.log("reading data ...",appendData);
//       })
       
//        })
     
//        })
//    }
// })







 //creating a server : http.createServer((req,res) =>{})
 //This is to handle requists and responses 
 const Server= http.createServer((req,res) =>{
   const url = req.url;
   console.log('hello From Server' ,req.url);// requist in url
   if(url =="/"){
      res.end("Welcome To Homepage");//res.end to show the responce in the browser
   }
   else if(url =="/product"){
      res.end("Welcome To Product page");
   }
   else{
      res.end("Page Not Found");
   }
 res.end('Hello From Server');
});

//defining the ip and port for the server
//This is to define where the server will run all of this res and req.
Server.listen(8181,"127.0.0.1",() =>{
            //port  localhost=127.0.0.1 (ip address for localhost)
   console.log('Listing to Webserver on port 8181');
})









// // Read textread.txt synchronously
// try {
//    const data = fs.readFileSync('textread.txt', 'utf8');
   
//    // Check if 'student' is mentioned in the file
//    if (data.includes('student')) {
//        // Read student.txt synchronously if it exists
//        try {
//            const studentData = fs.readFileSync('student.txt', 'utf8');
           
//            // Append student.txt content to append.txt
//            fs.appendFileSync('append.txt', studentData);
           
//            console.log("Content from student.txt has been appended to append.txt:");
//            console.log(fs.readFileSync('append.txt', 'utf8'));
//        } catch (err) {
//            console.error("Error reading or appending student.txt:", err);
//        }
//    } else {
//        console.log("'student' not found in textread.txt");
//    }
// } catch (err) {
//    console.error("Error reading textread.txt:", err);
// }






// Read textread.txt asynchronously
// fs.readFile('textread.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error("Error reading textread.txt:", err);
//         return;
//     }

//     // Check if 'student' is mentioned in the file
//     if (data.includes('student')) {
//         // Read student.txt asynchronously if it exists
//         fs.readFile('student.txt', 'utf8', (err, studentData) => {
//             if (err) {
//                 console.error("Error reading student.txt:", err);
//                 return;
//             }

//             // Append student.txt content to append.txt
//             fs.appendFile('append.txt', studentData, (err) => {
//                 if (err) {
//                     console.error("Error appending student data to append.txt:", err);
//                     return;
//                 }

//                 // Read append.txt asynchronously and log its content
//                 fs.readFile('append.txt', 'utf8', (err, appendData) => {
//                     if (err) {
//                         console.error("Error reading append.txt:", err);
//                         return;
//                     }
//                     console.log("Content from student.txt has been appended to append.txt:");
//                     console.log(appendData);
//                 });
//             });
//         });
//     } else {
//         console.log("'student' not found in textread.txt");
//     }
// });