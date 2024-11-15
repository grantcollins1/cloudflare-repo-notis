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
export async function onRequestPost(context) {
    const data = JSON.stringify(samples);
    await context.env.NOTIFICATIONS.put("notifications", data);
}

export async function onRequestGet(context) {
    const body = await context.env.NOTIFICATIONS.get("notifications");
    return body;

  }