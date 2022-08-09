import { useEffect, useReducer, useState } from "react";
import { Identity, IdentityStep } from "./Identity";
import { Details, DetailsStep } from "./Details";
import { Favorites, FavoritesStep } from "./Favorites";
import { Summary } from "./Summary";
import { useSurveyStorage } from "../hooks/surveystorage.hook";
import { GlobalStyle, Modal, StyledButton } from "../styles";

export enum Steps {
    Identity = 1,
    Details = 2,
    Favorites = 3,
    Summary = 4,
    Submitted = -1
}

export interface SurveyStatus {
    currentStep: Steps
}

export type SurveyStorage = Partial<IdentityStep & DetailsStep & FavoritesStep> & SurveyStatus

function Survey() {
    const [step, dispatch] = useReducer(stepReducer, 1)
    const [isWaitingToLoad, setIsWaitingToLoad] = useState(true)
    const [surveyStorage, setSurveyStorage] = useSurveyStorage()

    function stepReducer(state: number, action: any): number {
        switch (action.type) {
            case 'increment':
                return state + 1
            case 'decrement':
                return state - 1
            case 'restore':
                return action.payload
            case 'reset':
                return -1
        }
        return state
    }

    const stepFactory = () => {
        switch (step) {
            case Steps.Identity:
                return <Identity/>
            case Steps.Details:
                return <Details/>
            case Steps.Favorites:
                return <Favorites/>
            case Steps.Summary:
                return <Summary/>
        }
    }

    useEffect(() => {
        dispatch({type: 'restore', payload: surveyStorage.currentStep || 1})
        const interval = setInterval(() => setIsWaitingToLoad(false), 2000)
        return () => {
            clearInterval(interval)
        }
    }, [surveyStorage])

    return (
        (step !== Steps.Submitted && !isWaitingToLoad) ? <Modal>
            <GlobalStyle/>
            <div className='modal-box'>
                <header><h1>{ Steps[step] }</h1></header>
                <div className="content">
                    { stepFactory() }
                </div>
                <footer>
                    <StyledButton
                        onClick={ () => {
                            setSurveyStorage('currentStep', step - 1)
                            dispatch({type: 'decrement'})
                        } } disabled={ step === 1 }>Previous</StyledButton>
                    { step === 4
                        ? <StyledButton type='submit' onClick={ () => {
                            dispatch({type: 'reset'})
                            setSurveyStorage('currentStep', Steps.Submitted)
                        } }>Submit</StyledButton>
                        : <StyledButton onClick={ () => {
                            setSurveyStorage('currentStep', step + 1)
                            dispatch({type: 'increment'})
                        } }>Next</StyledButton> }
                </footer>
            </div>
        </Modal> : null
    )
}


export default Survey;