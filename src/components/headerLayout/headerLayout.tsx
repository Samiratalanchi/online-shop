const HeaderLayout = ({ children } : {children : React.ReactNode} ) => {
    return (
        <>
            <div className="inset-x-0 flex w-full flex-row border-b border-gray-300">
                <div className="flex flex-col grow gap-y-0 overflow-x-auto bg-gray-100 px-6">
                    <div className="flex h-14 shrink-0 items-center justify-between">
                        Avapet
                    </div>
                </div>
            </div>
            {children}
        </>
        
    )
}

export default HeaderLayout