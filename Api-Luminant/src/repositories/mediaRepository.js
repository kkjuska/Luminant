import { query } from "../config/db";

export const mediaRepository = {
    async findAll(){
        const res = await query('SELECT * FROM media')
        return res.rows
    },
    async findById(id){
        const res = await query('SELECT * FROM media WHERE id = $1', [id])
        return res.rows[0]
    },
    async findPostOwner(postId){
        const res = await query('SELECT user_id FROM posts WHERE id = $1', [postId])
        return res.rows[0]
    },
    async createMedia(media, postId){
        const { url, media_type, width, height, duration, size } = media;
        const sql = 'INSERT INTO media (post_id, url, media_type, width, height, duration, size) values ($1, $2, $3, $4, $5, $6, $7) returning *';
        const res = await query(sql, [postId, url, media_type, width, height, duration, size])
        return res.rows[0]
    },
    async deleteMedia(id){
        const sql = 'DELETE from media WHERE id = $1 returning *';
        const res = await query(sql, [id])
        return res.rows[0]
    }
}