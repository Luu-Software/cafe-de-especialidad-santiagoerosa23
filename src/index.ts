import { preguntar } from './lib/consola.ts';

let totalTexto: string = preguntar('Total de la cuenta: ');
let esEstudiante: string = preguntar('¿Son estudiantes de ORT? si/no: ');
let personasTexto: string = preguntar('Dividir la cuenta entre: ');

let totalPorPersona: number = Number(totalTexto) / Number(personasTexto); // COMPLETAR
if (esEstudiante==="si"){
   totalPorPersona*0.90
}
if (esEstudiante==="no")


console.log(`Total por persona: $${totalPorPersona}`);
