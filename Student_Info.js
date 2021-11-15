import fs from 'fs';
import Chance from 'chance';
import lineReader from 'line-reader';

const fileName = 'StudentInfo.txt';
const chance = new Chance();
const student = {
    name: chance.first(),
    surname: chance.last(),
    rate: chance.integer({ min: 0, max: 100 }),
};

// append to file, if not exists create one
fs.appendFileSync(fileName, '\n' + JSON.stringify(student));

lineReader.eachLine(fileName, (line, last) => {
    if (last) {
        let lastStudent = JSON.parse(line);
        // chane rate value
        lastStudent.name = chance.first();
        lastStudent.rate = chance.integer({ min: 0, max: 100 });
        fs.appendFileSync(fileName, '\n' + JSON.stringify(lastStudent));
    }
});