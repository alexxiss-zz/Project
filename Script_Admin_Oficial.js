let currentEditId;

function editarUsuario(id) {
    currentEditId = id;
    // Reemplazar el contenido del plan por un select
    const planCell = document.querySelector(`#row-${id} td:nth-child(4)`);
    const currentPlan = planCell.innerText;
    planCell.innerHTML = `
        <select id="select-plan-${id}">
            <option value="Básico" ${currentPlan === 'Básico' ? 'selected' : ''}>Básico</option>
            <option value="Avanzado dup" ${currentPlan === 'Avanzado dup' ? 'selected' : ''}>Avanzado dup</option>
            <option value="Expert Grupo" ${currentPlan === 'Expert Grupo' ? 'selected' : ''}>Expert Grupo</option>
        </select>
        <br>
        <button onclick="mostrarFormularioVoucher()">Subir Voucher</button>
    `;
}

function guardarCambios() {
    // Obtener el nuevo plan seleccionado
    const nuevoPlan = document.getElementById(`select-plan-${currentEditId}`).value;
    
    // Actualizar el plan en la tabla
    const planCell = document.querySelector(`#row-${currentEditId} td:nth-child(4)`);
    planCell.innerText = nuevoPlan;
    
    // Cerrar el formulario de voucher
    cerrarVoucher();
}

function mostrarFormularioVoucher() {
    document.getElementById('voucherForm').style.display = 'block';
}

function cerrarVoucher() {
    document.getElementById('voucherForm').style.display = 'none';
}

function eliminarUsuario(id) {
    if (confirm("¿Estás seguro de que deseas eliminar este usuario?")) {
        alert("Usuario con ID: " + id + " eliminado");
    }
}

function verDetalles(id) {
  // Aquí puedes agregar los detalles específicos de cada usuario
  let detalles;
  if (id === 1) {
      detalles = 
`ID: 1
Nombre de usuario: Adiaz
Nombre: Alberto
Apellidos: Abella Diaz
Correo: adiaz@example.com
Fecha de Nacimiento: 02/12/2004
DNI: 546249362
Estado: Activo
Plan: Expert Group`;
  } else if (id === 2) {
      detalles = `ID: 2
Nombre de usuario: Gvelez
Nombre: Antonio
Apellidos: Gaviria Vélez
Correo: gvelez@example.com
Fecha de Nacimiento: 07/08/2002
DNI: 15698432
Estado: Activo
Plan: Básico`;
  } else if (id === 3) {
    detalles = `ID: 3
Nombre de usuario: Crobles
Nombre: Sara
Apellidos: Campos Robles
Correo: crobles@example.com
Fecha de Nacimiento: 15/10/2000
DNI: 18264823
Estado: Activo
Plan: Avanzado dup`;
}

  // Mostrar el modal con los detalles
  document.getElementById('detallesUsuario').innerText = detalles;
  document.getElementById('detalleModal').style.display = 'block';
}

function cerrarModalUsuario() {
  document.getElementById('detalleModal').style.display = 'none';
}

//Función para mostrar por Tipo
document.getElementById('TipoFilter').addEventListener('change', function() {
  let equipoValue = this.value;
  let rows = document.querySelectorAll('#tablaUsuarios tbody tr');
  
  rows.forEach(row => {
      let equipo = row.cells[2].textContent;
      if (equipo.includes(equipoValue) || equipoValue === 'Todos') {
          row.style.display = '';
      } else {
          row.style.display = 'none';
      }
  });
}); 

//Función para mostrar por Plan
document.getElementById('PlanFilter').addEventListener('change', function() {
  let equipoValue = this.value;
  let rows = document.querySelectorAll('#tablaUsuarios tbody tr');
  
  rows.forEach(row => {
      let equipo = row.cells[3].textContent;
      if (equipo.includes(equipoValue) || equipoValue === 'Todos') {
          row.style.display = '';
      } else {
          row.style.display = 'none';
      }
  });
});

//Función para mostrar por Estado Beca
document.getElementById('EstadoFilter').addEventListener('change', function() {
  let equipoValue = this.value;
  let rows = document.querySelectorAll('#tablaUsuarios tbody tr');
  
  rows.forEach(row => {
      let equipo = row.cells[3].textContent;
      if (equipo.includes(equipoValue) || equipoValue === 'Todos') {
          row.style.display = '';
      } else {
          row.style.display = 'none';
      }
  });
});

