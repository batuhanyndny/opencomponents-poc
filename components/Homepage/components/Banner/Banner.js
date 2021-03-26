import "./Banner.css"

function Banner({ bURL, bAlt }) {
    return (
        <div className="banner" >
            <img className="w-full" src={bURL} alt={bAlt} />
        </div>
    )
}

export default Banner
