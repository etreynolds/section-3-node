const express = require('express');
const app = express();
const ExpressError = require('./expressError');

const { convertAndValidateNumsArray, findMode, findMean, findMedian } = require('./helpers');


app.get('/mean', function (req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError('You must include a query of nums with a comma-separated list of numbers.', 400)
    }
    let numsAsStrings = req.query.nums.split(',');

    let nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: 'mean',
        value: findMean(nums)
    }

    return res.send(result);
})

app.get('/median', function (req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError('You must include a query of nums with a comma-separated list of numbers.', 400)
    }
    let numsAsStrings = req.query.nums.split(',');

    let nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: 'median',
        value: findMedian(nums)
    }

    return res.send(result);
})

app.get('/mode', function (req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError('You must include a query of nums with a comma-separated list of numbers.', 400)
    }
    let numsAsStrings = req.query.nums.split(',');

    let nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: 'mode',
        value: findMode(nums)
    }

    return res.send(result);
})

app.get('/all', function (req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError('You must include a query of nums with a comma-separated list of numbers.', 400)
    }
    let numsAsStrings = req.query.nums.split(',');

    let nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: 'all',
        mean: findMean(nums),
        median: findMedian(nums),
        mode: findMode(nums)
    }

    return res.send(result);
})


app.listen(3000, function () {
    console.log('App on port 3000');
}) 