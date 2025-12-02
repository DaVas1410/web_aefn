/**
 * Sistema de Botones "Agregar Entrada"
 * Muestra botones para agregar contenido via Pull Request
 */

(function(){
  'use strict';

  window.PermissionsManager = window.PermissionsManager || {};

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

  // Exponer funciones públicas
  window.PermissionsManager.injectAddButton = injectAddButton;
  window.PermissionsManager.createAddButton = createAddButton;

})();
