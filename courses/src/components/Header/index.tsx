interface HeaderProps {
    heading:string
}

const Header = (props: HeaderProps): JSX.Element => {
    return <h1>{props.heading}</h1>
}

export default Header