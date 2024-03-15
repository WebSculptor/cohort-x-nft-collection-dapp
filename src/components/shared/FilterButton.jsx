import { useState } from "react";
import { Button } from "../ui/button";

// eslint-disable-next-line react/prop-types
export const FilterButton = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    onFilterChange(filter === "all" ? "all" : "secondary");
  };

  return (
    <>
      <Button
        variant={activeFilter === "all" ? "default" : "outline"}
        onClick={() => handleFilterChange("all")}>
        All Collections
      </Button>
      <Button
        variant={activeFilter === "my" ? "default" : "outline"}
        onClick={() => handleFilterChange("my")}>
        My Collections
      </Button>
    </>
  );
};
