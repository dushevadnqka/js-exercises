import { Router } from 'express';
import ToptalRouter from './Toptal';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/toptal', ToptalRouter);

// Export the base-router
export default router;
