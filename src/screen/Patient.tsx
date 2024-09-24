import React from 'react';
import { useGetPatientDetailsQuery } from '../redux/slices/api';
import { useParams, useNavigate } from 'react-router-dom'; // Add useNavigate
import { Button } from "@/components/ui/button";
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

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

interface Visit {
  id: string;
  visitDate: string;
  compositionId: string;
}

const PatientVisits: React.FC = () => {
  const { id: selectedEhrId } = useParams<{ id: string }>();
  const navigate = useNavigate(); // Initialize navigate
  const { data: visits, error: visitError, isLoading: visitsLoading } = useGetPatientDetailsQuery(selectedEhrId, {
    skip: !selectedEhrId,
  });

  if (visitsLoading) return <div>Loading visits...</div>;
  if (visitError) {
    const errorMessage = 'status' in visitError ? `Error loading visits: ${visitError.status}` : visitError.message;
    return <div>{errorMessage}</div>;
  }

  const handleOnClickVisit = (compositionId: string) => {
    navigate(`/visit/${compositionId}`);
    console.log(`Viewing Visit ID: ${compositionId}`);
  };

  return (
    <div className="min-h-screen p-8 bg-blue-100 flex flex-col">
      <Card className="bg-white bg-opacity-70">
        <CardContent>
          <h2 className="text-lg font-bold mt-6 mb-4">Visits List</h2>
          {visits && visits.visits.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Visit ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {visits.visits.map((visit: Visit) => (
                  <TableRow key={visit.id}>
                    <TableCell>visit{visit.id}</TableCell>
                    <TableCell>{formatDate(visit.visitDate)}</TableCell>
                    <TableCell className="text-center w-1/5">
                      <Button variant="outline" onClick={() => handleOnClickVisit(visit.compositionId)}>View</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div>No visits found for this patient.</div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PatientVisits;
