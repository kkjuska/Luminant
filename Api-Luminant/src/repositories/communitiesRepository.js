import { query } from "../config/db";

export const communitiesRepository = {
    async findAll(){
        const res = await query('SELECT * FROM communities')
        return res.rows
    },
    async findByID(id){
        const res = await query('SELECT * FROM communities WHERE id = $1', [id])
        return res.rows[0]
    },
    async create(communities, id){
        const { nome, description, icon_url, owner_id } = communities
        const sql = 'INSERT INTO communities (nome, description, icon_url, owner_id) WHERE values($1, $2, $3, $4) returning *'
        const res = await query(sql, [id, nome, description, icon_url, owner_id])
        return res.rows[0]
    },
    async updateCommunities(id, communities){
        const { nome, description, icon_url, owner_id } = communities
        const sql = 'UPDATE communities SET nome = $1, description = $2, icon_url = $3, owner_id = $4 WHERE id = $5 returning *'
        const res = await query(sql, [id, nome, description, icon_url, owner_id])
        return res.rows[0]
    },
    async deleteCommunities(id){
        const sql = 'DELETE FROM communities WHERE id = $1 returning *'
        const res = await query(sql, [id])
        return res.rows[0]
    }
}