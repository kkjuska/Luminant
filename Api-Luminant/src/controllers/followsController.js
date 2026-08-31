import { followsService } from "../services/followsService";

export const followsController = {
    async getAll(req, res){
        try {
            const getAllfollows = await followsService.getAll();
            res.status(200).json(getAllfollows)
        } catch (error) {
            res.status(500).json(
                {erro: error.message}
            )
        }
    },
    async create(req, res){
        try {
            const novoFollow = await followsService.createFollows(req.user.id, req.params.userId);
            res.status(201).json(novoFollow);
        } catch (error) {
            res.status(400).json(
                {erro: error.message}
            )
        }
    },
    async delete(req, res){
        try {
            const followDeletado = await followsService.deleteFollow(req.user.id, req.params.userId);
            res.status(200).json(followDeletado)
        } catch (error) {
            const status = error.message === "Follow não encontrado!" ? 404 : 400;
            res.status(status).json(
                {erro: error.message}
            )
        }
    }
}