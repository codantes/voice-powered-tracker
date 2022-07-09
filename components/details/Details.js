import {Box, Text} from '@chakra-ui/react'
import { Doughnut } from 'react-chartjs-2';
import useTransaction from '../../utils/useTransaction';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Details = ({type}) => {
    const {total, chartData} = useTransaction(type);
    return ( 
        <Box
            boxShadow='lg' 
            p='6' 
            rounded='md' 
            bg={type == 'income'? 'green.200' : 'orange.200'}
            m='0.5rem'
        >
            <Text
                textAlign='center'
                fontSize='25px'
                fontWeight='semibold'
                my='0.8rem'
            >
                Your total {type} is ${total}
            </Text>
            <Doughnut data={chartData} TLabel/>
        </Box>        
     );
}
 
export default Details;
