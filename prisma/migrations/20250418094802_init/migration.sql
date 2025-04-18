-- CreateTable
CREATE TABLE `vocab_anto_table` (
    `word_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `word_antonyms` TEXT NOT NULL,

    PRIMARY KEY (`word_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vocab_mean_table` (
    `mean_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `word_id` INTEGER NOT NULL,
    `word_meaning` TEXT NOT NULL,
    `word_example` TEXT NULL,
    `word_image` VARCHAR(255) NULL,

    PRIMARY KEY (`mean_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vocab_rela_table` (
    `word_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `word_related_name` TEXT NOT NULL,

    PRIMARY KEY (`word_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vocab_syn_table` (
    `word_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `word_synonyms` TEXT NOT NULL,

    PRIMARY KEY (`word_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vocab_table` (
    `word_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `word_name` VARCHAR(255) NOT NULL,
    `word_type` VARCHAR(255) NOT NULL,
    `word_ipa` VARCHAR(255) NULL,
    `word_voice` TEXT NULL,
    `word_topic` TEXT NULL,

    PRIMARY KEY (`word_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vocab_topic_table` (
    `topic_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `topic_name` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`topic_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vocab_type_table` (
    `type_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `type_symble` VARCHAR(255) NOT NULL,
    `type_name` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`type_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `vocab_anto_table` ADD CONSTRAINT `vocab_anto_table_word_id_foreign` FOREIGN KEY (`word_id`) REFERENCES `vocab_table`(`word_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `vocab_rela_table` ADD CONSTRAINT `vocab_rela_table_word_id_foreign` FOREIGN KEY (`word_id`) REFERENCES `vocab_table`(`word_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `vocab_syn_table` ADD CONSTRAINT `vocab_syn_table_word_id_foreign` FOREIGN KEY (`word_id`) REFERENCES `vocab_table`(`word_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
