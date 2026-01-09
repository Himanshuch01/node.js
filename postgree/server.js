const { Pool } = require('pg');

// Database connection
const pool = new Pool({
  user: 'myuser',
  host: 'localhost',
  database: 'myapp',
  password: 'mypass',
  port: 5432,
});

async function postgresExample() {
  const client = await pool.connect();
  
  try {
    console.log('🐘 Connected to PostgreSQL');
    
    // Create table
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        age INTEGER,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    // Create user
    const insertResult = await client.query(
      'INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *',
      ['John Doe', 'john@example.com', 30]
    );
    const newUser = insertResult.rows[0];
    console.log('✅ User created:', newUser.id);
    
    // Read users
    const usersResult = await client.query('SELECT * FROM users WHERE age >= $1', [25]);
    console.log('📖 Users found:', usersResult.rows.length);
    
    // Update user
    await client.query(
      'UPDATE users SET age = $1 WHERE id = $2',
      [31, newUser.id]
    );
    console.log('🔄 User updated');
    
    // Delete user
    await client.query('DELETE FROM users WHERE id = $1', [newUser.id]);
    console.log('🗑️ User deleted');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    client.release();
  }
}

// Helper class for common operations
class UserService {
  static async createUser(name, email, age) {
    const result = await pool.query(
      'INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *',
      [name, email, age]
    );
    return result.rows[0];
  }
  
  static async getUserById(id) {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0];
  }
  
  static async getAllUsers() {
    const result = await pool.query('SELECT * FROM users ORDER BY created_at DESC');
    return result.rows;
  }
  
  static async updateUser(id, name, email, age) {
    const result = await pool.query(
      'UPDATE users SET name = $1, email = $2, age = $3 WHERE id = $4 RETURNING *',
      [name, email, age, id]
    );
    return result.rows[0];
  }
  
  static async deleteUser(id) {
    const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  }
}

// Usage example
async function demonstrateService() {
  try {
    const user = await UserService.createUser('Jane Smith', 'jane@example.com', 28);
    console.log('Created:', user);
    
    const foundUser = await UserService.getUserById(user.id);
    console.log('Found:', foundUser);
    
    const updatedUser = await UserService.updateUser(user.id, 'Jane Updated', 'jane.new@example.com', 29);
    console.log('Updated:', updatedUser);
    
    const allUsers = await UserService.getAllUsers();
    console.log('All users:', allUsers.length);
    
  } catch (error) {
    console.error('Service error:', error.message);
  }
}

postgresExample().then(() => demonstrateService());
