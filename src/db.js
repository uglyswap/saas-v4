import sqlite3 from 'sqlite3'
    import { open } from 'sqlite'

    // Initialize SQLite database
    const db = await open({
      filename: './database.sqlite',
      driver: sqlite3.Database
    })

    // Create settings table if it doesn't exist
    await db.exec(`
      CREATE TABLE IF NOT EXISTS settings (
        key TEXT PRIMARY KEY,
        value TEXT
      )
    `)

    export { db }
