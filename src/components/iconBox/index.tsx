import styles from './iconBox.module.scss'
import type { IconType } from 'react-icons'

type IconBoxProps = {
    icon: IconType
}

export function IconBox({ icon: IconComponent }: IconBoxProps) {
    return (
        <div className={styles.icon_box}>
            <IconComponent size={24} stroke="black" fill="black" />
        </div>
    )
}
