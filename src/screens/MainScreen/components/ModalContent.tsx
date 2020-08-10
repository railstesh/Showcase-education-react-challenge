import * as React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Input, Button } from "../../../sharedComponents";
import { IEducation } from "../types";
import AsyncSelect from 'react-select/async';

interface IProps {
    universities: any;
    handleToggle: () => void;
    setEducationDetails: (details: IEducation) => void;
    getUniversities: (value: string) => void;
}
interface IState {
    formState: IEducation;
}
interface IOption {
    value: string,
    label: string
}

const ModalContent: React.FC<IProps> = (props: IProps, state: IState) => {
    const initialState = { startDate: null, endDate: null, university: "", degree: "", grade: "", field: "", description: "" };
    const [formState, setFormState] = useState(initialState);
    const [selectedValue, setSelectedValue] = useState<IOption>({ value: "", label: "" });

    const filtersOptions = () => {
        return (props.universities && props.universities.length > 0)
            ? props.universities.map((option: any) => {
                return ({ value: option.name, label: option.name });
            }) : [];
    }

    const loadOptions = (inputValue: string, callback: any) => {
        setTimeout(() => {
            callback(filtersOptions());
        }, 1000);
    };

    const handleInputChange = (newValue: string) => {
        const inputValue = newValue.replace(/\W/g, '');
        props.getUniversities(inputValue)
        return inputValue;
    };

    const handleSelect = (selected: any) => {
        setSelectedValue(selected);
        handleChange('university', selected.value);
    }

    const handleChange = (key: string, value: string | Date) => {
        const updatedState = { ...formState, [key]: value };
        setFormState(updatedState);
    }

    const handleSubmit = () => {
        props.setEducationDetails(formState);
        props.handleToggle();
    }

    return (
        <div className="w-100 px-4">
            <h6 className='text-center ml-3'>Enter Education Details</h6>
            <div className='col-lg-12'>
                <div className="row">
                    <div className="col-12">
                        <AsyncSelect
                            cacheOptions
                            loadOptions={loadOptions}
                            defaultOptions
                            value={selectedValue}
                            onChange={handleSelect}
                            placeholder='University'
                            onInputChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <DatePicker
                            name="startDate"
                            placeholderText="Start Date"
                            maxDate={new Date()}
                            selected={formState.startDate}
                            onChange={(date: Date) => { handleChange('startDate', date) }}
                        />
                    </div>
                    <div className="col-6">
                        <DatePicker
                            name="endDate"
                            placeholderText="End Date"
                            minDate={formState.startDate}
                            selected={formState.endDate}
                            onChange={(date: Date) => { handleChange('endDate', date) }}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Input
                            type="text"
                            name="degree"
                            placeholder="Degree"
                            value={formState.degree}
                            onChange={(e) => { handleChange('degree', e.target.value) }}
                        />
                    </div>
                    <div className="col-6">
                        <Input
                            type="text"
                            name="grade"
                            placeholder="Grade"
                            value={formState.grade}
                            onChange={(e) => { handleChange('grade', e.target.value) }}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Input
                            type="text"
                            name="field"
                            placeholder="Field"
                            value={formState.field}
                            onChange={(e) => { handleChange('field', e.target.value) }}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Input
                            type="text"
                            name="description"
                            placeholder="Description"
                            value={formState.description}
                            onChange={(e) => { handleChange('description', e.target.value) }}
                        />
                    </div>
                </div>
            </div>
            <div className='text-right mt-3'>
                <Button onClick={handleSubmit}>Save</Button>
            </div>
        </div>
    );
};

export default ModalContent;
