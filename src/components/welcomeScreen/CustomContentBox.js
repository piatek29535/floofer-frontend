import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const CustomContentBox = (props) => {


    return (
        <Container>
            <Box my={2}>
                {[...new Array(12)]
                    .map(
                        () => `Cras mattis consectetur purus sit amet fermentum.
                            Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                    )
                    .join('\n')}
            </Box>
        </Container>
    )
};

export default CustomContentBox;