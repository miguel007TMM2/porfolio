# Mi Portafolio Personal 🚀

Un portafolio moderno y responsivo construido con las últimas tecnologías web para mostrar mis habilidades y proyectos como desarrollador Full Stack.

## ✨ Características

- **Diseño Moderno**: Interfaz elegante y profesional con animaciones fluidas
- **Totalmente Responsivo**: Optimizado para todos los dispositivos y tamaños de pantalla
- **Modo Oscuro/Claro**: Cambia entre temas con detección automática de preferencias del sistema
- **Animaciones Suaves**: Transiciones y efectos visuales con Framer Motion
- **Navegación Fluida**: Scroll suave entre secciones
- **Formulario de Contacto**: Sistema de contacto interactivo
- **SEO Optimizado**: Metadatos optimizados para motores de búsqueda

## 🛠️ Tecnologías Utilizadas

- **Framework**: [Next.js 15](https://nextjs.org/) con App Router
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Animaciones**: [Framer Motion](https://www.framer.com/motion/)
- **Iconos**: [Lucide React](https://lucide.dev/)
- **Fuentes**: [Geist Sans & Geist Mono](https://vercel.com/font)

## 📱 Secciones del Portafolio

### 🏠 Inicio (Hero)
- Presentación personal con llamadas a la acción
- Animaciones de entrada elegantes
- Navegación rápida a secciones principales

### 👨‍💻 Sobre Mí
- Historia personal y profesional
- Habilidades técnicas principales
- Valores y pasiones

### 💼 Proyectos
- **Proyectos Destacados**: Exhibición completa con detalles técnicos
- **Otros Proyectos**: Vista compacta de proyectos adicionales
- Enlaces a repositorios GitHub y demos en vivo
- Filtrado por tecnologías utilizadas

### 🎯 Habilidades
- Categorización por áreas (Frontend, Backend, Base de Datos, etc.)
- Barras de progreso animadas que muestran niveles de competencia
- Estadísticas de experiencia profesional

### 📞 Contacto
- Formulario de contacto interactivo
- Información de contacto directo
- Enlaces a redes sociales profesionales
- Validación de formularios en tiempo real

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 18+ instalado
- npm o yarn como gestor de paquetes

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tuusuario/mi-portafolio.git
   cd mi-portafolio
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Ejecuta el servidor de desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. **Abre tu navegador**
   ```
   http://localhost:3000
   ```

## 📂 Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── favicon.ico        # Icono del sitio
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página principal
├── components/            # Componentes reutilizables
│   ├── About.tsx         # Sección Sobre Mí
│   ├── Contact.tsx       # Sección de Contacto
│   ├── Footer.tsx        # Pie de página
│   ├── Header.tsx        # Navegación principal
│   ├── Hero.tsx          # Sección de inicio
│   ├── Projects.tsx      # Sección de proyectos
│   └── Skills.tsx        # Sección de habilidades
public/                    # Archivos estáticos
```

## 🎨 Personalización

### Colores y Temas
Los colores principales están definidos en `globals.css`. Puedes personalizar:
- Gradientes de marca
- Colores de modo oscuro/claro
- Colores de acento para botones y enlaces

### Contenido Personal
Actualiza la información en cada componente:
- **Hero**: Nombre, título y descripción personal
- **About**: Historia, habilidades y experiencia
- **Projects**: Tus proyectos reales con enlaces
- **Skills**: Tus tecnologías y niveles de competencia
- **Contact**: Tu información de contacto real

### Animaciones
Las animaciones están configuradas con Framer Motion y pueden ajustarse en cada componente según tus preferencias.

## 📊 Optimizaciones Incluidas

- **Performance**: Carga lazy de componentes y optimización de imágenes
- **SEO**: Metadatos optimizados y estructura semántica
- **Accesibilidad**: Navegación por teclado y etiquetas ARIA
- **Core Web Vitals**: Optimizado para métricas de rendimiento de Google

## 🌐 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio a [Vercel](https://vercel.com)
2. El despliegue será automático en cada push

### Netlify
1. Sube tu repositorio a [Netlify](https://netlify.com)
2. Configura el comando de build: `npm run build`
3. Directorio de publicación: `.next`

### Otros Proveedores
El proyecto es compatible con cualquier proveedor que soporte Next.js:
- AWS Amplify
- Railway
- Render
- DigitalOcean App Platform

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar el portafolio:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Agrega nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## 💡 Ideas para Expansión

- **Blog**: Integrar un sistema de blog con MDX
- **CMS**: Conectar con un CMS headless (Contentful, Strapi)
- **Analytics**: Añadir Google Analytics o similar
- **Internacionalización**: Soporte para múltiples idiomas
- **Testing**: Añadir tests unitarios y de integración
- **Storybook**: Documentar componentes

## 📞 Contacto

Si tienes preguntas sobre este proyecto o quieres colaborar:

- **Email**: tu.email@ejemplo.com
- **LinkedIn**: [linkedin.com/in/tuusuario](https://linkedin.com/in/tuusuario)
- **GitHub**: [github.com/tuusuario](https://github.com/tuusuario)

---

**⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!**
