import Search from "@/components/Search";
import Slider from "@/components/Slider/Slider";
import CardSlider from "@/components/Card/CardSlider";
import Versus from "@/components/VersusCard/Versus";

export default function Home() {
  return (
    <div className="mx-5">
      <div className="relative pt-20">
        <CardSlider />
      </div>

      <div className=" absoulte pt-2">
        <Search />
      </div>
      
      <div className="relative pb-2">
      <Versus />
      </div>
    </div>
  );
}
