const Button = ({title} : {title: string}) => {
    return (
        <>
            <button className="text-sm px-3 py-1 cursor-pointer bg-gray-100 border border-gray-300 relative group overflow-hidden" >
                {title}
                <span className="absolute left-[-100%] top-0 bottom-0 bg-amber-500 text-white px-2 py-1 transition-all duration-300 group-hover:left-0 w-full flex justify-center items-center">
                    {title}
                </span>
            </button>
        </>
    )
}
export default Button;