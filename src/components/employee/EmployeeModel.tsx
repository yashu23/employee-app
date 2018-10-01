export default class EmployeeModel {
    private _firstname: string;
    private _lastName: string;
    private _id: string;
    
    constructor(firstname: string, lastname: string, id: string) {
        this._firstname = firstname;
        this._lastName = this.lastName;
        this._id = this.id;
    }


    /**
     * Getter firstname
     * @return {string}
     */
	public get firstname(): string {
		return this._firstname;
	}

    /**
     * Setter firstname
     * @param {string} value
     */
	public set firstname(value: string) {
		this._firstname = value;
	}


    /**
     * Getter lastName
     * @return {string}
     */
	public get lastName(): string {
		return this._lastName;
	}

    /**
     * Setter lastName
     * @param {string} value
     */
	public set lastName(value: string) {
		this._lastName = value;
	}


    /**
     * Getter id
     * @return {string}
     */
	public get id(): string {
		return this._id;
	}

    /**
     * Setter id
     * @param {string} value
     */
	public set id(value: string) {
		this._id = value;
	}
    

}