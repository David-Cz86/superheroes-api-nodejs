import { Schema, model } from 'mongoose';

const superHeroSchema = new Schema({
    nombre: { type: String, required: true }, // Este campo es requerido
    verdaderoNombre: { type: String, default: 'Desconocido' },
    planetaOrigen: { type: String, default: 'Desconocido' },
    edad: { type: Number, required: true }, // Este campo es requerido
    debilidad: String,
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    createdAt: { type: Date, default: Date.now }
}, { collection: 'Grupo-05' });

export default model('SuperHero', superHeroSchema);
