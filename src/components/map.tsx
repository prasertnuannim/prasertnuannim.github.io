"use client";
import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { p } from "framer-motion/client";

type Props = {};

function Map({}: Props) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API as string,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");
      const { Marker } = await loader.importLibrary("marker");

      const position = {
        lat: 17.8749,
        lng: 103.07663,
      };

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 14,
        mapId: "My Location",
      };

      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      // Create a marker
      const marker = new Marker({
        map: map,
        position: position,
      });

      // Add click event listener to the marker
      marker.addListener("click", () => {
        window.open(
          `https://www.google.com/maps/search/?api=1&query=${position.lat},${position.lng}`,
          "_blank"
        );
      });

      // Add click event listener for the entire map
      map.addListener("click", (e: google.maps.MapMouseEvent) => {
        if (e.latLng) {
          const lat = e.latLng.lat();
          const lng = e.latLng.lng();

          // Open Google Maps app with the clicked location
          window.open(
            `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`,
            "_blank"
          );
        }
      });
    };

    initMap();
  }, []);

  return (
    <>
      <p className="text-3xl justify-start p-2">Location.</p>
      <div className="map-container mt-3">
        <div ref={mapRef} className="map" />
      </div>
    </>
  );
}

export default Map;
