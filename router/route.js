import { Router } from "express";
const router=Router();
import {createTicket,getPeoples,getTikects} from '../controller/controller.js';


router.post('/create_ticket',createTicket);
router.get('/people',getPeoples);
router.get('/tickets',getTikects);

export default router;