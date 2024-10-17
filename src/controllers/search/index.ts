import { Request, Response } from 'express';
import GoogleImageService from 'services/GoogleImageService';

const search = async (
  req: Request,
  res: Response
) => {
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
    return res
      .json({
        status: true,
        message: 'Success',
        data: {
          images,
        },
      })
      .status(200);
  } catch (err: any) {
    return res.json({
      data: {
        error: err?.toString() || 'Something went wrong...',
      },
      status: false,
      message: 'Failed',
    });
  }
};

export default search;
