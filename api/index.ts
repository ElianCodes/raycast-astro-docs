import { getData } from './data'

export const config = {
  runtime: 'edge',
}

export default async function handler(request: Request) {
  const lang = new URL(request.url).searchParams.get('lang') ?? 'en';
  const data = getData(lang)
  return new Response(JSON.stringify(data), { status: 200, headers: { 'Content-Type': 'application/json' } });
}