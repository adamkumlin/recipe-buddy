type HeaderProps = {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {

    return (
        <div className='Header'>
            <h1 className='heading'>{title}</h1>
        </div>
    )
}

export default Header;
