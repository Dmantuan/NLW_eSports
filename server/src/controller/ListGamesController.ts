import { prisma } from "../CLI/prisma";
import { Request, Response } from "express";

export class ListGamesController {
    async handle(req: Request, res: Response){
        const games = await prisma.game.findMany({
            include: {
                _count:{
                    select: {
                        ads: true
                    }
                }
            },                
        })
        return res.status(200).json({ data:games });
    }
}