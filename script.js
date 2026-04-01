/* ==========================================
   CONFIGURACIÓN DE REGALOS (Modifica aquí tus textos)
   ========================================== */
   const REGALOS_ESTATICOS = [
    { 
        id: 1, 
        pista: "No tengo vida, pero te sigo. No pienso, pero te guío. Si me pierdes, te desesperas, y en tu mano siempre vivo.  ¿Qué soy?", 
        solucion: "raton", 
        revelado: "¡Tu raton para poder aimear bien hehehe!" 
    },
    { 
        id: 2, 
        pista: "No soy real, pero tengo poder, puedo mandar sin obedecer. En tela suave ahora estoy, pero en mi historia temido soy.  ¿Quién soy?", 
        solucion: "lelouch lamperouge", 
        revelado: "¡Un peluchito para que te acompañe a mimir!" 
    },
    { 
        id: 3, 
        pista: "En una isla nací famoso, acompaño charlas sin reposo. No soy café, pero despierto, y con leche, soy un acierto.  ¿Qué soy?", 
        solucion: "te ingles", 
        revelado: "Para los dias que recuerdes tu viaje..." 
    },
    { 
        id: 4, 
        pista: "Aventuras son mi rutina, tesoros sigo en cada esquina. Con trenzas o pistolas voy, en versión mini ahora soy.  ¿Quién soy?", 
        solucion: "lara croft", 
        revelado: "Para tu aventurera interior, que tengas una referencia" 
    },
    { 
        id: 5, 
        pista: "No estoy vivo, pero camino, no pienso, pero te domino. En la tele doy terror, y ahora voy con mucho estilo y color.  ¿Qué soy?", 
        solucion: "camiseta he walking dead", 
        revelado: "Para que no falte la nostalgia y el flow" 
    },
    { 
        id: 6, 
        pista: "Ritmo, letras y emoción, sobre el escenario doy lo mejor. No soy concierto, pero abrigo, y llevo a un ídolo contigo.  ¿Qué soy?", 
        solucion: "sudadera stray kids", 
        revelado: "Para que lleves contigo a tu kid favorito" 
    },
    { 
        id: 7, 
        pista: "No soy arma, pero ayudo a apuntar, sin mí, te cuesta más acertar. De hielo curo en otro lugar, pero aquí te dejo deslizar.  ¿Qué soy?", 
        solucion: "alfombrilla sage", 
        revelado: "Para que lleves contigo a tu niña y apuntes mejor jeje" 
    },
    { 
        id: 8, 
        pista: "No hablo, pero hago brillar, no camino, pero puedo acompañar. Van en pares o en unión, y adornan con intención.  ¿Qué soy?", 
        solucion: "joyas", 
        revelado: "Para que brilles mas de lo que brillas ya por ti misma..." 
    },
    { 
        id: 9, 
        pista: "No es solo objeto, es tradición, lleva fe en cada rincón. Entre tela, aroma o oración, guarda respeto y devoción.  ¿Qué soy?", 
        solucion: "musulman", 
        revelado: "Para que cuando rezas te acuerdes que siempre estare contigo..." 
    },
    { 
        id: 10, 
        pista: "No soy flor, pero tengo aroma, no soy sol, pero doy calor. Vivo menos cuando me usas, y aun así, me enciendes sin temor.  ¿Qué soy?", 
        solucion: "vela aromatica", 
        revelado: "Para que tu habitacion huela a lo que tu esencia es, pureza" 
    }
    
];

let regalos = [];
let indexActivo = null;
let clicsLogo = 0;

/* ==========================================
   LÓGICA DE CARGA Y PERSISTENCIA
   ========================================== */
function cargarDatos() {
    const guardado = localStorage.getItem('juegoNour');
    
    if (guardado) {
        regalos = JSON.parse(guardado);
    } else {
        // Inicialización por primera vez
        regalos = REGALOS_ESTATICOS.map(r => ({
            ...r,
            intentos: 3,
            estado: 'pending' // Estados: pending, success, failed
        }));
        guardar();
    }
    
    // Si la página tiene el grid de regalos, lo dibuja
    if (document.getElementById('grid')) {
        dibujarBoxes();
    }
}

function guardar() {
    localStorage.setItem('juegoNour', JSON.stringify(regalos));
}

/* ==========================================
   GESTIÓN DE LA INTERFAZ (REGALOS)
   ========================================== */
