const Sequelize = require('sequelize')
const db = new Sequelize('excellence','temp','temp',{

    host: 'localhost',
    dialect:'mysql'
})

const Candidate = db.define('candidate',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        isEmail:true
        

    },
   
})

const TestScore = db.define('testscore',{

    test1:{
        type:Sequelize.INTEGER,
        allowNull:false

    },
    test2:{
        type:Sequelize.INTEGER,
        allowNull:false

    },
    test3:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    candidate_id:{
        
        type: Sequelize.INTEGER,

       references: {
          model: 'candidates', // 'candidates' refers to table name
          key: 'id', // 'id' refers to column name in candidate table
       }
    }
})

//TestScore.hasOne(Candidate,{foreignKey:id});
//Candidate.belongsTo(TestScore,{foreignKey:id});

db.sync()
     .then(()=>console.log("database has been synced"))
     .catch((err) => console.error(err))




module.exports={
    Candidate,TestScore
}
