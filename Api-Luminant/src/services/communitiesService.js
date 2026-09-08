import { communitiesRepository } from "../repositories/communitiesRepository";

export const communitiesService = {
    async getAll(){
        return await communitiesRepository.findAll();
    },
    async getById(id){
        return await communitiesRepository.findByID(id);
    },
    async create(reqCommunities, id){
        return await communitiesRepository.create(reqCommunities, id)
    },
    async update(id, reqCommunities){
        return await communitiesRepository.updateCommunities(id, reqCommunities)
    },
    async delete(id){
        const communitieDeletado = await communitiesRepository.deleteCommunities(id)
        if (!communitieDeletado) throw new Error('Comunidade não encontrada!')
        return communitieDeletado
    }
}