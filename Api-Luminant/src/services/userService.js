import { userRepository } from "../repositories/userRepository.js";
import bcrypt, { hash } from "bcrypt";

export const userService = {
    async getByUsername(username){
        return await userRepository.findByUsername(username);
    },
    async getByEmail(email){
        return await userRepository.findByEmail(email);
    },
    async getById(id){
        return await userRepository.findById(id);
    },
    async getByPublicId(id){
        return await userRepository.findByPublicId(id);
    },
    async createUser(reqUser){

        const password_hash = await bcrypt.hash(reqUser.password, 12);

        reqUser.password_hash = password_hash;
        delete reqUser.password;

        return await userRepository.createUser(reqUser);
    },
    async updateProfile(id, reqUser){
        const userExiste = await userRepository.findById(id);
        if (!userExiste) throw new Error('Usuario não encontrado!')

        return await userRepository.updateProfile(id, reqUser);
    },
    async updatePassword(id, reqUser){
        const userExiste = await userRepository.findById(id);
        if (!userExiste) throw new Error('Usuario não encontrado!')

        const password_hash = await bcrypt.hash(reqUser.password, 12);

        return await userRepository.updatePassword(id, password_hash);
    },
    async deactivateUser(id, reqUser){
        const userDesativado = await userRepository.deactivateUser(id);
        if (!userDesativado) throw new Error('Usuario não encontrado!')
        
        return await userDesativado;
    },
    async login(reqUser){
        const user = await userRepository.findByEmailLogin(reqUser.email);

        if(!user){
            throw new Error("Email ou senha inválidos.");
        }

        const passwordMatch = await bcrypt.compare(
            reqUser.password,
            user.password_hash
        );

        if(!passwordMatch) {
            throw new Error("Email ou senha incorretos")
        }

        delete user.password_hash;

        return user;
    }
}