import notifications from './data'

export function onRequestGet(context) {
    const id = context.params.id
    if (!id) {
        return new Response('Not found', {status: 404})
    }

    const notification = notifications.find(notification => notification.id === Number(id))

    if (!notification) {
        return new Response('Not found', {status:404})
    }

    return Response.json(notification)
}