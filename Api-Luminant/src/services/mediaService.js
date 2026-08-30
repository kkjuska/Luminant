import { mediaRepository } from "../repositories/mediaRepository.js";

export const mediaService = {
    async getAll(){
        return await mediaRepository.findAll();
    },
    async getById(id){
        return await mediaRepository.findById(id);
    },
    async createMedia(reqMedia, postId, userId){
        const post = await mediaRepository.findPostOwner(postId);
        if(!post){
            throw new Error("Post não encontrado!")
        }
        
        if(post.user_id !== userId){
            throw new Error("Você não pode adicionar uma media a este post!");
        }

        return await mediaRepository.createMedia(reqMedia, postId)
    },

    async deleteMedia(id, postId, userId){
        const post = await mediaRepository.findPostOwner(postId);
        if(!post){
            throw new Error("Post não encontrado!")
        }

        if(post.user_id !== userId){
            throw new Error("Você não pode deletar a media deste post!")
        }
        const mediaDeletado = await mediaRepository.deleteMedia(id);
        if (!mediaDeletado) throw new Error('Media não encontrado!')
        return mediaDeletado
    }
}