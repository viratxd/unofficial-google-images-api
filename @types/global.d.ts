// ImageSize type
type ImageSize =
  | 'qsvga'
  | 'vga'
  | 'svga'
  | 'xga'
  | '2mp'
  | '4mp'
  | '6mp'
  | '8mp'
  | '10mp'
  | '12mp'
  | '15mp'
  | '20mp'
  | '40mp'
  | '70mp'
  | 'l'
  | 'm'
  | 'i';
type ImageType = 'clipart' | 'lineart' | 'photo' | 'animated' | 'face';
type ImageColor = 'color' | 'gray' | 'specific' | 'trans';
type ImageAspectRatio = 't' | 'w' | 's' | 'x';
type ImageFileType = 'jpg' | 'png' | 'gif' | 'bmp' | 'svg' | 'webp' | 'ico';
type ImageTime = 'd' | 'w' | 'm' | 'y';

interface GoogleImageOptions {
  query: string;
  size?: ImageSize;
  imageType?: ImageType;
  color?: ImageColor;
  aspectRatio?: ImageAspectRatio;
  time?: ImageTime;
  start?: number;
  fileType?: ImageFileType;
}
