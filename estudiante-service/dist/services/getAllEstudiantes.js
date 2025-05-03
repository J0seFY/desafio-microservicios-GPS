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
exports.getAllEstudiantes = void 0;
const ormConfig_1 = __importDefault(require("../config/ormConfig"));
const estudiante_1 = require("../entity/estudiante");
const getAllEstudiantes = () => __awaiter(void 0, void 0, void 0, function* () {
    const estudianteRepository = ormConfig_1.default.getRepository(estudiante_1.Estudiante);
    const estudiantes = yield estudianteRepository.find();
    if (!estudiantes) {
        return { success: false, message: "No se encontraron estudiantes" };
    }
    return { success: true, estudiantes };
});
exports.getAllEstudiantes = getAllEstudiantes;
