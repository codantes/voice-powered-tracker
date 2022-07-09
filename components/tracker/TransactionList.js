import {Box, UnorderedList, ListItem, ListIcon, IconButton, Text} from '@chakra-ui/react'
import {MdDelete} from 'react-icons/md'
import {useContext} from 'react'
import {TrackerContext} from '../../context/context'

const TransactionList = () => {
    const {transactions, deleteTransaction} = useContext(TrackerContext);

    return ( 
        <Box>
            <Text
            textAlign='center'
            fontSize='18px'
            fontWeight='semibold'
            >
                You are tracking {transactions.length} transactions
            </Text>
            <UnorderedList
                listStyleType='none'
                border='1px solid grey'
                borderRadius='5px'
                textAlign='center'
                my='1rem'
                py='0.5rem'
                px='1rem'
            >
                {
                    transactions.map((transaction) => {
                        return(
                            <ListItem 
                                key={transaction.id}
                                display='flex'
                                justifyContent='space-between'
                                alignItems='center'
                                my='0.3rem'
                            >
                                {transaction.source}
                                <IconButton 
                                icon={<MdDelete/>}
                                onClick={() => deleteTransaction(transaction.id)}
                                borderRadius='50px'
                                />
                            </ListItem>
                        )
                    })
                }
            </UnorderedList>
        </Box>
     );
}
 
export default TransactionList;