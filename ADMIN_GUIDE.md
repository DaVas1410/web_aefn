# 📖 Documentación - Panel Administrativo AEFN

## 🔐 Acceso al Panel Administrativo

**URL:** `admin.html` (relativa)

**Contraseña actual:** `admin2025`

⚠️ **IMPORTANTE:** Cambiar la contraseña en producción editando `js/admin.js` línea 10

---

## 📋 Características del Panel

### 1. **Gestión de Clubes** 📚

Agrega nuevos clubes sin editar JSON directamente:

- **Nombre del Club:** Nombre visible en la página
- **ID:** Identificador único (sin espacios, ej: `club-astronomia`)
- **Descripción Corta:** Resumen de 1-2 líneas
- **Descripción Larga:** Párrafo completo con más detalles
- **Icono:** Código de icono Bootstrap (ej: `bi-stars`, `bi-code-square`)
- **Email de Contacto:** Email para unirse al club

**Datos guardados en:** `data/clubes.json`

---

### 2. **Gestión de Profesores** 👨‍🏫

Visualización de profesores registrados.

Para agregar/editar profesores:
- Editar directamente en `data/profesores.json`
- O contactar al desarrollador para agregar interfaz de edición

**Campos principales:**
- Nombre, Título, Email
- Áreas de investigación (array)
- Foto, Oficina, Teléfono
- Educación, Publicaciones, Proyectos
- Enlaces sociales (LinkedIn, Google Scholar, GitHub)

---

### 3. **Gestión de Eventos** 📅

Crea eventos que se muestren en la página si existe página de calendario:

- **Título:** Nombre del evento
- **Fecha y Hora:** Formato datetime local
- **Descripción:** Detalles del evento
- **Ubicación:** Lugar donde ocurre (opcional)
- **Tipo:** Taller, Seminario, Charla, Competencia, Reunión, Otro
- **Estado:** Próximo, En Progreso, Finalizado, Cancelado

**Datos guardados en:** `data/events.json`

---

### 4. **Gestión de Grupos de Investigación** 🔬

Visualización de grupos de investigación.

Para agregar/editar grupos:
- Editar directamente en `data/investigation-groups.json`
- Incluye título, descripción, imagen, participantes, proyectos

---

### 5. **Respaldo y Restauración** 💾

**Descargar Respaldo:**
- Descarga todos los datos (clubes, profesores, eventos, grupos) en un único archivo JSON
- Nombreado automáticamente: `aefn-backup-YYYY-MM-DD.json`
- Útil para hacer copias de seguridad

**Restaurar desde Respaldo:**
- Selecciona un archivo `.json` previo
- Restaura los datos al estado guardado
- ⚠️ Sobrescribe la información actual

---

## 📁 Estructura de Datos

### Clubes (`data/clubes.json`)

```json
{
  "id": "astronomia",
  "nombre": "Club de Astronomía",
  "icono": "bi-stars",
  "descripcion": "Descripción corta",
  "descripcion_larga": "Descripción detallada",
  "directiva": [
    {
      "cargo": "Presidente",
      "nombre": "Nombre",
      "email": "email@yachaytech.edu.ec"
    }
  ],
  "actividades": [
    {
      "fecha": "2025-12-10",
      "titulo": "Observación Nocturna",
      "descripcion": "Detalles de la actividad"
    }
  ],
  "contacto_email": "club-astronomia@aefn.local"
}
```

### Eventos (`data/events.json`)

```json
{
  "id": "evento-1",
  "titulo": "Charla: Nanotecnología",
  "descripcion": "Descripción del evento",
  "fecha": "2025-12-10T18:00:00",
  "ubicacion": "Auditorio principal",
  "tipo": "charla",
  "estado": "proximo",
  "link": "https://..."
}
```

### Profesores (`data/profesores.json`)

```json
{
  "nombre": "Dr. Nombre",
  "titulo": "Cargo o Título",
  "area": ["nanotecnologia", "computacion"],
  "areas_investigacion": ["Area 1", "Area 2"],
  "foto": "images/profesores/nombre.jpg",
  "email": "email@yachaytech.edu.ec",
  "oficina": "Edificio y oficina",
  "bio": "Biografía profesional",
  "educacion": ["Grado académico"],
  "publicaciones": ["Publicación 1"],
  "proyectos": ["Proyecto 1"],
  "social": {
    "linkedin": "https://linkedin.com/...",
    "google_scholar": "https://scholar.google.com/...",
    "github": "https://github.com/..."
  }
}
```

