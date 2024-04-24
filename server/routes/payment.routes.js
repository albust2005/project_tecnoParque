import express, { Router } from 'express';
import { cancelPayment, captureOrder, createOrder } from '../controllers/payment.Controller.js';

const router = Router();

router.post('/createOrder', createOrder);
router.get('/captureOrder', captureOrder);
router.get('/cancelPayment', cancelPayment);

export default router;