"use client";

import { useId } from "react";
import type {
  EventCategoryFilter,
  EventFilters,
  EventRegionFilter,
  EventTimeframe,
} from "@/types/event.types";
import { FORM_FIELD_CLASSES } from "@/client/components/ui/formField";
import { EVENT_CATEGORY_FILTER_OPTIONS, EVENT_REGION_FILTER_OPTIONS } from "../event-filter-options";

export interface EventFilterBarProps {
  filters: EventFilters;
  onSearchChange: (search: string) => void;
  onCategoryChange: (category: EventCategoryFilter) => void;
  onRegionChange: (region: EventRegionFilter) => void;
  onTimeframeChange: (timeframe: EventTimeframe) => void;
}

/**
 * The Events Archive's "Search Events / Event Type / Location / Date"
 * filter controls. Purely presentational — all state lives in the
 * `useEventsFilter` hook one level up in `EventsBrowser`.
 */
export default function EventFilterBar({
  filters,
  onSearchChange,
  onCategoryChange,
  onRegionChange,
  onTimeframeChange,
}: EventFilterBarProps) {
  const searchId = useId();
  const categoryId = useId();
  const regionId = useId();
  const timeframeId = useId();

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <label htmlFor={searchId} className="sr-only">
          Search Events
        </label>
        <input
          id={searchId}
          type="search"
          placeholder="Search Events"
          value={filters.search}
          onChange={(event) => onSearchChange(event.target.value)}
          className={FORM_FIELD_CLASSES}
        />
      </div>

      <div>
        <label htmlFor={categoryId} className="sr-only">
          Event Type
        </label>
        <select
          id={categoryId}
          value={filters.category}
          onChange={(event) => onCategoryChange(event.target.value as EventCategoryFilter)}
          className={FORM_FIELD_CLASSES}
        >
          {EVENT_CATEGORY_FILTER_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor={regionId} className="sr-only">
          Location
        </label>
        <select
          id={regionId}
          value={filters.region}
          onChange={(event) => onRegionChange(event.target.value as EventRegionFilter)}
          className={FORM_FIELD_CLASSES}
        >
          {EVENT_REGION_FILTER_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor={timeframeId} className="sr-only">
          Date
        </label>
        <select
          id={timeframeId}
          value={filters.timeframe}
          onChange={(event) => onTimeframeChange(event.target.value as EventTimeframe)}
          className={FORM_FIELD_CLASSES}
        >
          <option value="upcoming">Upcoming Events</option>
          <option value="past">Past Events</option>
        </select>
      </div>
    </div>
  );
}
