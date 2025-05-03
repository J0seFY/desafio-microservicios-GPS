import express from "express";
import { getAllEvaluaciones } from "./services/getAllEvaluaciones";
import { getEvaluacionByRut } from "./services/getEvaluacionByRut";
import { Evaluacion } from "./entity/evaluacion";
import { createEvaluacion } from "./services/createEvaluacion";

const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies

app.get("/evaluaciones", async (req:express.Request, res:express.Response) => {
    const response = await  getAllEvaluaciones();
    if (response.success) {
        res.status(200).json(response.evaluaciones);
    }
});


app.get("/evaluaciones/:rut", async (req: express.Request<{ rut: string }>, res: express.Response): Promise<void> => {
    const rut: string = req.params.rut;
    const response = await getEvaluacionByRut(rut);
    if (response.success) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});

app.post("/evaluaciones", async (req: express.Request, res: express.Response): Promise<void> => {
    const {rut, semestre, asignatura, nota} = req.body;
    const evaluacion:Partial<Evaluacion> = {
        rut,
        semestre,
        asignatura,
        nota
    };
    
    const solicitud = await fetch(`http://estudiante-services:8081/estudiantes/${rut}`, {
        method: "GET",
    });

    const data = await solicitud.json();

    if (!data.success) {
        res.status(400).json({message: "El estudiante no existe"});
    }else{

        const response = await createEvaluacion(evaluacion);
        if (!response.success) {
            res.status(400).json({response});
        }
        res.status(201).json(response);

    }
});

app.listen(8082, () => {
    console.log("Server is running on port 8081");
});