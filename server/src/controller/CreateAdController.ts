import { prisma } from "../CLI/prisma";
import { request, Request, Response } from "express";
import { convertHourStringToMinute } from "../utils/validation-and-convert-hour-string-to-minute";
import { z } from "zod";

const adSchema = z.object({
    id_Game: z.string().uuid(),      
    name: z.string(),
    yearsPlaying: z.number(),
    discord: z.string(),
    weekDays: z.string().max(7),
    hourStart: z.number(),
    hourEnd: z.number(),
    useVoiceChannel: z.boolean(),
})

export class CreateAdController{
    async handle(req: Request, res: Response){
        const gameId = req.params.gameId;
        const body: any = req.body;

        type ad = z.infer<typeof adSchema>

        const ad = adSchema.safeParse({
            id_Game: gameId,
            name: body.name,
            yearsPlaying: body.yearsPlaying,
            discord: body.discord,
            weekDays: body.weekDays.join(','),
            hourEnd: convertHourStringToMinute(body.hourEnd),
            hourStart: convertHourStringToMinute(body.hourStart),
            useVoiceChannel: body.useVoiceChannel,
        })

        if (ad.success) {
            await prisma.ad.create({
                data:{
                    id_Game: ad.data.id_Game,
                    name: ad.data.name,
                    yearsPlaying: ad.data.yearsPlaying,
                    discord: ad.data.discord,
                    weekDays: ad.data.weekDays,
                    hourStart: ad.data.hourStart,
                    hourEnd: ad.data.hourEnd,
                    useVoiceChannel: ad.data.useVoiceChannel,
                }
            });
            return res.status(201).json({data:ad.data});
        }
        else{
            return res.status(400).json({
                error: "Invalid request",
            });
        }
    }
}
