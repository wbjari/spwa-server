import express = require('express');
import { Publisher } from '../../model/publisher.model';

const routes = express.Router();

routes.get('/', (req, res, next) => {
    Publisher.find({})
        .then((publisher) => {
            res.status(200).json(publisher);
        })
        .catch(next);
});

routes.get('/:id', (req, res, next) => {
    const publisherId = req.params.id;

    Publisher.findOne({ _id: publisherId })
        .then((publisher) => {
            res.status(200).json(publisher);
        })
        .catch(next);
});

routes.post('/', (req, res, next) => {
    const publisherProps = req.body;

    if (publisherProps._id != null || publisherProps._id) {
        delete publisherProps._id;
    }

    Publisher.create(publisherProps)
        .then((publisher) => {
            res.status(201).json(publisher);
        })
        .catch(next);
});

// routes.put('/:id', (req, res, next) => {
//     const publisherId = req.params.id;
//     const publisherProps = req.body;

//     Publisher.findByIdAndUpdate({
//         _id: publisherId
//     }, publisherProps)
//         .then(() => Publisher.findById({ _id: publisherId }))
//         .then((publisher) => res.status(202).json(publisher))
//         .catch(next);
// });

routes.delete('/:id', (req, res, next) => {
    const publisherId = req.params.id;

    Publisher.remove({ _id: publisherId })
        .then(() => {
            res.status(204).send();
        })
        .catch(next);
});

export default routes;
