import AppDataSource from "../config/ormConfig";
import { Evaluacion } from "../entity/evaluacion";

export const createEvaluacion = async (evaluacion: Partial<Evaluacion>): Promise<{
    success: boolean;
    evaluacion?: Evaluacion;
    message?: string;
}> => {

    const evaluacionRepository = AppDataSource.getRepository(Evaluacion);
    const newEvaluacion = evaluacionRepository.create(evaluacion);
    
    try {
        await evaluacionRepository.save(newEvaluacion);
        return {success: true, evaluacion: newEvaluacion};
    }catch (error) {
        console.error("Error al guardar la evaluacion", error);
        return {success: false, message: "Error al guardar la evaluacion"};
    }
    
}