//Función para mostrar por Tipo Beca
document.getElementById('TipoBecaFilter').addEventListener('change', function() {
  let equipoValue = this.value;
  let rows = document.querySelectorAll('#tablaUsuarios tbody tr');
  
  rows.forEach(row => {
      let equipo = row.cells[4].textContent;
      if (equipo.includes(equipoValue) || equipoValue === 'Todos') {
          row.style.display = '';
      } else {
          row.style.display = 'none';
      }
  });
});

// Función para buscar usuarios por nombre
document.getElementById('usuarioSearch').addEventListener('input', function() {
  let searchValue = this.value.toLowerCase();
  let rows = document.querySelectorAll('#tablaUsuarios tbody tr');
  
  rows.forEach(row => {
      let usuarioName = row.cells[0].textContent.toLowerCase();
      if (usuarioName.includes(searchValue)) {
          row.style.display = '';
      } else {
          row.style.display = 'none';
      }
  });
});

function showSection(sectionId) {
  // Ocultar todas las secciones
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
      section.style.display = 'none';
  });

  // Mostrar la sección seleccionada
  document.getElementById(sectionId).style.display = 'block';
}

function openEmail(sender, subject, message) {
  // Mostrar el detalle del correo
  document.getElementById('emailSender').innerText = sender;
  document.getElementById('emailSubject').innerText = subject;
  document.getElementById('emailMessage').innerText = message;
  showSection('emailDetail');
}


// Función para mostrar la sección de detalle de correo
function openEmail(sender, subject, message) {
  // Rellenar el contenido del correo en los campos correspondientes
  document.getElementById('emailSender').textContent = sender;
  document.getElementById('emailSubject').textContent = subject;
  document.getElementById('emailMessage').textContent = message;

  // Mostrar la sección del correo y ocultar la bandeja de entrada
  mostrarSeccion('emailDetail');
}

// Función para mostrar una sección específica y ocultar el resto
function mostrarSeccion(seccionID) {
  // Ocultar todas las secciones
  const secciones = document.querySelectorAll('.seccion');
  secciones.forEach(seccion => {
      seccion.classList.remove('activo');
  });

  // Mostrar la sección seleccionada
  const seccion = document.getElementById(seccionID);
  seccion.classList.add('activo');
}

// Función para mostrar la sección de detalle de mensaje y responder
function responderMensaje(destinatario, asunto, mensaje) {
  // Rellenar los detalles del mensaje en los campos correspondientes
  document.getElementById('mensajeDestinatario').textContent = destinatario;
  document.getElementById('mensajeAsunto').textContent = asunto;
  document.getElementById('mensajeRecibido').textContent = mensaje;

  // Mostrar la sección de detalle de mensajería y ocultar la lista de mensajes
  mostrarSeccion('mensajeDetalle');
}

// Función para enviar la respuesta (simulado)
function enviarRespuesta() {
  const respuesta = document.getElementById('mensajeRespuesta').value;
  alert("Respuesta enviada: " + respuesta);

  // Limpiar el campo de respuesta y volver a la mensajería
  document.getElementById('mensajeRespuesta').value = '';
  mostrarSeccion('mensajeria');
}

// Función para mostrar una sección específica y ocultar el resto
function mostrarSeccion(seccionID) {
  // Ocultar todas las secciones
  const secciones = document.querySelectorAll('.seccion');
  secciones.forEach(seccion => {
      seccion.style.display = 'none';
  });

  // Mostrar la sección seleccionada
  const seccion = document.getElementById(seccionID);
  seccion.style.display = 'block';
}

// Función para mostrar la sección de detalles de la beca
function detallesBeca(nombre, motivo, estado) {
  // Rellenar los detalles de la beca en los campos correspondientes
  document.getElementById('becaNombre').textContent = nombre;
  document.getElementById('becaMotivo').textContent = motivo;
  document.getElementById('becaEstado').textContent = estado;

  // Mostrar la sección de detalle de la beca y ocultar la lista de solicitudes
  mostrarSeccion('detalleBeca');
}

// Función para mostrar una sección específica y ocultar el resto
function mostrarSeccion(seccionID) {
  // Ocultar todas las secciones
  const secciones = document.querySelectorAll('.seccion');
  secciones.forEach(seccion => {
      seccion.style.display = 'none';
  });

  // Mostrar la sección seleccionada
  const seccion = document.getElementById(seccionID);
  seccion.style.display = 'block';
}

