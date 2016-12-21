export default (sequelize, DataTypes) => {
  const Program = sequelize.define('program', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    ecosystem: {
      type: DataTypes.ENUM,
      values: ['hardware', 'openstack', 'cloud', 'container'],
      allowNull: false,
    },
  }, {
    classMethods: {
      associate: (models) => {
        Program.belongsToMany(models.product, {
          through: 'products_programs',
        });
      },
    },
  });
  return Program;
};
