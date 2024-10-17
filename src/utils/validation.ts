import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

const validateQuery = (schema: z.ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.query);

    if (!result.success) {
      return res.status(422).json({
        data: {},
        status: false,
        message: 'Validation Failed',
        errors: result.error.errors.map((error) => ({
          path: error.path,
          message: error.message,
        })),
      });
    }
    next();
  };
};

export {
  validateQuery
}
