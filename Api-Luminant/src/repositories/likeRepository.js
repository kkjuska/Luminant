import { query } from "../config/db";

export const likeRepository = {
    async findAll(){
        const res = await query('SELECT * FROM likes')
        return res.rows
    },
    async findPostOwner(postId){
        const res = await query('SELECT user_id FROM posts WHERE id = $1', [postId])
        return res.rows[0]
    },
    async createLike(postId, userId){
        const sql = 'INSERT INTO likes ( post_id, user_id ) values ( $1, $2 ) returning *';
        const res = await query(sql, [postId, userId])
        return res.rows[0]
    },
    async deleteLike(postId, userId){
        const sql = 'DELETE FROM likes WHERE post_id = $1 AND user_id = $2 returning *';
        const res = await query(sql, [postId, userId])
        return res.rows[0]
    }
}