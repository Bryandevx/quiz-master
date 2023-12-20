/*
  Warnings:

  - The primary key for the `question_answers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[uuid]` on the table `question_answers` will be added. If there are existing duplicate values, this will fail.
  - The required column `uuid` was added to the `question_answers` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "question_answers" DROP CONSTRAINT "question_answers_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "uuid" TEXT NOT NULL,
ADD CONSTRAINT "question_answers_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "user_test_question_answers" (
    "question_answer_id" INTEGER NOT NULL,
    "user_test_id" INTEGER NOT NULL,

    CONSTRAINT "user_test_question_answers_pkey" PRIMARY KEY ("question_answer_id","user_test_id")
);

-- CreateTable
CREATE TABLE "UserTest" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "test_id" INTEGER NOT NULL,

    CONSTRAINT "UserTest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserTest_uuid_key" ON "UserTest"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "question_answers_uuid_key" ON "question_answers"("uuid");

-- AddForeignKey
ALTER TABLE "user_test_question_answers" ADD CONSTRAINT "user_test_question_answers_question_answer_id_fkey" FOREIGN KEY ("question_answer_id") REFERENCES "question_answers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_test_question_answers" ADD CONSTRAINT "user_test_question_answers_user_test_id_fkey" FOREIGN KEY ("user_test_id") REFERENCES "UserTest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTest" ADD CONSTRAINT "UserTest_test_id_fkey" FOREIGN KEY ("test_id") REFERENCES "tests"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTest" ADD CONSTRAINT "UserTest_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
