import { useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SensorData from "./SensorData";
import ClinicalData from "./ClinicalData";

function Visit() {
  const { id: compositionId } = useParams<{ id: string }>();

  return (
    <div className="min-h-screen p-8 bg-blue-100 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Visit Details</h1>
    

      <Tabs defaultValue="account" className="">
        <TabsList className="">
          <TabsTrigger 
            value="ClinicalData" 
            className="rounded-full px-6 py-2 font-semibold text-blue-600 bg-gray-100 hover:bg-blue-100 transition-colors">
            Clinical Data
          </TabsTrigger>
          <TabsTrigger 
            value="Sensor Data" 
            className="rounded-full px-6 py-2 font-semibold text-blue-600 bg-gray-100 hover:bg-blue-100 transition-colors">
            Sensor Data
          </TabsTrigger>
        </TabsList>

        <TabsContent value="Sensor Data" className="">
          <SensorData />
        </TabsContent>
        <TabsContent value="ClinicalData" className="">
          <ClinicalData />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Visit;
