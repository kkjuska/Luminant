import { commentRepository } from "../repositories/commentRepository";

export const commentService = {
    async getAll(){
        return await commentRepository.findAll();
    },
    async getById(id){
        return await commentRepository.findById(id);
    },
    async createComment(reqComment, postId, userId){
        const post = await commentRepository.findPostOwner(postId)
        if(!post){
            throw new Error("Post não encontrado!")
        }

        return await commentRepository.createComment(reqComment, postId, userId);
    },
    async deleteComment(id, userId){
        const comment = await commentRepository.findPostOwner(id);
        if(!comment){
            throw new Error("Post não encontrado!")
        }

        if(comment.user_id !== userId){
            throw new Error("você nao pode deletar o comentario deste post");
        }
        const commentDeletado = await commentRepository.deleteComment(id)
        if (!commentDeletado) throw new Error('Comentario não encontrado!')
        return commentDeletado
    }
}