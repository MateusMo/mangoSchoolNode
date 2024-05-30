// grade.repository.js

const { Grade } = require('../models');

const gradeRepository = {
    async create(gradeData) {
        return Grade.create(gradeData);
    },

    async update(id, gradeData) {
        return Grade.update(gradeData, { where: { id } });
    },

    async delete(id) {
        return Grade.destroy({ where: { id } });
    },

    async findAllWithPagination(limit, offset) {
        const { rows: grades, count } = await Grade.findAndCountAll({
            limit: limit,
            offset: offset,
            order: [['date', 'DESC']]
        });
        return { grades, count };
    }
};

module.exports = gradeRepository;
