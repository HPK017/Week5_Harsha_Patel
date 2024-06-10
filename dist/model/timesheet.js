"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeSheet = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgressDb/pgConfig"));
class TimeSheet extends sequelize_1.Model {
}
exports.TimeSheet = TimeSheet;
TimeSheet.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4
    },
    employeeId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4
    },
    shiftId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4
    },
    projectName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    taskName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    fromDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    toDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
}, {
    sequelize: pgConfig_1.default,
    tableName: 'Timesheet'
});
//# sourceMappingURL=timesheet.js.map