# 🎓 AEFN - Sitio Web Oficial

**Asociación de Estudiantes de Física y Nanotecnología - Yachay Tech**

Sitio web moderno y responsivo para la gestión de información académica, eventos, clubes estudiantiles e investigación.

---

## 🚀 Inicio Rápido

### Abrir el Sitio Web

1. Abrir `index.html` en cualquier navegador
2. Navegar por las diferentes secciones

### Acceder al Panel Administrativo

1. Abrir `admin.html` en el navegador
2. Ingresar contraseña: **`admin2025`**
3. Gestionar clubes, eventos y contenido

---

## 📋 Características Principales

### ✅ Sistema Modular con JSON
- Todos los datos en archivos JSON editables
- Sin necesidad de editar HTML
- Actualización automática del contenido

### ✅ Panel Administrativo
- Gestión visual de clubes y eventos
- Sistema de respaldo y restauración
- Interfaz intuitiva y fácil de usar

### ✅ Diseño Responsivo
- Compatible con móviles, tablets y computadoras
- Tema institucional personalizado
- Navegación fluida y moderna

---

## 📁 Estructura del Proyecto

### Páginas HTML
```
index.html          → Página principal
admin.html          → Panel administrativo
clubes.html         → Clubes estudiantiles
profesores.html     → Profesores de la escuela
investigacion.html  → Grupos de investigación
calendario.html     → Eventos y calendario
galeria.html        → Galería de fotos
nosotros.html       → Sobre la AEFN
contact.html        → Información de contacto
```

### Datos (carpeta `data/`)
```
clubes.json                → Información de clubes
events.json                → Eventos y actividades
profesores.json            → Perfiles de profesores
investigation-groups.json  → Grupos de investigación
papers.json                → Publicaciones científicas
theses.json                → Tesis de estudiantes
gallery.json               → Fotos y álbumes
```

### Scripts (carpeta `js/`)
```
clubes.js          → Renderización de clubes
eventos.js         → Gestión de eventos
profesores.js      → Perfiles de profesores
investigation.js   → Página de investigación
gallery.js         → Galería de fotos
validators.js      → Validación de formularios
custom.js          → Funciones generales
```

### Estilos (carpeta `css/`)
```
aefn-theme.css     → Tema y colores institucionales
aefn-components.css → Componentes personalizados
bootstrap.min.css  → Framework Bootstrap
```

---

## 👥 Cómo Usar el Panel Administrativo

### 1. Agregar un Club

```
1. Abrir admin.html
2. Contraseña: admin2025
3. Ir a pestaña "Clubes"
4. Llenar formulario
5. Clic en "Agregar Club"
```

### 2. Agregar un Evento

```
1. Abrir admin.html
2. Ir a pestaña "Eventos"
3. Llenar formulario (título, fecha, ubicación)
4. Seleccionar tipo y estado
5. Clic en "Agregar Evento"
```

### 3. Hacer Respaldo de Datos

```
1. Abrir admin.html
2. Ir a pestaña "Respaldo de Datos"
3. Clic en "Descargar JSON"
4. Se guarda archivo: aefn-backup-2025-12-10.json
```

---

## 📊 Editar Datos Manualmente

Si prefieres editar directamente los archivos JSON:

### Clubes → `data/clubes.json`
```json
{
  "id": "nuevo-club",
  "nombre": "Nombre del Club",
  "icono": "bi-stars",
  "descripcion": "Descripción breve",
  "contacto_email": "club@yachaytech.edu.ec"
}
```

### Eventos → `data/events.json`
```json
{
  "id": "evento-1",
  "titulo": "Nombre del Evento",
  "fecha": "2025-12-20T18:00:00",
  "ubicacion": "Salón",
  "tipo": "charla",
  "estado": "proximo"
}
```

> 📖 Ver `ADMIN_GUIDE.md` para detalles completos de todos los campos

---

## 🔒 Seguridad

**Contraseña actual del panel:** `admin2025`

### ⚠️ Importante para Producción
```
Cambiar contraseña en: js/admin.js (línea 10)
Usar contraseña fuerte: Mínimo 12 caracteres
Activar HTTPS en el servidor
```

---

## ✅ Checklist para Producción

- [ ] Cambiar contraseña del panel administrativo
- [ ] Configurar certificado HTTPS
- [ ] Conectar con base de datos
- [ ] Implementar API backend para persistencia
- [ ] Probar en diferentes navegadores

---

## 🌟 Características Técnicas

✅ **Responsivo** → Funciona en móviles, tablets y computadoras
✅ **Modular** → Datos separados en archivos JSON
✅ **Fácil de usar** → Panel administrativo intuitivo
✅ **Seguro** → Validación de formularios y sanitización
✅ **Moderno** → Diseño profesional con Bootstrap 5
✅ **Rápido** → Optimizado para carga rápida

---

## 🚀 Futuras Mejoras Planeadas

🔹 Backend con API REST para persistencia real
🔹 Sistema de autenticación robusto
🔹 Historial de cambios y auditoría
🔹 Búsqueda global en el sitio
🔹 Integración con Google Calendar
🔹 Formulario de contacto funcional

---

## 📖 Documentación Adicional

- **`QUICK_START.md`** → Guía rápida de uso
- **`ADMIN_GUIDE.md`** → Manual del panel administrativo
- **`CONTRIBUTING.md`** → Cómo contribuir al proyecto
- **`CHANGELOG.md`** → Historial de cambios

---

## 📞 Contacto

📧 **Email:** decanatoecfn@yachaytech.edu.ec
📸 **Instagram:** [@aefn_yt](https://www.instagram.com/aefn_yt/)
👨‍💻 **Repositorio:** [github.com/DaVas1410/web_aefn](https://github.com/DaVas1410/web_aefn)

---

<div align="center">

**AEFN - Asociación de Estudiantes de Física y Nanotecnología**

*Yachay Tech - Universidad de Investigación de Tecnología Experimental*

Versión 2.1 | Diciembre 2025

</div>
