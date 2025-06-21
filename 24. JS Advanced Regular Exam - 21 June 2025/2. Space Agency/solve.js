class SpaceAgency {
    constructor(agencyName, mission) {
        this.agencyName = agencyName;
        this.mission = mission;
        this.candidates = [];
    }

    acceptApplications(applications) {
        let addedCandidates = [];

        applications.forEach(application => {
            let [namePerson, education, flightHours] = application.split('-');

            let foundCandidate = this.candidates.find(x => x.name === namePerson);
            if (foundCandidate != undefined) {
                if (Number(flightHours) > foundCandidate.flightHours) {
                    foundCandidate.flightHours = Number(flightHours);
                }
            } else {
                this.candidates.push({
                    name: namePerson,
                    education: education,
                    flightHours: Number(flightHours),
                });

                addedCandidates.push(namePerson);
            }
        });

        return `You successfully added candidates: ${addedCandidates.join(', ')}.`;
    }

    chooseForMission(candidateInfo) {
        let [namePerson, minimumFlightHours] = candidateInfo.split('-');

        let foundCandidate = this.candidates.find(x => x.name === namePerson);
        if (foundCandidate == undefined) {
            throw new Error(`${namePerson} is not in the candidates list!`);
        }

        if (foundCandidate.flightHours < Number(minimumFlightHours)) {
            throw new Error(`${namePerson} does not have enough flight hours for the ${this.mission} mission, minimum required is ${Number(minimumFlightHours)} hours.`);
        }

        foundCandidate.flightHours = 'selected';
        
        return `Congratulations, ${namePerson} will participate in the ${this.mission} mission!`;
    }

    trainingBonus(name) {
        let foundCandidate = this.candidates.find(x => x.name === name);
        if (foundCandidate == undefined) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        if (foundCandidate.education == 'Pilot') {
            return `${name} will be trained by ${this.agencyName} as part of the ${this.mission} mission with a training bonus of $100,000!`;
        } else if (foundCandidate.education == 'Engineer') {
            return `${name} will be trained by ${this.agencyName} as part of the ${this.mission} mission with a training bonus of $120,000!`;
        }

        return `${name} will be trained by ${this.agencyName} as part of the ${this.mission} mission with a training bonus of $80,000!`;
    }

    candidatesReport() {
        if (this.candidates.length <= 0) {
            throw new Error(`Candidate database is empty!`);
        }

        let message = 'Candidates list:\n';
        message += this.candidates.sort((a, b) => a.name.localeCompare(b.name))
        .map(x => `${x.name}-${x.flightHours}`)
        .join('\n');

        return message.trim();
    }
}


// let agency = new SpaceAgency("NASA", "Mars Exploration");
// console.log(agency.acceptApplications([
//   "Neil Armstrong-Pilot-1200",
//   "Margaret Hamilton-Engineer-800",
//   "Neil Armstrong-Pilot-1400"
// ]));

// Output 1
// You successfully added candidates: Neil Armstrong, Margaret Hamilton.

// Input 2
// let agency = new SpaceAgency("NASA", "Mars Exploration");
// console.log(agency.acceptApplications([
//   "Neil Armstrong-Pilot-1200",
//   "Margaret Hamilton-Engineer-800"
// ]));
// console.log(agency.chooseForMission("Neil Armstrong-1000"));
// console.log(agency.chooseForMission("Margaret Hamilton-900"));

// Output 2
// You successfully added candidates: Neil Armstrong, Margaret Hamilton.
// Congratulations, Neil Armstrong will participate in the Mars Exploration mission!
// Uncaught Error Error: Margaret Hamilton does not have enough flight hours for the Mars Exploration mission, minimum required is 900 hours

// Input 3
// let agency = new SpaceAgency("NASA", "Mars Exploration");
// console.log(agency.acceptApplications([
//   "Neil Armstrong-Pilot-1200",
//   "Margaret Hamilton-Engineer-800"
// ]));
// console.log(agency.chooseForMission("Neil Armstrong-1000"));
// console.log(agency.trainingBonus("Neil Armstrong"));
// console.log(agency.trainingBonus("Margaret Hamilton"));

// Output 3
// You successfully added candidates: Neil Armstrong, Margaret Hamilton.
// Congratulations, Neil Armstrong will participate in the Mars Exploration mission!
// Neil Armstrong will be trained by NASA as part of the Mars Exploration mission with a training bonus of $100,000!
// Margaret Hamilton will be trained by NASA as part of the Mars Exploration mission with a training bonus of $120,000!

// Input 4
// let agency = new SpaceAgency("NASA", "Mars Exploration");
// console.log(agency.acceptApplications([
//   "Neil Armstrong-Pilot-1200",
//   "Margaret Hamilton-Engineer-800",
//   "Mae Jemison-Biologist-700"
// ]));
// console.log(agency.chooseForMission("Neil Armstrong-1000"));
// console.log(agency.trainingBonus("Mae Jemison"));
// console.log(agency.candidatesReport());

// Output 4
// You successfully added candidates: Neil Armstrong, Margaret Hamilton, Mae Jemison.
// Congratulations, Neil Armstrong will participate in the Mars Exploration mission!
// Mae Jemison will be trained by NASA as part of the Mars Exploration mission with a training bonus of $80,000!
// Candidates list:
// Mae Jemison-700
// Margaret Hamilton-800
// Neil Armstrong-selected

//Testing acceptApplications
let space = new SpaceAgency("NASA", "Mars Exploration");

console.log(space.acceptApplications([
  "Neil Armstrong-Pilot-1200",
  "Margaret Hamilton-Engineer-800",
  "Mae Jemison-Biologist-700"
]));
// , "You successfully added candidates: Neil Armstrong, Margaret Hamilton, Mae Jemison.");