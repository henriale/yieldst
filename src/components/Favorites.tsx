import { ChangeEvent } from "react";
import { useSurveyStorage } from "../hooks/surveystorage.hook";
import { SurveyStorage } from "./Survey";
import { StyledCheckboxFieldset, StyledInput, StyledLabel } from "../styles";

interface Colors {
    red: boolean
    blue: boolean
}

export interface FavoritesStep {
    book: string
    colors: Colors
}

export function Favorites() {
    const [surveyStorage, setSurveyStorage] = useSurveyStorage()

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        return setSurveyStorage(event.target.name as keyof SurveyStorage, event.target.value)
    }

    function handleColorsChange(event: ChangeEvent<HTMLInputElement>) {
        const colors = {
            ...surveyStorage.colors,
            [event.target.name]: !(surveyStorage.colors as Colors)[event.target.name as keyof Colors]
        }
        return setSurveyStorage('colors', colors as SurveyStorage['colors'])
    }

    return (<>
        <div>
            <StyledLabel htmlFor="book">Favorite Book</StyledLabel>
            <StyledInput type="text" name='book' required value={ surveyStorage.book } onChange={ handleInputChange }
                   data-testid='book'/>
        </div>
        <StyledCheckboxFieldset>
            <legend>Favorite Colors</legend>
            <div className='checkbox-group'>
                <input type="checkbox" name="red" checked={ surveyStorage.colors?.red } onChange={ handleColorsChange }
                       data-testid='red'/>
                <StyledLabel htmlFor="red">Red</StyledLabel>
            </div>
            <div className='checkbox-group'>
                <input type="checkbox" name="blue" checked={ surveyStorage.colors?.blue }
                       onChange={ handleColorsChange } data-testid='blue'/>
                <StyledLabel htmlFor="blue">Blue</StyledLabel>
            </div>
        </StyledCheckboxFieldset>
    </>)
}