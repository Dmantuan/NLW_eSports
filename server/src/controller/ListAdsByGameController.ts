import { prisma } from "../CLI/prisma";
import { Request, Response } from "express";
import { comvertMinutestoHoursString } from "../utils/convert-minutes-to-hours-string";

export class ListAdsByGameController {
    async handle(req: Request, res: Response){
        try{
            const gameId = req.params.gameId;
            const ads = await prisma.ad.findMany({
                select: {
                    id: true,
                    name: true,
                    weekDays: true,
                    useVoiceChannel: true,
                    yearsPlaying: true,
                    hourEnd: true,
                    hourStart: true,
                },
                where: {
                    id_Game: gameId,
                },
                orderBy: {
                    createdAt: "desc",
                },
            });
            return res.status(200).json({ data:ads.map(ad=>{
                return {
                    ...ad,
                    weekDays: ad.weekDays.split(','),
                    hourStart: comvertMinutestoHoursString(ad.hourStart),
                    hourEnd: comvertMinutestoHoursString(ad.hourEnd),
                }
            })});
        }
        catch{
            return res.status(500)
        }
        
    }
}
