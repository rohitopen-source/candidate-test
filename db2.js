const mysql = require('mysql2')

const connection = mysql.createConnection({
    host:'localhost',
    database:'excellence',
    user:'temp',
    password:'temp'
})

function getCandidate(){
    return new Promise(function(resolve,reject){

        connection.query(
            `select name  from candidates,testscores 
            where (test1+test2+test3)=( select max(test1+test2+test3) from testscores) and candidates.id=testscores.id;`,
            function(err,row,col){
                if(err)
                reject(err)
                else
                resolve(row)
            }

        )
    })
}
function getAll(){
    return new Promise(function(resolve,reject){

        connection.query(
            `select name ,(test1+test2+test3)/3 as avg_score from testscores,candidates 
             where candidates.id = testscores.id;`,
             function(err,row,col){
                 if(err)
                 reject(err)
                 else
                 resolve(row)
             }
        )

    })
}
module.exports={

    getCandidate,getAll
}

