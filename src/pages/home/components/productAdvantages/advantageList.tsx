import { IconBox } from '@/components/iconBox'

import { AiOutlineThunderbolt } from 'react-icons/ai'
import { IoShieldOutline } from 'react-icons/io5'
import { CiGlobe } from 'react-icons/ci'
import { IoHardwareChipOutline } from 'react-icons/io5'

import type { AdvantageCardType } from './advantageCard'

export const advantageList: AdvantageCardType[] = [
    {
        icon: <IconBox icon={AiOutlineThunderbolt} />,
        title: 'NVMe + Ryzen',
        description:
            'Processadores AMD Ryzen 9 e SSDs NVMe para carregamentos instantâneos.',
    },
    {
        icon: <IconBox icon={IoShieldOutline} />,
        title: 'Anti-DDoS',
        description:
            'Proteção de camada 3, 4 e 7 incluída em todos os planos, sem custo extra.',
    },
    {
        icon: <IconBox icon={CiGlobe} />,
        title: 'Rede global',
        description:
            '42 datacenters em 6 continentes para baixa latência em qualquer região.',
    },
    {
        icon: <IconBox icon={IoHardwareChipOutline} />,
        title: 'Painel intuitivo',
        description:
            'Controle mods, backups e jogadores em tempo real com nosso painel moderno.',
    },
]
