// Lightweight renderer for Investigación listing and group pages
(function(){
  async function fetchGroups(){
    const res = await fetch('data/investigation-groups.json');
    if(!res.ok) throw new Error('Failed to load groups');
    return await res.json();
  }

  function createCard(group){
    const col = document.createElement('div');
    col.className = 'col-lg-4 col-md-6 col-12 mb-4';

    col.innerHTML = `
      <div class="custom-block bg-white shadow-lg h-100">
        <a href="group.html?id=${encodeURIComponent(group.id)}" class="stretched-link text-decoration-none text-dark">
          <div class="p-3 text-center">
            <img src="${group.image}" alt="${group.title}" class="img-fluid mb-3" style="max-height:160px; object-fit:cover; width:100%;" />
            <h5 class="mb-2">${group.title}</h5>
            <p class="small text-muted">${group.short_description}</p>
            <p class="mt-2"><strong>Miembros:</strong> ${group.participants.map(p=>p.name).slice(0,3).join(', ')}${group.participants.length>3? ', ...':''}</p>
          </div>
        </a>
      </div>
    `;

    return col;
  }

  async function renderListing(containerId){
    const container = document.getElementById(containerId);
    if(!container) return;
    try{
      const groups = await fetchGroups();
      const row = document.createElement('div');
      row.className = 'row';
      groups.forEach(g=> row.appendChild(createCard(g)));
      container.appendChild(row);
    }catch(e){
      container.innerHTML = '<p class="text-danger">No se pudo cargar la lista de grupos.</p>';
      console.error(e);
    }
  }

  function renderGroupDetail(group, container){
    container.innerHTML = `
      <div class="row">
        <div class="col-lg-4 col-12 mb-4">
          <img src="${group.image}" alt="${group.title}" class="img-fluid rounded shadow-sm" />
          <p class="mt-3"><strong>Contacto:</strong> <a href="mailto:${group.contact_email}">${group.contact_email}</a></p>
        </div>
        <div class="col-lg-8 col-12">
          <h2>${group.title}</h2>
          <p class="lead">${group.short_description}</p>
          <p>${group.long_description}</p>

          <h5>Miembros</h5>
          <ul>
            ${group.participants.map(p=>`<li>${p.name} — <em>${p.role}</em></li>`).join('')}
          </ul>

          <h5>Proyectos</h5>
          <ul>
            ${group.projects.map(pr=>`<li>${pr.title} <small class="text-muted">(${pr.year})</small></li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  }

  async function renderGroupFromQuery(containerId){
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const container = document.getElementById(containerId);
    if(!container) return;
    if(!id){ container.innerHTML = '<p class="text-muted">No se especificó el grupo.</p>'; return; }
    try{
      const groups = await fetchGroups();
      const group = groups.find(g=> g.id === id);
      if(!group){ container.innerHTML = '<p class="text-danger">Grupo no encontrado.</p>'; return; }
      renderGroupDetail(group, container);
    }catch(e){ console.error(e); container.innerHTML = '<p class="text-danger">Error cargando el grupo.</p>'; }
  }

  // Expose to global
  window.Investigation = {
    renderListing,
    renderGroupFromQuery
  };
})();
