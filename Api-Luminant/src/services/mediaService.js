import { mediaRepository } from "../repositories/mediaRepository.js";

export const mediaService = {
    async getAll(){
        return await mediaRepository.findAll();
    },
    async getById(id){
        return await mediaRepository.findById(id);
    },
    async createMedia(reqMedia, postId){
        return await mediaRepository.createMedia(reqMedia, postId)
    },
    async deleteMedia(id){
        const mediaDeletado = await mediaRepository.deleteMedia(id);
        if (!mediaDeletado) throw new Error('Post não encontrado!')
        return mediaDeletado
    }
}