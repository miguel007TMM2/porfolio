# Despliegue en GitHub Pages

Este portafolio está configurado para desplegarse automáticamente en GitHub Pages usando GitHub Actions.

## 🚀 Configuración Automática

### Archivos de Configuración

1. **`.github/workflows/nextjs.yml`** - Workflow de GitHub Actions
2. **`next.config.ts`** - Configuración de Next.js para exportación estática
3. **`public/.nojekyll`** - Deshabilita Jekyll en GitHub Pages

### Proceso de Despliegue

1. **Push a main** - El workflow se ejecuta automáticamente
2. **Build** - Next.js genera la versión estática
3. **Export** - Se crea la carpeta `out/` con archivos estáticos
4. **Deploy** - Se sube a GitHub Pages

## 🐛 Solución de Problemas Comunes

### Error de Jekyll/SCSS

Si ves errores como:
```
Jekyll::Converters::Scss encountered an error while converting 'assets/css/style.scss':
No such file or directory @ dir_chdir0 - /github/workspace/docs
```

**Solución:**
1. Verifica que existe `public/.nojekyll`
2. El workflow debe crear `.nojekyll` en la carpeta `out/`
3. GitHub Pages debe estar configurado para usar **GitHub Actions** (no Jekyll)

**Pasos:**
1. Ve a **Settings** → **Pages**
2. En **Source**, selecciona **GitHub Actions**
3. NO selecciones "Deploy from a branch"

### Verificación de Archivos Jekyll

```bash
# Ejecutar script de diagnóstico
./scripts/verify-deploy.sh

# O manualmente:
ls -la public/.nojekyll  # Debe existir
ls -la out/.nojekyll     # Debe existir después del build
```

## 🛠️ Configuración Manual

### 1. Configurar GitHub Pages

1. Ve a **Settings** → **Pages** en tu repositorio
2. Selecciona **Source**: GitHub Actions
3. El despliegue será automático con cada push

### 2. Nombre del Repositorio

Si tu repositorio no se llama `porfolio`, actualiza en `next.config.ts`:

```typescript
// Cambia 'porfolio' por el nombre de tu repositorio
assetPrefix: '/tu-repo-nombre',
basePath: '/tu-repo-nombre',
```

### 3. Variables de Entorno

El workflow usa automáticamente:
- `NODE_ENV=production` para el build
- Detecta automáticamente el gestor de paquetes (npm/yarn)

## 🔧 Build Local

Para probar el build localmente:

```bash
# Build de producción
NODE_ENV=production npm run build

# Servir archivos estáticos (opcional)
npx serve out
```

## 📁 Estructura de Archivos Generados

```
out/
├── .nojekyll          # Deshabilita Jekyll
├── index.html         # Página principal
├── 404.html          # Página de error
├── _next/             # Assets de Next.js
└── *.{jpg,png,svg}    # Archivos públicos
```

## 🌐 URL de Acceso

Una vez desplegado, tu portafolio estará disponible en:
```
https://[tu-usuario].github.io/[nombre-repositorio]
```

Por ejemplo: `https://miguelmateo.github.io/porfolio`

## 🚨 Solución de Problemas

### Error: "No such file or directory @ dir_chdir0"
- ✅ **Solucionado**: Archivo `.nojekyll` añadido
- ✅ **Solucionado**: Configuración de `output: 'export'` en Next.js

### Error: "404 - Page not found"
- Verifica que el `basePath` coincida con el nombre del repositorio
- Asegúrate de que GitHub Pages esté configurado correctamente

### Error: "CSS/JS no carga"
- Verifica el `assetPrefix` en la configuración
- Comprueba que los paths sean relativos

## 📚 Referencias

- [GitHub Pages + Next.js](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports#github-pages)
- [Deshabilitando Jekyll](https://docs.github.com/es/pages/getting-started-with-github-pages/about-github-pages#static-site-generators)
- [GitHub Actions para Next.js](https://github.com/actions/starter-workflows/blob/main/pages/nextjs.yml)

## 🌍 Versiones de Idioma

- [🇪🇸 Español](DEPLOYMENT.md) (Este archivo)
- [🇺🇸 English](DEPLOYMENT.en.md)

## 📝 Notas Importantes

- Los cambios se despliegan automáticamente con cada push a `main`
- El build tarda aproximadamente 2-3 minutos
- GitHub Pages puede tardar unos minutos adicionales en actualizar
- Las imágenes están configuradas como `unoptimized` para compatibilidad
