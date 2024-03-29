"use client";
import fetchData from "@/components/component/fetchData";
import {SuggestionComponent} from "@/components/component/suggestion-component";
import React, {useEffect, useState} from "react";

function suggestion() {
  const [items, setItems] = useState([{name: "", suggestion: "", score: 0}]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const result = await fetchData();
        if (result) {
          setItems(result);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchDataAsync();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center gap-10 min-w-full relative">
      <SuggestionComponent items={items} setItems={setItems} />
    </div>
  );
  // ));
}

export default suggestion;
