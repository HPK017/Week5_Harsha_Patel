import { DataTypes, Model } from "sequelize";
import sequelize from "../postgressDb/pgConfig"
import { Shift } from "./shift";
import { TimeSheet } from "./timesheet";
import { Claims } from "./claims";


interface EmployeeAttributes {
    id?: string;
    name: string;
    email: string;
    password: string;
    assignedShiftHours : number;
    role: 'SuperAdmin' | 'Manager' | 'Employee';
    shiftsID ?: any;
    claimsId ?: any;
}

class Employee extends Model<EmployeeAttributes> implements EmployeeAttributes {
    id!: string ;
    name!: string;
    email!: string;
    password!: string;
    assignedShiftHours!: number;
    role!: 'SuperAdmin' | 'Manager' | 'Employee';
    shiftsID!: any;
    claimsId! : any;
}

Employee.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.UUID,
            allowNull:false,
            unique: true
        },
        password: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        assignedShiftHours: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        role: {
            type : DataTypes.ENUM('SuperAdmin', 'Manager', 'Employee')
        },
        shiftsID : {
            type: DataTypes.UUID,
            allowNull: true,
            references: {
            model: 'Shift',
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        },
        claimsId : {
            type: DataTypes.UUID,
            allowNull: true,
            references: {
            model: 'Claims',
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        }
    },
    {
        sequelize,
        tableName: 'Employee'
    }
)

Employee.hasMany(Shift, {
    foreignKey: 'employeeId',
    as: 'shifts'
});
Shift.belongsTo(Employee, {
    foreignKey: 'employeeId',
    as: 'employee'
});

Employee.hasMany(TimeSheet, {
    foreignKey: 'employeeId',
    as: 'timesheets'
});
TimeSheet.belongsTo(Employee, {
    foreignKey: 'employeeId',
    as: 'employee'
});

Shift.hasMany(TimeSheet, {
    foreignKey: 'shiftId',
    as: 'timesheets'
});
TimeSheet.belongsTo(Shift, {
    foreignKey: 'shiftId',
    as: 'shift'
});

Employee.hasMany(Claims, {
    foreignKey: 'employeeId',
    as: 'claims'
});
Claims.belongsTo(Employee, {
    foreignKey: 'employeeId',
    as: 'employee'
});


export {Employee}