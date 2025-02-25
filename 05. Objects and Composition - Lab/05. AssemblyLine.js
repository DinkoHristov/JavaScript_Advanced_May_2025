function createAssemblyLine() {
    return {
        hasClima(car) {
            car.temp = 21;
            car.tempSettings = 21;
            car.adjustTemp = function() {
                if (car.temp < car.tempSettings) {
                    car.temp++;
                } else {
                    car.temp--;
                }
            }
        },
        hasAudio(car) {
            class CurrentTrack {
                constructor() {
                    this.name = null;
                    this.artist = null;
                }

                set name(value) {
                    if (value !== null) {
                        this.name = value;
                    }
                }

                set artist(value) {
                    if (value !== null) {
                        this.artist = value;
                    }
                }
            }

            car.currentTrack = new CurrentTrack();
            car.nowPlaying = function() {
                if (car.currentTrack.name !== null || car.currentTrack.artist !== null) {
                    console.log(`Now playing '${car.currentTrack.name}' by ${car.currentTrack.artist}` );
                }
            }
        },
        hasParktronic(car) {
            car.checkDistance = function(distance) {
                if (distance < 0.1) {
                    console.log('Beep! Beep! Beep!');
                } else if (distance >= 0.1 && distance < 0.25) {
                    console.log('Beep! Beep!');
                } else if (distance >= 0.25 && distance < 0.5) {
                    console.log('Beep!');
                } else {
                    console.log('');
                }
            }
        }
    };
}