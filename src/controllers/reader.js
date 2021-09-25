const { Reader } = require('../models');
const reader = require('../models/reader');

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
    const readerId = req.params.id;
    const reader = await Reader.findByPk(readerId);
   
        if(!reader){
        res.status(404).json({error: 'The reader could not be found'})
    }
        res.status(200).json(reader);
    
};

exports.update = async (req, res) => {
    let readerDetails = await Reader.findByPk(req.params.id)
    const updateData = req.body;

    const [ updatedRows ] = await Reader.update(updateData, { where: {id: req.params.id} });

    readerDetails = await Reader.findByPk(req.params.id)

    res.status(200).json(readerDetails);
    
};