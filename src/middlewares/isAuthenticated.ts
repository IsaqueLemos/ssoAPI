import { NextFunction, Request, Response } from "express";
import { Session } from 'express-session'

interface userReq extends Session {
  user: any
}

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  console.log('A')
  const redirectUrl = `${req.protocol}://${req.headers.host}${req.path}`
  if ((req.session as userReq).user === null) {
    return res.redirect(`http://localhost:3000/i-digital/login?serviceURL=${redirectUrl}`)
  }
  next()
}
