import express, { NextFunction, Request, Response } from "express";

const router = express.Router();

router.get("/keystroke", async (request: Request, response: Response, next: NextFunction) => {
  try {
    response.render("index");
  } catch {
    console.log("Something went wrong!");
  }
});

router.post("/keystroke", async (request: Request, response: Response, next: NextFunction) => {
  try {
    console.log('this is from the post');
   
    console.log(request.body);
    
    response.json("Gotcha!");
  } catch {
    console.log("Something went wrong!");
  }
});

export default router;