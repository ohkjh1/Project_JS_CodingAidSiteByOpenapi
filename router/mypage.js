const express = require('expree')
const router = express.Router()
const db = require("../config/datebase");
let conn = db.init();
const mysql = require("mysql2");
const { render } = require('nunjucks');
const session = require('express-session');


router.post("/mypage",function(request,response){
    let id = request.body.ID
    let pw = request.body.PW
    let nick = request.body.NICK
    
    conn.connect();
    let sql = `insert into member values (?,?,?)`;
    conn.query(sql,[id,pw,nick],fuction(err,rows){
        
        if(!err){
            console.log('쿼리문 정상 실행 완료!')
            response.render('myPage')
        }
        else{
            console.log(err)
            console.log('db 명령이 제대로 실행되지 않았습니다!')
            
        }
    })
})
    
