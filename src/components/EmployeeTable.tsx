import React from 'react';
import Table, { ColumnDefs } from './Table';
import { employees, Employee } from '../data/employee';

const EmployeeTable: React.FC = () => {
    const columns: ColumnDefs<Employee>[] = [
        { title: 'First Name', field: 'firstName' },
        { title: 'Last Name', field: 'lastName' },
        { title: 'Phone', field: 'phone' },
        { title: 'Address', field: 'address' },
        { title: 'Age', field: 'age' },
        { title: 'Email', field: 'email' },
        {
            title: 'Verified',
            render: (rowData) => (rowData.verified ? 'Yes' : 'No')
        }
    ];

    return (
        <div>
            <h1>Employee Table</h1>
            <Table<Employee> columnDefs={columns} data={employees} />
        </div>
    );
};

export default EmployeeTable;