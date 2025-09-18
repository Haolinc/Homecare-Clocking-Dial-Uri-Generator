export default function NavigationPanel({isFirstPage, setIsFirstPage}){
    const selectedColor = " bg-blue-200"
    return (
        <footer className="w-full h-20 flex flex-row me-auto bg-gray-200 fixed bottom-0 left-0">
            <div className={`w-1/2 flex justify-center items-center ${isFirstPage ? selectedColor: ''}`} onClick={() => setIsFirstPage(true)}>
                <p>打钟</p>
            </div>
            <div className={`w-1/2 flex justify-center items-center ${isFirstPage ? '' : selectedColor}`} onClick={() => setIsFirstPage(false)}>
                <p className="text-center">员工信息</p>
            </div>
        </footer>
    )
}