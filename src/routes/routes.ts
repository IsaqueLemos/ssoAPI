import { Router, Request, Response } from "express";

const ssoRoutes = Router()

ssoRoutes.get('login', (req: Request, res: Response) => {
  const { serviceURL } = req.query
  return res.json({ serviceURL })
})

export default ssoRoutes