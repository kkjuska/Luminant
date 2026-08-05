import { userService  } from "../services/userService.js";

export const userController = {
    async getByUsername(req, res){
        try {
            const getUserByUsername = await userService.getByUsername(req.params.username);
            res.status(200).json(getUserByUsername)
        } catch (error) {
            res.status(500).json(
                {erro: error.message}
            )
        }
    },
    async getByEmail(req, res){
        try {
            const getUserByEmail = await userService.getByEmail(req.params.email);
            res.status(200).json(getUserByEmail)
        } catch (error) {
            res.status(500).json(
                {erro: error.message}
            )
        }
    },
    async getById(req, res){
        try {
            const getUserById = await userService.getById(req.params.id);
            res.status(200).json(getUserById)
        } catch (error) {
            res.status(500).json(
                {erro: error.message}
            )
        }
    },
    async getByPublicId(req, res){
        try {
            const getUserByPublicId = await userService.getByPublicId(req.params.id);
            res.status(200).json(getUserByPublicId)
        } catch (error) {
            res.status(500).json(
                {erro: error.message}
            )
        }
    },
    async create(req, res){
        try {
            const novoUser = await userService.createUser(req.body);
            res.status(201).json(novoUser)
        } catch (error) {
            res.status(400).json(
                {erro: error.message}
            )
        }
    },
    async updateProfile(req, res){
        try {
            const userAtualizado = await userService.updateProfile(req.params.id, req.body);
            res.status(200).json(userAtualizado);
        } catch (error) {
            const status = error.message === 'Usuario não encontrado!' ? 404 : 400;
            res.status(status).json(
                {erro: error.message}
            )
        }
    },
    async updatePassword(req, res){
        try {
            const senhaAtualizada = await userService.updatePassword(req.params.id, req.body);
            res.status(200).json(senhaAtualizada);
        } catch (error) {
            const status = error.message === 'Usuario não encontrado!' ? 404 : 400;
            res.status(status).json(
                {erro: error.message}
            )
        }
    },
    async deactivate(req, res){
        try {
            const user = await userService.deactivateUser(req.params.id);
            res.status(200).json(user)
        } catch (error) {
            const status = error.message === "Usuario não encontrado!" ? 404 : 400;
            res.status(status).json(
                {erro: error.message}
            )
        }
    },
    async login(req, res){
        try {
            const user = await userService.login(req.body);
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(
                {erro: error.message}
            )
        }
    }
}