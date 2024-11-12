import notifications from './notification/data.jsx'

export function onRequestGet() {
    return Response.json(notifications)
}