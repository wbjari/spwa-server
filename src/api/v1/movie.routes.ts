import express = require('express');
import { Movie } from '../../model/movie.model';

const routes = express.Router();

routes.get('/', (req, res, next) => {
    Movie.find({})
        .then((movie) => {
            res.status(200).json(movie);
        })
        .catch(next);
});

routes.get('/:id', (req, res, next) => {
    const movieId = req.params.id;

    Movie.findOne({ _id: movieId })
        .then((movie) => {
            res.status(200).json(movie);
        })
        .catch(next);
});

routes.post('/', (req, res, next) => {
    const movieProps = req.body;

    if (movieProps._id != null || movieProps._id) {
        delete movieProps._id;
    }

    Movie.create(movieProps)
        .then((movie) => {
            res.status(201).json(movie);
        })
        .catch(next);
});

routes.put('/:id', (req, res, next) => {
    const movieId = req.params.id;
    const movieProps = req.body;

    Movie.findByIdAndUpdate({
        _id: movieId
    }, movieProps)
        .then(() => Movie.findById({ _id: movieId }))
        .then((movie) => res.status(202).json(movie))
        .catch(next);
});

routes.delete('/:id', (req, res, next) => {
    const movieId = req.params.id;

    Movie.remove({ _id: movieId })
        .then(() => {
            res.status(204).send();
        })
        .catch(next);
});

export default routes;
