import {Grid, GridItem, Text} from '@chakra-ui/react'
import Details from '../components/details/Details.js'
import Tracker from '../components/tracker/Tracker'
import { PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui';

const home = () => {
  return ( 
    <Grid
    gridTemplateColumns={['1fr', '1fr', 'repeat(3, 1fr)', 'repeat(3, 1fr)']}
    p='3rem'
    gap='1rem'
    > 
      <GridItem
      gridColumn={[null, null, '2', '2']}
      >
        <Tracker />
      </GridItem>

      <GridItem
      gridColumn={[null, null, '1', '1']}
      gridRow={[null, null, '1', '1']}
      >
        <Details type='income'/>
      </GridItem>
      
      <GridItem>
        <Details type='expense'/>
      </GridItem>

      <GridItem>
        <PushToTalkButtonContainer>
          <PushToTalkButton />
        </PushToTalkButtonContainer>
      </GridItem>
      
    </Grid>
   );
}
 
export default home;