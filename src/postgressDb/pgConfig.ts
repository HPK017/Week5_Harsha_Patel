import {Sequelize} from "sequelize";
import credentials from "../common/credentials";

const sequelize = new Sequelize({
    username : credentials.postgres.USERNAME,
    host : credentials.postgres.HOST,
    database: credentials.postgres.DATABASE,
    password: credentials.postgres.PASSWORD,
    port: credentials.postgres.DBPORT,
    dialect: "postgres"
})

sequelize.authenticate()
    .then( ()=>{
        console.log("Database Connection Successfully")
    }).catch((err)=>{
        console.log("Database Connection not  Successfully", err)
    })

sequelize.sync()
    .then(()=>{
        console.log('Models synchronized with the database.');
    }).catch((err)=>{
        console.error('Unable to synchronize models with the database:', err);
    })


export default sequelize;