"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEstudiante = void 0;
const ormConfig_1 = __importDefault(require("../config/ormConfig"));
const estudiante_1 = require("../entity/estudiante");
const createEstudiante = (estudiante) => __awaiter(void 0, void 0, void 0, function* () {
    const estudianteRepository = ormConfig_1.default.getRepository(estudiante_1.Estudiante);
    const newEstudiante = estudianteRepository.create(estudiante);
    try {
        yield estudianteRepository.save(newEstudiante);
        return { success: true, estudiante: newEstudiante };
    }
    catch (error) {
        console.error("Error al guardar el estudiante", error);
        return { success: false, message: "Error al guardar el estudiante" };
    }
});
exports.createEstudiante = createEstudiante;
