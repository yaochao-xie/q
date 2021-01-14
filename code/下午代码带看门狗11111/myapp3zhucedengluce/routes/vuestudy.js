var express = require('express');
var router = express.Router();
const user = require('../sql/user')
/* GET home page. */
// router.get('/', function(req, res, next) {
//   user.find({},(err,data)=>{
//     if(err){
//       console.log(err)
//     }
//     console.log(data)

//     res.send(data)
//     // res.render('user', {
      
//     //   data:data
//     // });
//   })
  
// });
router.post('/', function(req, res, next) {
  console.log(req.body)
    user.find({},(err,data)=>{
      if(err){
        console.log(err)
      }
      console.log(data)
  
      res.send(data)
      // res.render('user', {
        
      //   data:data
      // });
    })
    
  });

module.exports = router;