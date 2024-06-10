"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shift = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgressDb/pgConfig"));
class Shift extends sequelize_1.Model {
}
exports.Shift = Shift;
Shift.init({
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
    startTime: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    endTime: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    actualHours: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    timesheetid: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'Timesheet',
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    }
}, {
    sequelize: pgConfig_1.default,
    tableName: 'Shift'
});
//# sourceMappingURL=shift.js.map