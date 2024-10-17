# Unofficial Google Images API

This API allows you to search for images using various filters such as size, type, color, aspect ratio, file type, and more. It performs Google Image Search and returns image URLs based on the provided search criteria.

**How to use ?**

- Clone this repository
  `git clone https://github.com/sehmbimanvir/unofficial-google-images-api.git`

- Install packages
  `yarn`

- Create .env file
  `cp .env_example .env`

- Run the script
  `yarn start`

- Open link
  http://localhost:3000/api/search?query=cars

## Endpoint:

`GET /api/search`

## Query Parameters:

| Parameter     | Type                | Description                                                                 | Example Values                                                          |
| ------------- | ------------------- | --------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `query`       | `string` (required) | The search term or keyword to search for images.                            | `cats`, `sunset`, `flowers`                                             |
| `size`        | `string` (optional) | Specifies the size of the image to filter.                                  | `qsvga`, `vga`, `svga`, `xga`, `2mp`, `10mp`, `l`, `m`, `i`             |
| `imageType`   | `string` (optional) | Filters images based on their type (e.g., clipart, photo, animated).        | `clipart`, `lineart`, `photo`, `animated`, `face`                       |
| `color`       | `string` (optional) | Filters images by color. Can be color, grayscale, specific, or transparent. | `color`, `gray`, `specific`, `trans`                                    |
| `aspectRatio` | `string` (optional) | Filters images by aspect ratio (e.g., tall, wide, square).                  | `t` (tall), `w` (wide), `s` (square), `x` (any)                         |
| `time`        | `string` (optional) | Filters images based on the time range of when they were indexed.           | `d` (past 24 hours), `w` (past week), `m` (past month), `y` (past year) |
| `start`       | `number` (optional) | Specifies the starting index for pagination in the image search results.    | `0`, `20`, `40`, etc.                                                   |
| `fileType`    | `string` (optional) | Filters images by file type (e.g., jpg, png, gif).                          | `jpg`, `png`, `gif`, `bmp`, `svg`, `webp`, `ico`                        |

## Example Request:

```bash
GET /api/search?query=sunset&size=xga&imageType=photo&color=trans&aspectRatio=w&fileType=png&start=20
```

## Example Response:

```json
{
  "status": true,
  "message": "Success",
  "data": {
    "images": [
      "https://example.com/image1.png",
      "https://example.com/image2.png",
      "https://example.com/image3.png"
    ]
  }
}
```
