import fs from 'fs';
import path from 'path';

const DATA_DIR = '/tmp/hannahs_data';
const BLOB_PREFIX = 'hannahs_data_';
let blobPut = null;
let blobGet = null;

try {
  const mod = await import('@vercel/blob');
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    blobPut = mod.put;
    blobGet = mod.get;
  }
} catch(e) {}

export async function readData(name) {
  if (blobGet) {
    try {
      const url = `${BLOB_PREFIX}${name}.json`;
      const result = await blobGet(url);
      if (result && result.body) {
        const text = await new Response(result.body).text();
        const data = JSON.parse(text);
        try {
          if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
          fs.writeFileSync(path.join(DATA_DIR, `${name}.json`), JSON.stringify(data));
        } catch(e) {}
        return data;
      }
    } catch(e) {}
  }
  try {
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
    const file = path.join(DATA_DIR, `${name}.json`);
    if (fs.existsSync(file)) {
      return JSON.parse(fs.readFileSync(file, 'utf-8'));
    }
  } catch(e) {}
  return null;
}

export async function writeData(name, data) {
  try {
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
    fs.writeFileSync(path.join(DATA_DIR, `${name}.json`), JSON.stringify(data));
  } catch(e) {}
  if (blobPut) {
    try {
      const url = `${BLOB_PREFIX}${name}.json`;
      await blobPut(url, JSON.stringify(data), { contentType: 'application/json', access: 'public' });
    } catch(e) {}
  }
}
