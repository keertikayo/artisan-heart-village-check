import React, { useState } from 'react';
import { Search, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import Map from '@/components/Map';
import villageScene1 from '@/assets/village-scene-1.jpg';
import villageScene2 from '@/assets/village-scene-2.jpg';
import villageScene3 from '@/assets/village-scene-3.jpg';

interface VillageData {
  name: string;
  message: string;
  coordinates: { lat: number; lng: number };
}

const villageDatabase: Record<string, VillageData> = {
  'PAN1234': {
    name: 'Sagar Village, Rajasthan',
    message: 'Thank you for believing in handmade. Your support helps dreams come alive in our villages, where generations of artisans pour their hearts into every stitch.',
    coordinates: { lat: 26.9124, lng: 75.7873 }
  },
  'PAN5678': {
    name: 'Kumartuli Village, West Bengal',
    message: 'Your purchase creates ripples of joy in our village. Each piece you choose supports families who have been crafting beauty for centuries.',
    coordinates: { lat: 22.5726, lng: 88.3639 }
  },
  'PAN9012': {
    name: 'Pochampally Village, Telangana',
    message: 'From our hands to your heart - thank you for keeping our textile traditions alive. Your support means the world to our weaving community.',
    coordinates: { lat: 17.3850, lng: 78.4867 }
  }
};

const CheckAuthenticity = () => {
  const [inputId, setInputId] = useState('');
  const [villageData, setVillageData] = useState<VillageData | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    const data = villageDatabase[inputId.toUpperCase()];
    if (data) {
      setVillageData(data);
      setShowResults(true);
    } else {
      setVillageData(null);
      setShowResults(true);
    }
  };

  const handleTipArtists = () => {
    // Redirect to a secure banking page (placeholder)
    window.open('https://example-secure-banking.com/donate', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-peach to-creamy-white">
      {/* Header */}
      <div className="text-center py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-earth-brown mb-4 font-serif">
          People's Awareness Network
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-warm-coral to-gentle-rose mx-auto mb-6 rounded-full"></div>
        <h2 className="text-2xl md:text-3xl text-primary font-medium">
          Check Authenticity
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
          Enter your product ID to discover the story behind your handmade treasure
        </p>
      </div>

      {/* Input Section */}
      <div className="max-w-md mx-auto px-4 mb-12">
        <Card className="p-6 shadow-[var(--shadow-soft)] border-0 bg-card/80 backdrop-blur-sm">
          <div className="space-y-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Enter ID (e.g., PAN1234)"
                value={inputId}
                onChange={(e) => setInputId(e.target.value)}
                className="pl-4 pr-12 py-3 text-lg rounded-2xl border-2 border-gentle-rose/30 focus:border-primary bg-creamy-white/50"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
              <Button
                onClick={handleSearch}
                size="sm"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl bg-primary hover:bg-primary/90 px-3"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Results Section */}
      {showResults && (
        <div className="max-w-6xl mx-auto px-4 pb-12">
          {villageData ? (
            <div className="space-y-8 animate-fade-in">
              {/* Village Name */}
              <div className="text-center">
                <h3 className="text-3xl font-bold text-earth-brown mb-2">
                  {villageData.name}
                </h3>
              </div>

              {/* Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[villageScene1, villageScene2, villageScene3].map((image, index) => (
                  <Card key={index} className="overflow-hidden shadow-[var(--shadow-warm)] border-0 rounded-3xl">
                    <img
                      src={image}
                      alt={`Village scene ${index + 1}`}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </Card>
                ))}
              </div>

              {/* Interactive Map */}
              <Map 
                latitude={villageData.coordinates.lat}
                longitude={villageData.coordinates.lng}
                villageName={villageData.name}
              />

              {/* Thank You Message */}
              <Card className="p-8 bg-gradient-to-r from-gentle-rose/10 to-soft-peach/20 border-0 rounded-3xl shadow-[var(--shadow-soft)]">
                <div className="text-center space-y-4">
                  <Heart className="h-12 w-12 text-primary mx-auto" />
                  <p className="text-lg text-earth-brown leading-relaxed font-medium italic">
                    "{villageData.message}"
                  </p>
                </div>
              </Card>
            </div>
          ) : (
            <Card className="p-12 text-center border-0 rounded-3xl shadow-[var(--shadow-soft)] bg-card/80">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-earth-brown">Product ID Not Found</h3>
                <p className="text-muted-foreground">
                  Please check your product ID and try again. Make sure to enter the exact ID from your product label.
                </p>
              </div>
            </Card>
          )}
        </div>
      )}

      {/* Tip Artists Button */}
      {villageData && (
        <div className="text-center pb-16 px-4">
          <Button
            onClick={handleTipArtists}
            size="lg"
            className="bg-gradient-to-r from-warm-coral to-primary hover:from-warm-coral/90 hover:to-primary/90 text-white font-bold py-4 px-8 rounded-2xl shadow-[var(--shadow-warm)] text-lg transition-all duration-300 hover:scale-105"
          >
            💝 Loved the product? Tip the artists!
          </Button>
        </div>
      )}
    </div>
  );
};

export default CheckAuthenticity;