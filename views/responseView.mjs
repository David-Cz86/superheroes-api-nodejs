
export function renderizarSuperheroe(superheroe) {
    return {
        id: superheroe._id, 
        nombre: superheroe.nombre,
        verdaderoNombre: superheroe.verdaderoNombre,
        planetaOrigen: superheroe.planetaOrigen,
        edad: superheroe.edad,
        debilidad: superheroe.debilidad,
        poderes: superheroe.poderes,
        aliados: superheroe.aliados,
        enemigos: superheroe.enemigos,
        creadoEl: superheroe.createdAt 
    };
}

export function renderizarListaSuperheroes(superheroes) {
    return superheroes.map(renderizarSuperheroe);
}
