const fs = require('fs');
const { promisify } = require('util')
const fastFolderSize = require('fast-folder-size')

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

//Проверка размера хранилища
export async function checkSize(folderPath: any) {
	const fastFolderSizeAsync = promisify(fastFolderSize)
	const bytes = await fastFolderSizeAsync(folderPath)

	const folderSize = Math.floor(bytes / 1000000);
	if (folderSize > 10) {
		console.log('Size limit is exceeded')
		return false;
	}
	else {
		console.log(`You have ${10 - folderSize}mb for download`);
		return true;
	}
}


