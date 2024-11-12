import notifications from './notification/data'

export function onRequestGet() {
    return Response.json(notifications)
}