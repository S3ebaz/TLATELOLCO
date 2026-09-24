const CAP = {
  cinco: "Estudiantes del 68",
  fila: "Compañeras del movimiento",
  marcha: "Ellas en la marcha",
  cartel: "Brigadistas con cartel",
  coro: "Estudiantes en asamblea",
  noche: "Marcha nocturna",
  madres: "Mujeres en la calle"
};
const GALLERY = [
  ["cinco","Cinco estudiantes"],
  ["marcha","En la calle"],
  ["cartel","El cartel"],
  ["coro","La asamblea"],
  ["fila","La fila"],
  ["noche","De noche"],
  ["madres","En manifestación"]
];
function pic(){
  return [...arguments].map(k => ({src: (window.F&&F[k]) || "", cap: CAP[k]||k})).filter(x => x.src);
}
const EVENTS=[
{id:"ctx",cat:"inicio",when:"1968",title:"Ellas también estaban ahí",kicker:"Contexto · una de cada seis",body:`<p>En 1967–68 había unos 150 mil estudiantes en la UNAM y el IPN. Solo alrededor de <strong>25 mil eran mujeres</strong>. Aun así organizaron brigadas, pintaron mantas y representaron a sus escuelas.</p>`,facts:["~16% de la matrícula","15–30 mujeres en el CNH"],imgs:pic("cinco","coro"),note:"Los nombres famosos son la punta. Debajo hay cientos de brigadistas anónimas."},
{id:"j22",cat:"inicio",when:"22–26 jul",title:"De una riña a tomar la calle",kicker:"Inicio · julio de 1968",body:`<p>El 22 de julio una pelea entre vocacionales del IPN y la Preparatoria Isaac Ochoterena se sale de control. Para las jóvenes, salir a la calle ya era un primer desafío.</p>`,facts:["Vocacional 5","Prepas e IPN"],imgs:pic("marcha","noche"),note:"El movimiento nace de la rabia contra los granaderos."},
{id:"j29",cat:"inicio",when:"29–30 jul",title:"Las prepas y las primeras detenidas",kicker:"Inicio · fin de julio",body:`<p>El ejército entra a San Ildefonso. Entre los primeros consignados hay mujeres, como Mika Seeger.</p>`,facts:["San Ildefonso","Primeras consignaciones"],imgs:pic("fila","cinco"),note:"Cuando el ejército entra a una escuela, el conflicto deja de ser una riña."},
{id:"a01",cat:"auge",when:"1 ago",title:"La marcha del rector",kicker:"Auge · 1 de agosto",body:`<p>El rector Barros Sierra marcha por la autonomía. Las estudiantes van en los contingentes. Madres y maestras se suman desde las banquetas.</p>`,facts:["Autonomía","Maestras y madres"],imgs:pic("coro","madres"),note:"La autonomía era el derecho a pensar en paz dentro de la escuela."},
{id:"a02",cat:"auge",when:"2–4 ago",title:"Pocas sillas en el CNH",kicker:"Auge · nace el Consejo",body:`<p>Nace el CNH. Hay que nombrar a <strong>La Tita</strong>, <strong>Myrthokleia González</strong>, <strong>Adriana Corona</strong>, <strong>Marcia Gutiérrez</strong>, <strong>Martha Servín</strong> y <strong>María Eugenia Espinosa</strong>.</p>`,facts:["CNH","Delegadas"],imgs:pic("cartel","cinco"),note:"Que hubiera pocas mujeres en el CNH no significa que hubiera pocas en el movimiento."},
{id:"brig",cat:"auge",when:"ago",title:"La brigada: el trabajo que no sale en la foto",kicker:"Auge · el trabajo diario",body:`<p>Las brigadas salían a explicar el pliego. <strong>La Nacha</strong> estaba en finanzas. <strong>Elsa Lecuona</strong> salía a la calle.</p><div class="petition">“Nosotras también nos la jugamos.” — Elsa Lecuona</div>`,facts:["Volantes","Peseros"],imgs:pic("cartel","marcha"),note:"Sin brigadas no hay movimiento de masas."},
{id:"a13",cat:"auge",when:"13 ago",title:"La primera gran marcha al Zócalo",kicker:"Auge · 13 de agosto",body:`<p>Cientos de miles caminan al Zócalo. Hay contingentes mixtos y brigadas de mujeres.</p>`,facts:["Zócalo","Contingentes mixtos"],imgs:pic("marcha","noche"),note:"La plaza pública era un escenario prestado."},
{id:"a27",cat:"auge",when:"27 ago",title:"Mujeres en el Zócalo ocupado",kicker:"Auge · 27 de agosto",body:`<p>Otra marcha enorme. Al día siguiente el ejército desaloja la plaza.</p>`,facts:["27–28 de agosto"],imgs:pic("noche","coro"),note:"Después de esta noche, el tono del gobierno se endurece."},
{id:"s13",cat:"represion",when:"13 sep",title:"La Marcha del Silencio",kicker:"Septiembre · 13",body:`<p>Más de 100 mil personas caminan en silencio. Silvia Gálvez, de 15 años, ya era brigadista.</p>`,facts:["Pañuelo blanco","Más de 100 mil"],imgs:pic("madres","cinco"),note:"El silencio no era rendición."},
{id:"s18",cat:"represion",when:"18 sep",title:"El ejército en CU: más de 40 mujeres detenidas",kicker:"Septiembre · 18",body:`<p>El ejército ocupa Ciudad Universitaria. La Nacha es detenida con más de 40 compañeras y sale a las 72 horas.</p>`,facts:["Ocupación de CU","Más de 40 detenidas"],imgs:pic("fila","cinco"),note:"La Nacha sale y no se retira."},
{id:"s23",cat:"represion",when:"23–24 sep",title:"El Casco y las escuelas del Poli",kicker:"Septiembre · el IPN",body:`<p>El ejército entra al Casco de Santo Tomás. Myrthokleia González representa a su escuela del IPN.</p>`,facts:["Casco de Santo Tomás"],imgs:pic("marcha","cartel"),note:"Cuando cierran las escuelas, el mitin al aire libre se vuelve el aula grande."},
{id:"s30",cat:"represion",when:"30 sep",title:"Cinco mil mujeres marchan",kicker:"Septiembre · las madres",body:`<p>La Unión Nacional de Mujeres Mexicanas convoca. Se suman unas <strong>cinco mil mujeres</strong>.</p>`,facts:["UNMM","Monumento a la Madre"],imgs:pic("madres","coro"),note:"El 68 también fue de madres que no aceptaron el silencio."},
{id:"o07",cat:"octubre",when:"07:00",title:"Se arma el dispositivo",kicker:"2 de octubre · 07:00",body:`<p>Hay tropas y hombres de civil. Adriana Corona cuenta que, aun avisadas, salieron.</p>`,facts:["Edificio Chihuahua"],imgs:pic("cinco","fila"),note:"El mitin todavía no empieza. El dispositivo ya está pensado."},
{id:"o09",cat:"octubre",when:"09:00",title:"Ellas no están en la mesa de las 9",kicker:"2 de octubre · 09:00",body:`<p>Hay una reunión del CNH con enviados del gobierno. Las delegadas no figuran en esa foto de la mañana.</p>`,facts:["Reunión CNH–gobierno"],imgs:pic("cartel","cinco"),note:"Negociar de día no detiene el operativo."},
{id:"o16",cat:"octubre",when:"16:00",title:"Llegan vecinas, alumnas, periodistas",kicker:"2 de octubre · 16:00",body:`<p>Se juntan de 5 mil a 15 mil personas. Oriana Fallaci está en la plaza. Elena Poniatowska reconstruirá esa tarde.</p>`,facts:["Fallaci y Poniatowska"],imgs:pic("coro","marcha"),note:"La plaza es el patio de la unidad."},
{id:"o1730",cat:"octubre",when:"17:30",title:"Una mujer abre el mitin",kicker:"2 de octubre · 17:30",body:`<p>Desde el edificio Chihuahua habla el CNH. <strong>Myrthokleia González</strong> es maestra de ceremonias.</p>`,facts:["Myrthokleia González"],imgs:pic("cartel","coro"),note:"Poner una voz de mujer al frente no era lo habitual. Ese día lo fue."},
{id:"o1755",cat:"octubre",when:"17:55",title:"La señal y la huida",kicker:"2 de octubre · 17:55 a 18:15",body:`<p>Hay bengalas, luego el cerco. La Nacha y La Tita salen. Una mujer avisa a la embajada de Fallaci.</p><p>No describimos heridas ni escenas.</p>`,facts:["La Nacha y La Tita salen"],imgs:pic("fila","cinco"),note:"El orden se sostiene: luz, cerco, fuego."},
{id:"o20",cat:"octubre",when:"noche",title:"Detenidas, no solo detenidos",kicker:"2 de octubre · noche",body:`<p>Amada Velasco es detenida. Ocho mujeres quedan presas. Cuatro se quedan años: La Nacha, La Tita, Amada Velasco y Adela Salazar.</p>`,facts:["8 mujeres presas"],imgs:pic("fila","cinco"),note:"La conmemoración necesita nombres, archivos y memoria."},
{id:"o03",cat:"despues",when:"3 oct",title:"Ellas también pelean la versión",kicker:"Después · 3 de octubre",body:`<p>Elena Poniatowska reúne voces de mujeres en <i>La noche de Tlatelolco</i>.</p>`,facts:["Poniatowska"],imgs:pic("coro","cartel"),note:"Sin testimonio, el parte militar se convierte en historia."},
{id:"carcel",cat:"despues",when:"1968–70",title:"Santa Martha",kicker:"Después · la prisión de mujeres",body:`<p>En Santa Martha Acatitla las presas políticas eran un puñado. La UNMM exige su libertad el 31 de octubre.</p>`,facts:["Santa Martha Acatitla"],imgs:pic("cinco","fila"),note:"La cárcel de mujeres del 68 es un capítulo corto en los libros y largo en las vidas."},
{id:"o12",cat:"despues",when:"12 oct",title:"La Olimpiada y el duelo",kicker:"Después · 12 de octubre",body:`<p>Se inauguran los XIX Juegos. María Rojo había estado en la plaza.</p>`,facts:["Tregua olímpica"],imgs:pic("marcha","noche"),note:"El deporte mundial sigue. La cuenta de las víctimas, no."},
{id:"dic",cat:"despues",when:"dic 68",title:"Se apaga el CNH; no se apaga su semilla",kicker:"Después · diciembre y más allá",body:`<p>Hacia diciembre el CNH se disuelve. Cada año se marcha de Tlatelolco al Zócalo.</p><div class="petition">2 de octubre no se olvida. Tampoco a las que estuvieron.</div>`,facts:["Memoria"],imgs:pic("cinco","coro"),note:"Esta línea no cierra el expediente."}
];
(function gallery(){
  const box=document.getElementById("gallery"); if(!box) return;
  GALLERY.forEach(([k,label])=>{
    const src=window.F&&F[k]; if(!src) return;
    const fig=document.createElement("figure");
    fig.innerHTML=`<img src="${src}" alt="${label}"><figcaption>${label}</figcaption>`;
    box.appendChild(fig);
  });
})();
const track=document.getElementById("track");
EVENTS.forEach((e,i)=>{
  const b=document.createElement("button");
  b.className="mark c-"+e.cat;
  b.dataset.cat=e.cat;
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
    fig.innerHTML=`<img src="${im.src}" alt="${im.cap}"><figcaption>${im.cap}</figcaption>`;
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
