import AppDataSource from "../config/ormConfig";
import { Evaluacion } from "../entity/evaluacion";

export const getEvaluacionByRut = async (rut:string): Promise<{
    success: boolean;
    evaluacion?: Evaluacion;
    message?: string;
}> => {

    const evaluacionRepository = AppDataSource.getRepository(Evaluacion);
    const evaluacion = await evaluacionRepository.findOne({where:{rut: rut}});
    if(!evaluacion) {
        return {success: false, message: "No se encontro la evaluacion"};
    }

    return {success: true, evaluacion: evaluacion};
}