import { prisma } from "../CLI/prisma";
import { Request, Response } from "express";

export class DiscordByAdController {
    async handle(req: Request, res: Response){
        const adId = req.params.adId;
        try{
            const ad = await prisma.ad.findUniqueOrThrow({
                select:{
                    discord:true,
                },
                where: {
                    id: adId,
                },
            });
            return res.status(200).json({
                discord: ad.discord,
            });
        }
        catch{
            return res.status(500);
        }
    }
}