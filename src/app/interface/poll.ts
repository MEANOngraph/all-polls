export interface pollFormDetails {
    question: string;
    options: Array<options>;
}


export interface options {
    choice: string;
}


export interface apiResponse {
    success: Boolean;
    response: Object;
    msg: string;
}

export interface PollResponse {
    success: Boolean;
    response: Array<Response>;
    count : Number;
    msg: string;
    status:Boolean;
    userId:string;
    visitors:Array<any>
}


export interface Response {
    question: string;
    options: optionType;
    status : Boolean
}
export interface PollData {
    question: string;
    options: optionType;
}

export interface optionType {
    id:number;
    value: string;
    count: number;
}

