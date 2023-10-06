import React from "react";
import System from "./System";
import AddZone from "./AddZone";
import {
  VscExtensions,
  VscGraph,
  VscCircleLarge,
  VscSymbolOperator,
  VscIndent,
  VscDebugStop,
  VscSymbolMisc,
  VscSettings,
  VscTypeHierarchy,
  VscClose,
  VscAccount,
  VscGlobe,
} from "react-icons/vsc";
import "../style/System.css";

const ZonesList = ({ zones, onSelectZone, userData, onAddZoneClick }) => {
  const onDashboardClick = () => {
    onSelectZone(null);
  };
  // console.log(userData[0].systemName);
  return (
    <div className="zones-plus">
      <div className="my-zones">
        <h3>
          <VscAccount />
        </h3>

        <div className="">
          <h4 className="city">{userData[0].state}</h4>
          <h4 className="">
            {userData[0].city} {userData[0].state} {userData[0].weather}{" "}
            {userData[0].temp}°<br></br>
            {userData.formattedDate}
            <div>{userData[0].systemName} </div>
          </h4>
        </div>
      </div>
      <div className="zones-list">
        <div className="sect-def">
          {" "}
          <VscSymbolMisc className="symbol-pad" /> My Zones{" "}
        </div>

        {zones.map((zone) => (
          <div
            key={zone.num}
            onClick={() => onSelectZone(zone)}
            className="zone-item space-between"
          >
            <VscCircleLarge />
            {zone.name}
          </div>
        ))}
        <button onClick={onAddZoneClick} className="space-between blue-hover">
          <VscExtensions />
          Add Zone
        </button>
        {/* <div className='zones-item' onClick={onAddZoneClick}> <a href="/zones/add">+ Zone </a> </div> */}
        <div className="sect-def">
          <VscTypeHierarchy className="symbol-pad" />
          My System{" "}
        </div>

        <button onClick={onDashboardClick} className="space-between blue-hover">
          <VscGraph />
          Dashboard
        </button>
        <button>
          <a href="/" className="space-between">
            <VscSymbolOperator /> Consumption
          </a>
        </button>
        <button onClick={onDashboardClick} className="space-between blue-hover">
          <VscGlobe />
          Forecast
        </button>
        <div className="sect-def">
          {" "}
          <VscSettings className="symbol-pad" />
          My Profile
        </div>
        <button>
          <a href="/" className="space-between">
            <VscDebugStop />
            Logout
          </a>
        </button>

        <div className="system-profile space-between">
          <img
            className="system-img"
            src={userData[0].systemImg}
            alt={userData[0].systemName}
            width="40"
            height="40"
          />
          <a href="/profile">
            {userData[0].systemName.length > 13
              ? userData[0].systemName.slice(0, 13) + "..."
              : userData[0].systemName}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ZonesList;
