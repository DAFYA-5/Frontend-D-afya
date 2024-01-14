import fetch from 'isomorphic-fetch';
import { HttpAgent } from '@dfinity/agent';

const host = process.env.DFX_NETWORK === 'local' ? 'http://127.0.0.1:4943' : 'https://icp-api.io';

const agent = new HttpAgent({ fetch, host });