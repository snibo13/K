import { ObjectId } from 'bson';

class Habit {
    private name: string;
    private description: string;
    private id: ObjectId;
    private unit: string;

    constructor({
        _name,
        _description,
        _unit,
        _id = new ObjectId()
    }) {
        this.id = _id
        this.name = _name;
        this.description = _description;
        this.unit = _unit;
        // this.frequency = frequency;
        // Set this.startDate to the current date
        // this.startDate = new Date();
        // this.endDate = endDate;
        // this.color = color;
    }

    static schema = {
        name: 'Habit',
        primaryKey: 'id',
        properties: {
            id: 'objectId',
            name: 'string',
            description: 'string',
            frequency: 'int',
            unit: 'string',
            startDate: 'date',
            // endDate: 'date',
            // color: 'string'
        }
    }
}

export default Habit;
