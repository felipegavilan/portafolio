import IconGit from "@/pages/assets/iconGit"

const Card = (props) =>{
    return (
        <div className="flex justify-center overflow-hidden ">
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-900">
            <img className={`hover: ${<IconGit/>}`} src="todoapp.png" alt="todoapp"/>
            </div>
        </div>
    )
}

export default Card