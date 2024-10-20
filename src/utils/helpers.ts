import { Request } from "express";

const getClientIp = (req: Request) => {
  return req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress;
};

export {
  getClientIp,
}