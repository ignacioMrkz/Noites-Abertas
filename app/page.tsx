import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CalendarDays, MapPin, Users } from "lucide-react";
import EventCard from "@/components/event-card";

const featuredEvents = [
  {
    id: 1,
    title: "Noche de Arte Urbano",
    description: "Explora el arte callejero con artistas locales",
    date: "2024-04-15T20:00:00",
    location: "Plaza Mayor",
    category: "Arte",
    image: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Concierto Bajo las Estrellas",
    description: "Música en vivo con artistas emergentes",
    date: "2024-04-16T21:30:00",
    location: "Parque Central",
    category: "Música",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Taller de Fotografía Nocturna",
    description: "Aprende a capturar la magia de la noche",
    date: "2024-04-17T19:00:00",
    location: "Centro Cultural",
    category: "Educación",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80"
            alt="Noites Abertas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up">
            Noites Abertas
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Descubre experiencias únicas en las noches más vibrantes de la ciudad
          </p>
          <Button size="lg" className="animate-fade-up">
            Explorar Eventos
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            ¿Por qué Noites Abertas?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CalendarDays className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Eventos Únicos</h3>
              <p className="text-muted-foreground">
                Descubre experiencias exclusivas cada noche
              </p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Lugares Especiales</h3>
              <p className="text-muted-foreground">
                Explora los mejores espacios de la ciudad
              </p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Comunidad Activa</h3>
              <p className="text-muted-foreground">
                Conecta con personas que comparten tus intereses
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Próximos Eventos
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Ver Todos los Eventos
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}