// Función para mostrar una sección específica y ocultar el resto
function mostrarSeccion(seccionID) {
  const secciones = document.querySelectorAll('.seccion');
  secciones.forEach(seccion => {
      seccion.style.display = 'none';
  });
  const seccion = document.getElementById(seccionID);
  seccion.style.display = 'block';
}

// Función para mostrar una sección específica y ocultar el resto
function mostrarSeccion(seccionID) {
  const secciones = document.querySelectorAll('.seccion');
  secciones.forEach(seccion => {
      seccion.style.display = 'none';
  });
  const seccion = document.getElementById(seccionID);
  seccion.style.display = 'block';
}

// Función para agregar un nuevo administrador a la tabla
function agregarAdministrador() {
  // Solicitar la información del nuevo administrador
  const nombre = prompt("Ingrese el nombre del administrador:");
  const correo = prompt("Ingrese el correo del administrador:");
  const contraseña = prompt("Ingrese la contraseña del administrador:");
  const fecha = new Date().toLocaleDateString(); // Fecha actual

  if (nombre && correo) {
      // Obtener la tabla
      const tabla = document.getElementById("adminTable").getElementsByTagName('tbody')[0];

      // Crear una nueva fila
      const nuevaFila = tabla.insertRow();

      // Crear y asignar las celdas
      const celdaNombre = nuevaFila.insertCell(0);
      const celdaCorreo = nuevaFila.insertCell(1);
      const celdaContraseña = nuevaFila.insertCell(2);
      const celdaFecha = nuevaFila.insertCell(3);

      // Asignar los valores a las celdas
      celdaNombre.textContent = nombre;
      celdaCorreo.textContent = correo;
      celdaContraseña.textContent = contraseña;
      celdaFecha.textContent = fecha;
  } else {
      alert("Por favor, complete toda la información.");
  }
}

// Abrir modal con los detalles del certificado
function openModalCertificado(certificado, usuario, curso, categoria, docente, fecha) {
  document.getElementById('modal-certificado').innerText = certificado;
  document.getElementById('modal-usuario').innerText = usuario;
  document.getElementById('modal-curso').innerText = curso;
  document.getElementById('modal-categoria').innerText = categoria;
  document.getElementById('modal-docente').innerText = docente;
  document.getElementById('modal-fecha').innerText = fecha;

  document.getElementById('modal').style.display = 'block';
}

// Cerrar modal
function closeModalCertificado() {
  document.getElementById('modal').style.display = 'none';
}

// Cerrar modal si se hace clic fuera de la ventana modal
window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target == modal) {
      modal.style.display = 'none';
  }
}

// Función para abrir el modal de Responder
function abrirRespuesta(remitente, asunto, row) {
    document.getElementById('remitente').innerText = remitente;
    document.getElementById('asunto').innerText = asunto;
    document.getElementById('modal-responder').style.display = 'block';
    
    // Asociar el botón de enviar con la fila a eliminar
    const sendBtn = document.querySelector('.send-btn');
    sendBtn.onclick = function() {
        enviarRespuesta(row);
    };
}

// Función para enviar la respuesta y eliminar la fila
function enviarRespuesta(row) {
    // Simular el envío de la respuesta (aquí podrías enviar los datos al servidor)
    alert('Respuesta enviada con éxito.');

    // Eliminar la fila correspondiente de la tabla
    row.parentNode.removeChild(row);

    // Cerrar el modal después de enviar la respuesta
    cerrarModal();
}

// Función para abrir el modal de Historial de Respuestas
function abrirHistorial(remitente) {
    // Cargar el historial (en un caso real, podrías hacer una petición AJAX para obtenerlo)
    document.getElementById('historial-respuestas').innerText = `Historial de respuestas para ${remitente}. Aquí aparecerán las respuestas anteriores.`;
    document.getElementById('modal-historial').style.display = 'block';
}

// Función para cerrar cualquier modal
function cerrarModal() {
    document.getElementById('modal-responder').style.display = 'none';
    document.getElementById('modal-historial').style.display = 'none';
}

// Cerrar modal si se hace clic fuera del modal
window.onclick = function(event) {
    const modalResponder = document.getElementById('modal-responder');
    const modalHistorial = document.getElementById('modal-historial');
    if (event.target == modalResponder || event.target == modalHistorial) {
        cerrarModal();
    }
}

