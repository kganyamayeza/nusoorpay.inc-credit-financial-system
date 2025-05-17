import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Seed initial financial profiles
    const profiles = [
        {
            userId: 1,
            income: 5000,
            expenses: 3000,
            savings: 2000,
        },
        {
            userId: 2,
            income: 7000,
            expenses: 4000,
            savings: 3000,
        },
        {
            userId: 3,
            income: 6000,
            expenses: 3500,
            savings: 2500,
        },
    ];

    for (const profile of profiles) {
        await prisma.financialProfile.create({
            data: profile,
        });
    }

    console.log('Database seeded with initial financial profiles.');
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });