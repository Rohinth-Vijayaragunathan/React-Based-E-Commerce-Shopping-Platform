
function NewsLetterBox(){
    const HandleSubmit = (event) => {
        event.preventDefault()
    }

    return(
        <div className="text-center">
            <p className="text-2xl font-medium text-gray-500">subscribe now & get 20% off</p>
            <p className="text-center mt-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, exercitationem.
            </p>
            <form onSubmit={HandleSubmit} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
                <input className="w-full sm:flex-1 outline-none" type="email" placeholder="enter your email"/>
                <button type="submit" className="bg-black text-white text-xs px-10 py-4">SUBSCRIBE</button>
            </form>
        </div>
    )
}
export default NewsLetterBox