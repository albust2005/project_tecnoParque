import express, { Router } from 'express';
import { cancelOrder, captureOrder, createOrder } from '../controllers/payment.Controller.js';

const router = Router();

router.get('/createOrder', createOrder)
router.get('/captureOrder', captureOrder)
router.post('/cancelOrder', cancelOrder)

export default router;