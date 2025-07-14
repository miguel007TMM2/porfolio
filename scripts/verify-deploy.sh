#!/bin/bash

echo "🔍 Verificando configuración de despliegue..."

# Verificar archivos importantes
echo "📁 Verificando archivos de configuración:"
echo "- next.config.ts: $([ -f next.config.ts ] && echo "✅" || echo "❌")"
echo "- package.json: $([ -f package.json ] && echo "✅" || echo "❌")"
echo "- .github/workflows/nextjs.yml: $([ -f .github/workflows/nextjs.yml ] && echo "✅" || echo "❌")"
echo "- public/.nojekyll: $([ -f public/.nojekyll ] && echo "✅" || echo "❌")"

# Verificar build
echo ""
echo "🏗️ Ejecutando build de producción..."
NODE_ENV=production npm run build

# Verificar carpeta out
if [ -d "out" ]; then
    echo ""
    echo "📦 Contenido de la carpeta out:"
    ls -la out/
    
    echo ""
    echo "🔍 Verificando archivo .nojekyll en out:"
    if [ -f "out/.nojekyll" ]; then
        echo "✅ .nojekyll encontrado en out/"
    else
        echo "⚠️ .nojekyll NO encontrado en out/, creándolo..."
        touch out/.nojekyll
    fi
    
    echo ""
    echo "📄 Verificando archivos principales:"
    echo "- index.html: $([ -f out/index.html ] && echo "✅" || echo "❌")"
    echo "- _next/: $([ -d out/_next ] && echo "✅" || echo "❌")"
    
    if [ -f "out/index.html" ]; then
        echo ""
        echo "🎯 Verificando contenido de index.html:"
        if grep -q "portfolio" out/index.html; then
            echo "✅ Contenido de portfolio encontrado"
        else
            echo "⚠️ No se encontró contenido de portfolio en index.html"
        fi
    fi
else
    echo "❌ Carpeta out no encontrada. El build falló."
    exit 1
fi

echo ""
echo "✅ Verificación completada. Para probar localmente, ejecuta:"
echo "   npm run preview"
echo "   Luego abre http://localhost:8000"
