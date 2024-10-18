import { NextFunction, Request, Response } from "express";

const logResponse = (req: Request, res: Response, next: NextFunction) => {
  if (req.originalUrl === '/favicon.ico') {
    return next();
  }
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.originalUrl} [${res.statusCode}] - ${duration}ms`);
  });

  next();
}

export {
  logResponse
}