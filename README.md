<div align="center" style="margin-bottom: 20px; display: flex; gap: 10px; justify-content: center; 
align-items: center;
flex-wrap: wrap;">

[![Laravel Version](https://img.shields.io/badge/Laravel-12.x-%23FF2D20?style=for-the-badge&logo=laravel)](https://laravel.com)
[![License](https://img.shields.io/badge/license-MIT-%230b0b0b?style=for-the-badge)](LICENSE)
[![Install with Herd](https://img.shields.io/badge/Install%20with%20Herd-f55247?logo=laravel&logoColor=white)](https://herd.laravel.com/new?starter-kit=nelsondiego/dn-laravel)

</div>

# DN Laravel Starter Kit

## English | [Español](#español)

### 🚀 Features
- Authentication system ready out-of-the-box
- Inertia.js/React frontend integration
- Tailwind CSS with modern design system
- shadcn UI components library
- Optimized development environment setup
- Predefined testing configuration
- Includes essential Laravel packages

### 🛠️ Installation

1. Create project and navigate:
```bash
laravel new your-project-name --using=nelsondiego/dn-laravel
cd your-project-name
```

2. Configure environment:
```bash
cp .env.example .env
php artisan key:generate
```

3. Setup database:
```bash
php artisan migrate --seed
```

4. Install dependencies and build:
```bash
npm install && npm run dev
```

5. Start development server:
```bash
php artisan serve
```

---

## Español

### 🚀 Características
- Sistema de autenticación listo para usar
- Integración frontend con Inertia.js/React
- Tailwind CSS con sistema de diseño moderno
- Biblioteca de componentes UI shadcn
- Entorno de desarrollo optimizado
- Configuración de testing predefinida
- Incluye paquetes esenciales de Laravel

### 🛠️ Instalación

1. Crear proyecto y acceder:
```bash
laravel new nombre-de-tu-proyecto --using=nelsondiego/dn-laravel
cd nombre-de-tu-proyecto
```

2. Configurar entorno:
```bash
cp .env.example .env
php artisan key:generate
```

3. Configurar base de datos:
```bash
php artisan migrate --seed
```

4. Instalar dependencias y compilar:
```bash
npm install && npm run dev
```

5. Iniciar servidor:
```bash
php artisan serve
```

---

👨💻 **Contribuciones bienvenidas** | 📄 [Licencia MIT](LICENSE) | 🐛 [Reportar issues](https://github.com/nelsondiego/dn-laravel/issues)