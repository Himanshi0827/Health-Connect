const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const bcrypt = require("bcryptjs");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
const fs = require("fs");
const port = 5000;

const jwt = require("jsonwebtoken");
var nodemailer = require("nodemailer");

const JWT_SECRET =
  "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";

  
// const mongoUrl =
//   "mongodb+srv://himanshisingh0827:h@cluster0.w9k30d4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
 const mongoUrl= "mongodb://0.0.0.0:27017";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log(`Connected to database at ${port}`);
  })
  .catch((e) => console.log(e));

require("./Schema/userDetails");
require('./Schema/userRoles'); // Ensure this is at the top, after mongoose is imported
const Patient = require('./models/Patient');

const User = mongoose.model("UserInfo");
const getDateTime = () => {
  let date_time = new Date();
  let date = ("0" + date_time.getDate()).slice(-2);
  let month = ("0" + (date_time.getMonth() + 1)).slice(-2);
  let year = date_time.getFullYear();
  let hours = date_time.getHours();
  let minutes = date_time.getMinutes();
  let seconds = date_time.getSeconds();
  const date_now =
    year +
    "-" +
    month +
    "-" +
    date +
    " " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds;

  return date_now;
};



app.post("/register", async (req, res) => {
  const date_now = getDateTime();
  const Registerlogs = "Logs\\Register_logs.txt";

  const { fname, lname, email, password, userType } = req.body;

  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      fs.appendFile(
        Registerlogs,
        `[${date_now}] : Registration failed: User Already exists - ${email} (${oldUser.fname} ${oldUser.lname}) (${oldUser.userType})\n`,
        function (err) {
          if (err) throw err;
        }
      );
      return res.json({ error: "User Exists" });
    }
    await User.create({
      fname,
      lname,
      email,
      password: encryptedPassword,
      userType,
    });
    fs.appendFile(
      Registerlogs,
      `[${date_now}] : Registration Successful: New User added - ${email} (${fname} ${lname}) (${userType})\n`,
      function (err) {
        if (err) throw err;
      }
    );

    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

app.post("/login-user", async (req, res) => {
  const date_now = getDateTime();
  const LoginLogs = "Logs\\Login_logs.txt";

  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    fs.appendFile(
      LoginLogs,
      `[${date_now}] : Login attempt failed: User Not Found - ${email} (${user.fname} ${user.lname}) (${user.userType})\n`,
      function (err) {
        if (err) throw err;
      }
    );
    return res.json({ error: "User Not found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, JWT_SECRET, {
      expiresIn: "60m",
    });

    if (res.status(201)) {
      fs.appendFile(
        LoginLogs,
        `[${date_now}] : Login attempt successful: ${email} (${user.fname} ${user.lname}) (${user.userType})\n`,
        function (err) {
          if (err) throw err;
        }
      );
      return res.json({ status: "ok", data: token });
    } else {
      fs.appendFile(
        LoginLogs,
        `[${date_now}] : Login attempt failed: ${email} (${user.fname} ${user.lname}) (${user.userType})\n`,
        function (err) {
          if (err) throw err;
        }
      );
      return res.json({ error: "error" });
    }
  } else {
    fs.appendFile(
      LoginLogs,
      `[${date_now}] : Login attempt failed: Incorrect Password - ${email} (${user.fname} ${user.lname}) (${user.userType})\n`,
      function (err) {
        if (err) throw err;
      }
    );

    res.json({ status: "error", error: "Invalid Password" });
  }
});

app.post("/userData", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET, (err, res) => {
      if (err) {
        return "token expired";
      }
      return res;
    });
    console.log(user);
    if (user == "token expired") {
      return res.send({ status: "error", data: "token expired" });
    }

    const useremail = user.email;
    User.findOne({ email: useremail })
      .then((data) => {
        res.send({ status: "ok", data: data });
      })
      .catch((error) => {
        res.send({ status: "error", data: error });
      });
  } catch (error) {}
});

app.listen(port, () => {
  console.log("Server Started");
});

app.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  try {
    const oldUser = await User.findOne({ email });
    if (!oldUser) {
      return res.json({ status: "User Not Exists!!" });
    }
    const secret = JWT_SECRET + oldUser.password;
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "5m",
    });
    const link = `http://localhost:5000/reset-password/${oldUser._id}/${token}`;
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "adarsh438tcsckandivali@gmail.com",
        pass: "rmdklolcsmswvyfw",
      },
    });

    var mailOptions = {
      from: "youremail@gmail.com",
      to: "thedebugarena@gmail.com",
      subject: "Password Reset",
      text: link,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    console.log(link);
  } catch (error) {}
});

app.get("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  console.log(req.params);
  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User Not Exists!!" });
  }
  const secret = JWT_SECRET + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    res.render("index", { email: verify.email, status: "Not Verified" });
  } catch (error) {
    console.log(error);
    res.send("Not Verified");
  }
});

app.post("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;

  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User Not Exists!!" });
  }
  const secret = JWT_SECRET + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    const encryptedPassword = await bcrypt.hash(password, 10);
    await User.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          password: encryptedPassword,
        },
      }
    );

    res.render("index", { email: verify.email, status: "verified" });
  } catch (error) {
    console.log(error);
    res.json({ status: "Something Went Wrong" });
  }
});

app.get("/getAllUser", async (req, res) => {
  let query = {};
  const searchData = req.query.search;
  if (searchData) {
    query = {
      $or: [
        { fname: { $regex: searchData, $options: "i" } },
        { email: { $regex: searchData, $options: "i" } },
      ],
    };
  }

  try {
    const allUser = await User.find(query);
    res.send({ status: "ok", data: allUser });
  } catch (error) {
    console.log(error);
  }
});

app.post("/deleteUser", async (req, res) => {
  const { userid } = req.body;
  try {
    User.deleteOne({ _id: userid }, function (err, res) {
      console.log(err);
    });
    res.send({ status: "Ok", data: "Deleted" });
  } catch (error) {
    console.log(error);
  }
});

app.get("/paginatedUsers", async (req, res) => {
  const allUser = await User.find({});
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);

  const startIndex = (page - 1) * limit;
  const lastIndex = page * limit;

  const results = {};
  results.totalUser = allUser.length;
  results.pageCount = Math.ceil(allUser.length / limit);

  if (lastIndex < allUser.length) {
    results.next = {
      page: page + 1,
    };
  }
  if (startIndex > 0) {
    results.prev = {
      page: page - 1,
    };
  }
  results.result = allUser.slice(startIndex, lastIndex);
  res.json(results);
});

const UserRoles = mongoose.model('UserRoles'); // Notice 'UserRoles' instead of './Schema/userRoles'


app.post("/addRole", async (req, res) => {
  const { userRole } = req.body;
  try {
    const newRole = new UserRoles({ userRole });
    await newRole.save();
    res.send({ status: "Ok", message: "Role added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: "Error", message: "Could not add role" });
  }
});
// createRoles();
app.get("/roles", async (req, res) => {
  try {
    const roles = await UserRoles.find({});
    res.json({ status: "ok", roles });
  } catch (error) {
    console.error("Error fetching roles:", error);
    res.status(500).send("Server Error");
  }
});

