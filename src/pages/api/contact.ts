/**
 * Contact Form API
 *
 * POST /api/contact
 * Body: { name, email, message }
 *
 * To use: set output: 'hybrid' in astro.config.mjs
 */
import type { APIRoute } from 'astro';

export const prerender = false; // This route is server-rendered

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const data: ContactForm = await request.json();

    // Validate
    if (!data.name || !data.email || !data.message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return new Response(JSON.stringify({ error: 'Invalid email' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // TODO: Send email, save to database, etc.
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'noreply@example.com',
    //   to: 'hello@example.com',
    //   subject: `Contact from ${data.name}`,
    //   text: `${data.message}\n\nFrom: ${data.email}`,
    // });

    console.log('Contact form submission:', data);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
