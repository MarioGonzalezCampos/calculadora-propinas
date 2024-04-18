import { menuItems } from "../data/db"
import { MenuItem } from "../types"

type MenuItemProps = {
    addItem: (item: MenuItem) => void

}

const MenuItem = ({addItem}:MenuItemProps) => {


    return (
        <>
            {
                menuItems.map((item) => (
                    <button
                        onClick={() => addItem(item)} 
                        className="border-2 border-teal-400 w-full hover:bg-teal-400 hover:text-white flex justify-between px-5 py-2 mt-2"
                        key={item.id}>
                        <h3 className="text-xl">{item.name}</h3>
                        <p className="font-bold">${item.price}</p>
                    </button>
                ))
            }
        </>
    )
}

export default MenuItem