import AppDataSource from "../config/ormConfig";
import { Estudiante } from "../entity/estudiante";

export const createEstudiante = async (estudiante: Estudiante): Promise<{
    success: boolean;
    estudiante?: Estudiante;
    message?: string;
}> => {

    const estudianteRepository = AppDataSource.getRepository(Estudiante);
    const newEstudiante = estudianteRepository.create(estudiante);
    
    try {
        await estudianteRepository.save(newEstudiante);
        return {success: true, estudiante: newEstudiante};
    }catch (error) {
        console.error("Error al guardar el estudiante", error);
        return {success: false, message: "Error al guardar el estudiante"};
    }
    
}