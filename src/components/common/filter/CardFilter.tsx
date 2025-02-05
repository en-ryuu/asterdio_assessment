"use client";

import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Badge, Button, HStack, Separator, Stack } from "@chakra-ui/react";
import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { BiFilter } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { FilterCategory } from "./FilterCategory";

export type SelectedFiltersType = string[] | number[];

export interface ICardFilter<T extends object> {
  data: T[];
  filterKeys: (keyof T)[];
  setFilteredData: Dispatch<SetStateAction<T[] | undefined>>;
  filteredData?: T[];
}

export default function CardFilter<T extends object>({
  data,
  filterKeys,
  setFilteredData,
  filteredData,
}: ICardFilter<T>) {
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, SelectedFiltersType>
  >({});
  const [expandedFilters, setExpandedFilters] = useState<
    Record<string, boolean>
  >({});

  const filters = useMemo(() => {
    const newFilters: Record<string, SelectedFiltersType> = {};

    filterKeys.forEach((key) => {
      const values = Array.from(
        new Set(data.map((item) => item[key]))
      ) as SelectedFiltersType;
      if (typeof values[0] === "number") {
        newFilters[key as string] = [
          Math.min(...(values as number[])),
          Math.max(...(values as number[])),
        ];
      } else {
        newFilters[key as string] = values;
      }
    });
    return newFilters;
  }, [data]);

  useEffect(() => {
    if (filters) {
      resetFilters();
    }
  }, [filters]);

  const handleCheckboxChange = (category: string, value: string) => {
    setSelectedFilters((prev) => {
      const currentSelection = prev[category] as string[] | undefined;
      if (!currentSelection) return prev;

      const newSelection = currentSelection.includes(value)
        ? currentSelection.filter((v) => v !== value)
        : [...currentSelection, value];

      return { ...prev, [category]: newSelection };
    });
  };

  const handleSliderChange = (category: string, value: number[]) => {
    setSelectedFilters((prev) => ({ ...prev, [category]: value }));
  };

  const handleShowMore = useCallback((key: string) => {
    setExpandedFilters((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }, []);

  const resetFilters = () => {
    setSelectedFilters(
      Object.keys(filters).reduce((acc, key) => {
        acc[key] = typeof filters[key][0] === "number" ? filters[key] : [];
        return acc;
      }, {} as Record<string, SelectedFiltersType>)
    );
    setFilteredData(undefined);
  };

  const onApplyFilters = () => {
    const filteredData = data.filter((item) => {
      return filterKeys
        .map((key) => {
          const filterValues = selectedFilters[key as string];
          if (!filterValues || filterValues?.length == 0) return true;
          if (typeof filterValues[0] === "number") {
            const [min, max] = filterValues as number[];
            return (item[key] as number) >= min && (item[key] as number) <= max;
          } else {
            return (filterValues as string[]).includes(item[key] as string);
          }
        })
        ?.every((value) => value);
    });
    setFilteredData(filteredData);
  };

  return (
    <DrawerRoot>
      <DrawerBackdrop />
      <HStack
        justifyContent={
          filteredData && filteredData?.length != data.length
            ? "space-between"
            : "flex-end"
        }
      >
        {filteredData && filteredData?.length != data.length && (
          <Badge
            variant="outline"
            colorPalette="brand"
            size={"md"}
            w="fit-content"
          >
            {filteredData?.length} items filtered.
            <CgClose onClick={resetFilters} cursor={"pointer"} />
          </Badge>
        )}
        <DrawerTrigger asChild>
          <Button variant="outline" size="sm" w="fit-content">
            <BiFilter /> Filter
          </Button>
        </DrawerTrigger>
      </HStack>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Filter Events</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <Stack gap={4}>
            {Object.entries(filters ?? {}).map(([key, values]) => (
              <React.Fragment key={key}>
                <FilterCategory
                  category={key}
                  values={values}
                  selectedFilters={selectedFilters}
                  expandedFilters={expandedFilters}
                  onCheckboxChange={handleCheckboxChange}
                  onSliderChange={handleSliderChange}
                  onShowMore={handleShowMore}
                />
                <Separator />
              </React.Fragment>
            ))}
          </Stack>
        </DrawerBody>
        <DrawerFooter>
          <DrawerActionTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerActionTrigger>
          <Button onClick={onApplyFilters}>Apply</Button>
        </DrawerFooter>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
}
