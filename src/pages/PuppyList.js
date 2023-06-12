import { useState } from 'react'
import PuppyCard from "../features/puppy-comps/PuppyCard";
import Input from '../components/ui/form/Input';
import classes from './PuppyList.module.scss'
import { DUMMY_DATA } from "../dummy-data";

const PuppyListPage = () => {

    // const [query, setQuery] = useState('');
    const [filteredData, setFilteredData] = useState(DUMMY_DATA)

   
   const ages = DUMMY_DATA.map( data => data.age);
   const minAge = Math.min(...ages);
   const maxAge = Math.max(...ages);
   const breedArr = DUMMY_DATA.map(data => data.breed).filter((breed, i, arr) => arr.indexOf(breed) === i );

   const reset = () => setFilteredData(DUMMY_DATA);
   const dataFilter = (keys, queryValue) => setFilteredData(DUMMY_DATA.filter(data => keys.some(key => data[key].toString().toLowerCase() === queryValue)));


   const genderFilterHandler = (e) => {
        if (e.target.value === 'all') {
            reset();
        }else{
            dataFilter(['gender'], e.target.value)
        }
    }

   const ageFilterHandler = (e) => {
    if (e.target.value === '') {
        reset();
    }else{
        dataFilter(['age'], e.target.value);
    }
   }

   const breedFilterHandler = (e) => {
    console.log(e.target.value)
    if (e.target.value === 'all') {
        reset();
    }else{
        dataFilter(['breed'], e.target.value);
    }
   }

   const searchHandler = (e) => {
    if (e.target.value === '') {
        reset();
    }else{
        dataFilter(['gender', 'name', 'age', 'breed'], e.target.value)
    }
   }

//    console.log('query', breedArr)


    return ( 
        <div className="app-container">
             <div className={classes.wrapper}>
                <aside>
                        <Input type="search" placeholder="Search puppy..." onChange={searchHandler}/>
                        <Input type='number' min={minAge} max={maxAge} onChange={ageFilterHandler} placeholder='All ages'/>
                        <Input variant='select' name='breed' onChange={breedFilterHandler}>
                            <option value="all">All Breed</option>
                            {
                                breedArr.map((breed, index) => <option key={index} value={breed.toLowerCase()}>{breed}</option>)
                            }
                        </Input>
                        <Input variant='select' name='gender' onChange={genderFilterHandler}>
                            <option value="all">All Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </Input>
                </aside>
                <div className={classes.results}>
                        {filteredData.map((data, index) => {
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
        </div>
    );
}
 
export default PuppyListPage;