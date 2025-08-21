const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database with sample users...')

  const users = [
    {
      email: 'juan.perez@cooperativa.com',
      name: 'Juan Pérez'
    },
    {
      email: 'maria.gonzalez@cooperativa.com',
      name: 'María González'
    },
    {
      email: 'carlos.rodriguez@cooperativa.com',
      name: 'Carlos Rodríguez'
    },
    {
      email: 'ana.martinez@cooperativa.com',
      name: 'Ana Martínez'
    },
    {
      email: 'luis.lopez@cooperativa.com',
      name: 'Luis López'
    },
    {
      email: 'sofia.hernandez@cooperativa.com',
      name: 'Sofía Hernández'
    },
    {
      email: 'diego.torres@cooperativa.com',
      name: 'Diego Torres'
    },
    {
      email: 'laura.ruiz@cooperativa.com',
      name: 'Laura Ruiz'
    },
    {
      email: 'miguel.sanchez@cooperativa.com',
      name: 'Miguel Sánchez'
    },
    {
      email: 'carmen.jimenez@cooperativa.com',
      name: 'Carmen Jiménez'
    },
    {
      email: 'roberto.morales@cooperativa.com',
      name: 'Roberto Morales'
    },
    {
      email: 'patricia.vargas@cooperativa.com',
      name: 'Patricia Vargas'
    },
    {
      email: 'fernando.castro@cooperativa.com',
      name: 'Fernando Castro'
    },
    {
      email: 'elena.ramos@cooperativa.com',
      name: 'Elena Ramos'
    },
    {
      email: 'jose.fernandez@cooperativa.com',
      name: 'José Fernández'
    },
    {
      email: 'admin@cooperativa.com',
      name: 'Administrador'
    },
    {
      email: 'tesorero@cooperativa.com',
      name: 'Tesorero Principal'
    },
    {
      email: 'secretario@cooperativa.com',
      name: 'Secretario General'
    }
  ]

  for (const userData of users) {
    const user = await prisma.user.upsert({
      where: { email: userData.email },
      update: {},
      create: userData,
    })
    console.log(`Created/Updated user: ${user.name} (${user.email})`)
  }

  console.log(`✅ Seeded ${users.length} users successfully!`)
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })