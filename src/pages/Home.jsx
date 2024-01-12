import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { FilterMatchMode } from 'primereact/api';
import 'primereact/resources/themes/lara-dark-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import axios from 'axios';

import Header from '../components/Header';

export default function Home() {
    
    const [customers, setCustomers] = useState([]);
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    });

    const [globalFilterValue, setGlobalFilterValue] = useState('');

    useEffect(() => {
        async function fetchClients() {
            const res = await axios.get(import.meta.env.VITE_SOME_KEY + "/client");

            if (res.data.status) {
                setCustomers(res.data.data);
            }
        }

        fetchClients();
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
            <div>
                <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Search by DNI or Name" />
            </div>
        );
    };


    const header = renderHeader();


    return (
        <div>
            <Header />

            <DataTable value={customers} paginator showGridlines rows={5} rowsPerPageOptions={[5, 10, 25, 50]} filters={filters} globalFilterFields={['dni', 'nombres']} header={header}>
                <Column field="dni" header="DNI" sortable></Column>
                <Column field="nombres" header="Name" ></Column>
                <Column field="apellidos" header="Lastname"></Column>
                <Column field="fecha_nacimiento" header="Birthdate" sortable></Column>
                <Column field="celular" header="Phone"></Column>
                <Column field="correo" header="Email"></Column>
                <Column field="banco" header="Bank" sortable></Column>
                <Column field="numero_cci" header="CCI number"></Column>
            </DataTable>
        </div>
    );
}

