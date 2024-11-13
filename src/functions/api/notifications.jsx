

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })
  
  const setNotis = data => NOTIFICATIONS.put("notifications", data)
  const retrieveNotis = () => NOTIFICATIONS.get("notifications")

  async function getNotifications(request) {

    const body = await retrieveNotis()
    return new Response(body, { status: 200 })
  }
  
async function updateNotifications(request) {
    const body = await request.text()
    try {
      JSON.parse(body)
      const data = await retrieveNotis()
      data.push(body)
      await setCache(data)
      return new Response(data, { status: 200 })
    } catch (err) {
      return new Response(err, { status: 500 })
    }
  }

  async function handleRequest(request) {
    if (request.method === "PUT") {
      return updateNotifications(request);
    } else if (request.method === "GET") {
      return getNotifications(request);
    }
    else if (request.method === "DELETE") {
        return clearNotifications(request)
    }
  }