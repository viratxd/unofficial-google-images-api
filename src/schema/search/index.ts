import { z } from 'zod';

const searchQueryParams = z.object({
  query: z.string({
    message: 'Query is required',
  }),
  size: z
    .enum(
      [
        'qsvga',
        'vga',
        'svga',
        'xga',
        '2mp',
        '4mp',
        '6mp',
        '8mp',
        '10mp',
        '12mp',
        '15mp',
        '20mp',
        '40mp',
        '70mp',
        'l',
        'm',
        'i',
      ],
      {
        message: 'Invalid value for size',
      }
    )
    .optional(),
  imageType: z
    .enum(['clipart', 'lineart', 'photo', 'animated', 'face'], {
      message: 'Imagetype is invalid',
    })
    .optional(),

  color: z
    .enum(['color', 'gray', 'specific', 'trans'], {
      message: 'Color is invalid',
    })
    .optional(),

  aspectRatio: z.enum(['t', 'w', 's', 'x']).optional(),
  time: z.enum(['d', 'w', 'm', 'y']).optional(),
  fileType: z
    .enum(['jpg', 'png', 'gif', 'bmp', 'svg', 'webp', 'ico'])
    .optional(),
});

export { searchQueryParams };
