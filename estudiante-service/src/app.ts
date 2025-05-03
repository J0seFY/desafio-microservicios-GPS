import express from "express";
import { Estudiante } from "./entity/estudiante";
import { createEstudiante } from "./services/createEstudiante";
import { getAllEstudiantes } from "./services/getAllEstudiantes";
import { getEstudiantesByRut } from "./services/getEstudiantesByRut";
const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies

app.get("/estudiantes", async (req: express.Request, res: express.Response): Promise<void> => {
    const response: { success: boolean; estudiantes?: Estudiante[] } = await getAllEstudiantes();
    if (response.success) {
        res.status(200).json(response.estudiantes);
    }
});

app.get("/estudiantes/:rut", async (req: express.Request<{ rut: string }>, res: express.Response): Promise<void> => {
    const rut: string = req.params.rut;
    const response: { success: boolean; estudiante?: Estudiante; message?: string } = await getEstudiantesByRut(rut);
    if (response.success) {
        res.status(200).json({success: response.success,estudiante:response.estudiante});
    } else {
        res.status(404).json({ success:response.success,message: response.message });
    }
});

app.post("/estudiantes", async (req: express.Request, res: express.Response): Promise<void> => {
    const {rut, nombreCompleto, edad, curso} = req.body;
    const estudiante:Estudiante = {
        rut,
        nombreCompleto, 
        edad,
        curso
    };

    const response = await createEstudiante(estudiante);
    if (!response.success) {
        res.status(400).json(response);
    }
    res.status(201).json(response);
});     


app.listen(8081, () => {
    console.log("Server is running on port 8081");
});