import { query } from "../config/db.js";

export const userRepository = {
    async findByUsername(username){
        const res = await query('SELECT id, nome, username, email, avatar_url, bio, created_at, updated_at, is_active FROM usuario WHERE username = $1 AND is_active = TRUE', [username])
        return res.rows[0]
    },
    async findByEmail(email){
        const res = await query('SELECT id, nome, username, email, avatar_url, bio, created_at, updated_at, is_active FROM usuario WHERE email = $1 AND is_active = TRUE', [email])
        return res.rows[0]
    },
    async findByEmailLogin(email){
        const res = await query('SELECT id, nome, username, email, password_hash from usuario WHERE email = $1 AND is_active = TRUE', [email])
        return res.rows[0]
    },
    async findById(id){
        const res = await query('SELECT id, nome, username, email, avatar_url, bio, created_at, updated_at, is_active FROM usuario WHERE id = $1 AND is_active = TRUE' , [id])
        return res.rows[0]
    },
    async findByPublicId(id){
        const res = await query('SELECT id, nome, username, email, avatar_url, bio, created_at FROM usuario WHERE id = $1 AND is_active = TRUE', [id])
        return res.rows[0]
    },
    async createUser(user){
        const { nome, username, email, password_hash} = user;
        const sql = 'INSERT INTO usuario (nome, username, email, password_hash) values ($1, $2, $3, $4) returning id, nome, username, email, avatar_url, bio, created_at, updated_at, is_active;';
        const res = await query(sql, [nome, username, email, password_hash]);
        return res.rows[0]
    },
    async updateProfile(id, user){
        const { nome, username, email, bio, avatar_url } = user;
        const sql = 'UPDATE usuario SET nome = $1, username = $2, email = $3, bio = $4, avatar_url = $5, updated_at = CURRENT_TIMESTAMP WHERE id = $6 returning *;';
        const res = await query(sql, [nome, username, email, bio, avatar_url, id])
        return res.rows[0]
    },
    async updatePassword(id, password_hash){
        const sql = 'UPDATE usuario SET password_hash = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 returning *;';
        const res = await query(sql, [password_hash, id])
        return res.rows[0]
    },
    async deactivateUser(id){
        const sql = 'UPDATE usuario SET is_active = FALSE, updated_at = CURRENT_TIMESTAMP WHERE id = $1 returning *;';
        const res = await query(sql, [id])
        return res.rows[0];
    }
}