import { Router } from "express";
import TestController from "../controller/test/test";

const router = Router();

router.route('/')
  .get(TestController.initTest)

export default router;