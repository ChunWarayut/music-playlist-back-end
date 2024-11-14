import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const song1 = await prisma.music.upsert({
    where: { id: 'song1' },
    update: {},
    create: {
      id: 'song1',
      name: 'song1',
      artist: 'artist1',
      album: 'album1',
      photoUrl:
        'https://i.pinimg.com/originals/cd/06/e1/cd06e1cec5800a10d0ff9488363c26fa.jpg',
    },
  });

  const song2 = await prisma.music.upsert({
    where: { id: 'song2' },
    update: {},
    create: {
      id: 'song2',
      name: 'song2',
      artist: 'artist2',
      album: 'album2',
      photoUrl:
        'https://mir-s3-cdn-cf.behance.net/project_modules/1400/fe529a64193929.5aca8500ba9ab.jpg',
    },
  });

  const collection1 = await prisma.collection.upsert({
    where: { id: '1' },
    update: {},
    create: {
      id: '1',
      name: 'collection1',
      type: 'playlist',
      description: 'description1',
      photoUrl:
        'https://i.pinimg.com/originals/cd/06/e1/cd06e1cec5800a10d0ff9488363c26fa.jpg',
    },
  });

  const collection2 = await prisma.collection.upsert({
    where: { id: '2' },
    update: {},
    create: {
      id: '2',
      name: 'collection2',
      type: 'playlist',
      description: 'description2',
      photoUrl:
        'https://mir-s3-cdn-cf.behance.net/project_modules/1400/fe529a64193929.5aca8500ba9ab.jpg',
    },
  });

  await prisma.item.createMany({
    data: [
      { collectionId: '1', ...song1 },
      { collectionId: '1', ...song2 },
      { collectionId: '2', ...song1 },
      { collectionId: '2', ...song2 },
    ],
    skipDuplicates: true,
  });

  console.log({ song1, song2, collection1, collection2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
