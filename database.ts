import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const connectToDatabase = async () => {
    try {
        await prisma.$connect();
        console.log('Database connection established successfully.');
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw error;
    }
};

export const disconnectFromDatabase = async () => {
    await prisma.$disconnect();
};