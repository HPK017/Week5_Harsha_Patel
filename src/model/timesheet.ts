import { DataTypes, Model } from "sequelize";
import sequelize from "../postgressDb/pgConfig";


interface TimeSheetAttributes {
    id?: string;
    employeeId: string;
    shiftId: string;
    projectName: string;
    taskName: string;
    fromDate: Date;
    toDate :Date ;
}

class TimeSheet extends Model<TimeSheetAttributes> implements TimeSheetAttributes {
    id?: string;
    employeeId!: string;
    shiftId!: string;
    projectName!: string;
    taskName!: string;
    fromDate!: Date;
    toDate!: Date;
}

TimeSheet.init ({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    employeeId: {
        type: DataTypes.UUID,
        allowNull: true,
        defaultValue: DataTypes.UUIDV4
    },
    shiftId: {
        type: DataTypes.UUID,
        allowNull: true,
        defaultValue: DataTypes.UUIDV4
    },
    projectName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    taskName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fromDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    toDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
},
    {
        sequelize,
        tableName: 'Timesheet'
    }
);




export {TimeSheet}