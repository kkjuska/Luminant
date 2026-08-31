import { likeService } from "../services/likeService";

export const likeController = {
    async getAll(req, res){
        try {
            const getAllLikes = await likeService.getAll();
            res.status(200).json(getAllLikes)
        } catch (error) {
            res.status(500).json(
                {erro: error.message}
            )
        }
    },
    async create(req, res){
        try {
            const novoLike = await likeService.createLike(req.body.post_id, req.user.id);
            res.status(201).json(novoLike)
        } catch (error) {
            res.status(500).json(
                {erro: error.message}
            )
        }
    },
    async delete(req, res){
        try {
            const likeDeletado = await likeService.deleteLike(req.params.post_id, req.user.id);
            res.status(200).json(likeDeletado)
        } catch (error) {
            const status = error.message === "Like não encontrado!" ? 404 : error.message === "Você não pode tirar o like deste post!" ? 403 : 400;
            res.status(status).json(
                {erro: error.message}
            )
        }
    }
}