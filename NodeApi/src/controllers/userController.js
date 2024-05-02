import userRepositories from '../repositories/userRepositories.js';
import bcrypt from 'bcrypt';

export async function createUser(req, res){
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    req.body.password = hashedPassword;
    try {
        const user = await userRepositories.create(req.body);
        res.status(201).json(user);
    }
    catch (error){
        res.status(400).json({ message: error.message})
    }

}

export async function getAllUsers(req, res) {
    try{
        const users = await userRepositories.findAll();
        res.status(200).json(users);
    }
    catch (error){
        res.status(400).json({ message: error.message})
    }
}

export async function getById(req, res) {
    try {
        const user = await userRepositories.findById(req.params.id);
        res.status(200).json(user);
    }
    catch (error){
        res.status(400).json({ message: error.message})
    }
}

export async function updateUser(req, res){
    try {
        const user = await userRepositories.updateById(req.params.id, req.body);
        res.status(200).json(user);
    }
    catch (error){
        res.status(400).json({ message: error.message})
    }
}

export async function deleteUser(req, res){
    try {
        const deleteUsers = await userRepositories.deleteById(req.params.id);
        res.status(200).json({message: "Usuario deletado com sucesso"});
    }
    catch (error){
        res.status(400).json({ message: error.message})
    }
}

export async function autenticadedRoute(req, res) {
    res.status(200).json({
        statusCode: 200,
        message: "Rota autenticada com sucesso!",
    });
}