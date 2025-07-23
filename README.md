# 🩺 Sistema de Agendamiento de Citas Médicas

Este es un backend desarrollado con **Node.js**, **Express** y **Sequelize** que permite gestionar médicos, pacientes y el agendamiento de citas médicas.

---

## 📂 Estructura del proyecto

```
SISTEMA_AGENDAMIENTO/
│
├── node_modules/
├── src/
│   ├── config/               # Configuración de Sequelize y base de datos
│   │   ├── config.js
│   │   └── database.js
│   ├── migrations/           # Migraciones de Sequelize
│   │   ├── 20250715173329-add-fields-to-pacientes.js
│   │   └── 20250715174532-add-columns-to-pacientes.js
│   ├── models/               # Modelos de Sequelize
│   │   ├── index.js
│   │   ├── Cita.js
│   │   ├── Medico.js
│   │   └── Paciente.js
│   └── routes/               # Definición de rutas de la API
│       ├── citaRoutes.js
│       ├── medicoRoutes.js
│       └── pacienteRoutes.js
│
├── .env                      # Variables de entorno
├── .gitignore
├── .sequelizerc
├── package.json
├── package-lock.json
└── server.js                 # Archivo principal del servidor
```

---

## 🚀 Instalación y ejecución

### 1. Clona el repositorio

```bash
git clone https://github.com/danielct2005/Sistema_Agendamiento_Backend.git
cd Sistema_Agendamiento
```

### 2. Instala las dependencias

```bash
npm install
```

### 3. Crea el archivo `.env` en la raíz del proyecto

```env
PORT=3000
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_password
DB_NAME=sistema_agendamiento
DB_DIALECT=postgres
```

> Cambia los valores según tu configuración local de base de datos.

### 4. Ejecuta las migraciones

```bash
npx sequelize-cli db:migrate
```

> Asegúrate de que tu base de datos esté creada antes de ejecutar este comando.

### 5. Inicia el servidor

```bash
npm run dev
```

> El servidor se iniciará en `http://localhost:3000`

---

## 📡 Endpoints principales

### Pacientes (`/pacientes`)

| Método | Ruta              | Descripción              |
|--------|-------------------|--------------------------|
| GET    | `/pacientes`      | Listar todos los pacientes |
| POST   | `/pacientes`      | Crear nuevo paciente       |
| PUT    | `/pacientes/:id`  | Actualizar paciente        |
| DELETE | `/pacientes/:id`  | Eliminar paciente          |

### Médicos (`/medicos`)

| Método | Ruta              | Descripción              |
|--------|-------------------|--------------------------|
| GET    | `/medicos`        | Listar todos los médicos |
| POST   | `/medicos`        | Crear nuevo médico       |
| PUT    | `/medicos/:id`    | Actualizar médico        |
| DELETE | `/medicos/:id`    | Eliminar médico          |

### Citas Médicas (`/citas`)

| Método | Ruta              | Descripción               |
|--------|-------------------|---------------------------|
| GET    | `/citas`          | Listar todas las citas    |
| POST   | `/citas`          | Agendar nueva cita        |
| PUT    | `/citas/:id`      | Modificar cita existente  |
| DELETE | `/citas/:id`      | Cancelar cita             |

---

## ⚙️ Scripts disponibles

```bash
npm start       # Ejecuta en modo producción
npm run dev     # Ejecuta en modo desarrollo con nodemon
```

---

## 🧪 Requisitos

- Node.js >= 14
- PostgreSQL (u otro motor compatible con Sequelize)
- Sequelize CLI (`npm install -g sequelize-cli`)

---

## 🧱 Mejoras futuras

- [ ] Validaciones con middleware
- [ ] Autenticación y autorización con JWT
- [ ] Control de disponibilidad de médicos
- [ ] Filtro por especialidades y fechas
- [ ] Documentación con Swagger

---

## 🤝 Contribuciones

¿Te interesa contribuir? Puedes:

- Hacer un fork del proyecto
- Crear una nueva rama
- Hacer tus cambios
- Enviar un pull request 🚀

---

## 📝 Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE).
