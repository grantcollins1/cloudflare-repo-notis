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
    const body = await request.json()
    try {
      JSON.parse(body)
      const data = await context.env.NOTIFICATIONS.get("notifications")
      JSON.parse(data)
      data.push(body)
      await context.env.NOTIFICATIONS.put("notifications", data);
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
    return body;

  }