import notifications from './notification/data.jsx'

export function onRequestGet() {
    return Response.json(notifications)
}

async function handleRequest(request) {
    const defaultData = {
                "type": "success",
                "content": {
                    "text" : "testing"
                },
                "read": false
    }
    NOTIFICATIONS.put("notifications", JSON.stringify(defaultData))
}