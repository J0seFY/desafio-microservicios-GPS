import AppDataSource from "../config/ormConfig";
import { Estudiante } from "../entity/estudiante";

export const getEstudiantesByRut = async (rut:string): Promise<{
    success: boolean;
    estudiante?: Estudiante;
    message?: string;
}> => {

    const estudianteRepository = AppDataSource.getRepository(Estudiante);
    const estudiante = await estudianteRepository.findOne({where:{rut: rut}});
    if(!estudiante) {
        return {success: false, message: "No se encontro el estudiante"};
    }

    return {success: true, estudiante};
}