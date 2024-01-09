import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { FilterMatchMode } from 'primereact/api';
import 'primereact/resources/themes/lara-dark-blue/theme.css';
import 'primereact/resources/primereact.min.css';   
import axios from 'axios';

export default function Home() {
    const [customers, setCustomers] = useState([]);
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    });

    const [globalFilterValue, setGlobalFilterValue] = useState('');


    useEffect(() => {
        setCustomers([
            {dni: '87654321', name: 'Carlos', lastname: 'Chung'},
            {dni: '99999999', name: 'Carlos', lastname: 'Chung'},
            {dni: '88888888', name: 'Carlos', lastname: 'Chung'},
            {dni: '12121212', name: 'Carlos', lastname: 'Chung'},
            {dni: '87654321', name: 'Lee', lastname: 'Chung'},
            {dni: '87654321', name: 'Carlos', lastname: 'Chung'},
        ])

        const res = axios.get("http://localhost:3010/client");

        console.log(res);

    }, []);

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const renderHeader = () => {
        return (
            <div className="flex justify-content-end">
                <Link className='newBtn' to={'/new'}> 
                    New Client
                </Link>
                
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Search by DNI or Name" />
                </span>
                
            </div>
        );
    };


    const header = renderHeader();
    

    return (
        <div className="cards">
            <h1>Home</h1>
            <DataTable value={customers} paginator showGridlines rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }} filters={filters} globalFilterFields={['dni', 'name']} header={header}> 
                <Column field="dni" header="DNI" sortable style={{  }}></Column>
                <Column field="name" header="Name" style={{ }}></Column>
                <Column field="lastname" header="Lastname" style={{}}></Column>
            </DataTable>
        </div>
    );
}
        
