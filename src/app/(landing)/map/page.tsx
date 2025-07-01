import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/modules/map/Map'), {
  ssr: false
});

const MapPage = () => {
  return (
    <div>
      <Map />
    </div>
  );
};

export default MapPage;