function dibujarBoxes() {
    const grid = document.getElementById('grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    regalos.forEach((r, i) => {
        const div = document.createElement('div');
        // Asignamos la clase de color según el estado
        div.className = `box ${r.estado}`;
        div.innerHTML = `
            <div class="box-icon" style="font-size: 2rem; margin-bottom: 10px;">
                ${r.estado === 'success' ? '✅' : (r.estado === 'failed' ? '💀' : '📦')}
            </div>
            <span>SUMINISTRO #${r.id}</span>
        `;
        div.onclick = () => abrirBox(i);
        grid.appendChild(div);
    });
}

function abrirBox(i) {
    indexActivo = i;
    const r = regalos[i];
    const overlay = document.getElementById('overlay');
    
    overlay.style.display = 'flex';
    document.getElementById('msg').innerText = "";
    document.getElementById('user-input').value = "";

    // Si el box aún está pendiente de adivinar
    if (r.estado === 'pending') {
        document.getElementById('modal-title').innerText = "ENCRIPTADO";
        document.getElementById('modal-title').style.color = "#8a0b0b"; // Rojo sangre
        document.getElementById('pista-texto').innerText = r.pista;
        document.getElementById('game-area').style.display = 'block';
        document.getElementById('result-area').style.display = 'none';
        document.getElementById('btn-volver-modal').innerText = "VOLVER";
    } else {
        // Si ya se resolvió (acierto o fallo), mostramos el resultado directamente
        const titulo = r.estado === 'success' ? "SUMINISTRO ASEGURADO" : "SUMINISTRO PERDIDO";
        const color = r.estado === 'success' ? "#4a5d23" : "#b58900"; // Verde o Amarillo
        mostrarResultado(titulo, r.revelado, color);
    }
}

function validar() {
    const r = regalos[indexActivo];
    const input = document.getElementById('user-input').value.toLowerCase().trim();
    
    if (input.includes(r.solucion.toLowerCase())) {
        r.estado = 'success';
        guardar();
        mostrarResultado("¡ACCESO CONCEDIDO!", r.revelado, "#4a5d23");
    } else {
        r.intentos--;
        if (r.intentos <= 0) {
            r.estado = 'failed';
            guardar();
            mostrarResultado("SISTEMA BLOQUEADO", "El objeto era: " + r.revelado, "#b58900");
        } else {
            const msgElement = document.getElementById('msg');
            msgElement.innerText = `¡ERROR! Te quedan ${r.intentos} intentos.`;
            msgElement.style.color = "#ff4444";
            guardar();
        }
    }
    dibujarBoxes(); // Actualiza los colores en el fondo
}

function mostrarResultado(titulo, texto, color) {
    document.getElementById('game-area').style.display = 'none';
    document.getElementById('result-area').style.display = 'block';
    
    const titleElem = document.getElementById('modal-title');
    titleElem.innerText = titulo;
    titleElem.style.color = color;
    
    document.getElementById('result-text').innerText = texto;
    document.getElementById('btn-volver-modal').innerText = "VOLVER AL MAPA";
}

function cerrarModal() {
    document.getElementById('overlay').style.display = 'none';
}

/* ==========================================
   PANEL DE CONTROL SECRETO (ADMIN)
   ========================================== */
function inicializarAdmin() {
    const logo = document.querySelector('.logo-text');
    if (logo) {
        logo.style.cursor = "pointer"; // Para saber que se puede clicar
        logo.addEventListener('click', () => {
            clicsLogo++;
            if (clicsLogo === 5) {
                const pass = prompt("MODO ADMIN: Introduce clave (escribe 'rick'):");
                if (pass === 'rick') {
                    const accion = prompt("1: Resetear todo (Limpiar)\n2: Forzar todo a VERDE (Éxito)\n3: Forzar todo a AMARILLO (Fallo)");
                    
                    if (accion === '1') {
                        localStorage.removeItem('juegoNour');
                        regalos = REGALOS_ESTATICOS.map(r => ({ ...r, intentos: 3, estado: 'pending' }));
                        guardar();
                        alert("Sistema reiniciado. Volviendo al Día 1...");
                    } 
                    else if (accion === '2') {
                        regalos.forEach(r => { r.estado = 'success'; r.intentos = 3; });
                        guardar();
                    } 
                    else if (accion === '3') {
                        regalos.forEach(r => { r.estado = 'failed'; r.intentos = 0; });
                        guardar();
                    }
                    location.reload();
                }
                clicsLogo = 0;
            }
        });
    }
}

/* ==========================================
   INICIO AL CARGAR LA PÁGINA
   ========================================== */
window.onload = () => {
    cargarDatos();
    inicializarAdmin();
};