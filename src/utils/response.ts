import { Response } from 'express';
const createSuccessResponse = (
  res: Response,
  message: string = '',
  data: Record<string, any> = {},
  statusCode: number = 200
) => {
  return res.json({
    success: statusCode >= 200 && statusCode <= 300,
    data,
    message,
  }).status(statusCode);
};

export {
  createSuccessResponse,
}
