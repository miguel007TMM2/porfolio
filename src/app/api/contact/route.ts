import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validar que todos los campos requeridos estén presentes
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Formato de email inválido' },
        { status: 400 }
      );
    }

    // Enviar email
    const data = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'Portafolio <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL || 'miguelventuramateo@gmail.com'],
      subject: `Nuevo mensaje de contacto: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
            Nuevo mensaje de contacto
          </h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #4F46E5; margin-bottom: 5px;">Información del remitente:</h3>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Asunto:</strong> ${subject}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #4F46E5; margin-bottom: 5px;">Mensaje:</h3>
            <div style="background: #f9fafb; padding: 20px; border-radius: 8px; border-left: 4px solid #4F46E5;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
            <p>Este mensaje fue enviado desde tu portafolio web.</p>
          </div>
        </div>
      `,
      // Email de respuesta opcional
      replyTo: email,
    });

    console.log('Email enviado exitosamente:', data);

    return NextResponse.json(
      { 
        message: 'Email enviado exitosamente',
        success: true
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error enviando email:', error);
    
    // Manejo específico de errores de Resend
    if (error && typeof error === 'object' && 'message' in error) {
      const resendError = error as { message: string; statusCode?: number };
      
      if (resendError.message.includes('API key is invalid')) {
        return NextResponse.json(
          { error: 'Configuración de email no válida. Contacta al administrador.' },
          { status: 500 }
        );
      }
    }
    
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
