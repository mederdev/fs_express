import { NextFunction, Request, Response } from 'express';
import express from 'express';
import { adapterRouter } from './src/routes/adapter.route';
const cors = require("cors");
const fileUpload = require("express-fileupload");

const app = express();

app.use(fileUpload());

app.use(express.json())

app.use('/', adapterRouter);

app.use(cors());

app.listen(3000, () => {
	console.log('Server running');
})