// Función para abrir el modal de Gestión
function abrirModalGestionar(remitente, solicitud) {
  // Modificar el título del modal dinámicamente
  const tituloModal = document.getElementById('modal-titulo');
  tituloModal.innerText = `${remitente} - Solicitud para ${solicitud}`;

  // Mostrar el modal
  document.getElementById('modal-gestionar').style.display = 'block';
}

// Función para cerrar cualquier modal
function cerrarModal() {
  document.getElementById('modal-gestionar').style.display = 'none';
}

// Cerrar modal si se hace clic fuera del modal
window.onclick = function(event) {
  const modalGestionar = document.getElementById('modal-gestionar');
  if (event.target == modalGestionar) {
      cerrarModal();
  }
}

// Simulación de los datos de los pagos
const pagos = {
  1: {
      id: 1,
      idUsuario: 1,
      monto: 200.00,
      fecha: '2019-07-05',
      codigoPago: '43e05675b0',
      metodoPago: 'Yape',
      estado: 'Pagado',
      tipoPlan: 'Expert Group'
  },
  2: {
      id: 2,
      idUsuario: 2,
      monto: 100.00,
      fecha: '2022-07-05',
      codigoPago: '43ef5d8rb0',
      metodoPago: 'Paypal',
      estado: 'Cancelado',
      tipoPlan: 'Básico'
  }
};

// Función para abrir el modal y mostrar los detalles del pago
function verDetallePago(id) {
  const pago = pagos[id];

  if (pago) {
      const detallePago = document.getElementById('detalle-pago');
      
      detallePago.innerHTML = `
          <p><strong>ID Pago:</strong> ${pago.id}</p>
          <p><strong>ID Usuario:</strong> ${pago.idUsuario}</p>
          <p><strong>Monto (S/.):</strong> ${pago.monto.toFixed(2)}</p>
          <p><strong>Fecha:</strong> ${pago.fecha}</p>
          <p><strong>Código de pago:</strong> ${pago.codigoPago}</p>
          <p><strong>Método de Pago:</strong> ${pago.metodoPago}</p>
          <p><strong>Estado:</strong> ${pago.estado}</p>
          <p><strong>Tipo de Plan:</strong> ${pago.tipoPlan}</p>
      `;

      document.getElementById('modal-detalle').style.display = 'block'; // Mostrar el modal
  } else {
      alert('Detalles no encontrados para este pago.');
  }
}

// Función para emitir un recibo (solo simula la acción)
function emitirReciboPago(id) {
  alert(`Recibo emitido para el pago ID: ${id}`);
}

// Función para cerrar el modal de detalles del pago
function cerrarModalPago() {
  document.getElementById('modal-detalle').style.display = 'none';
}

// Cerrar modal si se hace clic fuera de la ventana modal
window.onclick = function(event) {
  const modal = document.getElementById('modal-detalle');
  if (event.target === modal) {
      cerrarModalPago();
  }
}

// Filtro por método de pago
document.getElementById('filtro-pago').addEventListener('change', function() {
  let filtro = this.value.toLowerCase();
  let rows = document.querySelectorAll('.tabla tbody tr');
  
  rows.forEach(row => {
      let metodoPago = row.cells[5].textContent.toLowerCase(); // Columna de método de pago
      if (filtro === 'todos' || metodoPago.includes(filtro)) {
          row.style.display = '';
      } else {
          row.style.display = 'none';
      }
  });
});

// Función para agregar un nueva ruta a la tabla
function agregarRuta() {
  // Solicitar la información de la nueva ruta
  const Id = prompt("Ingrese el Id de la ruta:");
  const Nombre = prompt("Ingrese el nombre de la ruta:");
  const Descripción = prompt("Ingrese la descripción de la ruta:");

  if (Nombre && Descripción) {
      // Obtener la tabla
      const tabla = document.getElementById("rutaTable").getElementsByTagName('tbody')[0];

      // Crear una nueva fila
      const nuevaFila = tabla.insertRow();

      // Crear y asignar las celdas
      const celdaId = nuevaFila.insertCell(0);
      const celdaNombre = nuevaFila.insertCell(1);
      const celdaDescripción = nuevaFila.insertCell(2);

      // Asignar los valores a las celdas
      celdaNombre.textContent = Id;
      celdaCorreo.textContent = Nombre;
      celdaContraseña.textContent = Descripción;
  } else {
      alert("Por favor, complete toda la información.");
  }
}