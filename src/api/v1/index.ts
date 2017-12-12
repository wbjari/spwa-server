import express = require('express');
import likeRoutes from './like.routes';
import deejayRoutes from './deejay.routes';

const router = express.Router();

router.use('/likes', likeRoutes);
router.use('/deejays', deejayRoutes);

export default router;
