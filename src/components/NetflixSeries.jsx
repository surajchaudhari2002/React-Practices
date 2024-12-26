import seriseData from '../api/seriesData.json'
import {SeriesCard} from './SeriesCard'
const NetflixSeries = () => {
    return <>
        <h1>List Of some popular Netflix Series</h1>
        <ul className="grid grid-three--cols">
            {
                seriseData.map((item) => (
                    <SeriesCard key={item.id} data={item} />
                ))
            }
        </ul>
    </>
}
export default NetflixSeries