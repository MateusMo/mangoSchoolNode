'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const grades = [];
        const currentDate = new Date();
        
        for (let i = 0; i < 400; i++) {
            const studentId = i + 1;
            grades.push({
                studentName: `Student ${studentId}`,
                subjectName: ['Math', 'Science', 'History', 'Geography', 'English'][studentId % 5],
                date: new Date(currentDate.getTime() + (i * 60 * 60 * 1000)), // Incremental dates
                arith: Math.floor(Math.random() * 100),
                kus: Math.floor(Math.random() * 100),
                he: Math.floor(Math.random() * 100),
                sa: Math.floor(Math.random() * 100),
                writ: Math.floor(Math.random() * 100),
                read: Math.floor(Math.random() * 100),
                total: null,
                ave: null,
                createdAt: currentDate,
                updatedAt: currentDate
            });
        }

        // Calculate total and average
        grades.forEach(grade => {
            grade.total = grade.arith + grade.kus + grade.he + grade.sa + grade.writ + grade.read;
            grade.ave = Math.round(grade.total / 6);
        });

        // Habilitando o logging para detalhar erros de validação
        await queryInterface.bulkInsert('Grades', grades, { logging: console.log });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Grades', null, {});
    }
};
