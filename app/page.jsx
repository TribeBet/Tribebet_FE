import Search from "@/components/Search";
import CardSlider from "@/components/Card/CardSlider";
import Versus from "@/components/VersusCard/Versus";

export default function Home() {
  return (
    <div className="mx-5">
      <div className="relative pt-20">
        <CardSlider />
      </div>
      <h1>"Bet Smarter, Win Bigger with tribebet Betting!" </h1>
      <div className=" absoulte pt-4">
      </div>
      <div className="relative pb-2">
      <Versus />
      </div>
      
    </div>
  );
}
