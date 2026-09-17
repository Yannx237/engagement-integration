import HomeHero from './components/home/HomeHero';
import HomeMission from './components/home/HomeMission';
import HomeAreas from './components/home/HomeAreas';
import HomeProjects from './components/home/HomeProjects';
import PartnersStrip from './components/PartnersStrip';
import HomeJoinBanner from './components/home/HomeJoinBanner';
import HomeLocations from './components/home/HomeLocations';
import HomeContact from './components/home/HomeContact';
import HomeShop from './components/home/HomeShop';

export default function RedesignHome() {
  return (
    <div className="w-full">
      <main>
        <HomeHero />

        <HomeMission />

        <HomeAreas />

        <HomeProjects />

        <PartnersStrip />

        <HomeJoinBanner />

        <HomeLocations />

        <HomeContact />

        <HomeShop />
      </main>
    </div>
  );
}
