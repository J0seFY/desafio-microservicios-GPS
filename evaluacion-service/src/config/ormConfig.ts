import { DataSource, InitializedRelationError } from "typeorm";
import { Evaluacion } from "../entity/evaluacion";

const AppDataSource:DataSource = new DataSource({
    type: "postgres",
    host: "db",
    port: 5432,
    entities: [Evaluacion],
    username: "user",
    password: "1234",
    database: "estudiante_db",
    synchronize: true,
})

async function InitializedWithRetry (retries = 5, delay = 5000) {
    for (let i = 0; i < retries; i++) {
        try {
            await AppDataSource.initialize();
            console.log("Data Source has been initialized!");
            return;
        } catch (error) {
            if (i < retries - 1) {
                console.error("Error during Data Source initialization, retrying...", error);
                await new Promise(res => setTimeout(res, delay));
            } else {
                console.error("Error during Data Source initialization", error);
                throw error;
            }
        }
    }
}

InitializedWithRetry();
export default AppDataSource;