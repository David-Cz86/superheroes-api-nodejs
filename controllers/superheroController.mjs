import * as superHeroService from '../services/Service.mjs';
import SuperHero from '../models/SuperHero.mjs';
import { renderizarSuperheroe, renderizarListaSuperheroes } from '../views/responseView.mjs'; 
// Controlador para obtener superhéroe por ID
export async function obtenerSuperheroePorIdController(req, res) {
    try {
        const superheroe = await superHeroService.obtenerSuperheroePorId(req.params.id);
        if (superheroe) {
            res.status(200).send(renderizarSuperheroe(superheroe)); // Usar la capa de vistas
        } else {
            res.status(404).send('Superhéroe no encontrado');
        }
    } catch (error) {
        res.status(500).send('Error al obtener el superhéroe');
    }
}


// Controlador para obtener todos los superhéroes
export async function obtenerTodosLosSuperheroesController(req, res) {
    try {
        const superheroes = await superHeroService.obtenerTodosLosSuperheroes();
        res.status(200).send(renderizarListaSuperheroes(superheroes));
    } catch (error) {
        res.status(500).send('Error al obtener los superhéroes');
    }
}

// Controlador para buscar superhéroes por atributo
export async function buscarSuperheroesPorAtributoController(req, res) {
    try {
        const { atributo, valor } = req.params; // Obtener el atributo y valor desde la URL
        const superheroes = await superHeroService.buscarSuperheroesPorAtributo(atributo, valor);

        if (superheroes.length > 0) {
            res.status(200).send(renderizarListaSuperheroes(superheroes)); // Usar la capa de vistas
        } else {
            res.status(404).send('No se encontraron superhéroes con ese atributo');
        }
    } catch (error) {
        res.status(500).send('Error al buscar superhéroes por atributo');
    }
}


// Controlador para obtener superhéroes mayores de 30 años
export async function obtenerSuperheroesMayoresDe30Controller(req, res) {
    try {
        const superheroes = await superHeroService.obtenerSuperheroesMayoresDe30();
        res.status(200).send(renderizarListaSuperheroes(superheroes)); // Usar la capa de vistas
    } catch (error) {
        res.status(500).send('Error al obtener superhéroes mayores de 30 años');
    }
}

// Controlador para crear un nuevo superhéroe
export async function crearSuperheroeController(req, res) {
    try {
        console.log('Cuerpo de la solicitud:', req.body); // Log para verificar el cuerpo de la solicitud
        const nuevoSuperheroe = req.body;
        const superheroe = new SuperHero(nuevoSuperheroe);
        await superheroe.save();
        res.status(201).send(renderizarSuperheroe(superheroe)); // Usar la capa de vistas
    } catch (error) {
        console.error('Error al crear el superhéroe:', error);
        res.status(500).send('Error al crear el superhéroe');
    }
}

// Controlador para actualizar un superhéroe por ID
export async function actualizarSuperheroeController(req, res) {
    try {
        const { id } = req.params; // Obtener el ID del superhéroe desde la URL
        const datosActualizados = req.body; // Obtener los datos a actualizar desde el cuerpo de la solicitud (JSON)

        // Buscar y actualizar el superhéroe con los datos proporcionados, y devolver el nuevo documento actualizado
        const superheroe = await SuperHero.findByIdAndUpdate(id, datosActualizados, { new: true });

        if (superheroe) {
            res.status(200).send(renderizarSuperheroe(superheroe)); // Usar la capa de vistas
        } else {
            res.status(404).send('Superhéroe no encontrado');
        }
    } catch (error) {
        console.error('Error al actualizar el superhéroe:', error);
        res.status(500).send('Error al actualizar el superhéroe');
    }
}
// Controlador para eliminar un superhéroe por ID
export async function eliminarSuperheroeController(req, res) {
    try {
        const { id } = req.params; // Obtener el ID del superhéroe desde la URL

        // Buscar y eliminar el superhéroe
        const superheroe = await SuperHero.findByIdAndDelete(id);

        if (superheroe) {
            res.status(200).send({
                mensaje: 'Superhéroe eliminado exitosamente',
                superheroeEliminado: renderizarSuperheroe(superheroe) // Mostrar datos del superhéroe eliminado
            });
        } else {
            res.status(404).send('Superhéroe no encontrado');
        }
    } catch (error) {
        console.error('Error al eliminar el superhéroe:', error);
        res.status(500).send('Error al eliminar el superhéroe');
    }
}


