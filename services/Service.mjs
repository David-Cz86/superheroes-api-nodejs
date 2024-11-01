// Archivo: Service.mjs

import superHeroRepository from '../repositories/SuperHeroRepository.mjs';

// Obtener superhéroe por ID
export async function obtenerSuperheroePorId(id) {
    try {
        return await superHeroRepository.obtenerPorId(id);
    } catch (error) {
        console.error('Error al obtener el superhéroe por ID:', error);
        throw error;
    }
}

// Obtener todos los superhéroes
export async function obtenerTodosLosSuperheroes() {
    try {
        return await superHeroRepository.obtenerTodos();
    } catch (error) {
        console.error('Error al obtener todos los superhéroes:', error);
        throw error;
    }
}

// Buscar superhéroes por atributo
export async function buscarSuperheroesPorAtributo(atributo, valor) {
    try {
        return await superHeroRepository.buscarPorAtributo(atributo, valor);
    } catch (error) {
        console.error('Error al buscar superhéroes por atributo:', error);
        throw error;
    }
}

// Obtener superhéroes mayores de 30 años
export async function obtenerSuperheroesMayoresDe30() {
    try {
        return await superHeroRepository.obtenerMayoresDe30();
    } catch (error) {
        console.error('Error al obtener superhéroes mayores de 30 años:', error);
        throw error;
    }
}
