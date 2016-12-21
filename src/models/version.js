export default (sequelize, DataTypes) => {
  const Version = sequelize.define('version', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    kernel: {
      type: DataTypes.STRING,
    },
    generalAvailabilityDate: {
      type: DataTypes.DATE,
    },
    isPublic: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
    isSupport: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate: (models) => {
        Version.belongsTo(models.product);
        Version.belongsToMany(models.version, {
          as: 'baseVersions',
          through: 'base_versions',
        });
        Version.belongsToMany(models.platform, {
          through: 'versions_platforms',
        });
      },
    },
  });
  return Version;
};
