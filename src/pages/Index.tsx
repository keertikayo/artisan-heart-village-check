import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, MapPin, Users } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-peach to-creamy-white">
      {/* Hero Section */}
      <div className="text-center py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-earth-brown mb-6 font-serif">
            People's Awareness Network
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-warm-coral to-gentle-rose mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Connecting hearts through handmade crafts, supporting artisan communities across India
          </p>
          
          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 mb-12">
            <Card className="p-6 border-0 shadow-[var(--shadow-soft)] bg-card/80 backdrop-blur-sm rounded-3xl">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-earth-brown mb-2">Authentic Crafts</h3>
              <p className="text-muted-foreground text-sm">Every piece tells a story of tradition and skill passed down through generations</p>
            </Card>
            
            <Card className="p-6 border-0 shadow-[var(--shadow-soft)] bg-card/80 backdrop-blur-sm rounded-3xl">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-earth-brown mb-2">Village Connect</h3>
              <p className="text-muted-foreground text-sm">Trace your product back to the village where loving hands crafted it</p>
            </Card>
            
            <Card className="p-6 border-0 shadow-[var(--shadow-soft)] bg-card/80 backdrop-blur-sm rounded-3xl">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-earth-brown mb-2">Support Artisans</h3>
              <p className="text-muted-foreground text-sm">Your support directly impacts families and preserves traditional crafts</p>
            </Card>
          </div>

          {/* CTA Button */}
          <Link to="/check-authenticity">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-warm-coral to-primary hover:from-warm-coral/90 hover:to-primary/90 text-white font-bold py-4 px-8 rounded-2xl shadow-[var(--shadow-warm)] text-lg transition-all duration-300 hover:scale-105"
            >
              ✨ Check Your Product's Authenticity
            </Button>
          </Link>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-gradient-to-r from-gentle-rose/10 to-soft-peach/20 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <p className="text-2xl text-earth-brown font-medium italic leading-relaxed">
            "When you choose handmade, you choose to keep alive the dreams and traditions of countless artisans who pour their hearts into every creation."
          </p>
          <div className="mt-6 text-muted-foreground">
            — PAN NGO Team
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
