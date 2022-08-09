import { ChangeEvent } from "react";
import { useSurveyStorage } from "../hooks/surveystorage.hook";
import { SurveyStorage } from "./Survey";
import { StyledInput, StyledLabel } from "../styles";

export interface IdentityStep {
    name?: string
    email?: string
}

export function Identity() {
    const [surveyStorage, setSurveyStorage] = useSurveyStorage()

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        return setSurveyStorage(event.target.name as keyof SurveyStorage, event.target.value)
    }

    return (<>
        <div>
            <StyledLabel htmlFor="name">Name</StyledLabel>
            <StyledInput type="text" name='name' value={ surveyStorage.name } onChange={ handleInputChange }
                   data-testid='name'/>
        </div>
        <div>
            <StyledLabel htmlFor="email">Email</StyledLabel>
            <StyledInput type="text" name="email" value={ surveyStorage.email } onChange={ handleInputChange }
                   data-testid='email'/>
        </div>
    </>)
}