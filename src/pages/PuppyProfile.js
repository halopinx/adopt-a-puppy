import { useContext } from 'react';
import { useParams } from 'react-router'
import PuppyAside from "../features/puppy-comps/PuppyAside";
import PuppyInfo from "../features/puppy-comps/PuppyInfo";
import classes from './PuppyProfile.module.scss'
import AdoptForm from "../features/adopt-form/AdoptForm";
import { DUMMY_DATA } from "../dummy-data";
import FormContext from '../store/form-context';
import imgPlaceholder from '../assets/images/placeholder.jpg'


const PuppyProfilePage = () => {
    const { isSubmitted } = useContext(FormContext)
    const router = useParams()
    const puppyId = router.id.split('-')[1]

    const fetchPuppyById = DUMMY_DATA.filter(data => data.id === puppyId);

    const { name, age, gender, photoUrl, size, isVaccinated, isNeutered, traits } = [...fetchPuppyById][0];
    const traitsList = traits.join(', ');

    console.log(isSubmitted)

    return (  
        <div className="app-container">
            <div className={classes.wrapper}>
                <PuppyAside name={name} age={age} gender={gender} photoUrl={photoUrl || imgPlaceholder}/>
                <section className={classes.content}>
                    <h2>Puppy Profile Information</h2>
                    <div className={classes['profile-list']}>
                        <PuppyInfo heading='Size' info={size} />
                        <PuppyInfo heading='Personality traits' info={traitsList} />
                        <PuppyInfo heading='Vaccination records' info={isVaccinated ? 'Yes' : 'No'} />
                        <PuppyInfo heading='spaying/neutering' info={isNeutered ? 'Yes' : 'No'} />
                    </div>
                    {isSubmitted && <p>YAY!</p>}
                     <div className={classes.action}>
                        <h3>Interested to adopt {name}?</h3>
                        <p>Please fill out the form below.</p>
                        <AdoptForm />
                     </div>
                   
                </section>
            </div>
        </div>
    );
}
 
export default PuppyProfilePage;