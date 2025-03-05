import { Sequelize } from "sequelize";
import db from "../config/Database.js";

// Membuat tabel "user"
const User = db.define(
  "pesanCinta", // Nama Tabel
  {
    name: Sequelize.STRING,
    pesan: Sequelize.TEXT,
  }
);

db.sync().then(() => console.log("Database synced"));

export default User;
