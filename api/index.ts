import { data } from './data'

export const config = {
  runtime: 'edge',
}

export default async function handler(request: Request) {
  return new Response(data.toString(), { status: 200 });
}