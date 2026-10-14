/**
 * LOGICA DE INTEROPERABILIDAD Y FLUJO DE DATOS NO RELACIONAL
 * Nuevo Sistema Nacional de Gestion e Informacion Estadistica Universitaria (MPPEU)
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // Captura de Evento del Formulario Acad�mico
    const formAcademico = document.getElementById('formAcademico');
    if (formAcademico) {
        formAcademico.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const ieu = document.getElementById('ieuSelect').value;
            const matricula = document.getElementById('matriculaInput').value;
            const digitalizacion = document.getElementById('digitalizacionSelect').value;

            // Actualizacion dinamica del Payload NoSQL JSON
            actualizarJSONPayload(ieu, matricula, digitalizacion);

            alert(`¡Registro Interoperable Exitoso!\n\nSe proceso el documento JSON no relacional para la IEU: ${ieu}.\nMatricula informada: ${matricula} estudiantes.`);
        });
    }

    // Captura de Evento del Formulario de Personal / Nomina
    const formNomina = document.getElementById('formNomina');
    if (formNomina) {
        formNomina.addEventListener('submit', (e) => {
            e.preventDefault();
            const docentes = document.getElementById('docentesActivos').value;
            alert(`¡Maqueta de Personal Conciliada!\n\nSe registraron ${docentes} docentes activos físicamente en aula bajo el principio de solicitud única.`);
        });
    }
});

/**
 * Funcion para actualizar en tiempo real el documento JSON no relacional
 */
function actualizarJSONPayload(ieu, matricula, digitalizacion) {
    const jsonPreview = document.getElementById('jsonPreview');
    if (!jsonPreview) return;

    const payload = {
        "Sistema_Nacional": "SNGIEU-2026",
        "IEU_ID": `VE-${ieu}-2026`,
        "Fecha_Corte": new Date().toISOString(),
        "Ley_Interoperabilidad": true,
        "Payload_Academico": {
            "Matricula_Activa": parseInt(matricula),
            "Nivel_Digitalizacion": digitalizacion,
            "Estatus_Proceso": "Sincronizado_MPPEU"
        },
        "Soberania_Datos": {
            "Motor_BD": "NoSQL / JSON Document",
            "Alojamiento": "Infraestructura Nacional"
        }
    };

    jsonPreview.textContent = JSON.stringify(payload, null, 2);
}

/**
 * Funcion para copiar el codigo JSON al portapapeles
 */
function copiarJSON() {
    const jsonText = document.getElementById('jsonPreview').textContent;
    navigator.clipboard.writeText(jsonText).then(() => {
        alert('Payload JSON copiado al portapapeles exitosamente.');
    });
}