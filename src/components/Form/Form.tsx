import React, { useState } from 'react';

import { Button, Container, H3, Input } from './style';

type Props = {
    formTitle: string;
};

const Form = (props: Props) => {
    const [ email, setEmail ] = useState('');

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    return (
        <Container>
            <H3>{props.formTitle}</H3>
            <form method="post">
                <Input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={e => handleEmail(e)}
                />
                <Button type="button">
                    cadastrar
                </Button>
            </form>
        </Container>
    );
}

export default Form;