"use client"

import { useState } from "react";
import dynamic from "next/dynamic";
import Start from "./Start";

const Search = (props) => {
  const { zoneList } = props;
  const [currentZone, setCurrentZone] = useState({ zoneName: "", zoneId: "" });
  const [selectedLevel, setSelectedLevel] = useState("start");

  const Zone = dynamic(() => import("@/components/Zone"));
  const Service = dynamic(() => import("@/components/Service"));

  const SelectedComponent = () => {
    switch (selectedLevel) {
      case "start":
        return <Start setSelectedLevel={setSelectedLevel} />;
      case "zone":
        return (
          <Zone
            zoneList={zoneList}
            currentZone={currentZone}
            setCurrentZone={setCurrentZone}
            setSelectedLevel={setSelectedLevel}
          />
        );

      case "service":
        return (
          <Service
            currentZone={currentZone}
            setSelectedLevel={setSelectedLevel}
          />
        );
      default:
        return <Start />;
    }
  };

  return (
    <div className="max-w-[500px] w-full h-full p-3 flex flex-wrap content-center flex-col ">
      <SelectedComponent />
    </div>
  );
};

export default Search;
