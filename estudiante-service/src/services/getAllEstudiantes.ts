import AppDataSource from "../config/ormConfig";
import { Estudiante } from "../entity/estudiante";

export const getAllEstudiantes = async (): Promise<{
    success: boolean;
    estudiantes?: Estudiante[];
    message?: string;
}> => {

    const estudianteRepository = AppDataSource.getRepository(Estudiante);
    const estudiantes = await estudianteRepository.find();
    if(!estudiantes) {
        return {success: false, message: "No se encontraron estudiantes"};
    }

    return {success: true, estudiantes};
}