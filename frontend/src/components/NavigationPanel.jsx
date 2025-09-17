export default function NavigationPanel({setIsFirstPage}){
    return (
        <footer className="w-full h-20 flex flex-row me-auto bg-amber-200 fixed bottom-0 left-0">
            <div className="w-1/2 flex justify-center items-center border" onClick={() => setIsFirstPage(true)}>
                <p>打钟</p>
            </div>
            <div className="w-1/2 flex justify-center items-center border" onClick={() => setIsFirstPage(false)}>
                <p className="text-center">员工信息</p>
            </div>
        </footer>
    )
}