### Grupos de Investigación (`data/investigation-groups.json`)

```json
{
  "id": "nano-materials",
  "title": "Nanomateriales y Caracterización",
  "slug": "nanomateriales-y-caracterizacion",
  "short_description": "Descripción corta",
  "image": "images/topics/imagen.png",
  "participants": [
    {
      "name": "Nombre",
      "role": "Coordinador/Investigador/Estudiante"
    }
  ],
  "long_description": "Descripción larga",
  "projects": [
    {
      "title": "Nombre del proyecto",
      "year": 2025
    }
  ],
  "contact_email": "grupo@aefn.local"
}
```

---

## 🛠️ Validadores JavaScript

El archivo `js/validators.js` proporciona funciones para validar datos:

```javascript
// Email
Validators.email('test@example.com'); // true/false

// Requerido
Validators.required('texto'); // true/false

// URL
Validators.url('https://...'); // true/false

// Longitud mínima
Validators.minLength('texto', 3); // true/false

// Número
Validators.number('123'); // true/false

// Fecha
Validators.date('2025-12-10'); // true/false

// Formulario completo
const errors = Validators.form(data, rules);
// Retorna null si es válido, o objeto con errores
```

---

## 🔧 Integración con Backend (Próximas Mejoras)

Para persistencia permanente de datos, es necesario:

1. **Backend Node.js/Python:**
   - Endpoint POST `/api/clubes` para agregar clubes
   - Endpoint PUT `/api/clubes/:id` para editar
   - Endpoint DELETE `/api/clubes/:id` para eliminar
   - Análogos para eventos, profesores, etc.

2. **Base de Datos:**
   - MongoDB, PostgreSQL, MySQL
   - Almacenar datos con timestamps
   - Histórico de cambios

3. **Autenticación:**
   - Reemplazar `sessionStorage` con JWT
   - Mejores contraseñas o 2FA
   - Roles de usuario (Admin, Editor, Viewer)

4. **Validación Backend:**
   - Replicar validadores en servidor
   - Sanitización de entrada
   - Rate limiting

---

## 📱 Páginas que Usan los Datos

### `clubes.html`
- Carga y renderiza clubes desde `data/clubes.json`
- Muestra detalles en modal
- Contacto por email

### `profesores.html`
- Filtra profesores por área
- Muestra modal con perfil completo
- Enlaces sociales

### `investigacion.html`
- Tabs: Grupos, Tesis, Papers
- Renderiza grupos desde JSON
- Enlace a página de detalle (`group.html`)

### `admin.html`
- Panel para gestionar datos
- Descarga/restaura respaldos

---

## ✅ Checklist para Producción

- [ ] Cambiar contraseña de admin en `js/admin.js`
- [ ] Configurar HTTPS
- [ ] Crear base de datos
- [ ] Implementar autenticación con JWT
- [ ] Desarrollar API backend
- [ ] Migrar datos JSON a BD
- [ ] Testing completo
- [ ] Documentar API
- [ ] Entrenamiento de administradores

---

## 🐛 Troubleshooting

**El panel admin no carga:**
- Verificar consola del navegador (F12)
- Revisar que los archivos JSON existan
- Verificar CORS si está en servidor diferente

**Los datos no se guardan:**
- Sin backend, los datos se guardan en memoria (sesión)
- Necesario implementar API para persistencia
- Usar el respaldo para guardar datos

**Error "Contraseña incorrecta":**
- Asegúrate de usar `admin2025`
- Cambiar en `js/admin.js` si fue modificada

**Icono no aparece:**
- Verificar que el código de Bootstrap Icon sea válido
- Ejemplos: `bi-stars`, `bi-code-square`, `bi-microscope`
- Ver lista completa en https://icons.getbootstrap.com

---

## 📞 Contacto y Soporte

Para problemas o sugerencias sobre el panel administrativo, contactar a:

**Email:** decanatoecfn@yachaytech.edu.ec

**Repositorio:** https://github.com/DaVas1410/web_aefn
