import express from "express";
import { getTransactionsByUserId } from "../controllers/transactionsController.js";
import { deleteTransactionById } from "../controllers/transactionsController.js";
import { getTransactionSummaryByUserId } from "../controllers/transactionsController.js";
import { crateTransaction } from "../controllers/transactionsController.js";

const router = express.Router();

router.post('/', crateTransaction);

router.get('/:user_id', getTransactionsByUserId);

router.delete('/:id', deleteTransactionById);

router.get('/summary/:userId', getTransactionSummaryByUserId);

export default router;