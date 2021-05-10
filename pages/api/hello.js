// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("merchantshop", "admin", "merchant1234", {
  host: "merchantshop-1.chbaajs2xfvp.us-east-2.rds.amazonaws.com",
  dialect: "mysql",
});

export default (req, res) => {
  try {
    sequelize.authenticate();
    res
      .status(200)
      .json({ status: "Server Connection has been established successfully." });
    const User = sequelize.define("users", {
      // Model attributes are defined here
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
    });

    // `sequelize.define` also returns the model
    console.log(User === sequelize.models.User); // true

    console.log("Server Connection has been established successfully.");
  } catch (error) {
    res.status(200).json({ status: "Unable to connect to the database:" });
    console.error("Unable to connect to the database:", error);
  }
};
