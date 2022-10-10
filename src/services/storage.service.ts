const fs = require('fs');
import { Request } from 'express';

export async function readFileFromLocal(uploadFile: any, res: any) {
	try {
		const readStr = fs.createReadStream(uploadFile);
		readStr.pipe(res);

		readStr.on("end", () => {
			console.log("Read is end")
		});
	} catch (error) {
		return error;
	}
};

export async function saveFileToLocal(filename: string, uploadFile: any, buff: any) {
	try {
		console.log(Date.now(), "Write is start")
		const writeStr = fs.createWriteStream(uploadFile);

		writeStr.write(buff);
		writeStr.end('', () => {
			console.log(Date.now(), 'Write is end')
		});
		return true;
	} catch (error) {
		return error;
	}
}


