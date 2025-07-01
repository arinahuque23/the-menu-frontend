'use client';

import { type IRestaurant } from '@/data/restaurant.data';
import CopyIcon from '@/icons/CopyIcon';
import LocationIcon from '@/icons/LocationIcon';
import { EBookingStatusType, EBookingsType, EResturantStatusType } from '@/shared/enum/status.enum';
import clsx from 'clsx';
import L from 'leaflet';
import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import 'leaflet/dist/leaflet.css';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { MapContainer, Marker, Polyline, TileLayer, useMap } from 'react-leaflet';

interface IMapView {
  copy?: boolean;
  restaurantsData?: IRestaurant[];
  showDirection?: boolean;
  showZoomControl?: boolean;
  yourLocation?: boolean;
}

const CenterMapOnMarker = ({ lat, lng }: { lat: number; lng: number }) => {
  const map = useMap();

  useEffect(() => {
    map.flyTo([lat, lng], map.getZoom(), {
      duration: 1.0,
      easeLinearity: 0.25
    });
  }, [lat, lng, map]);

  return null;
};

const createCustomIcon = (rating: number, status: string, isSelected: boolean) => {
  const bgColor = status === EResturantStatusType.OPEN ? '#D6F3DE' : '#F6E1E2';
  const textColor = status === EResturantStatusType.OPEN ? '#00B12F' : '#B6020B';
  const baseColor = isSelected ? '#B6020B' : 'white';
  const ratingColor = isSelected ? 'white' : ' #120001';

  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        position: relative;
        display: inline-block;
        background: ${baseColor};
        border: 1px solid ${isSelected ? 'transparent' : '#E7E6E6'};
        border-radius: 8px;
        padding: 6px 4px 4px;
        text-align: center;
        font-size: 12px;
        box-shadow: 0 1px 5px rgba(0,0,0,0.3);
      ">
        <div style="margin-bottom:8px; color: ${ratingColor}; font-size:20px; font-family: 'Sequel Sans Bold Disp'; line-height: 20px;">${rating}</div>
        <div style="
          color: ${textColor};
          background: ${bgColor};
          border-radius: 6px;
          padding: 4px 10px 6px;
          font-size: 14px;
          font-family: 'Sequel Sans Book Disp';
          text-transform: capitalize;
        ">
          ${status}
        </div>
        <div style="
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: -8px;
          width: 0;
          height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 8px solid ${baseColor};
        "></div>
      </div>
    `,
    iconAnchor: [15, 38],
    popupAnchor: [0, -38]
  });
};

const MapView: React.FC<IMapView> = ({ copy, restaurantsData, showDirection, showZoomControl, yourLocation }) => {
  const [isClient, setIsClient] = useState(false);
  const [isLocating, setIsLocating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedMarkerIndex, setSelectedMarkerIndex] = useState<number | null>(null);
  const [routeCoords, setRouteCoords] = useState<[number, number][]>([]);
  const [loadingRoute, setLoadingRoute] = useState(false);
  const [location, setLocation] = useState<[number, number]>([40.705, -73.81]);
  const [error, setError] = useState<string | null>(null);
  const mapRef = useRef<any>(null);

  const getRoute = async () => {
    if (!showDirection || !restaurantsData?.[0]) return;
    const end = [restaurantsData[0].lat, restaurantsData[0].lng];
    setLoadingRoute(true);
    try {
      const res = await fetch(
        `https://router.project-osrm.org/route/v1/driving/${location[1]},${location[0]};${end[1]},${end[0]}?overview=full&geometries=geojson`
      );
      const data = await res.json();
      const coords = data.routes[0].geometry.coordinates.map(([lng, lat]: [number, number]) => [lat, lng]);
      setRouteCoords(coords);
    } catch (error) {
      console.error('Failed to fetch directions:', error);
    } finally {
      setLoadingRoute(false);
    }
  };
  useEffect(() => {
    getRoute();
  }, [showDirection, restaurantsData]);

  const handleCopy = async (e: any) => {
    e.stopPropagation();

    if (selectedMarker) {
      try {
        const address = await reverseGeocode(selectedMarker.lat, selectedMarker.lng);

        try {
          await navigator.clipboard.writeText(address);
        } catch {
          const textarea = document.createElement('textarea');
          textarea.value = address;
          textarea.setAttribute('readonly', '');
          textarea.style.position = 'absolute';
          textarea.style.left = '-9999px';
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
        }

        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Copy failed:', err);
      }
    }
  };

  useEffect(() => {
    setIsClient(true);
    if (restaurantsData && restaurantsData.length === 1) {
      setSelectedMarkerIndex(0);
    }
  }, [restaurantsData]);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation([position.coords.latitude, position.coords.longitude]);
      },
      (err) => {
        setError('Unable to retrieve location: ' + err.message);
      }
    );
  }, []);

  if (!isClient) {
    return null;
  }

  const MapEvents = () => {
    const map = useMap();
    useEffect(() => {
      mapRef.current = map;
      return () => {
        mapRef.current = null;
      };
    }, [map]);
    return null;
  };


  const handleLocateMe = () => {
    setIsLocating(true);
    setError(null);

    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      setIsLocating(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLocation: [number, number] = [
          position.coords.latitude,
          position.coords.longitude
        ];
        setLocation(userLocation);

        if (mapRef.current) {
          mapRef.current.flyTo(userLocation, 15, {
            duration: 1,
            easeLinearity: 0.25
          });
        }

        setIsLocating(false);
      },
      (err) => {
        setError(`Unable to retrieve location: ${err.message}`);
        setIsLocating(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  };
  const selectedMarker = selectedMarkerIndex !== null ? (restaurantsData ?? [])[selectedMarkerIndex] : null;
  const getStatusColorClass = (status: EBookingStatusType | EResturantStatusType | EBookingsType): string => {
    const normalizedStatus = status.toLowerCase();
    if (
      normalizedStatus === EBookingStatusType.CONFIRMED ||
      normalizedStatus === EResturantStatusType.OPEN ||
      normalizedStatus === EBookingsType.CONFIRMED
    ) {
      return 'text-clr-green-2f';
    } else if (normalizedStatus === EBookingStatusType.VISITED) {
      return 'text-clr-yellow-600';
    } else if (
      normalizedStatus === EBookingStatusType.CANCEL ||
      normalizedStatus == EResturantStatusType.CLOSED ||
      normalizedStatus == EBookingsType.CANCELED
    ) {
      return 'text-clr-red-0b';
    } else {
      return 'text-clr-brown-34';
    }
  };

  const reverseGeocode = async (lat: number, lng: number): Promise<string> => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
    );
    const data = await response.json();
    return data.display_name || 'Address not found';
  };

  return (
    <div className='relative h-full'>
      <MapContainer
        center={[40.705, -73.81]}
        zoom={14}
        style={{ height: '100%', width: '100%' }}
        zoomControl={showZoomControl}
      >
        <TileLayer
          url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
          attribution="&copy; <a href='https://carto.com/'>CARTO</a>"
        />
        <MapEvents />
        {(restaurantsData ?? []).map((marker, i) => (
          <Marker
            key={i}
            position={[marker.lat, marker.lng]}
            icon={createCustomIcon(marker.rating, marker.status, selectedMarkerIndex === i)}
            eventHandlers={{
              click: () => {
                setSelectedMarkerIndex(i);
              }
            }}
          />
        ))}
        {selectedMarker && <CenterMapOnMarker lat={selectedMarker.lat} lng={selectedMarker.lng} />}
        {routeCoords.length > 0 && <Polyline positions={routeCoords} color='#B6020B' weight={5} />}
        {loadingRoute && (
          <div className='absolute inset-0 z-[99999] flex items-center justify-center bg-white/60 backdrop-blur-sm'>
            <div className='h-10 w-10 animate-spin rounded-full border-4 border-clr-red-0b border-t-transparent'></div>
          </div>
        )}
      </MapContainer>
      {
        yourLocation &&
        <button
          onClick={handleLocateMe}
          disabled={isLocating}
          className='absolute top-5 right-5 z-[9999] size-9 rounded-lg bg-white flex items-center justify-center'
          aria-label="Show my location"
        >

          <LocationIcon />

        </button>
      }
      {copy && (
        <div className='absolute bottom-2 right-2 z-[9999]'>
          <button
            disabled={!selectedMarker}
            onClick={handleCopy}
            className='flex items-center gap-0.5 rounded-xl  bg-white px-2 py-1 font-book-disp text-xs text-clr-brown-34 backdrop-blur-[20px]'
          >
            {copied ? (
              'Copied!'
            ) : (
              <>
                Copy Address <CopyIcon />
              </>
            )}
          </button>
        </div>
      )}
      {selectedMarker && (restaurantsData?.length ?? 0) > 1 && (
        <div className='absolute bottom-12 left-1/2 z-[9999] w-[265px] -translate-x-1/2 transform rounded-lg border border-clr-white-f5 bg-white p-2 pr-4 shadow-map'>
          <div className='flex w-full items-center gap-3'>
            <Image
              src={selectedMarker.image}
              alt={selectedMarker.title}
              className='h-[64px] w-[64px] flex-shrink-0 rounded-lg object-cover'
            />
            <div className='flex-grow'>
              <div className='flex items-center gap-3'>
                <span
                  className={clsx(
                    'font-roman-disp text-sm capitalize leading-[16px]',
                    getStatusColorClass(selectedMarker.status)
                  )}
                >
                  {selectedMarker.status}
                </span>
                <span className='border-l border-clr-white-e6 pl-3 font-light-disp text-sm capitalize leading-[16px] text-clr-brown-34'>
                  {selectedMarker.type}
                </span>
              </div>
              <h2 className='font-medium-disp text-lg text-clr-black-01'>{selectedMarker.title}</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapView;
