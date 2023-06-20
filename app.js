import dotenv from 'dotenv';
import { Servers } from './model/server.js';


dotenv.config()
 
const server = new Servers;
 
server.listener();