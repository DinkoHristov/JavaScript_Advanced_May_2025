const assert = require('chai').assert;
const streamingServiceSelector = require('./streamingServiceSelector');

describe('streamingServiceSelector Tests', () => {

    describe('selectingContent', () => {
        it('Throw error: We currently support these genres', () => {
            // Arrange
            const supportedGenres = ["Action", "Comedy", "Drama", "Thriller", "Horror", "Romance", "Sci-Fi"];
            let notExistingGenre = 'Fantasy';
            let expectedError = `We currently support these genres: ${supportedGenres.join(", ")}.`;
    
            // Act
            let actualError = '';
            try {
                streamingServiceSelector.selectingContent('', '', notExistingGenre);
            } catch (error) {
                actualError = error.message;
            }
    
            // Assert
            assert.throws(function () {
                streamingServiceSelector.selectingContent('', '', notExistingGenre)   
            });
            assert.equal(expectedError, actualError);
        });
    
        it('Throw error: We currently only support Movie or TV Show types.', () => {
            // Arrange
            let supportedTypes = ['Movie', 'TV Show'];
            let notSupportedType = 'Series';
            let expectedError = `We currently only support 'Movie' or 'TV Show' types.`;
    
            // Act
            let actualError = '';
            try {
                streamingServiceSelector.selectingContent(notSupportedType, '', 'Action');
            } catch(error) {
                actualError = error.message;
            }
    
            // Assert
            assert.throws(() => {streamingServiceSelector.selectingContent(notSupportedType, '', 'Action')});
            assert.equal(expectedError, actualError);
        });
    
        it('Returns successulyy added movie message: You can watch', () => {
            // Arrange
            let genre = 'Action';
            let type = 'Movie';
            let platform = 'Netflix';
            let expectedMessage = `You can watch this ${genre} ${type} on ${platform}. Enjoy your ${genre}-filled experience!`;
    
            // Act
            let actualMessage = streamingServiceSelector.selectingContent('Movie', 'Netflix', 'Action');
    
            // Assert
            assert.equal(actualMessage, expectedMessage);
        });
    });
    
    describe('availablePlatforms', () => {
        it('Throws error when platforms is not array parameter: Invalid platform selection.', () => {
            // Arrange
            let platforms = 'Not array';
            let selectedPlatformIndex = 10;
            let expectedMessage = 'Invalid platform selection.';
    
            // Act
            let actualMessage = '';
            try {
                streamingServiceSelector.availablePlatforms(platforms, selectedPlatformIndex);
            } catch(error) {
                actualMessage = error.message;
            }
    
            // Assert
            assert.throws(() => {streamingServiceSelector.availablePlatforms(platforms, selectedPlatformIndex)});
            assert.equal(actualMessage, expectedMessage);
        });
    
        it('Throws error when selectedPlatformIndex is not integer: Invalid platform selection.', () => {
            // Arrange
            let platforms = ['Netflix', 'FilmiSub'];
            let selectedPlatformIndex = 0.6;
            let expectedMessage = 'Invalid platform selection.';
    
            // Act
            let actualMessage = '';
            try {
                streamingServiceSelector.availablePlatforms(platforms, selectedPlatformIndex);
            } catch(error) {
                actualMessage = error.message;
            }
    
            // Assert
            assert.throws(() => {streamingServiceSelector.availablePlatforms(platforms, selectedPlatformIndex)});
            assert.equal(actualMessage, expectedMessage);
        });
    
        it('Throws error when selectedPlatformIndex is smaller than 0: Invalid platform selection.', () => {
            // Arrange
            let platforms = ['Netflix', 'FilmiSub'];
            let selectedPlatformIndex = -2;
            let expectedMessage = 'Invalid platform selection.';
    
            // Act
            let actualMessage = '';
            try {
                streamingServiceSelector.availablePlatforms(platforms, selectedPlatformIndex);
            } catch(error) {
                actualMessage = error.message;
            }
    
            // Assert
            assert.throws(() => {streamingServiceSelector.availablePlatforms(platforms, selectedPlatformIndex)});
            assert.equal(actualMessage, expectedMessage);
        });
    
        it('Throws error when selectedPlatformIndex is bigger or equal than platforms length: Invalid platform selection.', () => {
            // Arrange
            let platforms = ['Netflix', 'FilmiSub'];
            let selectedPlatformIndex = 2;
            let expectedMessage = 'Invalid platform selection.';
    
            // Act
            let actualMessage = '';
            try {
                streamingServiceSelector.availablePlatforms(platforms, selectedPlatformIndex);
            } catch(error) {
                actualMessage = error.message;
            }
    
            // Assert
            assert.throws(() => {streamingServiceSelector.availablePlatforms(platforms, selectedPlatformIndex)});
            assert.equal(actualMessage, expectedMessage);
        });
    
        it('Returns successful message', () => {
            // Arrange
            let platforms = ['Netflix', 'FilmiSub', 'Filmi2k'];
            let selectedPlatformIndex = 1;
            let available = ['Netflix', 'Filmi2k'];
            let expectedMessage = `Other available platforms are: ${available.join(", ")}.`;
    
            // Act
            let actualMessage = streamingServiceSelector.availablePlatforms(platforms, selectedPlatformIndex);
    
            // Assert
            assert.equal(actualMessage, expectedMessage);
        });
    });
    
    describe('contentRating', () => {
        it('Throws error when runtimeInMinutes is not a number: Invalid runtime or rating.', () => {
            // Arrange
            let runtimeInMinutes = 'not a number';
            let viewerRating = 6;
            let expectedError = 'Invalid runtime or rating.';
    
            // Act
            let actualError = '';
            try {
                streamingServiceSelector.contentRating(runtimeInMinutes, viewerRating);
            } catch(error) {
                actualError = error.message;
            }
    
            // Assert
            assert.throws(() => {streamingServiceSelector.contentRating(runtimeInMinutes, viewerRating)});
            assert.equal(actualError, expectedError);
        });
    
        it('Throws error when runtimeInMinutes is smaller than 0: Invalid runtime or rating.', () => {
            // Arrange
            let runtimeInMinutes = -20;
            let viewerRating = 6;
            let expectedError = 'Invalid runtime or rating.';
    
            // Act
            let actualError = '';
            try {
                streamingServiceSelector.contentRating(runtimeInMinutes, viewerRating);
            } catch(error) {
                actualError = error.message;
            }
    
            // Assert
            assert.throws(() => {streamingServiceSelector.contentRating(runtimeInMinutes, viewerRating)});
            assert.equal(actualError, expectedError);
        });
    
        it('Throws error when viewerRating is not a number: Invalid runtime or rating.', () => {
            // Arrange
            let runtimeInMinutes = 120;
            let viewerRating = 'not a number';
            let expectedError = 'Invalid runtime or rating.';
    
            // Act
            let actualError = '';
            try {
                streamingServiceSelector.contentRating(runtimeInMinutes, viewerRating);
            } catch(error) {
                actualError = error.message;
            }
    
            // Assert
            assert.throws(() => {streamingServiceSelector.contentRating(runtimeInMinutes, viewerRating)});
            assert.equal(actualError, expectedError);
        });
    
        it('Throws error when viewerRating is smallet than 0: Invalid runtime or rating.', () => {
            // Arrange
            let runtimeInMinutes = 120;
            let viewerRating = -10;
            let expectedError = 'Invalid runtime or rating.';
    
            // Act
            let actualError = '';
            try {
                streamingServiceSelector.contentRating(runtimeInMinutes, viewerRating);
            } catch(error) {
                actualError = error.message;
            }
    
            // Assert
            assert.throws(() => {streamingServiceSelector.contentRating(runtimeInMinutes, viewerRating)});
            assert.equal(actualError, expectedError);
        });
    
        it('Throws error when viewerRating is bigger than 10: Invalid runtime or rating.', () => {
            // Arrange
            let runtimeInMinutes = 120;
            let viewerRating = 12;
            let expectedError = 'Invalid runtime or rating.';
    
            // Act
            let actualError = '';
            try {
                streamingServiceSelector.contentRating(runtimeInMinutes, viewerRating);
            } catch(error) {
                actualError = error.message;
            }
    
            // Assert
            assert.throws(() => {streamingServiceSelector.contentRating(runtimeInMinutes, viewerRating)});
            assert.equal(actualError, expectedError);
        });
        
        it('Returns success message when viewerRating is bigger or equal to 7: content is highly rated', () => {
            // Arrange
            let runtimeInMinutes = 120;
            let viewerRating = 10;
            let runtimeInHours = (runtimeInMinutes / 60).toFixed(2);
            let expectedMessage = `This content is highly rated (${viewerRating}/10) and has a runtime of ${runtimeInHours} hours. Enjoy your watch!`;
    
            // Act
            let actualMessage = streamingServiceSelector.contentRating(runtimeInMinutes, viewerRating);
    
            // Assert
            assert.equal(actualMessage, expectedMessage);
        });
    
        it('Returns success message when viewerRating is smaller than 7: content is lower rated', () => {
            // Arrange
            let runtimeInMinutes = 120;
            let viewerRating = 3;
            let runtimeInHours = (runtimeInMinutes / 60).toFixed(2);
            let expectedMessage = `This content has a lower rating (${viewerRating}/10) and runs for ${runtimeInHours} hours. You might want to check reviews first.`;
            
            // Act
            let actualMessage = streamingServiceSelector.contentRating(runtimeInMinutes, viewerRating);
    
            // Assert
            assert.equal(actualMessage, expectedMessage);
        });
    });

});