import { Request, Response } from 'express';
import Log from 'models/log';
import GoogleImageService from 'services/GoogleImageService';
import { createSuccessResponse } from 'utils/response';

const search = async (req: Request, res: Response) => {
  const {
    query,
    size,
    imageType,
    color,
    aspectRatio,
    time,
    start,
    fileType,
  }: any = req.query;

  const service = new GoogleImageService({
    query,
    size,
    imageType,
    color,
    aspectRatio,
    time,
    start,
    fileType,
  });
  try {
    const req_time = Date.now();
    const images = await service.get();
    /** Create Log */
    await Log.create({
      params: req.query,
      req_time,
      res_time: Date.now(),
      extra: {
        ip:
          req.ip ||
          req.headers['x-forwarded-for'] ||
          req?.connection?.remoteAddress ||
          '',
        user_agent: req.headers['user-agent'],
        referrer: req.headers['referer'] || req.headers['referrer'],
      },
    });
    return createSuccessResponse(res, 'Images list', {
      images,
    });
  } catch (err: any) {
    return createSuccessResponse(
      res,
      'Failed',
      {
        error: err?.toString() || 'Something went wrong...',
      },
      400
    );
  }
};

export default search;
