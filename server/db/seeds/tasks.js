/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { id: 1, task: 'buy groceries', completed: false },
    { id: 2, task: 'go for a walk', completed: true },
    { id: 3, task: 'book accommodation', completed: true },
  ])
}
