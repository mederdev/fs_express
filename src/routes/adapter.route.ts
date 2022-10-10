const adapterRouter = require('express').Router();
import bodyParser from 'body-parser';
import { downloadFile } from '../services/adapter.service';
import { getFileData, generateBuffer, uploadFile, getMetaData } from '../controllers/adapter.controller';


adapterRouter.get('/read/:filename', getFileData);

// bodyParser.raw({ type: ["image/jpeg", "image/png"], limit: "5mb" })
adapterRouter.post('/upload/:filename', generateBuffer);

adapterRouter.get('/meta_data', getMetaData);

export { adapterRouter };

