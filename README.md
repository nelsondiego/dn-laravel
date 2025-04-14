<div align="center" style="margin-bottom: 20px; display: flex; gap: 10px; justify-content: center; 
align-items: center;
flex-wrap: wrap;">

[![Laravel Version](https://img.shields.io/badge/Laravel-12.x-%23FF2D20?style=for-the-badge&logo=laravel)](https://laravel.com)
[![License](https://img.shields.io/badge/license-MIT-%230b0b0b?style=for-the-badge)](LICENSE)
[![Install with Herd](https://img.shields.io/badge/Install%20with%20Herd-f55247?logo=laravel&logoColor=white)](https://herd.laravel.com/new?starter-kit=nelsondiego/dn-laravel)

</div>

# DN Laravel Starter Kit
DN Laravel Starter Kit is a Laravel application template designed to streamline the development process for new projects. It includes a pre-configured authentication system, Inertia.js/React frontend integration, Tailwind CSS with a modern design system, shadcn UI components library, optimized development environment setup, predefined testing configuration, and essential Laravel packages.

### 🚀 Features
- Authentication system ready out-of-the-box
- Inertia.js/React frontend integration
- Tailwind CSS with modern design system
- shadcn UI components library
- Optimized development environment setup
- Predefined testing configuration
- Actions pattern for better code organization and testability
- Laravel Dump Server for improved debugging ([documentation](https://beyondco.de/docs/laravel-dump-server/installation))
- Laravel Wayfinder for simplified routing ([documentation](https://github.com/laravel/wayfinder))
- Includes essential Laravel packages

### 📐 Actions Pattern
This starter kit implements the Actions pattern, which helps organize business logic into single-purpose, reusable classes. Each Action class is responsible for executing a specific task, making the code more maintainable, testable, and following the Single Responsibility Principle.

Actions are located in the `app/Http/Actions` directory and are organized by domain (e.g., `Account`, `Auth`). Controllers delegate business logic to these Action classes, keeping controllers thin and focused on HTTP concerns.

Example usage in a controller:
```php
public function index(Request $request) {
    return Inertia::render("account/account",[
        'currentUser' => new UserResource(
            $this->getAccountAction->execute(Auth::id())
        )
    ]);
}
```

### 🛠️ Installation

1. Create project and navigate:
```bash
laravel new --using=nelsondiego/dn-laravel
cd your-project-name
```

> **Important:** This application requires running with SSL (using Herd or Valet) due to history encryption. See the [Inertia.js documentation](https://inertiajs.com/history-encryption) for more details.


2. Start development server:
```bash
php artisan serve
```


👨💻 **Contribuciones bienvenidas** | 📄 [Licencia MIT](LICENSE) | 🐛 [Reportar issues](https://github.com/nelsondiego/dn-laravel/issues)