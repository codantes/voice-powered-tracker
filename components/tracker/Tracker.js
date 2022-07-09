import { FormControl, FormLabel, Input, Button, Box, Text, Select } from "@chakra-ui/react";
import TransactionList from "./TransactionList";
import {useState, useContext} from 'react'
import { TrackerContext } from "../../context/context";
import {v4 as uuidv4 } from 'uuid';
import {incomeCategories, expenseCategories} from '../../constants/categories'
const Tracker = () => {
    const transactionTemplate = {
        id : '',
        amount : '',
        type : '',
        source : '',
        date : new Date()
    }

    const [formData, setFormData] = useState(transactionTemplate);
    const {addTransaction} = useContext(TrackerContext)

    const createTransaction = () => {
        let transaction = {
            ...formData,
             amount : Number(formData.amount),
             id : uuidv4()
        }
        addTransaction(transaction);
        setFormData(transactionTemplate);
    }

    const selectedCategory = formData.type == "income" ? incomeCategories : expenseCategories;  
    return ( 
        <Box
            boxShadow='lg' 
            p='6' 
            rounded='md' 
            m='0.5rem'
        >
            <Text
                textAlign='center'
                fontSize='20px'
                fontWeight='semibold'
                textTransform='uppercase'
            >
                Total Balance is $100
            </Text>

            <FormControl>
                <FormLabel htmlFor='amount'>Amount</FormLabel>
                <Input 
                    type='number' 
                    id='amount'
                    value={formData.amount}
                    onChange={(e) => {
                        setFormData({
                            ...formData, amount : e.target.value
                        })
                    }}
                />
                <FormLabel htmlFor='type'>Type</FormLabel>
                <Select 
                    id='type' 
                    value={formData.type} 
                    onChange={(e) => {setFormData({
                        ...formData, type : e.target.value
                    })}}
                >   
                    <option >type of transaction</option>
                    <option value="income">income</option>
                    <option value="expense">expense</option>
                </Select>
                <FormLabel htmlFor='source'>Source</FormLabel>
                <Select
                    id='source'
                    value={formData.source}
                    onChange={(e) => {
                        setFormData({...formData, source : e.target.value})
                    }}
                >
                    <option >select the source</option>
                    {
                        selectedCategory.map((category) =>{
                            return(
                                <option 
                                value={category.type}
                                key={category.type}
                                >
                                    {category.type}
                                </option>
                            )
                        } )
                    }
                </Select>
                <FormLabel htmlFor='date'>Date</FormLabel>
                <Input 
                    type='date' 
                    id='date'
                    value={formData.date}
                    onChange={(e) => {
                        setFormData({...formData, date: e.target.value})
                    }}
                />

                <Button
                    onClick={createTransaction}
                    w='50%'
                    my='1rem'
                    mx='auto'
                >
                    Add to track
                </Button>
            </FormControl>

            <TransactionList/>
        </Box> 
     );
}
 
export default Tracker;