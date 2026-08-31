import { likeRepository } from "../repositories/likeRepository";

export const likeService = {
    async getAll(){
        return await likeRepository.findAll();
    },
    async createLike(postId, userId){
        const post = await likeRepository.findPostOwner(postId)
        if(!post){
            throw new Error("Post não encontrado!")
        }

        return await likeRepository.createLike(postId, userId);
    },
    async deleteLike(postId, userId){
        const likeDeletado = await likeRepository.deleteLike(postId, userId)
        if(!likeDeletado) throw new Error('Like não encontrado!')
        return likeDeletado
    }
}