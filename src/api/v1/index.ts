import express = require('express');
import movieRoutes from './movie.routes';
import publisherRoutes from './publisher.routes';

const router = express.Router();

router.use('/movies', movieRoutes);
router.use('/publishers', publisherRoutes);

export default router;
