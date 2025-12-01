# 📌 GUÍA RÁPIDA - AEFN Admin

## 🔑 Acceso Rápido

| Elemento | Ubicación | Acción |
|----------|-----------|--------|
| **Panel Admin** | `admin.html` | Ctrl+Shift+O → escribir "admin" |
| **Contraseña** | `admin2025` | Copiar y pegar |
| **Clubes** | `data/clubes.json` | Editar si necesitas cambios directos |
| **Eventos** | `data/events.json` | Editar si necesitas cambios directos |
| **Profesores** | `data/profesores.json` | Editar directamente |
| **Grupos Inv.** | `data/investigation-groups.json` | Editar directamente |

---

## ✅ Tareas Comunes

### 1. Agregar un Nuevo Club

```
1. Abrir admin.html
2. Contraseña: admin2025
3. Tab: Clubes
4. Llenar formulario:
   - Nombre: "Club de Robótica"
   - ID: "robotica" (sin espacios)
   - Descripción: "Construye robots y automatización"
   - Descripción larga: [párrafo completo]
   - Icono: "bi-robot" (ver https://icons.getbootstrap.com)
   - Email: "robotica@aefn.local"
5. Clic: "Agregar Club"
```

### 2. Agregar un Nuevo Evento

```
1. Admin → Tab: Eventos
2. Llenar formulario:
   - Título: "Taller de Python"
   - Fecha: 2025-12-20 | Hora: 16:00
   - Descripción: "Aprende lo básico de Python"
   - Ubicación: "Lab de Cómputo"
   - Tipo: "taller"
   - Estado: "proximo"
3. Clic: "Agregar Evento"
```

### 3. Descargar Respaldo de Datos

```
1. Admin → Tab: Respaldo de Datos
2. Clic: "Descargar JSON"
3. Se descarga archivo: aefn-backup-2025-12-01.json
4. Guardar en lugar seguro
```

### 4. Restaurar desde Respaldo

```
1. Admin → Tab: Respaldo de Datos
2. Seleccionar archivo: aefn-backup-FECHA.json
3. Clic: "Restaurar"
⚠️  IMPORTANTE: Sobrescribe datos actuales
```

---

## 🎨 Iconos Disponibles (Ejemplos)

| Icono | Código | Uso |
|-------|--------|-----|
| ⭐ | `bi-stars` | Astronomía |
| 💻 | `bi-code-square` | Programación |
| 🔬 | `bi-microscope` | Investigación |
| 🤖 | `bi-robot` | Robótica |
| 📡 | `bi-graph-up` | Ciencia de Datos |
| ⚙️ | `bi-gear` | Ingeniería |
| 🎓 | `bi-book` | Educación |

**Ver más:** https://icons.getbootstrap.com

---

## 📊 Estructura de JSON

### Club Mínimo

```json
{
  "id": "nuevo-club",
  "nombre": "Nombre del Club",
  "icono": "bi-stars",
  "descripcion": "Descripción corta",
  "descripcion_larga": "Descripción más larga",
  "directiva": [
    {"cargo": "Presidente", "nombre": "[Nombre]", "email": "[Email]"}
  ],
  "actividades": [],
  "contacto_email": "club@aefn.local"
}
```

### Evento Mínimo

```json
{
  "id": "evento-1",
  "titulo": "Título del Evento",
  "descripcion": "Descripción",
  "fecha": "2025-12-20T16:00:00",
  "ubicacion": "Lugar",
  "tipo": "charla",
  "estado": "proximo",
  "link": ""
}
```

---

## 🔐 Seguridad

| Acción | Recomendación |
|--------|---------------|
| **Cambiar contraseña** | Editar `js/admin.js` línea 10 |
| **Usar contraseña fuerte** | Mínimo 12 caracteres + números + símbolos |
| **No compartir JSON** | No subir respaldos al repositorio público |
| **Renovar periódicamente** | Cambiar contraseña cada 3 meses |

---

## 📱 Iconos para Redes Sociales

```javascript
<i class="bi-instagram"></i>  // Instagram
<i class="bi-facebook"></i>   // Facebook
<i class="bi-twitter"></i>    // Twitter/X
<i class="bi-linkedin"></i>   // LinkedIn
<i class="bi-github"></i>     // GitHub
<i class="bi-envelope"></i>   // Email
<i class="bi-phone"></i>      // Teléfono
```

---

## 🆘 Problemas Comunes

### No puedo acceder al panel

**Solución:**
- Verificar URL: `admin.html` (no `index.html`)
- Limpiar caché del navegador (Ctrl+Shift+Delete)
- Verificar contraseña es exactamente `admin2025`

### Los datos no se guardan

**Solución (Temporal):**
- Descargar respaldo antes de cerrar navegador
- Los datos se pierden al cerrar pestaña (sin backend)

**Solución (Permanente):**
- Conectar con API backend
- Guardar en base de datos

### El icono no aparece

**Solución:**
- Verificar que el código sea válido (ej: `bi-stars`)
- Ir a https://icons.getbootstrap.com y copiar código correcto

### No puedo restaurar datos

**Solución:**
- Verificar que el archivo sea `.json`
- Verificar que tenga estructura correcta
- Intentar con respaldo conocido

---

## ⏱️ Tiempo Estimado de Tareas

| Tarea | Tiempo |
|-------|--------|
| Agregar club | 2-3 minutos |
| Agregar evento | 2-3 minutos |
| Descargar respaldo | 30 segundos |
| Restaurar respaldo | 1-2 minutos |
| Editar evento | 1-2 minutos |

---

## 📞 Ayuda Rápida

| Problema | Contacto |
|----------|----------|
| Técnico | decanatoecfn@yachaytech.edu.ec |
| Incidencias | GitHub Issues |
| General | Instagram @aefn_yt |

---

## 🎯 Checklist Semanal

- [ ] Revisar eventos próximos
- [ ] Actualizar actividades de clubes
- [ ] Descargar respaldo de datos
- [ ] Revisar nuevas solicitudes de clubes
- [ ] Actualizar información de directivas

---

## 📖 Documentos Relacionados

| Documento | Para Qué |
|-----------|----------|
| `ADMIN_GUIDE.md` | Guía detallada |
| `README.md` | Resumen general |
| `CHANGELOG.md` | Historial de cambios |
| `IMPLEMENTACION_RESUMEN.md` | Resumen técnico |

---

**Última actualización:** Diciembre 2025
**Versión:** 2.1
