import { Request, Response } from 'express';
import { createSuccessResponse } from 'utils/response';

const notFound = (req: Request, res: Response) =>
  createSuccessResponse(res, 'Route not found', {}, 404);

export default notFound;
