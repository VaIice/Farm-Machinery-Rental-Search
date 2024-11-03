function Navbar() {

    const clickLogo = () => {
        window.location.reload();
    }

    return (
        <div>
            <img className="logo" src={process.env.PUBLIC_URL + '/logo.png'} alt="Navigation Icon" onClick={clickLogo} />
        </div>
    )
}

export default Navbar;