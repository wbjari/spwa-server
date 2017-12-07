import express = require('express');
import { Deejay } from '../../model/deejay.model';

const routes = express.Router();

routes.get('/', (req, res, next) => {
    Deejay.find({})
        .then((deejay) => {
            res.status(200).json(deejay);
        })
        .catch(next);
});

routes.get('/:id', (req, res, next) => {
    const deejayId = req.params.id;

    Deejay.findOne({ _id: deejayId })
        .then((deejay) => {
            res.status(200).json(deejay);
        })
        .catch(next);
});

routes.post('/', (req, res, next) => {
    const deejayProps = req.body;

    if (deejayProps._id != null || deejayProps._id) {
        delete deejayProps._id;
    }

    Deejay.create(deejayProps)
        .then((deejay) => {
            res.status(201).json(deejay);
        })
        .catch(next);
});

routes.put('/:id', (req, res, next) => {
    const deejayId = req.params.id;
    const deejayProps = req.body;

    Deejay.findByIdAndUpdate({
        _id: deejayId
    }, deejayProps)
        .then(() => Deejay.findById({ _id: deejayId }))
        .then((deejay) => res.status(202).json(deejay))
        .catch(next);
});

routes.delete('/:id', (req, res, next) => {
    const deejayId = req.params.id;

    Deejay.remove({ _id: deejayId })
        .then(() => {
            res.status(204).send();
        })
        .catch(next);
});

export default routes;
