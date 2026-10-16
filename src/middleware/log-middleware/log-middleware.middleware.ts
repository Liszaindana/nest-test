import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LogMiddlewareMiddleware implements NestMiddleware {
  private readonly logger = new Logger('HTTP');
  
  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl, ip } = req;
    const userAgent = req.get('user-agent') || 'tidak diketahui';
    const startTime = Date.now();

    // Event listener saat response sudah selesai dikirim ke client
    res.on('finish', () => {
      const { statusCode } = res;
      const duration = Date.now() - startTime;
      
      const logMessage = `[ ${method} | 
      ${originalUrl} 
      | Status: ${statusCode} 
      | Durasi: ${duration}ms 
      | IP Address: ${ip} 
      | User Agent: ${userAgent} ]`

      if(statusCode >= 500) {
        this.logger.error(logMessage);
      }else if(statusCode >= 400) {
        this.logger.warn(logMessage);
      }else {
        this.logger.log(logMessage);
      }
    });

    // Lanjutkan request ke tahap berikutnya (Controller/Route)
    next();
  }
}