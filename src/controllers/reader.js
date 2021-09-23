const { Reader } = require('../models');

exports.create = async (req, res) => {
    try {
        const newReader = await Reader.create(req.body);
        
        res.status(201).json(newReader);
    }
    catch(err){
        console.log(err);
    }
};

exports.readAll = async (req, res) => {
    try {
        const readers = await Reader.findAll();

        res.status(200).json(readers);
    }
    catch(err){
        console.log(err)
    }
};

exports.readById = async (req, res) => {
    try {
        const readerId = req.params.id;
        const reader = await Reader.findByPk(readerId);

        res.status(200).json(reader);
    }
    catch(err){
        console.log(err);
    }
};

// // exports.update = async (req, res) => {
// //     try {
// //         const readerId = req.params.id;
// //         const [ updatedRows ] = await Reader.update(req.params.body, { where: {} });

// //         res.status(200).json
// //     }
// }