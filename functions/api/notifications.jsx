const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, DELETE",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  function isValidNotification(notification) {
    return (
      notification &&
      typeof notification === "object" &&
      "type" in notification &&
      typeof notification.type === "string" &&
      "content" in notification &&
      typeof notification.content === "object" &&
      "text" in notification.content &&
      typeof notification.content.text === "string" &&
      "read" in notification &&
      typeof notification.read === "boolean"
    );
  }

  export async function onRequestOptions(context) {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }
  
export async function onRequestPost(context) {
    let body = await context.request.json()
    const timestamp = Math.floor(Date.now() / 1000);
    if (!Array.isArray(body)) {
        body = [body]
    }
    const data = await context.env.NOTIFICATIONS.get("notifications")
    const parsed_data = JSON.parse(data)
    let values = []
    body.forEach((item) => {
        if (!isValidNotification(item)) {
            return new Response(
                JSON.stringify({ error: "Request Error" }),
                {
                  status: 400,
                  headers: corsHeaders,
                }
              )
          }
        })
    body.forEach((item) => {
          const uuid = crypto.randomUUID();
          const input = ({
            "id" : uuid,
            "type": item.type,
            "content": {
              "text": item.content.text
            },
            "read": false,
            "timestamp" : timestamp
          })
          values.push(input)
          parsed_data.push(input)
      });
    
    await context.env.NOTIFICATIONS.put("notifications", JSON.stringify(parsed_data));
    return new Response(JSON.stringify(values), {
        status: 200,
        headers: corsHeaders,
      });
}

export async function onRequestGet(context) {
    const body = await context.env.NOTIFICATIONS.get("notifications");
    const parsed = JSON.parse(body)
    return new Response(JSON.stringify(parsed), {
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