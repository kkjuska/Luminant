import { postService } from "../services/postServices";

export const postController = {
    async getAll(req, res){
        try {
            const getAllPosts = await postService.getAll();
            res.status(200).json(getAllPosts)
        } catch (error) {
            res.status(500).json(
                {erro: error.message}
            )
        }
    },
    async getById(req, res){
        try {
            const getPostById = await postService.getById(req.params.id);
            res.status(200).json(getPostById)
        } catch (error) {
            res.status(500).json(
                {erro: error.message}
            )
        }
    },
    async create(req, res){
        try {
            const novoPost = await postService.createPost(req.body, req.user.id);
            res.status(201).json(novoPost)
        } catch (error) {
            res.status(400).json(
                {erro: error.message}
            )
        }
    },
    async updatePost(req, res){
        try {
            const post = await postService.getById(req.params.id);  
            if(!post) {
                return res.status(404).json(
                    {erro: "Post não encontrado!"}
                )
            }
            
            if(req.user.id !== post.user.id){
                return res.status(403).json(
                    {erro: "Você não pode alterar este post"}
                )
            }

            const postAtualizado = await postService.updatePosts(req.params.id, req.body);
            res.status(200).json(postAtualizado);
        } catch (error) {
            const status = error.message === 'Post não econtrado!' ? 404 : 400;
            res.status(status).json(
                {erro: error.message}
            )
        }
    },
    async delete(req, res){
        try {
            const post = await postService.getById(req.params.id);
            if(!post){
                return res.status(404).json(
                    {erro: "post não encontrado"}
                )
            }
            if(req.user.id !== post.user.id){
                return res.status(403).json(
                    {erro: "Você não pode alterar esse post"}
                )
            }
            const postDeletado = await postService.deletePost(req.params.id);
            res.status(200).json(post)
        } catch (error) {
            const status = error.message === "Post não encontrado" ? 404 : 400;
            res.status(status).json(
                {erro: error.message}
            )
        }
    }
}