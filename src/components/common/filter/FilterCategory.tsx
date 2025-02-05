import { Button, Stack, Text } from "@chakra-ui/react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { formatKeyToLabel } from "@/utils/formatters";
import { SelectedFiltersType } from "./CardFilter";

export const FilterCategory = ({
  category,
  values,
  selectedFilters,
  expandedFilters,
  onCheckboxChange,
  onSliderChange,
  onShowMore,
}: {
  category: string;
  values: SelectedFiltersType;
  selectedFilters: Record<string, SelectedFiltersType>;
  expandedFilters: Record<string, boolean>;
  onCheckboxChange: (category: string, value: string) => void;
  onSliderChange: (category: string, value: number[]) => void;
  onShowMore: (key: string) => void;
}) => (
  <Stack gap={2} py={2}>
    <Text fontWeight="bold">{formatKeyToLabel(category)}</Text>
    {typeof values[0] === "number" ? (
      <Slider
        width="200px"
        max={values[1] as number}
        value={
          (selectedFilters[category] || [values[0], values[1]]) as [
            number,
            number
          ]
        }
        onValueChangeEnd={(e) => onSliderChange(category, e.value)}
        marks={[
          { value: values[0] as number, label: values[0] as number },
          { value: values[1] as number, label: values[1] as number },
        ]}
      />
    ) : (
      <>
        {(values as string[])
          .slice(0, expandedFilters[category] ? undefined : 4)
          .map((value) => (
            <Checkbox
              key={`${category}-${value}`}
              checked={(selectedFilters[category] as string[])?.includes(value)}
              onChange={() => onCheckboxChange(category, value)}
            >
              {value}
            </Checkbox>
          ))}
        {values.length > 4 && !expandedFilters[category] && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => onShowMore(category)}
          >
            Show More <BiChevronDown />
          </Button>
        )}
        {expandedFilters[category] && values.length > 4 && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => onShowMore(category)}
          >
            Show Less <BiChevronUp />
          </Button>
        )}
      </>
    )}
  </Stack>
);
