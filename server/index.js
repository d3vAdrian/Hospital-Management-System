import express from "express";
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import multer from 'multer'
import helmet from 'helmet'
import morgan from 'morgan'
import {fileURLToPath} from 'url'
import path from "path";
import {signup,login,regPatient,regEmployee,getCustomers } from './controllers/auth.js'
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import authRoutes from "./routes/auth.js";
import salesRoutes from "./routes/sales.js";
import managementRoutes from "./routes/management.js";

/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));
// file storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/assets");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });

const upload = multer({ storage });

// mongoose setp
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));

  app.use("/auth", authRoutes);
  app.use("/client", clientRoutes);
  app.use("/general", generalRoutes);
  app.use("/sales", salesRoutes);
  app.use("/management", managementRoutes);

app.post('/auth/signup', signup)
app.post('/auth/regPatient', regPatient)
app.post('/auth/regEmployee', regEmployee)
app.post('/auth/login', login)
app.use('/auth', authRoutes)
app.get('/api/profile', getCustomers)

