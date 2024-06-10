import { Claims } from "../model/claims";
import { Employee } from "../model/employee";
import { Shift } from "../model/shift";
import { TimeSheet } from "../model/timesheet";


const createEmployee = async (employeeData : any)=>{
    try{
        const {shift, timesheet, claims, ...employee} = employeeData;

        const shiftRecord = await Shift.create(shift);
        const timesheetRecord = await TimeSheet.create(timesheet);
        const claimsRecord = await Claims.create(claims);

        const newEmployee = await Employee.create(
            {
                ...employee,
                shiftsID : shiftRecord.id,
                timesheetid : timesheetRecord.id,
                claimsId : claimsRecord.id,
            }
        );
        if(newEmployee){
            return newEmployee
        }
    }
    catch(err:any){
        throw err;
    }
}

export {createEmployee}