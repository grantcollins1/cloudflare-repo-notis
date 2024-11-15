export async function onRequestPost(context) {
    const body = await context.request.json()
    const data = await context.env.NOTIFICATIONS.get("notifications")
    const parsed_data = JSON.parse(data)
    parsed_data.push(body)
    await context.env.NOTIFICATIONS.put("notifications", JSON.stringify(parsed_data));
    return new Response(data, { status: 200 })
}

export async function onRequestGet(context) {
    const body = await context.env.NOTIFICATIONS.get("notifications");
    JSON.parse(body)
    return new Response(body);

  }

  export async function onRequestDelete(context) {
    const data = await context.env.NOTIFICATIONS.get("notifications")
      const empty_data = "[]"
      await context.env.NOTIFICATIONS.put("notifications", empty_data);
    return new Response({ 
        "message" : "Notifications deleted successfully!"
    }, { status: 200 });
  }