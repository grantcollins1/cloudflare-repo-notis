export async function onRequestPost({ request, env }) {
    const { value } = await request.json();
    await env.NOTIFICATIONS.put(key, value);
    return new Response('Data stored successfully', { status: 200 });
  }