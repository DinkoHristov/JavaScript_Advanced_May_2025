const assert = require('chai').assert;
const artGallery = require('./artGallery');

describe('artGallery Tests', () => {

    describe('Test addArtwork Function', () => {
        it('String input throws error when invalid type', () => {
            let addArtwork = artGallery.addArtwork;
            assert.throw(() => addArtwork(10, 10, 'string'), 'Invalid Information!');
        });

        it('Artist input throws error when invalid type', () => {
            let addArtwork = artGallery.addArtwork;
            assert.throw(() => addArtwork('string', 10, 10), 'Invalid Information!');
        });

        it('String input throws error when empty', () => {
            let addArtwork = artGallery.addArtwork;
            assert.throw(() => addArtwork(10, 'string'), 'Invalid Information!');
        });

        it('Artist input throws error when empty', () => {
            let addArtwork = artGallery.addArtwork;
            assert.throw(() => addArtwork('string', 10), 'Invalid Information!');
        });

        it('Dimension input throws error when invalid type', () => {
            let addArtwork = artGallery.addArtwork;
            assert.throw(() => addArtwork('string', 10, 'string'), 'Invalid Dimensions!');
        });

        it('Dimension input throws error when width is negative number', () => {
            let addArtwork = artGallery.addArtwork;
            assert.throw(() => addArtwork('string', '-10 x 20', 'string'), 'Invalid Dimensions!');
        });

        it('Dimension input throws error when height is negative number', () => {
            let addArtwork = artGallery.addArtwork;
            assert.throw(() => addArtwork('string', '10 x -20', 'string'), 'Invalid Dimensions!');
        });

        it('Dimension input throws error when width and height are negative numbers', () => {
            let addArtwork = artGallery.addArtwork;
            assert.throw(() => addArtwork('string', '-10 x -20', 'string'), 'Invalid Dimensions!');
        });

        it('When Artist input is not one of Van Gogh, Picasso, Monet throws error', () => {
            let addArtwork = artGallery.addArtwork;
            assert.throw(() => addArtwork('string', '10 x 20', 'Moccart'), 'This artist is not allowed in the gallery!');
        });

        it('Inputs are valid and returns correct result', () => {
            let title = 'Piano';
            let dimensions = '10 x 30';
            let artist = 'Monet';
            let addArtwork = artGallery.addArtwork;

            assert.equal(addArtwork(title, dimensions, artist) , `Artwork added successfully: '${title}' by ${artist} with dimensions ${dimensions}.`);
        });
    });

    describe('Test calculateCosts Function', () => {
        it('exhibitionCosts Input throws error when invalid type', () => {
            let calculateCosts = artGallery.calculateCosts;
            assert.throw(() => calculateCosts('string', 10, true), 'Invalid Information!');
        });

        it('insuranceCosts Input throws error when invalid type', () => {
            let calculateCosts = artGallery.calculateCosts;
            assert.throw(() => calculateCosts(10, 'string', true), 'Invalid Information!');
        });

        it('exhibitionCosts Input throws error when invalid type', () => {
            let calculateCosts = artGallery.calculateCosts;
            assert.throw(() => calculateCosts(10, 10, 'string'), 'Invalid Information!');
        });

        it('exhibitionCosts Input throws error when smaller than 0', () => {
            let calculateCosts = artGallery.calculateCosts;
            assert.throw(() => calculateCosts(-5, 10, true), 'Invalid Information!');
        });

        it('insuranceCosts Input throws error when smaller than 0', () => {
            let calculateCosts = artGallery.calculateCosts;
            assert.throw(() => calculateCosts(10, -2, true), 'Invalid Information!');
        });

        it('If sponsor is false return message withour change to price', () => {
            let calculateCosts = artGallery.calculateCosts;
            assert.equal(calculateCosts(10, 15, false), `Exhibition and insurance costs are 25$.`);
        });

        it('If sponsor is true return message with price reduced by 10%', () => {
            let calculateCosts = artGallery.calculateCosts;
            assert.equal(calculateCosts(10, 10, true), `Exhibition and insurance costs are 18$, reduced by 10% with the help of a donation from your sponsor.`);
        });
    });

    describe('Test organizeExhibits Function', () => {
        it('artworksCount Input throws error when not the correct type', () => {
            let organizeExhibits = artGallery.organizeExhibits;
            assert.throw(() => organizeExhibits('string', 10), 'Invalid Information!');
        });

        it('displaySpacesCount Input throws error when not the correct type', () => {
            let organizeExhibits = artGallery.organizeExhibits;
            assert.throw(() => organizeExhibits(10, 'string'), 'Invalid Information!');
        });

        it('artworksCount Input throws error when smaller than 0', () => {
            let organizeExhibits = artGallery.organizeExhibits;
            assert.throw(() => organizeExhibits(-5, 10), 'Invalid Information!');
        });

        it('artworksCount Input throws error when is equal to 0', () => {
            let organizeExhibits = artGallery.organizeExhibits;
            assert.throw(() => organizeExhibits(0, 10), 'Invalid Information!');
        });

        it('displaySpacesCount Input throws error when smaller than 0', () => {
            let organizeExhibits = artGallery.organizeExhibits;
            assert.throw(() => organizeExhibits(10, -5), 'Invalid Information!');
        });

        it('displaySpacesCount Input throws error when is equal to 0', () => {
            let organizeExhibits = artGallery.organizeExhibits;
            assert.throw(() => organizeExhibits(10, 0), 'Invalid Information!');
        });

        it('Returns first message correct when artworksPerSpace is bigger than 5', () => {
            let organizeExhibits = artGallery.organizeExhibits;
            assert.equal(organizeExhibits(15, 2), 'You have 2 display spaces with 7 artworks in each space.');
        });

        it('Returns first message correct when artworksPerSpace is equal to 5', () => {
            let organizeExhibits = artGallery.organizeExhibits;
            assert.equal(organizeExhibits(10, 2), 'You have 2 display spaces with 5 artworks in each space.');
        });
        
        it('Returns first message correct when artworksPerSpace is smaller than 5', () => {
            let organizeExhibits = artGallery.organizeExhibits;
            assert.equal(organizeExhibits(10, 3), 'There are only 3 artworks in each display space, you can add more artworks.');
        });
    });

});