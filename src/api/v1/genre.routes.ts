import express = require('express');
import { Genre } from '../../model/genre.model';

const routes = express.Router();

routes.get('/', (req, res, next) => {
    Genre.find({})
        .then((genres) => {
            res.status(200).json(genres);
        })
        .catch(next);
});

routes.get('/:id', (req, res, next) => {
    const genreId = req.params.id;

    Genre.findOne({ _id: genreId })
        .then((genre) => {
            res.status(200).json(genre);
        })
        .catch(next);
});

routes.post('/', (req, res, next) => {
    const genreProps = req.body;

    if (genreProps._id != null) {
        delete genreProps._id;
    }

    Genre.create(genreProps)
        .then((genre) => {
            res.status(201).json(genre);
        })
        .catch(next);
});

routes.put('/:id', (req, res, next) => {
    const genreId = req.params.id;
    const genreProps = req.body;

    Genre.findByIdAndUpdate({
        _id: genreId
    }, genreProps)
        .then(() => Genre.findById({ _id: genreId }))
        .then((genre) => res.status(202).json(genre))
        .catch(next);
});

routes.delete('/:id', (req, res, next) => {
    const genreId = req.params.id;

    Genre.remove({ _id: genreId })
        .then(() => {
            res.status(204).send();
        })
        .catch(next);
});

export default routes;
