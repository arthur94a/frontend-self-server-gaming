import { MdGridView } from 'react-icons/md'
import { FaListUl } from 'react-icons/fa'

import styles from './serversGrid.module.scss'
import { useState } from 'react'

export function SwitchViewButtons({
    setTypeView,
}: {
    setTypeView: React.Dispatch<React.SetStateAction<'grid' | 'list'>>
}) {
    const gridActiveState = {
        grid: true,
        list: false,
    }

    const listActiveState = {
        grid: false,
        list: true,
    }

    const [active, setActive] = useState(gridActiveState)

    function handleClickGridView() {
        setActive(gridActiveState)
        setTypeView('grid')
    }

    function handleClickListView() {
        setActive(listActiveState)
        setTypeView('list')
    }

    function flipColor(state: boolean) {
        return state ? '#01e6eb' : '#9c9c9c'
    }

    return (
        <div className={styles.switch_view_wrapper}>
            <button
                className={styles.switch_view_button}
                onClick={handleClickGridView}
                disabled={active.grid}
            >
                <MdGridView fill={flipColor(active.grid)} size="20px" />
            </button>

            <button
                className={styles.switch_view_button}
                onClick={handleClickListView}
                disabled={active.list}
            >
                <FaListUl fill={flipColor(active.list)} size="20px" />
            </button>
        </div>
    )
}
