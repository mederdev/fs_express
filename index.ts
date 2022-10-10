import express from 'express';
import { adapterRouter } from './src/routes/adapter.route';

const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.json())

app.use(cors());

app.use('/', adapterRouter);

app.listen(3000, () => {
	console.log('Server running');
})