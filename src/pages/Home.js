import { DUMMY_DATA } from '../dummy-data';
import PuppyCard from '../features/puppy-comps/PuppyCard';
import classes from './Home.module.scss'

const HomePage = () => {
    return (
        <div className='app-container'>
            <h1 className={classes.heading}>Featured Puppies to adapt</h1>
            <div className={classes.wrapper}>
                    {DUMMY_DATA.slice(0,4).map((data, index) => {
                        const link = `/${data.name}-${index + 1}`.toLowerCase();
                        return (
                            <PuppyCard 
                                key={index} 
                                details={{
                                    name: data.name, 
                                    age: data.age,
                                    gender: data.gender,
                                    image: data.photoUrl, 
                                    link: link
                                }}
                                />
                        )
                    })}
            </div>
        </div>
    );
}
 
export default HomePage;