import samples from '../../src/notification/data';
export async function onRequestPost(context) {
    await ontext.env.NOTIFICATIONS.put("notifications", samples);
    return new Response("Hello from workers!")
}