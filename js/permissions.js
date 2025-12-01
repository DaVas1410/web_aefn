/**
 * Sistema de Permisos para Agregar Entradas
 * Gestiona qué botones "Agregar" se muestran en cada página
 */

(function(){
  'use strict';

  window.PermissionsManager = window.PermissionsManager || {};

  // Configuración de permisos por zona
  const PERMISSIONS_KEY = 'aefn_add_permissions';
  
  const DEFAULT_PERMISSIONS = {
    clubes: false,
    eventos: false,
    profesores: false,
    grupos: false,
    tesis: false,
    papers: false
  };

  /**
   * Obtiene permisos del localStorage
   */
  function getPermissions() {
    const stored = localStorage.getItem(PERMISSIONS_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
    return DEFAULT_PERMISSIONS;
  }

  /**
   * Guarda permisos en localStorage
   */
  function setPermissions(permissions) {
    localStorage.setItem(PERMISSIONS_KEY, JSON.stringify(permissions));
  }

  /**
   * Verifica si una zona tiene permiso de agregar
   */
  function hasPermission(zone) {
    const perms = getPermissions();
    return perms[zone] === true;
  }

  /**
   * Alterna permiso de una zona
   */
  function togglePermission(zone) {
    const perms = getPermissions();
    perms[zone] = !perms[zone];
    setPermissions(perms);
    return perms[zone];
  }

  /**
   * Activa permiso de una zona
   */
  function enablePermission(zone) {
    const perms = getPermissions();
    perms[zone] = true;
    setPermissions(perms);
  }

  /**
   * Desactiva permiso de una zona
   */
  function disablePermission(zone) {
    const perms = getPermissions();
    perms[zone] = false;
    setPermissions(perms);
  }

  /**
   * Crea un botón "Agregar Entrada"
   */
  function createAddButton(zone, label) {
    const btn = document.createElement('button');
    btn.className = 'btn btn-success btn-sm add-entry-btn';
    btn.innerHTML = `<i class="bi-plus-circle me-2"></i> ${label}`;
    btn.dataset.zone = zone;
    btn.style.display = hasPermission(zone) ? 'inline-block' : 'none';
    
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      window.location.href = 'admin.html?section=' + zone;
    });

    return btn;
  }

  /**
   * Inyecta botones de agregar en el HTML
   */
  function injectAddButton(zone, label, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const btn = createAddButton(zone, label);
    const wrapper = document.createElement('div');
    wrapper.className = 'mb-3 add-entry-container';
    wrapper.dataset.zone = zone;
    wrapper.appendChild(btn);

    // Insertar al inicio del contenedor
    container.parentNode.insertBefore(wrapper, container);
  }

  /**
   * Actualiza visibilidad de todos los botones
   */
  function updateAllButtons() {
    document.querySelectorAll('.add-entry-btn').forEach(btn => {
      const zone = btn.dataset.zone;
      const hasPerms = hasPermission(zone);
      btn.style.display = hasPerms ? 'inline-block' : 'none';
    });
  }

  /**
   * Sistema de hotkey para activar modo edición
   */
  function initHotkey() {
    document.addEventListener('keydown', function(e) {
      // Ctrl+Shift+E para toggle modo edición
      if (e.ctrlKey && e.shiftKey && e.key === 'E') {
        e.preventDefault();
        const perms = getPermissions();
        const allEnabled = Object.values(perms).every(v => v === true);
        
        if (allEnabled) {
          // Desactivar todos
          Object.keys(perms).forEach(zone => {
            perms[zone] = false;
          });
        } else {
          // Activar todos
          Object.keys(perms).forEach(zone => {
            perms[zone] = true;
          });
        }
        
        setPermissions(perms);
        updateAllButtons();
        
        const state = Object.values(perms).some(v => v === true) ? 'ACTIVADO' : 'DESACTIVADO';
        console.log(`✏️ Modo Edición ${state}`);
        
        // Toast visual
        showNotification(`Modo Edición ${state}`, 2000);
      }
    });
  }

  /**
   * Muestra notificación temporal
   */
  function showNotification(message, duration = 3000) {
    const toast = document.createElement('div');
    toast.className = 'position-fixed bottom-0 end-0 m-3 p-3 bg-dark text-white rounded';
    toast.style.zIndex = '9999';
    toast.innerHTML = `<i class="bi-info-circle me-2"></i> ${message}`;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, duration);
  }

  /**
   * Panel de control privado (acceso por console)
   */
  function initPrivatePanel() {
    window.EditMode = {
      enable: function(zone) {
        if (zone) {
          enablePermission(zone);
          console.log(`✅ Agregar ${zone} ACTIVADO`);
        } else {
          Object.keys(DEFAULT_PERMISSIONS).forEach(z => enablePermission(z));
          console.log(`✅ Todo ACTIVADO`);
        }
        updateAllButtons();
      },
      disable: function(zone) {
        if (zone) {
          disablePermission(zone);
          console.log(`❌ Agregar ${zone} DESACTIVADO`);
        } else {
          Object.keys(DEFAULT_PERMISSIONS).forEach(z => disablePermission(z));
          console.log(`❌ Todo DESACTIVADO`);
        }
        updateAllButtons();
      },
      toggle: function(zone) {
        const state = togglePermission(zone);
        console.log(`🔄 Agregar ${zone} ${state ? 'ACTIVADO' : 'DESACTIVADO'}`);
        updateAllButtons();
      },
      status: function() {
        const perms = getPermissions();
        console.table(perms);
      }
    };
  }

  // Exponer funciones públicas
  window.PermissionsManager.hasPermission = hasPermission;
  window.PermissionsManager.injectAddButton = injectAddButton;
  window.PermissionsManager.updateAllButtons = updateAllButtons;
  window.PermissionsManager.createAddButton = createAddButton;
  window.PermissionsManager.getPermissions = getPermissions;

  // Inicializar cuando DOM está listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initHotkey();
      initPrivatePanel();
    });
  } else {
    initHotkey();
    initPrivatePanel();
  }
})();
