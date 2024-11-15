
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })



async function handleRequest(request) {
    alert(request.method)
    if (request.method === "POST") {
      return updateNotifications(request);
    } else if (request.method === "GET") {
      return getNotifications(request);
    }
    else if (request.method === "DELETE") {
        return clearNotifications(request)
    }
  }
  
  const setNotis = async (data, context) => await context.env.NOTIFICATIONS.put("notifications", data)

  async function getNotifications(context) {

    const body = await context.env.NOTIFICATIONS.get("notifications")
    return new Response(body, { status: 200 })
  }

async function updateNotifications(context, request) {
    try {
      const parsed_request = JSON.parse(request)
      const data = await context.env.NOTIFICATIONS.get("notifications")
      data.push(parsed_request)
      await setNotis(data)
      return new Response(data, { status: 200 })
    } catch (err) {
      return new Response(err, { status: 500 })
    }
  }

  async function clearNotifications(request) {
    await NOTIFICATIONS.delete("notifications")
    return new Response({ 
        "message" : "Notifications deleted successfully!"
    }, { status: 200 });
  }