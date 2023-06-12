import Card from "../../components/ui/Card";
import PuppyInfo from "./PuppyInfo"
import { DUMMY_DATA } from "../../dummy-data";
import classes from './PuppyAside.module.scss'

const PuppyAside = () => {

    const TEST_IMG = DUMMY_DATA[0].photoUrl;

    return ( 
        <aside>
            <Card className={classes['card-puppy']}>
                <div className={classes['card-puppy--image']}><img src={TEST_IMG} alt="" /></div>
                <div className={classes['card-puppy--details']}>
                    <h1>Puppy Name</h1>  
                    <PuppyInfo heading='Age' info='2' />
                    <PuppyInfo heading='Gender' info='Female' />
                </div>
            </Card>
        </aside>
     );
}
 
export default PuppyAside;