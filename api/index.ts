import { getData } from './data'
import { start } from './test'

export const config = {
  runtime: 'edge',
}

export default async function handler(request: Request) {
  const lang = new URL(request.url).searchParams.get('lang') ?? 'en';
  const data = getData(lang)
  start();
  return new Response(JSON.stringify(data), { status: 200, headers: { 'Content-Type': 'application/json' } });
}