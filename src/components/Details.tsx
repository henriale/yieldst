import { useSurveyStorage } from "../hooks/surveystorage.hook";
import { SurveyStorage } from "./Survey";
import { useEffect } from "react";
import { StyledLabel, StyledRadioFieldset, StyledSelect } from "../styles";

export enum Gender {
    male,
    female,
    other
}

export interface DetailsStep {
    age: number
    gender: Gender
}

export function Details() {
    const [surveyStorage, setSurveyStorage] = useSurveyStorage()
    useEffect(() => {

    }, [surveyStorage])
    return (<>
        <StyledLabel htmlFor="age">Age</StyledLabel>
        <StyledSelect name="age" id="age" required value={ surveyStorage.age }
                      onChange={ (e) => setSurveyStorage(e.currentTarget.name as keyof SurveyStorage, e.currentTarget.value) }
                      data-testid='age'>
            { Array.from({length: 40}, (v, index) => <option key={ index } value={ index }>{ index } years
                old</option>) }
        </StyledSelect>
        <StyledRadioFieldset>
            <legend>Gender</legend>
            <div className="radio-group">
                <input type="radio" value={ Gender.male } name="gender" checked={ surveyStorage.gender == Gender.male }
                       onChange={ (e) => setSurveyStorage(e.target.name as keyof SurveyStorage, e.target.value) }
                       data-testid='gender-male'/> <StyledLabel>Male</StyledLabel>
            </div>
            <div className="radio-group">
                <input type="radio" value={ Gender.female } name="gender"
                       checked={ surveyStorage.gender == Gender.female }
                       onChange={ (e) => setSurveyStorage(e.target.name as keyof SurveyStorage, e.target.value) }
                       data-testid='gender-female'/> <StyledLabel>Female</StyledLabel>
            </div>
            <div className="radio-group">
                <input type="radio" value={ Gender.other } name="gender"
                       checked={ surveyStorage.gender == Gender.other }
                       onChange={ (e) => setSurveyStorage(e.target.name as keyof SurveyStorage, e.target.value) }
                       data-testid='gender-other'/> <StyledLabel>Other</StyledLabel>
            </div>
        </StyledRadioFieldset>
    </>)
}