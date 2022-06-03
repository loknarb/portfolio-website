// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import latestVersion from 'latest-version';
const process = require('process');
type Data = {
  node: string;
  yarn: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const yarn = await latestVersion('yarn');
  await res.status(200).json({ node: process.version, yarn: yarn });
}
