"use client"


import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { type DateRange } from "react-day-picker"
import { Button } from "../ui/button"
import { Calendar } from "../ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Field } from "../ui/field"

type DatePickerWithRangeProps = {
    value: DateRange | undefined
    onChange: (date: DateRange | undefined) => void
}

export function DatePickerWithRange({ value, onChange }: DatePickerWithRangeProps) {

    return (
        <Field className="mx-auto w-60">
            <Popover>
                <PopoverTrigger
                    render={
                        <Button
                            variant="outline"
                            className="justify-start px-2.5 font-normal"
                        >
                            <CalendarIcon />
                            {value?.from ? (
                                value.to ? (
                                    <>
                                        {format(value.from, "dd/MM/yyyy")} -{" "}
                                        {format(value.to, "dd/MM/yyyy")}
                                    </>
                                ) : (
                                    format(value.from, "dd/MM/yyyy")
                                )
                            ) : (
                                <span>Selecione uma data</span>
                            )}
                        </Button>
                    }
                />
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        mode="range"
                        // defaultMonth={date?.from}
                        selected={value}
                        onSelect={onChange}
                        numberOfMonths={2}
                    />
                    <div className="p-2 border-t flex justify-end">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => onChange(undefined)}
                        >
                            Limpar
                        </Button>
                    </div>

                </PopoverContent>
            </Popover>
        </Field>
    )
}
