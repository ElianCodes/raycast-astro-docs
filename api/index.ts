import { data } from './data'

export const config = {
  runtime: 'edge',
}

export default async function handler(request: Request) {
  return new Response(data.map(entry => entry.toString()).toString(), { status: 200 });
}