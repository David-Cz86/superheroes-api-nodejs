import { Router } from 'express';
import {
    obtenerSuperheroePorIdController,
    obtenerTodosLosSuperheroesController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperheroesMayoresDe30Controller,
    crearSuperheroeController,
    actualizarSuperheroeController,
    eliminarSuperheroeController // Importar el nuevo controlador
} from '../controllers/superheroController.mjs';

const router = Router();

// Definir las rutas para cada controlador
router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
router.get('/heroes/:id', obtenerSuperheroePorIdController);
router.post('/heroes', crearSuperheroeController);
router.put('/heroes/:id', actualizarSuperheroeController);
router.delete('/heroes/:id', eliminarSuperheroeController); // Nueva ruta para eliminar un superhéroe

export default router;

