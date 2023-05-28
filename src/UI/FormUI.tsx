import { FC, ReactNode } from 'react'
import { Form } from 'react-router-dom'

interface FormProps {
    children?: ReactNode,
    title: string,
}

const FormUI: FC<FormProps> = ({ children, title }) => {
    return (
        <>
            <h2>{title}</h2>
            <Form>
                {children}
            </Form>
        </>
    )
}

export default FormUI
