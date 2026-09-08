import { communitiesService } from "../services/communitiesService";

export const communitieController = {
    async getAll(req, res){
        try {
            const getAll = await communitiesService.getAll()
            res.status(200).json(getAll)
        } catch (error) {
            res.status(500).json(
                {erro: error.message}
            )
        }
    },
    async getById(req, res){
        try {
            const getById = await communitiesService.getById(req.params.id)
            res.status(200).json(getById)
        } catch (error) {
            res.status(500).json(
                {erro: error.message}
            )
        }
    },
    async create(req, res){
        try {
            const novaCommunities = await communitiesService.create(req.body, req.params.id)
            res.status(201).json(novaCommunities)
        } catch (error) {
            res.status(400).json(
                {erro: error.message}
            )
        }
    },
    async update(req, res){
        try {
            const communitie = await communitiesService.getById(req.params.id)
            if(!communitie){
                return res.status(404).json(
                    {erro: "Comunidade não encontrada!"}
                )
            }
    
            const communitieAtualizada = await communitiesService.update(req.params.id, req.body)
            res.status(200).json(communitieAtualizada)
        } catch (error) {
            const status = error.message === 'Comunidade não encontrada!' ? 404 : 400;
            res.status(status).json(
                {erro: error.message}
            )
        }
    },
    async delete(req, res){
        try {
            
        } catch (error) {
            
        }
    }
}