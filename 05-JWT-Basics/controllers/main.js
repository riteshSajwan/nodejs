//check usernam,password in post (Login) req
//of exist create new JWT
//send back to front end

//setup authentication so only the req with JWT can access the dashboard

const {BadRequest} = require("../errors");
const jwt = require("jsonwebtoken");
const login = async (req, res) => {
  const { username, password } = req.body;
  // ways to handle if username and passowrd is not provided
  //mongoose validation
  // Joi for validation
  //check in controller
  if (!username || !password) {
    throw new BadRequest("Please provide name and password");
  }
  const id = new Date().getDate();
  //first is payload must be id or name
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: "User Created", token });
};

const dashboard = async (req, res) => {
    console.log(req.user) //from middleware
    const {id,username} = req.user
//   const luckyNumber = Math.floor(Math.random() * 100);
  res
    .status(200)
    .json({
      msg: `Hello, ${username}`,
      secret: `Here is your lucky data ${id}`,
    });
};

module.exports = { login, dashboard };
