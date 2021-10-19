-- CreateTable
CREATE TABLE "typeGuides" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "resume" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "guides" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "resume" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "obs" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "typeGuide_id" TEXT NOT NULL,
    CONSTRAINT "guides_typeGuide_id_fkey" FOREIGN KEY ("typeGuide_id") REFERENCES "typeGuides" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "pictures" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "path" TEXT NOT NULL,
    "guide_id" TEXT NOT NULL,
    CONSTRAINT "pictures_guide_id_fkey" FOREIGN KEY ("guide_id") REFERENCES "guides" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "cars" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "pathPicture" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "accomodations" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "pathPicture" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "posts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "likes" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,
    CONSTRAINT "posts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "passoword" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL
);
