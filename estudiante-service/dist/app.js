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
const express_1 = __importDefault(require("express"));
const createEstudiante_1 = require("./services/createEstudiante");
const getAllEstudiantes_1 = require("./services/getAllEstudiantes");
const getEstudiantesByRut_1 = require("./services/getEstudiantesByRut");
const app = (0, express_1.default)();
app.use(express_1.default.json()); // Middleware to parse JSON request bodies
app.get("/estudiantes", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, getAllEstudiantes_1.getAllEstudiantes)();
    if (response.success) {
        res.status(200).json(response.estudiantes);
    }
}));
app.get("/estudiantes/:rut", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rut = req.params.rut;
    const response = yield (0, getEstudiantesByRut_1.getEstudiantesByRut)(rut);
    if (response.success) {
        res.status(200).json(response.estudiante);
    }
    else {
        res.status(404).json({ message: response.message });
    }
}));
app.post("/estudiantes", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { rut, nombreCompleto, edad, curso } = req.body;
    const estudiante = {
        rut,
        nombreCompleto,
        edad,
        curso
    };
    const response = yield (0, createEstudiante_1.createEstudiante)(estudiante);
    if (!response.success) {
        res.status(400).json({ message: response.message });
    }
    res.status(201).json(response.estudiante);
}));
app.listen(8081, () => {
    console.log("Server is running on port 8081");
});
