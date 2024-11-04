"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Bookmark } from "lucide-react";
import { format } from "date-fns";
import { gl } from "date-fns/locale";
import { useAuth } from "./auth-provider";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  category: string;
  image: string;
  zone?: string;
}

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isSaved, setIsSaved] = useState(false);
  const formattedDate = format(new Date(event.date), "PPp", { locale: gl });

  const handleSaveEvent = () => {
    if (!user) {
      toast({
        title: "Inicia sesión",
        description: "Necesitas iniciar sesión para gardar eventos",
      });
      return;
    }

    setIsSaved(!isSaved);
    toast({
      title: isSaved ? "Evento eliminado" : "Evento gardado",
      description: isSaved
        ? "O evento foi eliminado dos teus gardados"
        : "O evento foi gardado no teu perfil",
    });
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
          {event.category}
        </div>
      </div>
      
      <CardHeader>
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold">{event.title}</h3>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleSaveEvent}
            className="h-8 w-8"
          >
            <Bookmark
              className={`h-5 w-5 ${isSaved ? "fill-current" : ""}`}
            />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-muted-foreground mb-4">{event.description}</p>
        <div className="space-y-2">
          <div className="flex items-center text-sm">
            <Calendar className="w-4 h-4 mr-2" />
            {formattedDate}
          </div>
          <div className="flex items-center text-sm">
            <MapPin className="w-4 h-4 mr-2" />
            {event.location}
            {event.zone && ` - ${event.zone}`}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}