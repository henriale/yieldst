import { useState } from 'react'
import { SurveyStorage } from "../components/Survey";
import { Gender } from "../components/Details";

const KEY = 'survey-data'

export function useSurveyStorage() {
    const initialStorage: SurveyStorage = {
        currentStep: 1,
        name: "",
        email: "",
        age: 0,
        gender: Gender.other,
        book: "",
        colors: {
            red: false,
            blue: false
        },
    }
    const [surveyStorage, setStorage] = useState<SurveyStorage>(() => {
        try {
            const localStorage = window?.localStorage?.getItem(KEY)
            return localStorage ? (JSON.parse(localStorage as string) as SurveyStorage) : initialStorage
        } catch (error) {
            console.log(error)
            return initialStorage
        }
    })

    const setSurveyStorage = <K extends keyof SurveyStorage>(key: K, value: SurveyStorage[K]) => {
        const localStorage = window?.localStorage?.getItem(KEY)
        const previousValue = localStorage ? (JSON.parse(localStorage as string) as SurveyStorage) : initialStorage
        const newValue = {...previousValue, [key]: value}
        setStorage(newValue)
        window.localStorage.setItem(KEY, JSON.stringify(newValue))
    }
    return [surveyStorage, setSurveyStorage] as const
}
