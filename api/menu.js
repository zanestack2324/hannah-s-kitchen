import { readData, writeData } from './data.js';

export const config = { runtime: 'nodejs' };

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    const data = await readData('menu');
    if (data) {
      return res.status(200).json({ data });
    }
    return res.status(200).json({ data: null, message: 'No menu data stored yet' });
  }

  if (req.method === 'POST') {
    const { data } = req.body || {};
    if (!data) {
      return res.status(400).json({ error: 'No data provided' });
    }
    await writeData('menu', data);
    return res.status(200).json({ success: true });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
