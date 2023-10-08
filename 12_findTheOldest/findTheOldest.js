const findTheOldest = function(people) {
    for (person in people) {
        if (people[person].yearOfDeath == undefined) {
            people[person].yearOfDeath = new Date().getFullYear();
        }
    }

    const oldest = people.sort(function(a, b) {
        const lastPerson = a.yearOfDeath - a.yearOfBirth;
        const nextPerson = b.yearOfDeath - b.yearOfBirth;
        return lastPerson > nextPerson ? -1 : 1;
    })
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
