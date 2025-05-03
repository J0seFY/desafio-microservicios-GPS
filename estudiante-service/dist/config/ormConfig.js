"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const estudiante_1 = require("../entity/estudiante");
const AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "db",
    port: 5432,
    entities: [estudiante_1.Estudiante],
    username: "user",
    password: "1234",
    database: "estudiante_db",
    synchronize: true,
});
AppDataSource.initialize()
    .then(() => {
    console.log("Data Source has been initialized!");
})
    .catch((err) => {
    console.error("Error during Data Source initialization", err);
});
exports.default = AppDataSource;
