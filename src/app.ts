import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors';
import EmployeeRoutes from "./routers/employeeRouter"

dotenv.config();

const app = express();
app.use(cors())
app.use(express.json())

app.use('/api/employee', EmployeeRoutes)



app.listen(3000, ()=> {
    console.log(` Hii we are comfortable in NodeJS `);
})