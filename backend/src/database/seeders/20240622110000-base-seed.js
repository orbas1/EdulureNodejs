import { v4 as uuid } from 'uuid'

export async function up ({ context: queryInterface }) {
  const now = new Date()
  const adminId = uuid()
  const instructorId = uuid()
  const communityId = uuid()
  await queryInterface.bulkInsert('users', [
    {
      id: adminId,
      email: 'admin@edulure.com',
      password_hash: '$2b$10$Qq2i0E4VwE/MEGL3hXhNBeq5AnbcW2CYwiVdc0GqOR/mdrIW6DC1W',
      role: 'admin',
      created_at: now,
      updated_at: now
    },
    {
      id: instructorId,
      email: 'instructor@edulure.com',
      password_hash: '$2b$10$Qq2i0E4VwE/MEGL3hXhNBeq5AnbcW2CYwiVdc0GqOR/mdrIW6DC1W',
      role: 'instructor',
      created_at: now,
      updated_at: now
    }
  ])

  await queryInterface.bulkInsert('profiles', [
    {
      id: uuid(),
      user_id: instructorId,
      first_name: 'Priya',
      last_name: 'Singh',
      headline: 'Data Science Mentor',
      bio: 'Leads global data science cohorts and enterprise academies.',
      intent: JSON.stringify(['courses', 'community', 'lessons']),
      created_at: now,
      updated_at: now
    }
  ])

  await queryInterface.bulkInsert('communities', [
    {
      id: communityId,
      title: 'AI Educators Hub',
      slug: 'ai-educators-hub',
      description: 'Weekly workshops, live AMAs, and lesson plans built for the future of classrooms.',
      image_url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
      created_at: now,
      updated_at: now
    }
  ])

  await queryInterface.bulkInsert('memberships', [
    {
      id: uuid(),
      user_id: instructorId,
      community_id: communityId,
      role: 'admin',
      status: 'active',
      created_at: now,
      updated_at: now
    }
  ])
}

export async function down ({ context: queryInterface }) {
  await queryInterface.bulkDelete('memberships', null, {})
  await queryInterface.bulkDelete('communities', null, {})
  await queryInterface.bulkDelete('profiles', null, {})
  await queryInterface.bulkDelete('users', null, {})
}
