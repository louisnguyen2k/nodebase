import * as useragent from 'express-useragent';

function detectedDeviceMiddleware(req): { isMobile: any; source: any; ua: any } {
  const source = req.headers['user-agent'];
  const ua = useragent.parse(source);
  const isMobile = ua.isMobile;
  return {
    isMobile,
    source,
    ua,
  };
}
export { detectedDeviceMiddleware };
