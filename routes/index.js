const Candidate = require('../db').Candidate
const TestScoe = require('../db').TestScore
const route = require('express').Router()
const db2 = require('../db2')

route.post('/candidate',(req,res)=>{

    Candidate.create({
        name: req.body.name,
        email:req.body.email,

    }).then((candidate)=>{
        res.status(201).send(candidate)
    }).catch((err)=>{
        res.status(401).send(err)
    })
})
route.post('/testscore',(req,res)=>{
TestScoe.create({
    id:req.body.id,
    test1:req.body.test1,
    test2:req.body.test2,
    test3: req.body.test3
}).then((score)=>{
    res.status(201).send(score)
}).catch((err)=>{
    res.status(401).send(err)
})

})

route.get('/maxscore',(req,res)=>{
    db2.getCandidate()
       .then((candidate)=>{
           res.send(candidate)
       }).catch((err)=>{
           res.send("Error in fetchin data")
       })

})
route.get('/getall',(req,res)=>{
    db2.getAll()
       .then((all)=>{
           res.send(all)
       }).catch((err)=>{
           res.send("error in getting data")
       })
})



module.exports={
    route
}

