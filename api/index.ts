import { data } from './data'

export const config = {
  runtime: 'edge',
}

export default async function handler(request: Request) {
  return data;
}