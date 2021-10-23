import { Authorization } from './components/auth/types/Authorization';
declare global {
  namespace Express {
    // first, declare that we are adding a method to `Response` (the interface)
    interface Request {
      user?: Authorization;
      locales: Object;
    }
  }
}
