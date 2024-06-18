// grade.repository.js

const { Grade } = require('../models');

const gradeRepository = {
    async create(gradeData) {
        return await Grade.create(gradeData);
    },

    async update(id, gradeData) {
        return await Grade.update(gradeData, { where: { id } });
    },

    async delete(id) {
        return await Grade.destroy({ where: { id } });
    },

    async getGradeById(id) {
        return await Grade.findOne({ where: { id } });
    },

    async findAllWithPagination(limit, offset) {
        const { rows: grades, count } = await Grade.findAndCountAll({
            limit: limit,
            offset: offset,
            order: [['createdAt', 'DESC']]
        });
        return { grades, count };
    }
};

module.exports = gradeRepository;
