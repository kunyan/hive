export default (sequelize, DataTypes) => {
  const Product = sequelize.define('product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    shortName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    url: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },
  }, {
    classMethods: {
      associate: (models) => {
        Product.belongsToMany(models.program, {
          through: 'products_programs',
        });
        Product.hasMany(models.version);
        // Version.belongsTo(models.product);
      },
    },
  });
  return Product;
};
