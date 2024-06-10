import { createEmployee } from "../service/employeeService";
import express from 'express'




const router = express.Router();

//Employee
router.post('/register', async(req,res)=>{
    await createEmployee(req.body);
    res.json('employee created')
})

export default router