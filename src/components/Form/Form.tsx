import React, { useState } from 'react';

import { Button, Container, ErrorNotification, H3, Input } from './style';

type Props = {
    formTitle: string;
    className?: string;
};

const Form = (props: Props) => {
    const [ email, setEmail ] = useState('');
    const [ isValidEmail, setIsValidEmail ] = useState(true);

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(!isValidEmail) setIsValidEmail(!isValidEmail);
        
        setEmail(event.target.value);
    }

    const handleSubmitEmail = (event: any) => {
        event.preventDefault();
        
        if(!/\w{5}@\D{2}.\D{2}/.test(email))
        {
            setIsValidEmail(!isValidEmail);
            return;
        }
        
        const emailsInStorage = localStorage.getItem('emails') || "[]";
        const emails = JSON.parse(emailsInStorage);
        const emailsToSave = [...emails, email];

        localStorage.setItem('emails', JSON.stringify(emailsToSave));

        alert("E-mail cadastrado com sucesso");
    }

    return (
        <Container className={props.className}>
            <H3>{props.formTitle}</H3>
            <form method="post">
                <Input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={e => handleEmail(e)}
                />
                {
                    !isValidEmail && <ErrorNotification>E-mail inválido.</ErrorNotification>
                }
                <Button
                    type="button"
                    onClick={(e) => handleSubmitEmail(e)}
                >
                    cadastrar
                </Button>
            </form>
        </Container>
    );
}

export default Form;