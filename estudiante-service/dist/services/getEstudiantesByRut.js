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
exports.getEstudiantesByRut = void 0;
const ormConfig_1 = __importDefault(require("../config/ormConfig"));
const estudiante_1 = require("../entity/estudiante");
const getEstudiantesByRut = (rut) => __awaiter(void 0, void 0, void 0, function* () {
    const estudianteRepository = ormConfig_1.default.getRepository(estudiante_1.Estudiante);
    const estudiante = yield estudianteRepository.findOne({ where: { rut: rut } });
    if (!estudiante) {
        return { success: false, message: "No se encontro el estudiante" };
    }
    return { success: true, estudiante };
});
exports.getEstudiantesByRut = getEstudiantesByRut;
