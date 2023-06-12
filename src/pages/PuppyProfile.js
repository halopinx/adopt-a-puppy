import { useState } from "react";
import Button from "../components/ui/Button";
import PuppyAside from "../features/puppy-comps/PuppyAside";
import PuppyInfo from "../features/puppy-comps/PuppyInfo";
import classes from './PuppyProfile.module.scss'
import AdoptForm from "../features/adopt-form/AdoptForm";

const PuppyProfilePage = () => {
    const [showForm, setShowForm] = useState(true);

    const showFormHandler = () => {
        setShowForm(true)
    }

    return (  
        <div className="app-container">
            <div className={classes.wrapper}>
                <PuppyAside />
                <section className={classes.content}>
                    <h2>Puppy Profile Information</h2>
                    <div className={classes['profile-list']}>
                        <PuppyInfo heading='Personality traits' info='Lorem, ipsum.' />
                        <PuppyInfo heading='Vaccination records' info='Lorem, ipsum.' />
                        <PuppyInfo heading='spaying/neutering' info='Yes' />
                        <PuppyInfo heading='Special Needs' info='Notes here' />
                    </div>
                    {showForm && <AdoptForm />}
                
                    {!showForm && (
                         <div className="action">
                            <Button variant='button' onClick={showFormHandler}>Adopt Me!</Button>
                         </div>
                    )}
                   
                </section>
            </div>
        </div>
    );
}
 
export default PuppyProfilePage;