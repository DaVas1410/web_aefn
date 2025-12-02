/**
 * Sistema de Botones "Agregar Entrada"
 * Muestra botones para agregar contenido via Pull Request
 * Los datos se persisten en localStorage para esta sesión
 */

(function(){
  'use strict';

  window.PermissionsManager = window.PermissionsManager || {};

  // Configuración de permisos por zona (solo para esta sesión)
  const PERMISSIONS_KEY = 'aefn_add_permissions';
  
  const DEFAULT_PERMISSIONS = {
    clubes: true,
    eventos: true,
    profesores: true,
    grupos: true,
    tesis: true,
    papers: true
  };

  /**
   * Obtiene permisos de la sesión actual (localStorage temporal)
   */
  function getPermissions() {
    const stored = localStorage.getItem(PERMISSIONS_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
    return DEFAULT_PERMISSIONS;
  }

  /**
   * Guarda permisos en localStorage (solo para esta sesión)
   */
  function setPermissions(permissions) {
    localStorage.setItem(PERMISSIONS_KEY, JSON.stringify(permissions));
  }

  /**
   * Verifica si una zona tiene permiso de mostrar botón
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
    btn.dataset.bs_toggle = 'modal';
    btn.dataset.bs_target = '#tutorialModal';
    btn.style.display = hasPermission(zone) ? 'inline-block' : 'none';

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

  // Exponer funciones públicas
  window.PermissionsManager.hasPermission = hasPermission;
  window.PermissionsManager.injectAddButton = injectAddButton;
  window.PermissionsManager.updateAllButtons = updateAllButtons;
  window.PermissionsManager.createAddButton = createAddButton;
  window.PermissionsManager.getPermissions = getPermissions;
  window.PermissionsManager.enablePermission = enablePermission;
  window.PermissionsManager.disablePermission = disablePermission;
  window.PermissionsManager.togglePermission = togglePermission;
})();
