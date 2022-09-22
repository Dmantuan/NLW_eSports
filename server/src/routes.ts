import { Router } from "express";
import { ListGamesController } from "./controller/ListGamesController";
import { ListAdsByGameController } from "./controller/ListAdsByGameController";
import { DiscordByAdController } from "./controller/DiscordByAdController";
import { CreateAdController } from "./controller/CreateAdController";

const router = Router();
const listGames = new ListGamesController();
const listAdsByGame = new ListAdsByGameController();
const discordByAd = new DiscordByAdController();
const createAdController = new CreateAdController();

router.get('/games', listGames.handle);
router.get('/games/:gameId/ads', listAdsByGame.handle);
router.get('/ads/:adId/discord', discordByAd.handle);
router.post('/games/:gameId/ads', createAdController.handle);


export {router};
