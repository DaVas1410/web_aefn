# ⚡ Guía Rápida - Panel Administrativo AEFN

Esta guía te ayudará a usar el panel administrativo en **menos de 5 minutos**.

---

## 🔑 Acceso al Panel

### Paso 1: Abrir el Panel
```
Archivo: admin.html
Contraseña: admin2025
```

### Paso 2: Ingresar
1. Abrir `admin.html` en tu navegador
2. Escribir: `admin2025`
3. Presionar "Ingresar"

---

## 📚 Agregar un Club

### Instrucciones
```
1. Clic en pestaña "Clubes"
2. Llenar campos:
   - Nombre: Club de Robótica
   - ID: robotica (sin espacios, sin mayúsculas)
   - Descripción corta: Una línea
   - Descripción larga: Un párrafo
   - Icono: bi-robot (ver lista abajo)
   - Email: robotica@yachaytech.edu.ec
3. Clic en "Agregar Club"
4. ¡Listo! El club aparece en clubes.html
```

### Iconos Disponibles
```
bi-stars          → Astronomía
bi-code-square    → Programación
bi-microscope     → Investigación
bi-robot          → Robótica
bi-book           → Educación
bi-graph-up       → Datos/Estadística
bi-cpu            → Computación
bi-lightning      → Energía/Física
```

🔗 Ver más iconos: https://icons.getbootstrap.com

---

## 📅 Agregar un Evento

### Instrucciones
```
1. Clic en pestaña "Eventos"
2. Llenar campos:
   - Título: Taller de Python
   - Fecha: 2025-12-20
   - Hora: 16:00
   - Descripción: Aprende Python desde cero
   - Ubicación: Lab de Cómputo 1
   - Tipo: taller
   - Estado: proximo
3. Clic en "Agregar Evento"
4. ¡Listo! El evento aparece en calendario.html
```

### Tipos de Eventos
```
taller       → Talleres prácticos
seminario    → Seminarios académicos
charla       → Charlas informativas
competencia  → Competencias o concursos
reunion      → Reuniones oficiales
otro         → Otros eventos
```

### Estados de Eventos
```
proximo      → Aún no ha ocurrido
en-progreso  → Está sucediendo ahora
finalizado   → Ya terminó
cancelado    → Fue cancelado
```

---

## 💾 Hacer Respaldo de Datos

### ¿Por qué hacer respaldo?
Los datos se guardan solo en tu navegador. Si limpias el caché, se pierden.

### Instrucciones
```
1. Clic en pestaña "Respaldo de Datos"
2. Clic en "Descargar JSON"
3. Se descarga: aefn-backup-2025-12-10.json
4. Guardar en lugar seguro
```

### ¿Cuándo hacer respaldo?
```
✅ Antes de cerrar el navegador
✅ Después de agregar varios datos
✅ Al final de cada sesión de trabajo
✅ Una vez por semana (mínimo)
```

---

## 🔄 Restaurar Datos

### Instrucciones
```
1. Clic en pestaña "Respaldo de Datos"
2. Clic en "Elegir archivo"
3. Seleccionar archivo: aefn-backup-FECHA.json
4. Clic en "Restaurar"
5. Confirmar en el mensaje que aparece
```

### ⚠️ Advertencia
Restaurar sobrescribe todos los datos actuales. Asegúrate de hacer respaldo primero.

---

## ✏️ Editar Datos Manualmente

Si prefieres editar directamente los archivos JSON:

### Ubicación de Archivos
```
data/clubes.json                → Clubes
data/events.json                → Eventos
data/profesores.json            → Profesores
data/investigation-groups.json  → Grupos de investigación
data/gallery.json               → Galería de fotos
```

### Pasos
```
1. Abrir archivo con editor de texto
2. Copiar formato de entrada existente
3. Modificar valores necesarios
4. Guardar archivo
5. Recargar página en navegador (F5)
```

### ⚠️ Cuidado
- Respetar formato JSON (comas, llaves, comillas)
- Validar JSON en: https://jsonlint.com
- Hacer respaldo antes de editar

---

## 🔐 Cambiar Contraseña

### Ubicación
```
Archivo: js/admin.js
Línea: 10
```

### Pasos
```
1. Abrir js/admin.js con editor de texto
2. Buscar línea 10:
   const ADMIN_PASSWORD = 'admin2025';
3. Cambiar por:
   const ADMIN_PASSWORD = 'tu_nueva_contraseña';
4. Guardar archivo
5. Probar acceso con nueva contraseña
```

---

## ❓ Problemas Comunes

### No puedo acceder al panel
**Solución:**
```
1. Verificar que estás en admin.html (no index.html)
2. Contraseña exacta: admin2025 (sin espacios)
3. Limpiar caché: Ctrl+Shift+Delete
4. Probar en modo incógnito
```

### Los datos no se guardan
**Causa:** Sin backend, datos solo en navegador.

**Solución temporal:**
```
✅ Descargar respaldo antes de cerrar
✅ No limpiar caché del navegador
✅ Usar siempre el mismo navegador
```

**Solución permanente:**
```
Implementar backend con base de datos
(Ver ADMIN_GUIDE.md para detalles)
```

### El icono no aparece
**Solución:**
```
1. Verificar código en: https://icons.getbootstrap.com
2. Formato correcto: bi-nombre (ej: bi-stars)
3. Sin espacios ni caracteres especiales
4. Recargar página (F5)
```

### Error al restaurar respaldo
**Solución:**
```
1. Verificar que archivo sea .json
2. Validar JSON en: https://jsonlint.com
3. Usar archivo descargado del panel
4. No editar manualmente el respaldo
```

---

## ⏱️ Tiempos Estimados

| Tarea | Tiempo |
|-------|--------|
| Agregar 1 club | 2 minutos |
| Agregar 1 evento | 2 minutos |
| Hacer respaldo | 30 segundos |
| Restaurar respaldo | 1 minuto |
| Cambiar contraseña | 2 minutos |

---

## 📋 Checklist Semanal

```
□ Revisar eventos próximos
□ Actualizar información de clubes
□ Descargar respaldo de datos
□ Verificar que todo funcione correctamente
```

---

## 📞 ¿Necesitas Ayuda?

**Email Técnico:** decanatoecfn@yachaytech.edu.ec

**Instagram:** [@aefn_yt](https://www.instagram.com/aefn_yt/)

**Documentación Completa:** Ver `ADMIN_GUIDE.md`

---

## 📚 Otros Documentos

- **`README.md`** → Información general del proyecto
- **`ADMIN_GUIDE.md`** → Manual completo del administrador
- **`CONTRIBUTING.md`** → Cómo contribuir al proyecto
- **`CHANGELOG.md`** → Historial de cambios

---

<div align="center">

**AEFN - Asociación de Estudiantes de Física y Nanotecnología**

Versión 2.1 | Diciembre 2025

</div>
