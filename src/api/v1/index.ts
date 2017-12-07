import express = require('express');
import genreRoutes from './genre.routes';
import deejayRoutes from './deejay.routes';

const router = express.Router();

router.use('/genres', genreRoutes);
router.use('/deejays', deejayRoutes);

export default router;
