import config from 'config';

class GoogleImageService {
  baseUrl: string = config.google.url;
  search: string = '';
  size: string = '';
  imageType: string = '';
  color: string = '';
  aspectRatio: string = '';
  time: string = '';
  start: number = 0;
  fileType: string = '';

  constructor(options: GoogleImageOptions) {
    this.search = options.query;
    this.size = options.size || '';
    this.imageType = options.imageType || '';
    this.color = options.color || '';
    this.aspectRatio = options.aspectRatio || '';
    this.time = options.time || '';
    this.start = options.start || 0;
    this.fileType = options.fileType || '';
  }

  buildQueryParams(): string {
    const params = new URLSearchParams({
      q: `${this.search}${this.fileType ? ' filetype:' + this.fileType : ''}`,
      tbm: 'isch',
      tbs: this.buildTbsParam(),
      start: this.start.toString(),
    });
    return params.toString();
  }

  buildTbsParam(): string {
    const filters = [];

    if (this.size) filters.push(`isz:${this.size}`);
    if (this.imageType) filters.push(`itp:${this.imageType}`);
    if (this.color) filters.push(`ic:${this.color}`);
    if (this.aspectRatio) filters.push(`iar:${this.aspectRatio}`);
    if (this.time) filters.push(`qdr:${this.time}`);

    return filters.join(',');
  }

  async get(): Promise<string[]> {
    const url = `${this.baseUrl}?${this.buildQueryParams()}`;
    return fetch(url, {
      headers: {
        'User-Agent': config.google.user_agent,
      },
    })
      .then((res) => res.text())
      .then((html) => this.extract(html));
  }

  extract(html: string): string[] {
    const imageMatchRegex = /imgres\?imgurl=(.*?)&amp;imgrefurl/gs;
    const data: string[] = [];
    let matches;

    while ((matches = imageMatchRegex.exec(html))) {
      data.push(matches[1]);
    }

    return data;
  }
}

export default GoogleImageService;
