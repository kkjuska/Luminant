import { postRepository } from "../repositories/postRepository";

export const postService = {
    async getAll(){
        return await postRepository.findAll();
    },
    async getById(id){
        return await postRepository.findById(id);
    },
    async createPost(reqPost, userId){
        return await postRepository.createPosts(reqPost, userId);
    },
    async updatePosts(id, reqPost){
        const postExiste = await postRepository.findById(id);
        if (!postExiste) throw new Error('Post não encontrado!');
        return await postRepository.updatePosts(id, reqPost)
    },
    async deletePost(id){
        const postDeletado = await postRepository.deletePost(id);
        if (!postDeletado) throw new Error('post não encotrado!')
        return postDeletado
    }
}