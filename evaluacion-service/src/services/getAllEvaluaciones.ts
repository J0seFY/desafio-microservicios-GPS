import AppDataSource from "../config/ormConfig";
import { Evaluacion } from "../entity/evaluacion";

export const getAllEvaluaciones = async (): Promise<{
    success: boolean;
    evaluaciones?: Evaluacion[];
    message?: string;
}> => {

    const evaluacionRepository = AppDataSource.getRepository(Evaluacion);
    const evaluaciones = await evaluacionRepository.find();
    if(!evaluaciones) {
        return {success: false, message: "No se encontraron evaluaciones"};
    }

    return {success: true, evaluaciones: evaluaciones};
}