
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })

async function handleRequest(request) {
    alert(request.method)
    if (request.method === "PUT") {
      return updateNotifications(request);
    } else if (request.method === "GET") {
      return getNotifications(request);
    }
    else if (request.method === "DELETE") {
        return clearNotifications(request)
    }
  }
  
  const setNotis = data => NOTIFICATIONS.put("notifications", data)

  async function getNotifications(request) {

    const body = await NOTIFICATIONS.get("notifications")
    return new Response(body, { status: 200 })
  }

async function updateNotifications(request) {
    const body = await request.text()
    try {
      JSON.parse(body)
      const data = await NOTIFICATIONS.get("notifications")
      data.push(body)
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