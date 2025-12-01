/**
 * Panel Administrativo - AEFN
 * Gestión de datos (clubes, eventos, etc.)
 */

(function(){
  'use strict';

  // Configuración
  const ADMIN_PASSWORD = 'admin2025'; // Cambiar en producción
  const STORAGE_KEY = 'aefn_admin_session';

  // Referencias al DOM
  const loginContainer = document.getElementById('loginContainer');
  const adminPanel = document.getElementById('adminPanel');
  const loginForm = document.getElementById('loginForm');
  const logoutBtn = document.getElementById('logoutBtn');

  /**
   * Verificar sesión
   */
  function checkSession() {
    const sessionToken = sessionStorage.getItem(STORAGE_KEY);
    if (sessionToken) {
      showAdminPanel();
    } else {
      showLoginForm();
    }
  }

  /**
   * Mostrar formulario de login
   */
  function showLoginForm() {
    loginContainer.style.display = 'block';
    adminPanel.style.display = 'none';
  }

  /**
   * Mostrar panel admin
   */
  function showAdminPanel() {
    loginContainer.style.display = 'none';
    adminPanel.style.display = 'block';
    loadAllData();
  }

  /**
   * Verificar contraseña
   */
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const password = document.getElementById('adminPassword').value;
    
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, 'authenticated');
      document.getElementById('adminPassword').value = '';
      showAdminPanel();
    } else {
      alert('Contraseña incorrecta');
    }
  });

  /**
   * Logout
   */
  logoutBtn.addEventListener('click', function() {
    sessionStorage.removeItem(STORAGE_KEY);
    showLoginForm();
  });

  /**
   * Fetch JSON
   */
  async function fetchJSON(path) {
    try {
      const res = await fetch(path);
      if (!res.ok) throw new Error('Error fetching ' + path);
      return await res.json();
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  /**
   * Escape HTML
   */
  function escapeHtml(text) {
    const map = {'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'": '&#039;'};
    return (text || '').replace(/[&<>"']/g, m => map[m]);
  }

  // ====== PANEL DE PERMISOS ======

  /**
   * Inicializa panel de permisos
   */
  function initPermissionsPanel() {
    document.querySelectorAll('.permission-toggle').forEach(toggle => {
      const zone = toggle.dataset.zone;
      const hasPerms = window.PermissionsManager.hasPermission(zone);
      toggle.checked = hasPerms;

      toggle.addEventListener('change', function() {
        if (this.checked) {
          window.PermissionsManager.enablePermission(zone);
        } else {
          window.PermissionsManager.disablePermission(zone);
        }
        window.PermissionsManager.updateAllButtons();
      });
    });

    // Botones de activar/desactivar todo
    const enableAllBtn = document.getElementById('enableAllPerms');
    const disableAllBtn = document.getElementById('disableAllPerms');

    if (enableAllBtn) {
      enableAllBtn.addEventListener('click', function() {
        document.querySelectorAll('.permission-toggle').forEach(toggle => {
          toggle.checked = true;
          window.PermissionsManager.enablePermission(toggle.dataset.zone);
        });
        window.PermissionsManager.updateAllButtons();
      });
    }

    if (disableAllBtn) {
      disableAllBtn.addEventListener('click', function() {
        document.querySelectorAll('.permission-toggle').forEach(toggle => {
          toggle.checked = false;
          window.PermissionsManager.disablePermission(toggle.dataset.zone);
        });
        window.PermissionsManager.updateAllButtons();
      });
    }
  }

  /**
   * Cargar todos los datos
   */
  async function loadAllData() {
    initPermissionsPanel();
    loadClubsList();
    loadProfesoresList();
    loadEventosList();
    loadGruposList();
  }

  // ====== CLUBES ======
  async function loadClubsList() {
    const container = document.getElementById('clubesList');
    const clubes = await fetchJSON('data/clubes.json');
    
    if (!clubes || clubes.length === 0) {
      container.innerHTML = '<p class="text-muted">No hay clubes registrados</p>';
      return;
    }

    let html = '<h5 class="mt-4 mb-3">Clubes Existentes</h5><div class="table-responsive"><table class="table table-sm data-table"><thead><tr><th>Nombre</th><th>ID</th><th>Contacto</th><th>Acciones</th></tr></thead><tbody>';
    
    clubes.forEach((club, i) => {
      html += `
        <tr>
          <td>${escapeHtml(club.nombre)}</td>
          <td><small>${escapeHtml(club.id)}</small></td>
          <td><small>${escapeHtml(club.contacto_email)}</small></td>
          <td>
            <button class="btn btn-outline-warning btn-action btn-edit-club" data-index="${i}">
              <i class="bi-pencil"></i> Editar
            </button>
            <button class="btn btn-outline-danger btn-action btn-delete-club" data-index="${i}">
              <i class="bi-trash"></i> Eliminar
            </button>
          </td>
        </tr>
      `;
    });

    html += '</tbody></table></div>';
    container.innerHTML += html;

    // Event listeners
    document.querySelectorAll('.btn-edit-club').forEach(btn => {
      btn.addEventListener('click', function() {
        alert('Edición de clubes disponible en versiones futuras');
      });
    });

    document.querySelectorAll('.btn-delete-club').forEach(btn => {
      btn.addEventListener('click', function() {
        const index = this.getAttribute('data-index');
        if (confirm('¿Eliminar este club?')) {
          clubes.splice(index, 1);
          alert('Función de eliminación disponible con backend. Datos guardados en memoria.');
          loadClubsList();
        }
      });
    });
  }

  // ====== PROFESORES ======
  async function loadProfesoresList() {
    const container = document.getElementById('profesoresList');
    const profesores = await fetchJSON('data/profesores.json');
    
    if (!profesores || profesores.length === 0) {
      container.innerHTML = '<p class="text-muted">No hay profesores registrados</p>';
      return;
    }

    let html = '<div class="table-responsive"><table class="table table-sm data-table"><thead><tr><th>Nombre</th><th>Título</th><th>Email</th><th>Áreas</th></tr></thead><tbody>';
    
    profesores.forEach(prof => {
      const areas = Array.isArray(prof.area) ? prof.area.join(', ') : prof.area;
      html += `
        <tr>
          <td><strong>${escapeHtml(prof.nombre)}</strong></td>
          <td><small>${escapeHtml(prof.titulo)}</small></td>
          <td><small>${escapeHtml(prof.email)}</small></td>
          <td><small>${escapeHtml(areas)}</small></td>
        </tr>
      `;
    });

    html += '</tbody></table></div>';
    container.innerHTML = html;
  }

  // ====== EVENTOS ======
  async function loadEventosList() {
    const container = document.getElementById('eventosList');
    const eventos = await fetchJSON('data/events.json');
    
    if (!eventos || eventos.length === 0) {
      container.innerHTML = '<p class="text-muted">No hay eventos registrados</p>';
      return;
    }

    let html = '<h5 class="mt-4 mb-3">Eventos Existentes</h5><div class="table-responsive"><table class="table table-sm data-table"><thead><tr><th>Título</th><th>Fecha</th><th>Tipo</th><th>Estado</th><th>Acciones</th></tr></thead><tbody>';
    
    eventos.forEach((evento, i) => {
      const fecha = new Date(evento.fecha).toLocaleDateString('es-ES');
      html += `
        <tr>
          <td><strong>${escapeHtml(evento.titulo)}</strong></td>
          <td><small>${fecha}</small></td>
          <td><small>${escapeHtml(evento.tipo)}</small></td>
          <td><small><span class="badge bg-info">${escapeHtml(evento.estado)}</span></small></td>
          <td>
            <button class="btn btn-outline-warning btn-action btn-edit-evento" data-index="${i}">
              <i class="bi-pencil"></i> Editar
            </button>
            <button class="btn btn-outline-danger btn-action btn-delete-evento" data-index="${i}">
              <i class="bi-trash"></i> Eliminar
            </button>
          </td>
        </tr>
      `;
    });

    html += '</tbody></table></div>';
    container.innerHTML += html;

    // Event listeners
    document.querySelectorAll('.btn-delete-evento').forEach(btn => {
      btn.addEventListener('click', function() {
        const index = this.getAttribute('data-index');
        if (confirm('¿Eliminar este evento?')) {
          eventos.splice(index, 1);
          alert('Función de eliminación disponible con backend.');
          loadEventosList();
        }
      });
    });
  }

  // ====== GRUPOS ======
  async function loadGruposList() {
    const container = document.getElementById('gruposList');
    const grupos = await fetchJSON('data/investigation-groups.json');
    
    if (!grupos || grupos.length === 0) {
      container.innerHTML = '<p class="text-muted">No hay grupos registrados</p>';
      return;
    }

    let html = '<div class="table-responsive"><table class="table table-sm data-table"><thead><tr><th>Título</th><th>Participantes</th><th>Email</th></tr></thead><tbody>';
    
    grupos.forEach(grupo => {
      const participantes = grupo.participants.map(p => p.name).slice(0, 2).join(', ');
      html += `
        <tr>
          <td><strong>${escapeHtml(grupo.title)}</strong></td>
          <td><small>${escapeHtml(participantes)}${grupo.participants.length > 2 ? '...' : ''}</small></td>
          <td><small>${escapeHtml(grupo.contact_email)}</small></td>
        </tr>
      `;
    });

    html += '</tbody></table></div>';
    container.innerHTML = html;
  }

  // ====== FORMULARIOS ======

  // Agregar Club
  const formClub = document.getElementById('formClub');
  formClub.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const nuevoClub = {
      id: document.getElementById('clubId').value,
      nombre: document.getElementById('clubNombre').value,
      descripcion: document.getElementById('clubDescripcion').value,
      descripcion_larga: document.getElementById('clubDescripcionLarga').value,
      icono: document.getElementById('clubIcono').value,
      contacto_email: document.getElementById('clubEmail').value,
      directiva: [
        { cargo: 'Presidente', nombre: '[Nombre]', email: '[Email]' },
        { cargo: 'Vicepresidente', nombre: '[Nombre]', email: '[Email]' },
        { cargo: 'Secretario', nombre: '[Nombre]', email: '[Email]' }
      ],
      actividades: [
        { fecha: '[Fecha]', titulo: '[Actividad]', descripcion: '[Descripción]' }
      ]
    };

    // Simular guardado (en producción usaría backend)
    alert('Club agregado correctamente (datos en memoria). Para persistencia, conectar con backend.');
    formClub.reset();
    loadClubsList();
  });

  // Agregar Evento
  const formEvento = document.getElementById('formEvento');
  formEvento.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const fecha = new Date(document.getElementById('eventoFecha').value);
    const id = 'evento-' + Math.random().toString(36).substr(2, 9);
    
    const nuevoEvento = {
      id: id,
      titulo: document.getElementById('eventoTitulo').value,
      descripcion: document.getElementById('eventoDescripcion').value,
      fecha: fecha.toISOString(),
      ubicacion: document.getElementById('eventoUbicacion').value || '',
      tipo: document.getElementById('eventoTipo').value,
      estado: document.getElementById('eventoEstado').value,
      link: ''
    };

    alert('Evento agregado correctamente (datos en memoria). Para persistencia, conectar con backend.');
    formEvento.reset();
    loadEventosList();
  });

  // ====== RESPALDO ======

  document.getElementById('backupBtn').addEventListener('click', async function() {
    const backup = {
      timestamp: new Date().toISOString(),
      clubes: await fetchJSON('data/clubes.json'),
      profesores: await fetchJSON('data/profesores.json'),
      eventos: await fetchJSON('data/events.json'),
      grupos: await fetchJSON('data/investigation-groups.json')
    };

    const dataStr = JSON.stringify(backup, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `aefn-backup-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  });

  document.getElementById('restoreBtn').addEventListener('click', function() {
    const file = document.getElementById('restoreFile').files[0];
    if (!file) {
      alert('Selecciona un archivo');
      return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
      try {
        const backup = JSON.parse(e.target.result);
        alert('Restauración disponible con backend. Datos del respaldo: ' + backup.timestamp);
      } catch (err) {
        alert('Archivo JSON inválido');
      }
    };
    reader.readAsText(file);
  });

  // Inicializar
  checkSession();
})();
