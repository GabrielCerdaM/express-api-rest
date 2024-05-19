import { Router } from "express";

export const createhealthRouter = ({ mysql }) => {
  const router = Router();


  router.get("/", () => {});
  router.get('/mysql', () => {})

  return router;
};
