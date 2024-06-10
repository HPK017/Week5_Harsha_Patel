"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Claims = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgressDb/pgConfig"));
class Claims extends sequelize_1.Model {
}
exports.Claims = Claims;
Claims.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4
    },
    key: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    value: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    employeeId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false
    }
}, {
    sequelize: pgConfig_1.default,
    tableName: 'Claims'
});
//# sourceMappingURL=claims.js.map