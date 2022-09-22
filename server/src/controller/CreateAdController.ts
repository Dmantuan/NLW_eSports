import { prisma } from "../CLI/prisma";
import { request, Request, Response } from "express";
import { convertHourStringToMinute } from "../utils/validation-and-convert-hour-string-to-minute";
import { z } from "zod";

const adSchema = z.object({
    id_Game: z.string().uuid(),      
    name: z.string(),
    playerAge: z.number(),
    discord: z.string(),
    weekDays: z.string().max(7),
    hourStart: z.number(),
    hourEnd: z.number(),
    useVoiceChannel: z.boolean(),
})

interface adInterface {
    id_Game: string;
    name: string;
    playerAge: number;
    discord: string;
    weekDays: string;
    hourStart: number | Error;
    hourEnd: number | Error;
    useVoiceChannel: boolean;
}

export class CreateAdController{
    async handle(req: Request, res: Response){
        try{
            const gameId = req.params.gameId;
            const body: any = req.body;

            type adValid = z.infer<typeof adSchema>;
            
            const adBuilding: adInterface = {
                id_Game: gameId,
                name: body.name,
                playerAge: body.playerAge,
                discord: body.discord,
                weekDays: body.weekDays.join(','),
                hourEnd: convertHourStringToMinute(body.hourEnd),
                hourStart: convertHourStringToMinute(body.hourStart),
                useVoiceChannel: body.useVoiceChannel,
            }

            const adValid = adSchema.safeParse(adBuilding);

            console.log(adValid);
            if(!adValid.success){
                await prisma.ad.create({
                    data: {
                        id_Game: gameId,
                        name: body.name,
                        playerAge: body.playerAge,
                        discord: body.discord,
                        weekDays: body.weekDays,
                        hourEnd: body.hourEnd,
                        hourStart: body.hourStart,
                        useVoiceChannel: body.useVoiceChannel,
                    }
                });
            }
            return res.status(201).json({data:adValid});
        }
        catch{
            return res.status(400).json({
                error: "Invalid request",
            });
        }
    }
}
