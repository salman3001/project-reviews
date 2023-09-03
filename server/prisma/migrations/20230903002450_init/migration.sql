/*
  Warnings:

  - Added the required column `updatedAt` to the `AdminUser` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AdminUser" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isActive" BOOLEAN DEFAULT false,
    "roleId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "AdminUser_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_AdminUser" ("email", "firstName", "id", "isActive", "lastName", "password", "roleId") SELECT "email", "firstName", "id", "isActive", "lastName", "password", "roleId" FROM "AdminUser";
DROP TABLE "AdminUser";
ALTER TABLE "new_AdminUser" RENAME TO "AdminUser";
CREATE UNIQUE INDEX "AdminUser_email_key" ON "AdminUser"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
