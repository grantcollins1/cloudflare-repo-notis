onst samples = [
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
    await context.env.NOTIFICATIONS.put("notifications", samples);
    return new Response("Hello from workers!");
}