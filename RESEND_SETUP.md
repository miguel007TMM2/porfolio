# Configuración de Resend para Formulario de Contacto

## 📧 Configuración de Email

Este proyecto utiliza [Resend](https://resend.com/) para el envío de emails desde el formulario de contacto.

### 🔑 Configuración de Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```bash
# Resend API Key (obligatorio)
RESEND_API_KEY=tu_api_key_de_resend

# Email donde recibir los mensajes (obligatorio)
CONTACT_EMAIL=tu@email.com

# Email remitente (opcional, debe ser de un dominio verificado)
FROM_EMAIL=noreply@tudominio.com
```

### 📝 Pasos para Configurar Resend

1. **Crear cuenta en Resend**:
   - Ve a [resend.com](https://resend.com/)
   - Crea una cuenta gratuita

2. **Obtener API Key**:
   - Ve a la sección "API Keys"
   - Crea una nueva API Key
   - Copia el valor a `RESEND_API_KEY`

3. **Configurar dominio (opcional)**:
   - Para emails profesionales, verifica un dominio
   - Si no tienes dominio, puedes usar el dominio de prueba de Resend

### 🚀 Funcionalidades

- **Validación de formulario**: Campos requeridos y formato de email
- **Envío asíncrono**: No bloquea la interfaz del usuario
- **Feedback visual**: Mensajes de éxito y error
- **Responsive**: Compatible con todos los dispositivos
- **Multiidioma**: Soporte para español e inglés

### 📱 Estructura del Email

El email enviado incluye:
- Información del remitente (nombre, email)
- Asunto del mensaje
- Mensaje formateado en HTML
- Posibilidad de responder directamente

### 🔧 Personalización

Para personalizar el template del email, edita:
```typescript
// src/app/api/contact/route.ts
html: `
  <!-- Tu template HTML personalizado -->
`
```

### 🛠️ Troubleshooting

**Error: "Invalid API key"**
- Verifica que `RESEND_API_KEY` esté correctamente configurado
- Asegúrate de que el archivo `.env.local` esté en la raíz del proyecto

**Error: "From email not verified"**
- Usa un dominio verificado en Resend
- O utiliza el dominio de prueba proporcionado por Resend

**Emails no llegan**
- Verifica que `CONTACT_EMAIL` esté correctamente configurado
- Revisa la carpeta de spam
- Verifica los logs de Resend en su dashboard

### 📊 Límites de la Cuenta Gratuita

- **3,000 emails/mes** en la cuenta gratuita
- Perfecto para portafolios personales
- Upgrade disponible para proyectos comerciales

### 🔒 Seguridad

- Variables de entorno protegidas
- Validación server-side
- Rate limiting automático de Next.js
- Sanitización de inputs

### 📚 Recursos Adicionales

- [Documentación de Resend](https://resend.com/docs)
- [API Reference](https://resend.com/docs/api-reference)
- [Ejemplos de Templates](https://resend.com/docs/send/with-react-email)
