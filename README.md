🏥 Gestión Hospitalaria - Frontend
El proyecto GestionHospital-Frontend es una aplicación web desarrollada para la gestión de un sistema hospitalario. Su objetivo es facilitar la administración de usuarios, citas médicas y servicios hospitalarios mediante una interfaz moderna, rápida y fácil de usar.

⚙️ Funcionamiento del sistema
La aplicación funciona como un frontend en React, el cual consume datos desde un backend (API REST). Permite a los usuarios autenticarse, navegar por el sistema y realizar operaciones relacionadas con la gestión hospitalaria.

👤 Flujo general:
El usuario accede a la aplicación
Inicia sesión desde la página de login
Accede al menú principal
Navega por los módulos disponibles:
Reservar citas
Ver citas programadas
Consultar información

📁 src/
│
├── pages/
│   ├── Home.jsx        # Página principal del sistema
│   ├── Login.jsx       # Inicio de sesión de usuarios
│   ├── Menu.jsx        # Menú principal de navegación
│   ├── Reservar.jsx    # Módulo para reservar citas médicas
│   └── Citas.jsx       # Listado de citas registradas
│
├── App.jsx            # Configuración de rutas principales
├── main.jsx           # Punto de entrada de la aplicación
└── styles.css         # Estilos globales del sistema

💻 Tecnologías utilizadas
⚛️ React (Vite)
📄 JavaScript (JSX)
🌐 React Router DOM
🎨 CSS puro para estilos

🎯 Resultado
Una interfaz moderna para la gestión hospitalaria, enfocada en mejorar la organización de citas y la experiencia del usuario.
