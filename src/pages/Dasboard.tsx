import React, { useState } from 'react';
import { useGetPatientsQuery } from '../redux/slices/api';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const Dashboard: React.FC = () => {
    const { data: patients, error, isLoading } = useGetPatientsQuery({});
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate(); // useNavigate hook for navigation

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading patients.</div>;

    // Filter patients based on search term
    const filteredPatients = patients?.filter((patient: any) =>
        patient.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleOnClickPatient = (userId: string) => {
       
        navigate(`/patient/${userId}`);
        console.log(`Viewing patient ID: ${userId}`);
    };

    return (
        <div className="min-h-screen p-8 bg-blue-100 flex flex-col">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-gray-800">Patient List</h1>
                <input
                    type="text"
                    placeholder="Search by name..."
                    className="p-2 rounded-full border border-gray-300 w-52 transition duration-300"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
            </div>
            <Card className="bg-white bg-opacity-70">
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-1/5">Name</TableHead>
                                <TableHead className="hidden sm:table-cell w-1/5">Age</TableHead>
                                <TableHead className="hidden sm:table-cell w-1/5">Gender</TableHead>
                                <TableHead className="text-center w-1/5">Email</TableHead>
                                <TableHead className="text-center w-1/5">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredPatients?.map((patient: any) => (
                                <TableRow key={patient.id}>
                                    <TableCell className="w-1/5">
                                        <div className="font-medium">{patient.name || 'N/A'}</div>
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell w-1/5">{patient.age || 'N/A'}</TableCell>
                                    <TableCell className="hidden sm:table-cell w-1/5">{patient.gender || 'N/A'}</TableCell>
                                    <TableCell className="text-center w-1/5">{patient.email || 'N/A'}</TableCell>
                                    <TableCell className="text-center w-1/5">
                                        <Button variant="outline" onClick={() => handleOnClickPatient(patient.id)}>View</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
};

export default Dashboard;
