# 🚀 AEFN - Web Sitio Asociación de Estudiantes

Sitio web modular para la Asociación de Estudiantes de Física y Nanotecnología (AEFN) de Yachay Tech.

## 📋 Contenido Rápido

### ✅ **Implementado recientemente:**

1. **Sistema Modular de Clubes** 
   - Clubes cargados dinámicamente desde JSON
   - Fácil de agregar/editar en `data/clubes.json`
   - Modal con detalles completos

2. **Panel Administrativo** (`admin.html`)
   - Contraseña: `admin2025` (cambiar en producción)
   - Gestión de clubes, eventos, profesores, grupos
   - Respaldo y restauración de datos

3. **Sistema de Eventos**
   - Eventos en `data/events.json`
   - Renderización dinámica
   - Filtros por estado

4. **Validadores**
   - Funciones reutilizables en `js/validators.js`
   - Email, URL, números, fechas, etc.
   - Validación de formularios completos

## 📁 Estructura de Archivos

```
web_aefn/
├── index.html                 # Página principal
├── admin.html                 # Panel administrativo ⭐ NUEVO
├── clubes.html                # Clubes (ahora modular) ✏️ REFACTORIZADO
├── profesores.html            # Profesores
├── investigacion.html         # Grupos de investigación, tesis, papers
├── group.html                 # Detalle de grupo
├── nosotros.html              # Sobre nosotros
├── calendario.html            # Calendario de eventos
├── contact.html               # Contacto
├── login.html                 # Login (recurso)
├── directiva.html             # Directiva (página)
├── topics-listing.html        # Listing genérico
├── topics-detail.html         # Detalle genérico
│
├── data/
│   ├── clubes.json            # ⭐ NUEVO - Clubes modular
│   ├── events.json            # ✏️ MEJORADO - Eventos
│   ├── profesores.json        # Profesores
│   ├── investigation-groups.json # Grupos de investigación
│   ├── papers.json            # Papers de investigación
│   ├── theses.json            # Tesis
│   └── mallas/                # Mallas curriculares
│
├── js/
│   ├── admin.js               # ⭐ NUEVO - Lógica panel admin
│   ├── clubes.js              # ⭐ NUEVO - Renderización clubes
│   ├── eventos.js             # ⭐ NUEVO - Renderización eventos
│   ├── validators.js          # ⭐ NUEVO - Validadores
│   ├── profesores.js          # Profesores
│   ├── investigation.js       # Investigación
│   ├── custom.js              # Funciones personalizadas
│   ├── jquery.min.js          # jQuery
│   ├── bootstrap.bundle.min.js # Bootstrap
│   ├── jquery.sticky.js       # Plugin sticky
│   └── click-scroll.js        # Scroll smooth
│
├── css/
│   ├── bootstrap.min.css      # Bootstrap
│   ├── bootstrap-icons.css    # Iconos
│   ├── templatemo-topic-listing.css
│   ├── aefn-theme.css         # Tema AEFN
│   ├── aefn-components.css    # Componentes
│   ├── aefn-overrides.css     # Overrides
│   └── aefn-color-override.css # Colores
│
├── images/                    # Imágenes
├── fonts/                     # Fuentes
├── welcome_screen/            # Imágenes de bienvenida
├── mallas/                    # Mallas curriculares
│
├── ADMIN_GUIDE.md             # ⭐ NUEVO - Guía de administrador
└── README.md                  # Este archivo
```

## 🎯 Cómo Usar

### Agregar un Nuevo Club

1. Ir a `admin.html`
2. Ingresar contraseña: `admin2025`
3. Tab "Clubes" → Llenar formulario
4. Hacer clic en "Agregar Club"
5. Los datos se actualizan en `data/clubes.json`

### Agregar un Nuevo Evento

1. En `admin.html` → Tab "Eventos"
2. Llenar formulario con detalles
3. Seleccionar tipo y estado
4. Hacer clic en "Agregar Evento"

### Descargar Respaldo de Datos

1. En `admin.html` → Tab "Respaldo de Datos"
2. Hacer clic en "Descargar JSON"
3. Se descarga un archivo con todos los datos

### Restaurar desde Respaldo

1. En `admin.html` → Tab "Respaldo de Datos"
2. Seleccionar archivo JSON previamente descargado
3. Hacer clic en "Restaurar"

## 📊 Estructura de Datos JSON

### Clubes (`data/clubes.json`)
```json
{
  "id": "astronomia",
  "nombre": "Club de Astronomía",
  "icono": "bi-stars",
  "descripcion": "Descripción corta",
  "descripcion_larga": "Descripción detallada...",
  "directiva": [...],
  "actividades": [...],
  "contacto_email": "club@aefn.local"
}
```

### Eventos (`data/events.json`)
```json
{
  "id": "evento-1",
  "titulo": "Charla: Nanotecnología",
  "descripcion": "...",
  "fecha": "2025-12-10T18:00:00",
  "ubicacion": "Auditorio",
  "tipo": "charla",
  "estado": "proximo",
  "link": ""
}
```

Ver `ADMIN_GUIDE.md` para estructura completa.

## 🔐 Seguridad

**Contraseña del admin:** `admin2025`

⚠️ **CAMBIAR EN PRODUCCIÓN:**
- Editar `js/admin.js` línea 10
- Usar contraseña fuerte
- Implementar autenticación con JWT en el backend

## 🛠️ Requisitos para Producción

- [ ] Cambiar contraseña de admin
- [ ] Configurar HTTPS
- [ ] Crear base de datos (MongoDB, PostgreSQL)
- [ ] Desarrollar API backend
- [ ] Implementar autenticación JWT
- [ ] Testing completo

## 📱 Características Clave

✅ Responsivo (mobile, tablet, desktop)
✅ Tema oscuro/claro posible
✅ Sistema modular de datos JSON
✅ Panel administrativo simple
✅ Validadores de formularios
✅ Respaldo/Restauración de datos
✅ Iconos Bootstrap
✅ SEO básico optimizado

## 🚀 Próximas Mejoras

1. **Backend API** - Persistencia en BD
2. **Autenticación mejorada** - JWT, 2FA
3. **Roles de usuario** - Admin, Editor, Viewer
4. **Historial de cambios** - Auditoría
5. **Búsqueda avanzada** - Full-text search
6. **Integración Calendario** - Google Calendar API
7. **Formulario de contacto** - Email integration
8. **Galería de fotos** - Events/Clubs photos
9. **Sistema de comentarios** - Feedback
10. **Analytics** - Google Analytics

## 📞 Contacto

**Email:** decanatoecfn@yachaytech.edu.ec

**Instagram:** [@aefn_yt](https://www.instagram.com/aefn_yt/)

**Repositorio:** [DaVas1410/web_aefn](https://github.com/DaVas1410/web_aefn)

---

## 📖 Documentación Completa

Para guía detallada del panel administrativo, ver: `ADMIN_GUIDE.md`

---

**Última actualización:** Diciembre 2025
**Versión:** 2.1 (Sistema Modular)
