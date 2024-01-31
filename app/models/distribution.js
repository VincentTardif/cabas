const { Model, DataTypes, literal } = require('sequelize');
const connectionDatabase = require('../sequelize');

class Distribution extends Model {}

Distribution.init(
    {
        name: {
            type: DataTypes.TEXT,
        },
    },
    {
        sequelize: connectionDatabase(),
        timestamps: false,
        tableName: 'distribution',
        modelName: 'Distribution',
    }
);

module.exports = Distribution;
