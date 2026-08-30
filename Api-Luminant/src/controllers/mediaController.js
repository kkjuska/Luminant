import { mediaService } from "../services/mediaService";

export const mediaController = {
    async getAll(req, res){
        try {
            const getAllMedia = await mediaService.getAll();
            res.status(200).json(getAllMedia)
        } catch (error) {
            res.status(500).json(
                {erro: error.message}
            )
        }
    },
    async getById(req, res){
        try {
            const getMediaById = await mediaService.getById(req.params.id);
            res.status(200).json(getMediaById)
        } catch (error) {
            res.status(500).json(
                {erro: error.message}
            )
        }
    },
    async create(req, res){
        try {
            const novoMedia = await mediaService.createMedia(req.body, req.body.post_id, req.user.id);
            res.status(201).json(novoMedia)
        } catch (error) {
            res.status(400).json(
                {erro: error.message}
            )
        }
    },
    async delete(req, res){
        try {
            const media = await mediaService.getById(req.params.id);
            
            if(!media){
                return res.status(404).json(
                    {erro: "Media não encontrado!"}
                )
            }
            const mediaDeletado = await mediaService.deleteMedia(req.params.id, media.post_id, req.user.id);
            res.status(200).json(mediaDeletado)
        } catch (error) {
            const status = error.message === "Media não encontrado" ? 404 : 400;
            res.status(status).json(
                {erro: error.message}
            )
        }
    }
}