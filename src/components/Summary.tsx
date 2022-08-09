import { useSurveyStorage } from "../hooks/surveystorage.hook";
import { Gender } from "./Details";
import { StyledList } from "../styles";

export function Summary() {
    const [surveyStorage,] = useSurveyStorage()

    return (<>
        <StyledList>
            <li><b>Name</b><br/>{ surveyStorage.name }</li>
            <li><b>Email</b><br/>{ surveyStorage.email }</li>
            <li><b>Age</b><br/>{ surveyStorage.age } years old</li>
            <li><b>Gender</b><br/>{ Gender[surveyStorage.gender as Gender] }</li>
            <li><b>Favorite Book</b><br/>{ surveyStorage.book }</li>
            <li><b>Favorite
                Colors</b><br/>{ Object.keys(surveyStorage.colors as {}).filter((key) => (surveyStorage.colors as any)[key]).join(',') }
            </li>
        </StyledList>
    </>)
}