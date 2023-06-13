import { useState, useEffect } from 'react'
import PuppyCard from "../features/puppy-comps/PuppyCard";
import Input from '../components/ui/form/Input';
import classes from './PuppyList.module.scss'
import { DUMMY_DATA } from "../dummy-data";

const PuppyListPage = () => {
    const [query, setQuery] = useState('');
    const [filteredData, setFilteredData] = useState(DUMMY_DATA);

    useEffect(() => {
        setFilteredData(
            DUMMY_DATA.filter(data => 
                data.name.toLowerCase().includes(query) ||
                data.age === +query  ||
                data.breed.toLowerCase().includes(query) ||
                data.gender.includes(query)
           )
        )
    }, [query])

   
   const ages = DUMMY_DATA.map( data => data.age);
   const minAge = Math.min(...ages);
   const maxAge = Math.max(...ages);
   const breedArr = DUMMY_DATA.map(data => data.breed).filter((breed, i, arr) => arr.indexOf(breed) === i );

   const reset = () => setFilteredData(DUMMY_DATA);

   const searchHandler = (e) => {
        if (e.target.value === '') reset();
        setQuery(e.target.value)
    }

   const ageFilterHandler = (e) => {
        const queried = [...DUMMY_DATA.filter(data => 
            data.name.toLowerCase().includes(query) ||
            data.age === +query  ||
            data.breed.toLowerCase().includes(query) ||
            data.gender.includes(query)
       )];

        if (e.target.value === '' && query === '') return reset();
        

        if (query === '') {
            return setFilteredData(DUMMY_DATA.filter(data => data.age === +e.target.value));
        }

        if (e.target.value === '' && query) return setFilteredData(queried)

        return setFilteredData(queried.filter(data => data.age === +e.target.value))
   }

   const breedFilterHandler = (e) => {
        const queried = [...DUMMY_DATA.filter(data => 
            data.name.toLowerCase().includes(query) ||
            data.age === +query  ||
            data.breed.toLowerCase().includes(query) ||
            data.gender.includes(query)
        )]

        console.log('queried breed', queried)

        if (e.target.value === 'all' && query === '') return reset();

        if (query === '') {
            return setFilteredData(DUMMY_DATA.filter(data => data.breed.toLowerCase() === e.target.value));
        }

        if (e.target.value === 'all' && query) return setFilteredData(queried)

        return setFilteredData(queried.filter(data => data.breed.toLowerCase() === e.target.value))

   }


    const genderFilterHandler = (e) => {
        const queried = [...DUMMY_DATA.filter(data => 
            data.name.toLowerCase().includes(query) ||
            data.age === +query  ||
            data.breed.toLowerCase().includes(query) ||
            data.gender.includes(query)
       )]
        console.log('queried gender', queried)
        if (e.target.value === 'all' && query === '') return reset();

        if (query === '') {
            return setFilteredData(DUMMY_DATA.filter(data => data.gender.toLowerCase() === e.target.value));
        }

        if (e.target.value === 'all' && query ) return setFilteredData(queried)

        return setFilteredData(queried.filter(data => data.gender === e.target.value))
    }

    return ( 
        <div className="app-container">
             <div className={classes.wrapper}>
                <aside className={classes.filters}>
                        <h3>Filter puppy</h3>
                        <Input type="search" placeholder="Search puppy..." onChange={searchHandler}/>
                        <Input type='number' min={minAge} max={maxAge} onChange={ageFilterHandler} placeholder='All ages' label='Age' />
                        <Input variant='select' name='breed' onChange={breedFilterHandler} label='Breed'>
                            <option value="all">All Breed</option>
                            {
                                breedArr.map((breed, index) => <option key={index} value={breed.toLowerCase()}>{breed}</option>)
                            }
                        </Input>
                        <Input variant='select' name='gender' onChange={genderFilterHandler} label='Gender'>
                            <option value="all">All Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </Input>
                </aside>
                <div className={classes.results}>
                        {filteredData.map(data => {
                            const link = `/${data.name}-${data.id}`.toLowerCase();
                            return (
                                <PuppyCard 
                                    key={data.id} 
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