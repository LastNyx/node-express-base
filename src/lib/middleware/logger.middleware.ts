import {NextFunction, Request, Response,} from "express";
import {winstonLogger} from "@common/logger/winston-logger";

const getDurationInMilliseconds = (start: [number, number]) => {
    const NS_PER_SEC = 1e9
    const NS_TO_MS = 1e6
    const diff = process.hrtime(start)

    return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS
}

export function loggerMiddleware(req: Request, res: Response, next: NextFunction) {
    const start = process.hrtime()
    const method = req.method;
    const url = req.url;
    const body = req.body;
    const query = req.query;

    if(body) console.log('Request Body', body);
    if(query) console.log('Request Query', query);

    res.on('finish', () => {
        const durationInMilliseconds = getDurationInMilliseconds (start)
        winstonLogger.info(`${method} ${url} [FINISHED] ${durationInMilliseconds.toLocaleString()} ms`)
    })

    res.on('close', () => {
        const durationInMilliseconds = getDurationInMilliseconds (start)
        winstonLogger.info(`${method} ${url} [CLOSED] ${durationInMilliseconds.toLocaleString()} ms`)
    })

    next();
}