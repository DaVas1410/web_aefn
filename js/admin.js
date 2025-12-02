/**
 * Panel Administrativo - AEFN
 * Gestión de permisos para botones de agregar entradas
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
    initPermissionsPanel();
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

  // Inicializar
  checkSession();
})();
