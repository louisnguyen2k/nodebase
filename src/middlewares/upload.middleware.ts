import multer from 'multer';
import path from 'path';
const { v4: uuidv4 } = require('uuid');
import { Request } from 'express';

const storage = multer.diskStorage({
  destination: (req: Request, file, cb: Function) => {
    cb(null, 'uploads');
  },
  filename: (req: Request, file: any, cb: Function) => {
    const id = uuidv4().replace(/-/g, '');
    cb(null, `${file.fieldname}_${id}${path.extname(file.originalname)}`);
  },
});

const fileFilter = (req: Request, file: any, cb: Function) => {
  const filetypes = /jpeg|jpg|png|gif|avi|flv|wmv|mov|mp4/; // Allowed ext (just media file)
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase()); // Check ext
  const mimetype = filetypes.test(file.mimetype); // Check mime

  if (mimetype && extname) {
    cb(null, true);
  } else {
    cb(new Error('Media uploaded is not of type jpg/jpeg or png'), false);
  }
};
const imageUploader = multer({ storage, fileFilter });

export async function handleSingleFile(req: Request, name: string): Promise<any> {
  const multerSingle = imageUploader.single(name);
  return new Promise((resolve, reject) => {
    multerSingle(req, undefined, async (error) => {
      if (error) {
        reject(error);
      }
      resolve({});
    });
  });
}

export async function handleManyFiles(req: Request, name: string): Promise<any> {
  const multerArray = imageUploader.array(name);
  return new Promise((resolve, reject) => {
    multerArray(req, undefined, async (error) => {
      if (error) {
        reject(error);
      }
      resolve({});
    });
  });
}
