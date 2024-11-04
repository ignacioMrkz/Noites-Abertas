import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EventList from "@/components/event-list";
import { weekendEvents } from "@/lib/data";

export default function EventosPage() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Eventos desta fin de semana</h1>
      
      <Tabs defaultValue="venres" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="venres">Venres</TabsTrigger>
          <TabsTrigger value="sabado">Sábado</TabsTrigger>
          <TabsTrigger value="domingo">Domingo</TabsTrigger>
        </TabsList>
        
        <TabsContent value="venres">
          <EventList events={weekendEvents.venres} />
        </TabsContent>
        
        <TabsContent value="sabado">
          <EventList events={weekendEvents.sabado} />
        </TabsContent>
        
        <TabsContent value="domingo">
          <EventList events={weekendEvents.domingo} />
        </TabsContent>
      </Tabs>
    </div>
  );
}