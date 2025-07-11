```markdown
# 🚀 AstroTalks

Una plataforma moderna para democratizar el conocimiento sobre el espacio y la astronomía a través de conferencias magistrales impartidas por astronautas, astrofísicos e ingenieros espaciales.

![AstroTalks Preview](./public/assets/images/background.jpg)

## ✨ Características

- **Diseño Espacial Inmersivo**: Interfaz temática con efectos visuales avanzados y animaciones fluidas
- **Sistema de Componentes Modular**: Arquitectura escalable con componentes reutilizables
- **Experiencia Responsive**: Optimizado para todos los dispositivos
- **Animaciones Avanzadas**: Efectos hover, transiciones y clip-paths personalizados
- **TypeScript**: Tipado fuerte para mayor robustez del código
- **Performance Optimizada**: Construido con Astro para carga ultra-rápida

## 🛠️ Tecnologías

- **[Astro](https://astro.build/)** - Framework web moderno
- **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework de utilidades CSS
- **[PNPM](https://pnpm.io/)** - Gestor de paquetes eficiente

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ 
- PNPM

### Instalación

1. **Clona el repositorio**
```bash
git clone https://github.com/Aborja-dev/astrotalks.git
cd astrotalks
```

2. **Instala las dependencias**
```bash
pnpm install
```

3. **Ejecuta el servidor de desarrollo**
```bash
pnpm dev
```

4. **Abre tu navegador**
```
http://localhost:4321
```

## 📋 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `pnpm dev` | Inicia el servidor de desarrollo |
| `pnpm build` | Construye la aplicación para producción |
| `pnpm preview` | Previsualiza la build de producción |
| `pnpm astro --help` | Ayuda del CLI de Astro |

## 📁 Estructura del Proyecto

```
src/
├── lib/
│   ├── data/           # Datos estáticos (JSON)
│   ├── service/        # Servicios y lógica de negocio
│   ├── types.ts        # Definiciones de tipos TypeScript
│   └── utils/          # Utilidades helper
├── ui/
│   ├── components/     # Componentes reutilizables
│   │   ├── cards/      # Tarjetas especializadas
│   │   └── sections/   # Secciones de página
│   ├── icons/          # Iconos personalizados
│   ├── layout/         # Layouts base
│   └── pages/          # Páginas de la aplicación
├── styles/
│   └── global.css      # Estilos globales y variables CSS
└── pages/
    └── index.astro     # Página principal
```

## 🎨 Sistema de Design

### Paleta de Colores

```css
--color-primary: oklch(0.65 0.15 240);     /* Azul espacial vibrante */
--color-secondary: oklch(0.15 0.02 240);   /* Azul muy oscuro */
--color-accent: oklch(0.75 0.20 60);       /* Dorado estelar */
--color-text-light: oklch(0.95 0.01 240);  /* Blanco con tinte azul */
--color-text-dark: oklch(0.20 0.05 240);   /* Gris oscuro azulado */
```

### Tipografía

- **Headings**: Orbitron (fuente espacial)
- **Body**: Inter (legibilidad óptima)
- **Brand**: Exan (fuente custom)

## 🧩 Componentes Principales

- **TalkCard**: Tarjetas de conferencias con efectos hover avanzados
- **TeamCard**: Perfiles de expertos con diseño hexagonal
- **HeroSection**: Sección principal con call-to-action
- **AboutSection**: Grid informativo con estadísticas
- **ProposalSection**: Formulario de contacto y propuestas

## 🌟 Características Técnicas

### Animaciones CSS Avanzadas
- Efectos de clip-path hexagonales
- Transiciones suaves con `backdrop-blur`
- Hover effects con scale y glow
- Transformaciones 3D sutiles

### Performance
- Lazy loading de imágenes
- Optimización de fuentes con `font-display: swap`
- CSS crítico inline
- Componentes estáticos por defecto

### Accesibilidad
- Semántica HTML correcta
- Contraste de colores optimizado
- Navegación por teclado
- Alt texts descriptivos

## 🚀 Deployment

### Build de Producción

```bash
pnpm build
```

Los archivos se generarán en `./dist/` listos para deployment en cualquier hosting estático.

### Opciones de Hosting

- **Vercel**: Deploy automático con Git
- **Netlify**: Integración continua
- **GitHub Pages**: Hosting gratuito
- **Cloudflare Pages**: Performance global

## 📝 Roadmap

- [ ] Sistema de autenticación
- [ ] Dashboard administrativo
- [ ] Reproductor de video integrado
- [ ] Sistema de favoritos
- [ ] Búsqueda avanzada
- [ ] Modo offline
- [ ] API REST completa
- [ ] Tests automatizados

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 👨‍💻 Autor

**Abraham Borja**
- GitHub: [@Aborja-dev](https://github.com/Aborja-dev)

---

⭐ Si te gustó este proyecto, ¡dale una estrella en GitHub!

*"Explorando el cosmos, una línea de código a la vez"* 🌌
```
