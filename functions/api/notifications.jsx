const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, DELETE",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  export async function onRequestOptions(context) {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }
  
export async function onRequestPost(context) {
    const body = await context.request.json()
    if (!body.type || !body.content || !body.content.text || !body.timestamp) {
        return new Response({ status: 400 });
      }
    const data = await context.env.NOTIFICATIONS.get("notifications")
    const parsed_data = JSON.parse(data)
    parsed_data.push(body)
    await context.env.NOTIFICATIONS.put("notifications", JSON.stringify(parsed_data));
    return new Response(JSON.stringify(body), {
        status: 200,
        headers: corsHeaders,
      });
}

export async function onRequestGet(context) {
    const body = await context.env.NOTIFICATIONS.get("notifications");
    return new Response(body, {
        status: 200,
        headers: corsHeaders,
      });
  }

  export async function onRequestDelete(context) {
    const data = await context.env.NOTIFICATIONS.get("notifications")
      const empty_data = "[]"
      await context.env.NOTIFICATIONS.put("notifications", empty_data);
    return new Response(JSON.stringify({ 
        "message" : "Notifications deleted successfully!"
    }), { status: 200, headers: corsHeaders });
  }