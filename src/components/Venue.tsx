import React from 'react';
import { MapPin, Car, Train, Bed, ExternalLink, Navigation } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Venue = () => {
  const { t } = useLanguage();

  const hotels = [
    {
      name: 'La Boule d’Or – Auberge créative',
      rating: 4,
      price: '€100-115',
      distance: '16 km du domaine - 17 mins en voiture',
      link: '#https://www.booking.com/hotel/fr/la-boule-d-39-or-clamecy.en-gb.html?aid=303948&label=merry-sur-yonne-a%2ALgjn5E4J3b2ny89iQspwS294441456633%3Apl%3Ata%3Ap12%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-2395719376965%3Akwd-13069270641%3Alp9196363%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9Yf5EcukO1MOGLSSAuId8ToA&sid=fa99be4ac6a3b15b27500150fc850814&all_sr_blocks=1014684006_374021643_0_1_0&checkin=2026-07-11&checkout=2026-07-12&dest_id=-1451103&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=1014684006_374021643_0_1_0&hpos=1&matching_block_id=1014684006_374021643_0_1_0&nflt=ht_id%3D1100&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=1014684006_374021643_0_1_0__9765&srepoch=1761153813&srpvid=4cfa7a1f2815049d&type=total&ucfs=1&',
    },
    {
      name: 'Château de Vault-de-Lugny',
      rating: 5,
      price: '€180-280',
      distance: '15 km du domaine',
      description: 'Château-hôtel avec spa et restaurant gastronomique',
      link: '#',
    },
    {
      name: 'Auberge de la Beursaudière',
      rating: 3,
      price: '€70-110',
      distance: '12 km du domaine',
      description: 'Auberge traditionnelle avec restaurant local',
      link: '#',
    },
    {
      name: 'Gîtes Les Lavandes',
      rating: 4,
      price: '€120-200',
      distance: '5 km du domaine',
      description: 'Gîtes de groupe pour familles et amis',
      link: '#',
    },
  ];

  return (
    <section id="venue" className="py-20 bg-gradient-to-br from-green-50 via-purple-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t('venue.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('venue.subtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-yellow-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Main Venue */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <MapPin className="w-8 h-8 text-green-500 mr-4" />
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800">Domaine de Saint-Marc</h3>
                    <p className="text-lg text-gray-600">Merry-sur-Yonne, Bourgogne</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <p className="text-gray-700 leading-relaxed">
                    Charmant domaine niché au cœur de la vallée de l’Yonne, le Domaine de Saint-Marc à Merry-sur-Yonne offre un cadre authentique et paisible, entre rivière et collines boisées. 
                    Entourée d’un vaste parc arboré, cette élégante propriété allie le charme de la pierre bourguignonne à des espaces rénovés.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
  

    

                  </div>
                </div>

                <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-purple-500 text-white font-medium rounded-xl hover:from-green-600 hover:to-purple-600 transition-all duration-300 shadow-lg">
                  <Navigation className="w-5 h-5 mr-2" />
                  <a href="https://maps.google.com/?q=Domaine+de+Saint-Marc+Merry-sur-Yonne" target="_blank" rel="noopener noreferrer">
                    Voir sur Google Maps
                  </a>
                </button>
              </div>

              <div className="relative">
                <img 
                  src="https://image.jimcdn.com/app/cms/image/transf/dimension=1920x1024:format=jpg/path/s1a23af55007e2e4a/image/iefae6ff8c25577aa/version/1661015757/image.jpg" 
                  alt="Domaine de Saint-Marc" 
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Hotels */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            {t('venue.hotels.title')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hotels.map((hotel, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-lg font-bold text-gray-800 leading-tight">{hotel.name}</h4>
                  <div className="flex ml-2">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-sm ${
                          i < hotel.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                
                <p className="text-purple-600 font-medium mb-2">{hotel.price}</p>
                <p className="text-sm text-gray-500 mb-3">{hotel.distance}</p>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{hotel.description}</p>
                
                <button className="inline-flex items-center text-green-600 hover:text-green-700 font-medium group-hover:translate-x-1 transition-transform duration-200 text-sm">
                  Réserver
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Transport & Parking */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <Train className="w-8 h-8 text-purple-500 mr-4" />
              <h3 className="text-xl font-bold text-gray-800">
                {t('venue.transport.title')}
              </h3>
            </div>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">En train</p>
                  <p className="text-sm">Gare d'Auxerre (30 min) ou Gare de Montbard (45 min)</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">En voiture</p>
                  <p className="text-sm">A6 sortie Auxerre Sud, puis D965 direction Avallon</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-rose-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">Covoiturage</p>
                  <p className="text-sm">
                    <a href="https://chat.whatsapp.com/invite/covoiturage-simon-talia-2026" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 underline">
                      Rejoindre le groupe WhatsApp
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <Car className="w-8 h-8 text-orange-500 mr-4" />
              <h3 className="text-xl font-bold text-gray-800">
                {t('venue.parking.title')}
              </h3>
            </div>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">Domaine</p>
                  <p className="text-sm">Parking privé gratuit (100 places)</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">Navette</p>
                  <p className="text-sm">Service gratuit hôtels ↔ domaine (17h-02h)</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">Sécurité</p>
                  <p className="text-sm">Parking surveillé toute la soirée</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;