const { Model, DataTypes, literal } = require('sequelize');
const connectionDatabase = require('../sequelize');

class Vendor extends Model {}

Vendor.init(
    {
        name: {
            type: DataTypes.TEXT,
        },
        city: {
            type: DataTypes.TEXT,
        }
    },
    {
        sequelize: connectionDatabase(),
        timestamps: false,
        tableName: 'vendor',
        modelName: 'Vendor',
    }
);

module.exports = Vendor;
