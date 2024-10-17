import { Router } from 'express';
import search from 'controllers/search';
import { validateQuery } from 'utils/validation';
import { searchQueryParams } from 'schema/search'


const router = Router();

router.get('/search', validateQuery(searchQueryParams), search);

export default router;
