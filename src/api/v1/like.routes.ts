import express = require('express');
import { Like } from '../../model/like.model';

const routes = express.Router();

routes.get('/', (req, res, next) => {
    Like.find({})
        .then((likes) => {
            res.status(200).json(likes);
        })
        .catch(next);
});

routes.get('/:id', (req, res, next) => {
    const likeId = req.params.id;

    Like.findOne({ _id: likeId })
        .then((like) => {
            res.status(200).json(like);
        })
        .catch(next);
});

routes.post('/', (req, res, next) => {
    const likeProps = req.body;

    if (likeProps._id != null) {
        delete likeProps._id;
    }

    Like.create(likeProps)
        .then((like) => {
            res.status(201).json(like);
        })
        .catch(next);
});

routes.put('/:id', (req, res, next) => {
    const likeId = req.params.id;
    const likeProps = req.body;

    Like.findByIdAndUpdate({
        _id: likeId
    }, likeProps)
        .then(() => Like.findById({ _id: likeId }))
        .then((like) => res.status(202).json(like))
        .catch(next);
});

routes.delete('/:id', (req, res, next) => {
    const likeId = req.params.id;

    Like.remove({ _id: likeId })
        .then(() => {
            res.status(204).send();
        })
        .catch(next);
});

export default routes;
