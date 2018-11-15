module.exports = (sequelize, DataTypes) => {
  return sequelize.define("users", {
    nama: DataTypes.STRING(255),
    email: DataTypes.STRING(255),
    image: DataTypes.STRING(255)
  });
};
