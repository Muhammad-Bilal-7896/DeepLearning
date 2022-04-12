import { useState, useEffect } from 'react';

import {
    SimpleGrid,
    Box,
    Heading,
    Text,
    Image,
    Center,
    Input,
    Button
} from '@chakra-ui/react';

import Fonts from '../../Fonts';

const TensorFlowExample = () => {
    //Value Pairs State
    const [valuePairsState, setValuePairsState] = useState([
        {
            x: -1,
            y: -3
        },
        {
            x: 0,
            y: -1
        },
        {
            x: 1,
            y: 1
        },
        {
            x: 2,
            y: 3
        },
        {
            x: 3,
            y: 5
        },
        {
            x: 4,
            y: 7
        }
    ])

    //Define the Modal State
    const [modelState, setModelState] = useState({
        model: null,
        trained: false,
        predictedValue: 'Click on train',
        valueToPredict: 1
    })

    //Event Handlers
    const handleValuePairChange = (e) => {
        const updatedValuePairs = update(valuePairsState, {
            [e.target.dataset.index]: {
                [e.target.name]: { $set: parseInt(e.target.value) }
            }
        })

        setValuePairsState(
            updatedValuePairs
        )
    }

    const handleAddItem = () => {
        setValuePairsState([
            ...valuePairsState,
            { x: 1, y: 1 }
        ]);
    };

    const handleModelChange = (e) => setModalState({
        ...modelState,
        [e.target.name]: [parseInt(e.target.value)],
    });

    const handleTrainModel = () => {

    }

    const handlePredictModel = () => {

    }

    return (
        <Box>
            <Box>
                <Heading as={"h1"}>Training Data (X,Y) Pairs</Heading>
                <SimpleGrid minChildWidth='250px' spacing="5" paddingLeft="5%" paddingRight="5%">
                    <Heading>X</Heading>
                    <Heading>Y</Heading>
                </SimpleGrid>

                {valuePairsState.map((val, index) => {
                    return (
                        <SimpleGrid minChildWidth='250px' spacing="5" paddingLeft="5%" paddingRight="5%" key={index}>
                            <Input
                                display={"block"}
                                value={val.x}
                                name={"x"}
                                date-index={index}
                                onChange={handleValuePairChange}
                                type={"number"}
                                pattern={"[0-9]*"}
                            // placeholder='Basic usage'
                            />
                            <Input
                                display={"block"}
                                value={val.y}
                                name={"y"}
                                date-index={index}
                                onChange={handleValuePairChange}
                                type={"number"}
                                pattern={"[0-9]*"}
                            // placeholder='Basic usage'
                            />
                        </SimpleGrid>
                    )
                })}

                <Button variant={"solid"} color={"blackAlpha.400"} onClick={handleAddItem}>
                    +
                </Button>
                <Button variant={"solid"} color={"grey"} onClick={handleTrainModel}>
                    Train
                </Button>
            </Box>

            <Box>
                <Heading>Predicting</Heading>

                <Input
                    value={modelState.valueToPredict}
                    onChange={handleModelChange}
                    type="number"
                    placeholder='Enter an integer number'
                />
                <br />
                <Heading>{modelState.predictedValue}</Heading>
                <Button
                    onClick={handlePredictModel}
                    disabled={!modelState.trained}
                >
                    Predict
                </Button>
            </Box>
        </Box>
    )
}
export default TensorFlowExample;