import User from '../models/User.js';

class UserRepository {
    async create(userData){
        const savedUser = new User(userData);
        await savedUser.save();
        return savedUser;
    }   
    async findAll(){
        return User.find();
    }
    async findById(id) {
        return User.findById(id);
    }
    async updateById(id, userData) {
        return User.findByIdAndUpdate(id, userData, { new: true })
    }
    async deleteById(id) {
        return User.findByIdAndDelete(id)
    }
}

const userRepositories = new UserRepository();
export default userRepositories;