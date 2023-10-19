import { data } from './data'

export const config = {
  runtime: 'edge',
}

export default async function handler(request: Request) {
  return new Response(JSON.stringify(data), { status: 200, headers: { 'Content-Type': 'application/json' } });
}