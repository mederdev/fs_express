import { NextFunction, Response, Request } from 'express';
import { readFile, setFile } from '../services/adapter.service';
import { getMeta, setNewValue } from '../services/meta.service';
const bodyParser = require("body-parser");
const fs = require("fs");


export async function getFileData(req: Request, res: Response, next: NextFunction) {
	try {
		const { filename } = req.params;
		await readFile(filename, res);
	} catch (error) {
		res.send(error);
	}
}

export async function updateFile(req: any, res: Response) {
	try {
		console.log(req.file.filename);
		const result = await setFile(req.file.filename, req.file);
		console.log(await setNewValue(req.file));
		res.send(result);
	}
	catch (err) {
		console.error('Error-', err.message);
		return err.message
	}
}

export async function uploadFile(req: any, res: Response) {
	try {
		const result = await setFile(req.file.filename, req.file);
		console.log(await setNewValue(req.file));
		res.send(result)
	}
	catch (err) {
		console.error('Error-', err.message);
		return err.message
	}
}

export async function generateBuffer(req: any, res: Response, next: NextFunction) {
	try {
		const { filename } = req.params;
		let data = Buffer.from("");
		req.on('data', function (chunk: any) {
			data = Buffer.concat([data, chunk]);
		});
		req.on('end', () => {
			req.file = {
				filename: filename,
				data,
				mimetype: req.headers['content-type'],
				size: req.headers['content-length']
			}
			next();
		});
	}
	catch (err) {
		res.send(err.message);
	}
}

export async function getMetaData(req: Request, res: Response, next: NextFunction) {
	try {
		const result = await getMeta();
		res.send(result);
	}
	catch (err) {
		res.send(err.message);
	}
};
