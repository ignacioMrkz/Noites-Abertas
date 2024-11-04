"use client";

import { useState } from "react";
import EventCard from "./event-card";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

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

interface EventListProps {
  events: Event[];
}

export default function EventList({ events }: EventListProps) {
  const [zone, setZone] = useState<string>("all");
  const [category, setCategory] = useState<string>("all");
  const itemsPerPage = 9;
  const [page, setPage] = useState(1);

  const filteredEvents = events.filter((event) => {
    const zoneMatch = zone === "all" || event.zone === zone;
    const categoryMatch = category === "all" || event.category === category;
    return zoneMatch && categoryMatch;
  });

  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
  const currentEvents = filteredEvents.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const zones = Array.from(new Set(events.map((event) => event.zone)));
  const categories = Array.from(new Set(events.map((event) => event.category)));

  return (
    <div className="space-y-6">
      <div className="flex gap-4 flex-wrap">
        <Select value={zone} onValueChange={setZone}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Seleccionar zona" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas as zonas</SelectItem>
            {zones.map((zone) => (
              <SelectItem key={zone} value={zone || ""}>
                {zone}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Seleccionar categoría" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas as categorías</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          <Button
            variant="outline"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            Anterior
          </Button>
          <span className="flex items-center px-4">
            Páxina {page} de {totalPages}
          </span>
          <Button
            variant="outline"
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
          >
            Seguinte
          </Button>
        </div>
      )}
    </div>
  );
}