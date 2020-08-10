export interface Education {
    readonly data: IEducation[];
    readonly errors: object;
    readonly universities: [];
}

export interface Users {
    readonly name: string;
}

export interface IEducation {
    startDate: Date | null,
    endDate: Date | null,
    university: string,
    degree: string,
    field: string,
    grade: string,
    description: string
}

