import { DataTypes, Model } from "sequelize";
import sequelize from "../postgressDb/pgConfig";

interface ShiftAttributes {
    id?: string;
    employeeId: string;
    startTime: Date;
    endTime: Date;
    actualHours :number ;
    timesheetid ?: any;
}

 class Shift extends Model<ShiftAttributes> implements ShiftAttributes {
    id!: string;
    employeeId!: string;
    startTime!: Date;
    endTime!: Date;
    actualHours!: number;
    timesheetid !: any;
}

Shift.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    employeeId: {
        type:DataTypes.UUID ,
        allowNull:true,
        defaultValue: DataTypes.UUIDV4
    },
    startTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    endTime: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    actualHours: {
        type:DataTypes.FLOAT,
        allowNull:false
    },
    timesheetid : {
        type: DataTypes.UUID,
            allowNull: true,
            references: {
            model: 'Timesheet',
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    }
    },
    {
        sequelize,
        tableName: 'Shift'
    }
)

export {Shift}