"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgressDb/pgConfig"));
const shift_1 = require("./shift");
const timesheet_1 = require("./timesheet");
const claims_1 = require("./claims");
class Employee extends sequelize_1.Model {
}
exports.Employee = Employee;
Employee.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        unique: true
    },
    password: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    assignedShiftHours: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    role: {
        type: sequelize_1.DataTypes.ENUM('SuperAdmin', 'Manager', 'Employee')
    },
    shiftsID: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'Shift',
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
    claimsId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'Claims',
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    }
}, {
    sequelize: pgConfig_1.default,
    tableName: 'Employee'
});
Employee.hasMany(shift_1.Shift, {
    foreignKey: 'employeeId',
    as: 'shifts'
});
shift_1.Shift.belongsTo(Employee, {
    foreignKey: 'employeeId',
    as: 'employee'
});
Employee.hasMany(timesheet_1.TimeSheet, {
    foreignKey: 'employeeId',
    as: 'timesheets'
});
timesheet_1.TimeSheet.belongsTo(Employee, {
    foreignKey: 'employeeId',
    as: 'employee'
});
shift_1.Shift.hasMany(timesheet_1.TimeSheet, {
    foreignKey: 'shiftId',
    as: 'timesheets'
});
timesheet_1.TimeSheet.belongsTo(shift_1.Shift, {
    foreignKey: 'shiftId',
    as: 'shift'
});
Employee.hasMany(claims_1.Claims, {
    foreignKey: 'employeeId',
    as: 'claims'
});
claims_1.Claims.belongsTo(Employee, {
    foreignKey: 'employeeId',
    as: 'employee'
});
//# sourceMappingURL=employee.js.map