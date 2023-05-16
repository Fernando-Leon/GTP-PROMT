var promt = '';

const btn = document.getElementById('btn');
const p = document.getElementById('promt');

btn.addEventListener('click', () => {
  let objetivo = document.getElementById("objetivos").value;
  let edad = document.getElementById("edad").value;
  let peso = document.getElementById("peso").value;
  let estatura = document.getElementById("estatura").value;
  let actividadFisica = document.getElementById("actividad").value;


  /*
  let generos = document.getElementsByName('genero');
  let genero = "";

  for (var i = 0; i < generos.length; i++) {
    if (generos[i].checked) {
      genero = generos[i].value;
      break;
    }
  }

  */

  let medicacion = document.getElementById("medicacion").value;
  let enfermedades = document.getElementById("enfermedades").value;
  let consumoAgua = document.getElementById("consumo-agua").value;
  let restriccionesAlimenticias = document.getElementById("restricciones-alimenticias").value;
  let dietaDescripcion = document.getElementById("descripcion").value;

  p.innerText = `
  Eres un nutricionista. Necesitas recopilar información sobre su historial médico, estilo de vida, hábitos dietéticos y objetivos relacionados con la nutrición. Debes analizar de forma correcta las respuestas de las siguientes preguntas, las cuales son contestadas por tu cliente anonimo:
  ¿Cuáles son tus objetivos principales? (por ejemplo, perder peso, ganar músculo, mejorar la salud en general) ${objetivo}
  ¿Cuántos años tiene? ${edad}
  ¿Cuál es su peso actual en kilogramos? ${peso}
  ¿Cuál es su altura en metros? ${estatura}
  ¿Cuál es su nivel de actividad física? (por ejemplo, sedentario, ligero, moderado, intenso) ${actividadFisica}
  ¿Cuál es su género? ${genero}
  ¿Toma algún medicamento regularmente? ${medicacion}
  ¿Tiene alguna condición médica relevante? ${enfermedades}
  ¿Cuál es su consumo diario de agua? ${consumoAgua}
  ¿Tiene alguna preferencia o restricción dietética? (por ejemplo, vegetariano, intolerancia al gluten) ${restriccionesAlimenticias}
  Describa su dieta actual (número de comidas al día, alimentos más frecuentes, etc.): ${dietaDescripcion}
  Con  base a la informacion que recabaste crea un plan especifio para esa persona.
  `;
});