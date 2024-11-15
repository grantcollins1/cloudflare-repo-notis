const samples = [
    {
        "type": "success",
        "content": {
            "text" : "test1"
        },
        "read": false
  },
    {
        "type": "alert",
        "content": {
            "text" : "ok den"
        },
        "read": false
    },
    {
        "type": "alert",
        "content": {
            "text" : "ok den"
        },
        "read": false
    },
    {
        "type": "alert",
        "content": {
            "text" : "ok den"
        },
        "read": false
    },
    {
        "type": "info",
        "content": {
            "text" : "ok yeah"
        },
        "read": false
    },
    {
        "type": "alert",
        "content": {
            "text" : "ok den"
        },
        "read": false
    }
];
export async function onRequestPost(context, request) {
    try {
    const body = await request.json()
    const data = await context.env.NOTIFICATIONS.get("notifications")
    const parsed_data = JSON.parse(data)
    parsed_data.push(body)
      await context.env.NOTIFICATIONS.put("notifications", JSON.stringify(body));
      return new Response(data, { status: 200 })
    } catch (err) {
      return new Response(err, { status: 500 })
    }
    // og
    //const data = JSON.stringify(samples);
   // await context.env.NOTIFICATIONS.put("notifications", data);
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