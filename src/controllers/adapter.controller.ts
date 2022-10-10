import { NextFunction, Response, Request } from 'express';
import { saveFileToLocal } from '../services/storage.service';
import { readFile, downloadFile, setFile } from '../services/adapter.service';
import { getMeta, setNewValue } from '../services/meta.service';
const bodyParser = require("body-parser");
const fs = require("fs");


export async function getFileData(req: Request, res: Response, next: NextFunction) {
	try {
		const { filename } = req.params;
		await readFile(filename, res);
		// await adapter.readStream(filename, res)
	} catch (error) {
		res.send(error);
	}
}

export async function uploadFile(filename: string, file: any) {
	try {

		console.log(filename);
		const res = await setFile(filename, file);
		return res;
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
				data,
				mimetype: req.headers['content-type'],
				size: req.headers['content-length']
			}
			const metaData = {
				"filename": filename,
				"mimetype": req.file.mimetype,
				"size": req.file.size
			}
			setNewValue(metaData);
			const result = uploadFile(filename, req.file);


		});
		res.send('Processing done')
	}
	// res.send(req.body);
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
