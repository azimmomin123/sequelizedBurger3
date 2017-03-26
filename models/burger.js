module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("sBurger_DB", {
    burger_name: DataTypes.STRING,
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return Burger;
};
