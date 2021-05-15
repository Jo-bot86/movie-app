import express from 'express';
//prefix .js is not necessary in react but in node
// curly braces for named import
import { getMovie} from '../controller/movie-ctrl.js'

const router = express.Router();

router.get('/', getMovie);

export default router;