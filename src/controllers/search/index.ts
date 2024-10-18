import { Request, Response } from 'express';
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
    const images = await service.get();
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
