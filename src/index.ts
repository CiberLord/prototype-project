import * as dotenv from 'dotenv';
import path from 'path';
import { startApplication } from '../lib/startApplication';

import { app } from './app';

dotenv.config({
    path: path.resolve(process.cwd(), '.env'),
});

startApplication(app);
