import process from "process";
import { getLogger } from "./logger.config";
import { MascotasRepository } from "../respositories/mascotas.repository";

export const seedInitialData = async () => {
    const repo = new MascotasRepository();
    if (process.env.CLEAR_DATA === 'true') {
        const all = await repo.getAll();
        all.forEach(async (e) => {
            await repo.delete(e._id);
        });
        getLogger().info('❌ Borrados datos antiguos');
    }
    if (process.env.SEED_DATA === 'true') {
        await repo.create({
            nombre: 'Garfield',
            edad: 3,
            estado: 'ADOPTADA',
            descripcion: 'Un gato naranja, perezoso y amante de la lasaña.',
            fechaIngreso: new Date('2023-01-01')
        });
        await repo.create({
            nombre: 'Tom',
            edad: 5,
            estado: 'ADOPTADA',
            descripcion: 'Un gato doméstico, siempre persiguiendo a Jerry.',
            fechaIngreso: new Date('2023-01-02')
        });
        await repo.create({
            nombre: 'Don Gato',
            edad: 7,
            estado: 'EN_ADOPCION',
            descripcion: 'El líder de una banda de gatos callejeros, famoso por su astucia y sus planes para conseguir comida.',
            fechaIngreso: new Date('2023-01-03')
        });
        await repo.create({
            nombre: 'El Gato de Cheshire',
            edad: 70,
            estado: 'EN_DIAGNOSTICO',
            descripcion: 'Un gato que tiende a desaparecer y aparecer.',
            fechaIngreso: new Date('2023-01-04')
        });
        await repo.create({
            nombre: 'El Gato de Schrödinger',
            edad: 50,
            estado: 'EN_DIAGNOSTICO',
            descripcion: 'Un gato que no se puede determinar si está vivo o muerto.',
            fechaIngreso: new Date('2023-01-05')
        });
        await repo.create({
            nombre: 'Pluto',
            edad: 7,
            estado: 'ADOPTADA',
            descripcion: 'Un perro de raza Bloodhound, conocido por su torpeza y lealtad.',
            fechaIngreso: new Date('2023-01-06')
        });
        await repo.create({
            nombre: 'Scooby-Doo',
            edad: 8,
            estado: 'EN_DIAGNOSTICO',
            descripcion: 'Un gran danés parlante, conocido por su cobardía y amor por las "Scooby Snacks".',
            fechaIngreso: new Date('2023-01-07')
        });
        await repo.create({
            nombre: 'Pulgoso',
            edad: 6,
            estado: 'EN_ADOPCION',
            descripcion: 'Un perro mestizo famoso por su risa.',
            fechaIngreso: new Date('2023-01-08')
        });
        await repo.create({
            nombre: 'Dug',
            edad: 2,
            estado: 'EN_ADOPCION',
            descripcion: 'Un golden retriever parlante, conocido por su optimismo y sus habilidades para rastrear. ',
            fechaIngreso: new Date('2023-01-09')
        });

        getLogger().info('✅ Creados datos de prueba');
    }
}
