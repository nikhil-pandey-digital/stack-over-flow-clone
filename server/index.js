import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import useragent from "express-useragent";

import userRoutes from "./routes/users.js";
import questionRoutes from "./routes/Questions.js";
import answerRoutes from "./routes/Answers.js";
import connectDB from "./connectMongoDb.js";

dotenv.config({path:'./config.env'});
connectDB();
const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());
// app.use(cors({
//        origin :["https://stack-over-flow-frontend-nikhil-pandey-digital.vercel.app","http://localhost:3000"],
//        methods : ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
//        credentials: true
//       }));


// app.use("/", (req, res) => {
//   res.send("This is a stack overflow clone API");
// });

app.use(useragent.express());

app.use("/user", userRoutes);
app.use("/questions", questionRoutes);
app.use("/answer", answerRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
