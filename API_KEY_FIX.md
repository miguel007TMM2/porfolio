# 🚨 Solución: API Key Inválida de Resend

## Problema encontrado:
```
API key is invalid
```

## ✅ Solución paso a paso:

### 1. **Obtener API Key de Resend**

1. **Ir a Resend**:
   - Visita [resend.com](https://resend.com/)
   - Crea una cuenta gratuita con tu email

2. **Crear API Key**:
   - Una vez dentro del dashboard, ve a "API Keys"
   - Haz clic en "Create API Key"
   - Dale un nombre (ej: "Portfolio Contact Form")
   - Selecciona permisos: "Send emails"
   - Copia la API key (empieza con `re_`)

### 2. **Configurar la API Key**

Edita el archivo `.env.local` y reemplaza:

```bash
# Antes:
RESEND_API_KEY=re_tu_api_key_aqui

# Después (con tu API key real):
RESEND_API_KEY=re_ABC123def456_tu_api_key_real
```

### 3. **Reiniciar el servidor**

Después de cambiar las variables de entorno:

```bash
# Detener el servidor (Ctrl+C)
# Luego reiniciar:
npm run dev
```

### 4. **Verificar configuración**

El archivo `.env.local` debe verse así:

```bash
# Resend API Key - Tu API key real
RESEND_API_KEY=re_tu_api_key_real_aqui

# Email configuration
CONTACT_EMAIL=miguelventuramateo@gmail.com
FROM_EMAIL=Portafolio <onboarding@resend.dev>
```

### 5. **Probar el formulario**

1. Ve a tu portafolio local
2. Llena el formulario de contacto
3. Envía un mensaje de prueba
4. Verifica que no aparezcan errores

## 🔧 Cambios realizados en el código:

- **Corregido email remitente**: Ahora usa `onboarding@resend.dev` (dominio verificado por Resend)
- **Actualizado placeholder**: Para que sea más claro dónde poner la API key real

## 📝 Notas importantes:

1. **Email remitente**: Debes usar un email de un dominio verificado. `onboarding@resend.dev` es el dominio de prueba gratuito de Resend.

2. **API Key**: Debe empezar con `re_` y ser la que obtienes de tu dashboard de Resend.

3. **Límites gratuitos**: 
   - 3,000 emails/mes
   - 100 emails/día
   - Perfecto para portafolios

4. **Verificación**: Una vez configurado correctamente, deberías ver en los logs:
   ```
   Email enviado exitosamente: { data: { id: 'abc123...' }, error: null }
   ```

## 🆘 Si sigues teniendo problemas:

1. **Verifica la API key**: Asegúrate de que sea exactamente la que aparece en tu dashboard de Resend
2. **Revisa el archivo .env.local**: Debe estar en la raíz del proyecto
3. **Reinicia el servidor**: Siempre reinicia después de cambiar variables de entorno
4. **Revisa los logs**: Mira la consola del servidor para más detalles del error

Una vez que sigas estos pasos, el formulario de contacto debería funcionar perfectamente. ¡Avísame cuando lo hayas configurado!
