import React from 'react';
import { useGetPatientsQuery } from '../redux/slices/api';

const Dashboard: React.FC = () => {
    const { data: patients, error, isLoading } = useGetPatientsQuery({ endpoint: 'getallpatients' });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading patients.</div>;

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Patient List</h1>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-4">ID</th>
                        <th className="border border-gray-300 p-4">EHR ID</th>
                        <th className="border border-gray-300 p-4">Composition ID</th>
                        <th className="border border-gray-300 p-4">Name</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map((patient:any) => (
                        <tr key={patient.id}>
                            <td className="border border-gray-300 p-4">{patient.id}</td>
                            <td className="border border-gray-300 p-4">{patient.ehrId}</td>
                            <td className="border border-gray-300 p-4">{patient.compositionId || 'N/A'}</td>
                            <td className="border border-gray-300 p-4">{patient.name || 'N/A'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
