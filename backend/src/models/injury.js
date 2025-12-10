/**
 * Injury Model
 * Stores player injury information
 */

const {DataTypes} = require("sequelize");
const sequelize = require("../config/db");

const Injury = sequelize.define(
    "Injury",
    {
        injury_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        player_id: DataTypes.INTEGER,
        injury_type: DataTypes.STRING,
        description: DataTypes.TEXT,
        return_data: DataTypes.DATE,
        status: {type: DataTypes.STRING, defaultValue: "active"}
    },
    {tableName: "Injury", timestamps: false}
);

module.exports = Injury;