import { Request, Response } from "express";

const notFound = (req: Request, res: Response) => {
  return res.json({
    status: false,
    data: {},
    message: 'Route not found.'
  }).status(404)
}

export default notFound;