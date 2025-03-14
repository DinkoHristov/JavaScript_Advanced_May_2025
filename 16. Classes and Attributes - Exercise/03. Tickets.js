function solve(input, sortCriteria) {
    let tickets = [];

    input.forEach(element => {
        let [destination, price, status] = element.split('|');

        tickets.push({
            destination,
            price: Number(price),
            status
        });
    });

    if (sortCriteria == 'destination') {
        tickets.sort( (a, b) => a.destination.localeCompare(b.destination));
    } else if (sortCriteria == 'price') {
        tickets.sort( (a, b) => a.price - b.price);
    } else if (sortCriteria == 'status') {
        tickets.sort( (a, b) => a.status.localeCompare(b.status));
    }

    return tickets;
}

solve(
    ['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
       'status'            
);