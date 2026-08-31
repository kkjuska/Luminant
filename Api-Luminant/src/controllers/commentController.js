import { commentService } from "../services/commentService";

export const commentController = {
    async getAll(req, res){
        try {
            const getAllComments = await commentService.getAll();
            res.status(200).json(getAllComments)
        } catch(error) {
            res.status(500).json(
                {erro: error.message}
            )
        }
    },
    async getById(req, res){
        try {
            const getCommentById = await commentService.getById(req.params.id);
            res.status(200).json(getCommentById)
        } catch (error) {
            res.status(500).json(
                {erro: error.message}
            )
        }
    },
    async create(req, res){
        try {
            const novoComment = await commentService.createComment(req.body, req.body.post_id, req.user.id);
            res.status(201).json(novoComment)
        } catch (error) {
            res.status(400).json(
                {erro: error.message}
            )
        }
    },
    async delete(req, res){
        try {
            const commentDeletado = await commentService.deleteComment(req.params.id, req.user.id);
            res.status(200).json(commentDeletado)
        } catch (error) {
            const status = error.message === "Comentário não encontrado!" ? 404 : error.message === "Você não pode deletar esse comentario!" ? 403 : 400;
            res.status(status).json(
                {erro: error.message}
            )
        }
    }
}