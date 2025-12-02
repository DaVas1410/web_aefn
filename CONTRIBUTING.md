# 🤝 Guía de Contribución - AEFN Web

¡Gracias por tu interés en contribuir a mejorar el sitio web de AEFN! Esta guía te ayudará a agregar nuevas entradas de forma fácil y segura.

## 📋 Tabla de Contenidos

1. [Cómo agregar nuevas entradas](#cómo-agregar-nuevas-entradas)
2. [Estructura de datos](#estructura-de-datos)
3. [Formatos JSON](#formatos-json)
4. [Proceso de Pull Request](#proceso-de-pull-request)
5. [Preguntas Frecuentes](#preguntas-frecuentes)

---

## 🚀 Cómo agregar nuevas entradas

### Opción 1: Desde el Sitio Web (Recomendado)

1. **Ve a la página correspondiente** (Clubes, Profesores, Investigación, etc.)
2. **Busca el botón "✚ Agregar [Entrada]"**
3. **Haz clic en el botón**
4. Se abrirá un modal con instrucciones paso a paso
5. **Sigue el tutorial** para hacer una Pull Request

### Opción 2: Directamente en GitHub

1. **Fork el repositorio** a tu cuenta
2. **Edita el archivo JSON** correspondiente
3. **Crea una Pull Request** con tu cambio
4. **Espera aprobación** del administrador

---

## 📊 Estructura de Datos

Los datos están organizados en carpeta `data/` con archivos JSON:

```
data/
├── clubes.json              # Clubes estudiantiles
├── profesores.json          # Profesorado de la Facultad
├── events.json              # Eventos y actividades
├── investigation-groups.json # Grupos de Investigación
├── theses.json              # Tesis publicadas
└── papers.json              # Papers y publicaciones
```

---

## 📝 Formatos JSON

### 1️⃣ Agregar un Club (`data/clubes.json`)

```json
{
  "id": "mi-club",
  "nombre": "Nombre del Club",
  "descripcion": "Descripción corta (una línea)",
  "descripcion_larga": "Descripción detallada con más información sobre el club, objetivos, etc.",
  "icono": "bi-stars",
  "contacto_email": "contacto@ejemplo.com"
}
```

**Notas:**
- `id`: Único, sin espacios, en minúsculas. Ejemplo: `robotica-club`, `chess-club`
- `icono`: Usar iconos de [Bootstrap Icons](https://icons.getbootstrap.com/). Ejemplo: `bi-robot`, `bi-puzzle`
- Agregar al FINAL del array, antes del cierre `]`

---

### 2️⃣ Agregar un Profesor (`data/profesores.json`)

```json
{
  "id": "nombre-apellido",
  "nombre": "Nombre Completo",
  "titulo": "Dr. / Mg. / Ing.",
  "email": "profesor@ejemplo.com",
  "area": ["Área 1", "Área 2"],
  "imagen": "ruta/a/imagen.jpg"
}
```

**Notas:**
- `area`: Array de especialidades. Ejemplo: `["Inteligencia Artificial", "Machine Learning"]`
- `imagen`: URL a imagen (opcional). Usar URLs públicas o subir a `images/`
- Las imágenes deben estar en `images/`

---

### 3️⃣ Agregar un Evento (`data/events.json`)

```json
{
  "id": "evento-2025-01",
  "titulo": "Nombre del Evento",
  "descripcion": "Descripción detallada del evento",
  "fecha": "2025-02-15T18:00:00Z",
  "ubicacion": "Aula 101, Facultad",
  "tipo": "taller",
  "estado": "proximo",
  "link": "https://ejemplo.com"
}
```

**Notas:**
- `fecha`: Formato ISO 8601. Puedes usar [este generador](https://www.timestamp-converter.com/)
- `tipo`: `taller`, `seminario`, `charla`, `competencia`, `reunion`, `otro`
- `estado`: `proximo`, `en-progreso`, `finalizado`, `cancelado`
- `link`: URL a más información (opcional)

---

### 4️⃣ Agregar un Grupo de Investigación (`data/investigation-groups.json`)

```json
{
  "id": "grupo-ia",
  "title": "Grupo de Inteligencia Artificial",
  "description": "Descripción del grupo...",
  "focus_areas": ["Machine Learning", "NLP"],
  "participants": [
    {
      "name": "Dr. Nombre Apellido",
      "role": "Líder"
    },
    {
      "name": "Ing. Otro Apellido",
      "role": "Investigador"
    }
  ],
  "contact_email": "grupo@ejemplo.com",
  "website": "https://ejemplo.com"
}
```

---

### 5️⃣ Agregar una Tesis (`data/theses.json`)

```json
{
  "id": "tesis-2024-001",
  "titulo": "Título de la Tesis",
  "autor": "Nombre del Estudiante",
  "director": "Dr./Mg. Director",
  "año": 2024,
  "carrera": "Ingeniería en Sistemas",
  "resumen": "Resumen de la tesis...",
  "areas": ["Área 1", "Área 2"],
  "enlace": "https://repositorio.edu/tesis"
}
```

---

### 6️⃣ Agregar un Paper (`data/papers.json`)

```json
{
  "id": "paper-2024-001",
  "titulo": "Título del Paper",
  "autores": ["Autor 1", "Autor 2"],
  "año": 2024,
  "revista": "Nombre de la Revista/Conferencia",
  "resumen": "Resumen del paper...",
  "areas": ["Área 1", "Área 2"],
  "enlace": "https://doi.org/..."
}
```

---

## 🔄 Proceso de Pull Request

### Paso a Paso

1. **Fork el repositorio**
   - Haz clic en "Fork" en [GitHub](https://github.com/DaVas1410/web_aefn)

2. **Clona tu fork**
   ```bash
   git clone https://github.com/tu-usuario/web_aefn.git
   cd web_aefn
   ```

3. **Crea una rama**
   ```bash
   git checkout -b agregar-mi-club
   ```

4. **Edita el archivo JSON**
   - Abre `data/clubes.json` (o el archivo que corresponda)
   - Agrega tu entrada al final, ANTES del cierre `]`
   - Asegúrate de que el JSON sea válido (usa [jsonlint.com](https://www.jsonlint.com/))

5. **Haz commit**
   ```bash
   git add data/clubes.json
   git commit -m "feat: Agregar club 'Mi Club'"
   ```

6. **Push a tu fork**
   ```bash
   git push origin agregar-mi-club
   ```

7. **Crea la Pull Request**
   - Ve a [GitHub](https://github.com/DaVas1410/web_aefn)
   - Haz clic en "Compare & pull request"
   - Describe qué cambios hiciste
   - Haz clic en "Create pull request"

8. **Espera aprobación**
   - Un administrador revisará tu PR
   - Si todo está bien, será aprobada
   - ¡Tu cambio aparecerá en el sitio! 🎉

---

## ❓ Preguntas Frecuentes

### ¿Cómo valido que mi JSON esté correcto?

Usa [jsonlint.com](https://www.jsonlint.com/):
1. Copia el contenido del archivo JSON
2. Pégalo en jsonlint.com
3. Si no hay errores, ¡está bien!

### ¿Puedo editar directamente en GitHub?

Sí. Abre el archivo en GitHub, haz clic en el lápiz (✏️) y edita directamente.

### ¿Qué pasa si me equivoco?

No hay problema. Los administradores revisarán tu PR. Si hay errores:
1. Te diremos qué corregir
2. Haces los cambios en tu rama
3. El push automático actualiza la PR

### ¿Cuánto tiempo tarda en publicarse?

Normalmente 1-24 horas después de que sea aprobada.

### ¿Puedo agregar imágenes?

Sí. Coloca las imágenes en `images/` y usa la ruta relativa:
```json
"imagen": "images/mi-imagen.jpg"
```

### ¿Qué es un "Fork"?

Es una copia del repositorio en tu cuenta de GitHub. Te permite hacer cambios sin afectar el original.

### ¿Necesito conocimientos técnicos?

No. Solo necesitas:
- Una cuenta de GitHub
- Saber copiar y pegar
- Validar JSON (nosotros te ayudamos)

---

## 📞 ¿Necesitas Ayuda?

- **Pregunta en Issues**: [GitHub Issues](https://github.com/DaVas1410/web_aefn/issues)
- **Contacto directo**: administrativo@aefn.edu (sujeto a cambios)
- **Tutorial Git**: [Documentación oficial](https://docs.github.com/es)

---

## ✅ Checklist Antes de Hacer PR

- [ ] JSON válido (validado en jsonlint.com)
- [ ] Datos correctos y completos
- [ ] Rama descriptiva (`agregar-club`, no `test`)
- [ ] Mensaje de commit claro
- [ ] Sin cambios innecesarios en otros archivos

---

**¡Gracias por contribuir a AEFN! 🙏**

Cada contribución ayuda a mantener el sitio actualizado y útil para toda la comunidad.
