import { query } from "../config/db";

export const commentRepository = {
    async findAll(){
        const res = await query('SELECT * FROM comments')
        return res.rows
    },
    async findById(id){
        const res = await query('SELECT * FROM comments WHERE id = $1', [id])
        return res.rows[0]
    },
    async findPostOwner(postId){
        const res = await query('SELECT user_id FROM posts WHERE id = $1', [postId])
        return res.rows[0]
    },
    async createComment(comment, postId, userId){
        const { content } = comment
        const sql = 'INSERT INTO comments ( post_id, user_id, content ) values ( $1, $2, $3 ) returning *';
        const res = await query(sql, [postId, userId, content])
        return res.rows[0]
    },
    async deleteComment(id){
        const sql = 'DELETE from comments WHERE id = $1 returning *';
        const res = await query(sql, [id])
        return res.rows[0]
    }
}