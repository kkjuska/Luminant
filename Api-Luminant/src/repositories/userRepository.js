import { query } from "../config/db.js";

export const userRepostory = {
    async findAll(){
        const res = await query('SELECT * FROM usuario ORDER BY ')
    }
}