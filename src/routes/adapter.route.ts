const adapterRouter = require('express').Router();
import { updateFile, getFileData, generateBuffer, uploadFile, getMetaData } from '../controllers/adapter.controller';

//Чтение файла,
//Скачивание файла с сервера
adapterRouter.get('/read/:filename', getFileData);

//Загрузка файла в сервер
adapterRouter.post('/upload/:filename', generateBuffer, uploadFile);

//Изменение файла
adapterRouter.put('/write/:filename', generateBuffer, updateFile)

//Получение мета_таблицы
adapterRouter.get('/meta_data', getMetaData);

export { adapterRouter };

