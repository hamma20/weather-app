module.exports = (sequelize, Sequelize) => {
    const Weather = sequelize.define("weather", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      temperature: {
        type: Sequelize.FLOAT
      },
      humidity: {
        type: Sequelize.FLOAT
      },
      pressure: {
        type: Sequelize.FLOAT
      },
      rain: {
        type: Sequelize.FLOAT
      }
    },
    { 
        timestamps: true,
      
        createdAt: "dateTime",
      
        updatedAt: false
      });
  
    return Weather;
  };