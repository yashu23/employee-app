import * as React from 'react';
import './Employee.css';
import EmployeeModel from './EmployeeModel';

export default class Employee extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            employees: this.props.employees,
            filterText: ''
        }
    }

    public render() {

        const isEmployeePresent = (this.props.employees && this.props.employees.length > 0);

        if (isEmployeePresent) {
            
            const rows = drawTable(this.state.employees, this.state.filterText);

            return (
                { rows }
            );
        } else {
            return (
                <div className="error">No Employee Present</div>
            );
        }
    }
}

function drawTable(employees: EmployeeModel[], filterText: string) {
    const rows: any = [];
    for (const employee of employees) {
        rows.push(<tr>);
        rows.push(<td>{employee.id}</td>)
        rows.push(<td>{employee.firstname}</td>)
        rows.push(<td>{employee.lastName}</td>)
        rows.push(</tr>);
    }  
    return rows;  
}
