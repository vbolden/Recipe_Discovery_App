type Props = {
    message: string;
}

function ErrorMessage({message}: Props) {
    return (
        <div className="error-container">
            <h2>Uh-Oh!</h2>
            <p>{message}</p>
        </div>
    )
}

export default ErrorMessage;