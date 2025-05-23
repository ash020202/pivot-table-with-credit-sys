import { FieldSelectorsProps } from "../utils/types";
import ReusableSelect from "./ReusableSelect";

export default function FieldSelectors({
  numericColumns,
  rowFields,
  setRowFields,
  columnFields,
  setColumnFields,
  measureFields,
  setMeasureFields,
  rowAndColOptions,
  aggregation,
  setAggregation,
}: FieldSelectorsProps) {
  // Type-safe wrapper functions for multi-select handlers
  const handleRowFieldsChange = (value: string | string[]) => {
    if (Array.isArray(value)) {
      setRowFields(value);
    }
  };

  const handleColumnFieldsChange = (value: string | string[]) => {
    if (Array.isArray(value)) {
      setColumnFields(value);
    }
  };

  const handleMeasureFieldsChange = (value: string | string[]) => {
    if (Array.isArray(value)) {
      setMeasureFields(value);
    }
  };

  // Type-safe wrapper for single-select handler
  const handleAggregationChange = (value: string | string[]) => {
    if (Array.isArray(value)) {
      setAggregation(value);
    }
  };

  return (
    <div className="flex flex-col gap-4 mb-4 p-1 ">
      <p className="font-semibold">Row Fields Multi-Select</p>
      <ReusableSelect
        isMulti
        value={rowFields}
        onChange={handleRowFieldsChange}
        options={rowAndColOptions}
        placeholder="-- Select Row Field(s) --"
      />

      <p className="font-semibold">Column Fields</p>
      <ReusableSelect
        isMulti
        value={columnFields}
        onChange={handleColumnFieldsChange}
        options={rowAndColOptions}
        placeholder="-- Select Column Field(s) --"
      />

      <p className="font-semibold">Measure Fields</p>
      <ReusableSelect
        isMulti
        value={measureFields}
        onChange={handleMeasureFieldsChange}
        options={numericColumns}
        placeholder="-- Select Measure Field(s) --"
      />

      <p className="font-semibold">Select Aggregation Type</p>
      <ReusableSelect
        isMulti
        value={aggregation}
        onChange={handleAggregationChange}
        options={["SUM", "AVG", "COUNT"]}
        placeholder="-- Select Aggregation --"
      />
    </div>
  );
}
