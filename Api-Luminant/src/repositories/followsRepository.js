import { query } from "../config/db";

export const followsRepository = {
    async findAll(){
        const res = await query('SELECT * FROM follows')
        return res.rows
    },
    async findByFollower(followerId){
        const res = await query('SELECT * FROM follows WHERE follower_id = $1', [followerId])
        return res.rows[0]
    },
    async findByFollowing(followingId){
        const res = await query('SELECT * FROM follows WHERE following_id = $1', [followingId])
        return res.rows[0]
    },
    async findUser(userId){
        const res = await query('SELECT * FROM usuario WHERE id = $1', [userId])
        return res.rows[0]
    },
    async findFollow(followerId, followingId){
        const res = await query('SELECT * FROM follows WHERE follower_id = $1 AND following_id = $2', [followerId, followingId]);
        return res.rows[0]
    },
    async createFollow(followerId, followingId){
        const sql = 'INSERT INTO follows (follower_id, following_id) values ($1, $2) returning *';
        const res = await query(sql, [followerId, followingId]);
        return res.rows[0]
    },
    async deleteFollow(followerId, followingId){
        const res = await query('DELETE FROM follows WHERE follower_id = $1 AND following_id = $2 returning *', [followerId, followingId]);
        return res.rows[0]
    }
}