import { DataTypes, Model } from "sequelize";
import sequelize from "../postgressDb/pgConfig";

interface ClaimsAttributes {
    id?: string;
    key: string;
    value: string;
    employeeId: string;
}

 class Claims extends Model<ClaimsAttributes> implements ClaimsAttributes {
    id!: string ;
    key!: string;
    value!: string;
    employeeId!: string;
}

Claims.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    key: {
        type: DataTypes.STRING,
        allowNull: false
    },
    value: {
        type: DataTypes.STRING,
        allowNull: false
    },
    employeeId: {
        type: DataTypes.UUID,
        allowNull: false
    }
},
{
    sequelize,
    tableName:'Claims'
})

export {Claims}
