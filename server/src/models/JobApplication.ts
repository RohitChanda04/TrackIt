import { DataType, DataTypes, Model, Optional } from "sequelize";
import sequelize from '../config/db';

// Defining the attributes of the JobApplication model
interface JobApplicationAttributes {
    id: number,
    company: string;
    role: string;
    location: string;
    pay_range?: string | null;
    source: string;
    date: Date;
    call?: string | null;
    progress?: string | null;
}

// Optional fields for creating a new JobApplication
interface JobApplicationCreationAttributes extends Optional<JobApplicationAttributes, 
'id' | 'pay_range' | 'call' | 'progress'> {}

class JobApplication extends Model<JobApplicationAttributes, JobApplicationCreationAttributes>
implements JobApplicationAttributes {
    public id!: number;
    public company!: string;
    public role!: string;
    public location!: string;
    public pay_range!: string | null;
    public source!: string;
    public date!: Date;
    public call!: string | null;
    public progress!: string | null;
}

// Initializing the JobApplication model
JobApplication.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        company: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pay_range: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        source: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        call: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        progress: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: 'JobApplication',
        tableName: 'applications',
        timestamps: false,
    }
);

export default JobApplication;