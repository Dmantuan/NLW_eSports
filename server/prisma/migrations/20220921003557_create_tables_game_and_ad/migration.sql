-- CreateTable
CREATE TABLE `games` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `bannerUrl` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ads` (
    `id` VARCHAR(191) NOT NULL,
    `id_Game` VARCHAR(191) NOT NULL,
    `playerAge` INTEGER NOT NULL,
    `discord` VARCHAR(191) NOT NULL,
    `weekDays` VARCHAR(191) NOT NULL,
    `hourStart` INTEGER NOT NULL,
    `hourEnd` INTEGER NOT NULL,
    `useVoiceChannel` BOOLEAN NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ads` ADD CONSTRAINT `ads_id_Game_fkey` FOREIGN KEY (`id_Game`) REFERENCES `games`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
