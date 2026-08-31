import { followsRepository } from "../repositories/followsRepository";

export const followsService = {
    async getAll(){
        return await followsRepository.findAll();
    },
    async getByFollower(followerId){
        return await followsRepository.findByFollower(followerId);
    },
    async getByFollowing(followingId){
        return await followsRepository.findByFollowing(followingId);
    },
    async createFollows(followerId, followingId){
        if( followerId === followingId){
            throw new Error("Você não pode seguir a si mesmo!")
        }

        const usuario = await followsRepository.findUser(followingId)

        if (!usuario){
            throw new Error("Usuario não encontrado!")
        }

        const followsExiste = await followsService.findFollow(followerId, followingId)

        if (followsExiste){
            throw new Error("Você já segue este usuário!")
        }
        return await followsRepository.createFollow(followerId, followingId)
    },
    async deleteFollow(followerId, followingId){
        const follow = await followsRepository.findFollow(followerId, followingId)

        if (!follow){
            throw new Error("Follow não encontrado!")
        }

        return await followsRepository.deleteFollow(followerId, followingId);
    }
}