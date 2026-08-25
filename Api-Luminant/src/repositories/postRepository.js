import { query } from "../config/db";

export const postRepository = {
    async findAll(){
        const res = await query('SELECT * FROM posts');
        return res.rows
    },
    async findById(id){
        const res = await query('SELECT * from posts WHERE id = $1', [id]);
        return res.rows[0]
    },
    async createPosts(post, userId){
        const { title, content, post_type } = post;
        const sql = 'INSERT INTO posts (user_id, title, content, post_type) VALUES ($1, $2, $3, $4) returning *'
        const res = await query(sql, [userId, title, content, post_type]);
        return res.rows[0]
    },
    async updatePosts(id, post){
        const { title, content, post_type } = post;
        const sql = 'UPDATE posts SET title = $1, content = $2, post_type = $3 WHERE id = $4 returning *';
        const res = await query(sql, [title, content, post_type, id])
        return res.rows[0]
    },
    async deletePost(id){
        const sql = 'DELETE from posts WHERE id = $1 returning *;';
        const res = await query(sql, [id])
        return res.rows[0];
    }
}