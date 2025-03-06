function solution(functionExecuted) {
    if (functionExecuted === 'upvote') {
        this.upvotes++;
    } else if (functionExecuted === 'downvote') {
        this.downvotes++;
    } else if (functionExecuted === 'score') {
        let reportedUpVotes = this.upvotes;
        let reportedDownVotes = this.downvotes;
        let balance = reportedUpVotes - reportedDownVotes;
        let totalVotes = reportedUpVotes + reportedDownVotes;

        let rating = '';

        if (totalVotes < 10) {
            rating = 'new';
        } else if (reportedUpVotes / totalVotes > 0.66) {
            rating = 'hot';
        } else if (balance < 0) {
            rating = 'unpopular';
        } else if (balance >= 0 && totalVotes > 100) {
                rating = 'controversial';
        } else {
            rating = 'new';
        }

        if (totalVotes > 50) {
            let maxNumber = Math.max(reportedUpVotes, reportedDownVotes);
            let addPercent = Math.ceil(maxNumber * 0.25);

            reportedUpVotes += addPercent;
            reportedDownVotes += addPercent;
        }

        return [reportedUpVotes, reportedDownVotes, balance, rating];
    }
}