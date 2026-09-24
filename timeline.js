function wiki(name){
  return "https://commons.wikimedia.org/wiki/Special:FilePath/"+encodeURIComponent(name)+"?width=900";
}
const EVENTS=[
{id:"ctx",cat:"inicio",when:"1968",title:"Ellas también estaban ahí",kicker:"Contexto · una de cada seis",
body:`<p>En 1967–68 había unos 150 mil estudiantes en la UNAM y el IPN. Solo alrededor de <strong>25 mil eran mujeres</strong>: cerca del 16%. Aun así organizaron brigadas, pintaron mantas, hablaron en peseros y representaron a sus escuelas en el Consejo Nacional de Huelga. De unos 350 delegados del CNH, apenas unas 15 a 30 eran mujeres. Eran pocas en la mesa. Eran muchas en la calle.</p>`,
facts:["~16% de la matrícula","15–30 mujeres en el CNH","Brigadas = columna vertebral"],
imgs:[{src:wiki("Movimiento estudiantil 68 09.jpg"),cap:"Movimiento estudiantil, 1968. Héctor Gallardo"},{src:wiki("Mítin filosofia.jpg"),cap:"Asamblea en Filosofía y Letras. Marcel·lí Perelló"}],
note:"Los nombres famosos son la punta. Debajo hay cientos de brigadistas anónimas."},
{id:"j22",cat:"inicio",when:"22–26 jul",title:"De una riña a tomar la calle",kicker:"Inicio · julio de 1968",
body:`<p>El 22 de julio una pelea entre estudiantes de vocacionales del IPN y de la Preparatoria Isaac Ochoterena se sale de control. Al día siguiente los granaderos entran a la Vocacional 5. El 26 coinciden una marcha estudiantil y otra por la Revolución Cubana.</p><p>Para las jóvenes, salir a la calle ya era un primer desafío. Varias han contado que mentían en casa y que iban a las marchas en falda. Gladys López Hernández, de la Preparatoria Popular Tacuba, recordó correr así cuando avanzó la policía.</p>`,
facts:["Vocacional 5","Prepas e IPN","Salir de casa ya era política"],
imgs:[{src:wiki("Mítin filosofia (2).jpg"),cap:"Mítin universitario, 1968. Marcel·lí Perelló"},{src:wiki("Movimiento estudiantil 68 50.jpg"),cap:"Estudiantes del 68. Héctor Gallardo"}],
note:"El movimiento nace de la rabia contra los granaderos, no de un plan armado."},
{id:"j29",cat:"inicio",when:"29–30 jul",title:"Las prepas y las primeras detenidas",kicker:"Inicio · fin de julio",
body:`<p>El ejército entra a las preparatorias de San Ildefonso y a otras escuelas. Empiezan las listas de detenidos. Entre los primeros consignados hay mujeres, como Mika Seeger.</p>`,
facts:["San Ildefonso","Primeras consignaciones"],
imgs:[{src:wiki("Mítin CU-20 agost.jpg"),cap:"Mítin en Ciudad Universitaria. Marcel·lí Perelló"},{src:wiki("Movimiento estudiantil 68 30.jpg"),cap:"El 68. Héctor Gallardo"}],
note:"Cuando el ejército entra a una escuela, el conflicto deja de ser una riña."},
{id:"a01",cat:"auge",when:"1 ago",title:"La marcha del rector",kicker:"Auge · 1 de agosto",
body:`<p>El rector Javier Barros Sierra encabeza una marcha por la autonomía universitaria. Las estudiantes van en los contingentes de su prepa o facultad. Ifigenia Martínez no da la espalda al movimiento. Madres y maestras se suman desde las banquetas.</p>`,
facts:["Autonomía universitaria","Barros Sierra","Maestras y madres"],
imgs:[{src:wiki("Mítin CU-20 agost.jpg"),cap:"Mítin en CU, agosto 1968. Marcel·lí Perelló"},{src:wiki("010890 R399-015 MANIFESTACION ESTUDIANTIL AGOSTO 13 1968 (33499366105).jpg"),cap:"Manifestación estudiantil, agosto 1968. MAF-CDMX"}],
note:"La autonomía era el derecho a pensar en paz dentro de la escuela."},
{id:"a02",cat:"auge",when:"2–4 ago",title:"Pocas sillas en el CNH",kicker:"Auge · nace el Consejo",
body:`<p>Nace el Consejo Nacional de Huelga. Hay que nombrar a <strong>Roberta Avendaño “La Tita”</strong>, <strong>Myrthokleia González</strong>, <strong>Adriana Corona</strong>, <strong>Marcia Gutiérrez</strong>, <strong>Martha Servín</strong> y <strong>María Eugenia Espinosa</strong>.</p>`,
facts:["CNH","Seis puntos","Delegadas"],
imgs:[{src:wiki("Mítin filosofia.jpg"),cap:"Asamblea en Filosofía y Letras. Marcel·lí Perelló"},{src:wiki("Movimiento estudiantil 68 09.jpg"),cap:"El movimiento, 1968. Héctor Gallardo"}],
note:"Que hubiera pocas mujeres en el CNH no significa que hubiera pocas en el movimiento."},
{id:"brig",cat:"auge",when:"ago",title:"La brigada: el trabajo que no sale en la foto",kicker:"Auge · el trabajo diario",
body:`<p>Las brigadas salían a explicar el pliego. <strong>La Nacha</strong> estaba en finanzas. <strong>Elsa Lecuona</strong> salía a la calle.</p><div class="petition">“Nosotras también nos la jugamos.” — Elsa Lecuona</div>`,
facts:["Volantes","Mercados y peseros"],
imgs:[{src:wiki("010891 R433-005 LETREROS DE INSULTOS EN EL MITIN AGOSTO 27 1968 (33458252566).jpg"),cap:"Pancartas del 27 de agosto. MAF-CDMX"},{src:wiki("010891 R427-009 MANIFESTANTES CON FIGURAS Y LETREROS DE INSULTOS AGOSTO 27 1968 (33343162292).jpg"),cap:"Manifestantes con letreros, 27 de agosto. MAF-CDMX"}],
note:"Sin brigadas no hay movimiento de masas."},
{id:"a13",cat:"auge",when:"13 ago",title:"La primera gran marcha al Zócalo",kicker:"Auge · 13 de agosto",
body:`<p>Cientos de miles caminan al Zócalo. Hay contingentes mixtos y brigadas de mujeres.</p>`,
facts:["Zócalo","Contingentes mixtos"],
imgs:[{src:wiki("010890 R399-015 MANIFESTACION ESTUDIANTIL AGOSTO 13 1968 (33499366105).jpg"),cap:"Marcha del 13 de agosto de 1968. MAF-CDMX"},{src:wiki("010890 R440-008 MANIFESTACION ESTUDIANTIL MANIFESTACIÓN ESTUDIANTIL AGOSTO 13 1968 (33458259296).jpg"),cap:"Contingente estudiantil, 13 de agosto. MAF-CDMX"}],
note:"La plaza pública era un escenario prestado."},
{id:"a27",cat:"auge",when:"27 ago",title:"Mujeres en el Zócalo ocupado",kicker:"Auge · 27 de agosto",
body:`<p>Otra marcha enorme. Al día siguiente el ejército desaloja la plaza.</p>`,
facts:["27–28 de agosto","Desalojo militar"],
imgs:[{src:wiki("Manifestació 27 d'agost.jpg"),cap:"27 de agosto de 1968. Marcel·lí Perelló"},{src:wiki("L'exèrcit desallotja el Zócalo-matinada del 28 d'agost.jpg"),cap:"El ejército en el Zócalo, 28 de agosto. Marcel·lí Perelló"}],
note:"Después de esta noche, el tono del gobierno se endurece."},
{id:"s13",cat:"represion",when:"13 sep",title:"La Marcha del Silencio",kicker:"Septiembre · 13",
body:`<p>Más de 100 mil personas caminan en silencio. Familias enteras. Silvia Gálvez, de 15 años, ya era brigadista.</p>`,
facts:["Pañuelo blanco","Más de 100 mil"],
imgs:[{src:wiki("Manifestació de dol.jpg"),cap:"Marcha de duelo, 13 de septiembre de 1968. Marcel·lí Perelló"},{src:wiki("010890 R440-008 MANIFESTACION ESTUDIANTIL MANIFESTACIÓN ESTUDIANTIL AGOSTO 13 1968 (33458259296).jpg"),cap:"Contingente estudiantil. MAF-CDMX"}],
note:"El silencio no era rendición."},
{id:"s18",cat:"represion",when:"18 sep",title:"El ejército en CU: más de 40 mujeres detenidas",kicker:"Septiembre · 18",
body:`<p>El ejército ocupa Ciudad Universitaria. La Nacha es detenida con más de 40 compañeras y sale a las 72 horas.</p>`,
facts:["Ocupación de CU","Más de 40 detenidas"],
imgs:[{src:wiki("El ejército en Tlatelolco. México 1968.jpg"),cap:"Presencia militar, 1968"},{src:wiki("Movimiento estudiantil 68 60.jpg"),cap:"Octubre 1968. Héctor Gallardo"}],
note:"La Nacha sale y no se retira."},
{id:"s23",cat:"represion",when:"23–24 sep",title:"El Casco y las escuelas del Poli",kicker:"Septiembre · el IPN",
body:`<p>El ejército entra al Casco de Santo Tomás. Myrthokleia González representa a su escuela del IPN.</p>`,
facts:["Casco de Santo Tomás","Delegadas del IPN"],
imgs:[{src:wiki("010891 R514-007 FOTOS DE LAS CERCANIAS DEL CASCO DE STO. TOMAS SEPTIEMBRE 23 1968 (32655680464).jpg"),cap:"Cercanías del Casco de Santo Tomás, 23 de septiembre. MAF-CDMX"},{src:wiki("Exèrcit al Zócalo-28 d'agost.jpg"),cap:"Ejército en la ciudad, 1968. Marcel·lí Perelló"}],
note:"Cuando cierran las escuelas, el mitin al aire libre se vuelve el aula grande."},
{id:"s30",cat:"represion",when:"30 sep",title:"Cinco mil mujeres marchan",kicker:"Septiembre · las madres",
body:`<p>La Unión Nacional de Mujeres Mexicanas convoca. Se suman unas <strong>cinco mil mujeres</strong>.</p>`,
facts:["UNMM","Monumento a la Madre"],
imgs:[{src:wiki("Manifestació de dol.jpg"),cap:"Marcha de duelo. Marcel·lí Perelló"},{src:wiki("Manifestación pasando por tlatelolco.jpg"),cap:"Manifestación pasando por Tlatelolco. Archivo El Heraldo / Ibero"}],
note:"El 68 también fue de madres que no aceptaron el silencio."},
{id:"o07",cat:"octubre",when:"07:00",title:"Se arma el dispositivo",kicker:"2 de octubre · 07:00",
body:`<p>Hay tropas y hombres de civil. El edificio Chihuahua queda marcado como tribuna. Adriana Corona cuenta que, aun avisadas, salieron.</p>`,
facts:["Batallón Olimpia","Edificio Chihuahua"],
imgs:[{src:wiki("Plaza de las Tres Culturas y Edificio Chihuahua.jpg"),cap:"Plaza y edificio Chihuahua"},{src:wiki("Plaza de las tres culturas vista desde el edificio Chihuahua.jpg"),cap:"La plaza vista desde el Chihuahua"}],
note:"El mitin todavía no empieza. El dispositivo ya está pensado."},
{id:"o09",cat:"octubre",when:"09:00",title:"Ellas no están en la mesa de las 9",kicker:"2 de octubre · 09:00",
body:`<p>Hay una reunión del CNH con enviados del gobierno. Las delegadas no figuran en esa foto de la mañana.</p>`,
facts:["Reunión CNH–gobierno"],
imgs:[{src:wiki("El ejército en Tlatelolco. México 1968.jpg"),cap:"El ejército en Tlatelolco, 1968"},{src:wiki("010890 R470-002 MITIN ESTUDIANTIL EN LA PLAZA DE LAS 3 CULTURAS 7 SEPTIEMBRE 1968 (31757674446).jpg"),cap:"Mitin previo en Tlatelolco, 7 de septiembre. MAF-CDMX"}],
note:"Negociar de día no detiene el operativo."},
{id:"o16",cat:"octubre",when:"16:00",title:"Llegan vecinas, alumnas, periodistas",kicker:"2 de octubre · 16:00",
body:`<p>Se juntan de 5 mil a más de 10 o 15 mil personas. Oriana Fallaci está en la plaza. Elena Poniatowska reconstruirá esa tarde.</p>`,
facts:["5 mil a 15 mil personas","Fallaci y Poniatowska"],
imgs:[{src:wiki("010890 R470-008 MITIN ESTUDIANTIL EN LA PLAZA DE LAS 3 CULTURAS 7 SEPTIEMBRE 1968 (31647324492).jpg"),cap:"Mitin en la Plaza de las Tres Culturas. MAF-CDMX"},{src:wiki("010891 R468-012 MITIN ESTUDIANTIL PLAZA 3 CULTURAS SEPTIEMBRE 07 1968 (33115902230).jpg"),cap:"Asistentes en Tlatelolco, septiembre 1968. MAF-CDMX"}],
note:"La plaza es el patio de la unidad."},
{id:"o1730",cat:"octubre",when:"17:30",title:"Una mujer abre el mitin",kicker:"2 de octubre · 17:30",
body:`<p>Desde el edificio Chihuahua habla el CNH. <strong>Myrthokleia González</strong> es maestra de ceremonias.</p>`,
facts:["Myrthokleia González","Edificio Chihuahua"],
imgs:[{src:wiki("010891 R469-018 MITIN ESTUDIANTIL PLAZA 3 CULTURAS SEPTIEMBRE 07 1968 (32655681204).jpg"),cap:"Mitin en Tlatelolco. MAF-CDMX"},{src:wiki("Plaza de las tres culturas vista desde el edificio Chihuahua.jpg"),cap:"Plaza de las Tres Culturas y tribuna del Chihuahua"}],
note:"Poner una voz de mujer al frente no era lo habitual. Ese día lo fue."},
{id:"o1755",cat:"octubre",when:"17:55",title:"La señal y la huida",kicker:"2 de octubre · 17:55 a 18:15",
body:`<p>Hay bengalas, luego el cerco. La Nacha y La Tita salen. Myrthokleia resulta herida en una mano. Una mujer avisa a la embajada de Fallaci.</p><p>No describimos heridas ni escenas.</p>`,
facts:["Bengalas","La Nacha y La Tita salen"],
imgs:[{src:wiki("Plaza de las Tres Culturas - Memorial 1968.JPG"),cap:"Memorial del 2 de octubre. ProtoplasmaKid"},{src:wiki("Tlatelolco-Memorialof02oct1968-01.JPG"),cap:"Plaza de las Tres Culturas. Susana Torres Sánchez"}],
note:"El orden se sostiene: luz, cerco, fuego."},
{id:"o20",cat:"octubre",when:"noche",title:"Detenidas, no solo detenidos",kicker:"2 de octubre · noche",
body:`<p>Amada Velasco es detenida. Ocho mujeres quedan presas. Cuatro se quedan años: La Nacha, La Tita, Amada Velasco y Adela Salazar.</p>`,
facts:["8 mujeres presas","4 condenas largas"],
imgs:[{src:wiki("Tlatelolco-Memorialof02oct1968-01.JPG"),cap:"Memorial del 2 de octubre"},{src:wiki("Movimiento estudiantil 68 09.jpg"),cap:"Estudiantes, 1968. Héctor Gallardo"}],
note:"La conmemoración necesita nombres, archivos y memoria."},
{id:"o03",cat:"despues",when:"3 oct",title:"Ellas también pelean la versión",kicker:"Después · 3 de octubre",
body:`<p>Varios diarios hablan de “zafarrancho”. Elena Poniatowska reúne voces de mujeres en <i>La noche de Tlatelolco</i>.</p>`,
facts:["Prensa","Poniatowska"],
imgs:[{src:wiki("Manifestación pasando por tlatelolco.jpg"),cap:"Manifestación en Tlatelolco. Archivo El Heraldo / Ibero"},{src:wiki("Manifestació 27 d'agost.jpg"),cap:"27 de agosto de 1968. Marcel·lí Perelló"}],
note:"Sin testimonio, el parte militar se convierte en historia."},
{id:"carcel",cat:"despues",when:"1968–70",title:"Santa Martha",kicker:"Después · la prisión de mujeres",
body:`<p>En Santa Martha Acatitla las presas políticas eran un puñado. La UNMM exige su libertad el 31 de octubre.</p>`,
facts:["Santa Martha Acatitla","UNMM"],
imgs:[{src:wiki("Plaza de las Tres Culturas - Memorial 1968.JPG"),cap:"Memorial del 2 de octubre"},{src:wiki("Manifestació de dol.jpg"),cap:"Marcha de duelo. Marcel·lí Perelló"}],
note:"La cárcel de mujeres del 68 es un capítulo corto en los libros y largo en las vidas."},
{id:"o12",cat:"despues",when:"12 oct",title:"La Olimpiada y el duelo",kicker:"Después · 12 de octubre",
body:`<p>Se inauguran los XIX Juegos. María Rojo había estado en la plaza. El CNH declara una tregua olímpica.</p>`,
facts:["12 de octubre","Tregua olímpica"],
imgs:[{src:wiki("Movimiento estudiantil 68 50.jpg"),cap:"El 68. Héctor Gallardo"},{src:wiki("L'exèrcit desallotja el Zócalo-matinada del 28 d'agost.jpg"),cap:"Fuerza pública en el Zócalo, 1968. Marcel·lí Perelló"}],
note:"El deporte mundial sigue. La cuenta de las víctimas, no."},
{id:"dic",cat:"despues",when:"dic 68",title:"Se apaga el CNH; no se apaga su semilla",kicker:"Después · diciembre y más allá",
body:`<p>Hacia diciembre el CNH se disuelve. Cada año se marcha de Tlatelolco al Zócalo.</p><div class="petition">2 de octubre no se olvida. Tampoco a las que estuvieron.</div>`,
facts:["Fin del CNH","Memoria"],
imgs:[{src:wiki("Mítin CU-20 agost.jpg"),cap:"Mítin en CU, agosto 1968. Marcel·lí Perelló"},{src:wiki("Plaza de las Tres Culturas - Memorial 1968.JPG"),cap:"Memorial del 2 de octubre"}],
note:"Esta línea no cierra el expediente."}
];
const track=document.getElementById("track");
EVENTS.forEach((e,i)=>{
  const b=document.createElement("button");
  b.className="mark c-"+e.cat;
  b.dataset.id=e.id; b.dataset.cat=e.cat;
  b.innerHTML=`<span class="t">${e.when}</span><span class="dot"></span>`;
  b.onclick=()=>show(i);
  track.appendChild(b);
});
function show(i){
  const e=EVENTS[i];
  document.getElementById("tab").textContent=e.when;
  document.getElementById("kicker").textContent=e.kicker;
  document.getElementById("title").textContent=e.title;
  document.getElementById("body").innerHTML=e.body;
  document.getElementById("note").textContent=e.note||"";
  const ul=document.getElementById("facts"); ul.innerHTML="";
  e.facts.forEach(f=>{const li=document.createElement("li");li.textContent=f;ul.appendChild(li);});
  const box=document.getElementById("imgs"); box.innerHTML="";
  (e.imgs||[]).forEach(im=>{
    const fig=document.createElement("figure");
    fig.innerHTML=`<img src="${im.src}" alt="${im.cap}" loading="lazy" onerror="this.parentElement.style.display='none'"><figcaption>${im.cap}</figcaption>`;
    box.appendChild(fig);
  });
  document.querySelectorAll(".mark").forEach((m,idx)=>m.classList.toggle("active",idx===i));
}
document.querySelectorAll(".chip").forEach(ch=>ch.onclick=()=>{
  document.querySelectorAll(".chip").forEach(c=>c.classList.remove("active")); ch.classList.add("active");
  const f=ch.dataset.f;
  document.querySelectorAll(".mark").forEach(m=>m.classList.toggle("dim",!(f==="all"||m.dataset.cat===f)));
});
show(0);
