import { checkSize, readFileFromLocal, saveFileToLocal } from './storage.service';
const fs = require('fs');
const path = require('path');

export const localPath = path.join('/home/mederdev/StudioProjects/FileSystem/fs_express', 'uploads',);

export async function readFile(filename: string, res: any): Promise<void> {
	const filePath = path.join(localPath, filename)
	await readFileFromLocal(filePath, res);
}

export async function setFile(filename: string, buff: any) {
	const filePath = path.join(localPath, filename)
	const folderSize = await checkSize(localPath);
	if (folderSize) {
		const res = await saveFileToLocal(filename, filePath, buff.data)
		return res == true ? "Write is end" : "Error";
	} else {
		return "Maximum size 10mb"
	}
}

export async function downloadFile(filename: string, buff: any) {
	const uploadFile = path.join(localPath, `/${filename}`);
	try {
		const readStr = fs.createReadStream(uploadFile);
		readStr.pipe(buff);
		readStr.on("error", (err: any) => console.log(err));
		readStr.on("end", () => console.log("end"));
	} catch (error) {
		return error;
	}
}
