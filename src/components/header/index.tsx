import { Button } from '../button'

export function Header() {
    return (
        <header>
            <div>Ícaro Services</div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Serviços</li>
                    <li>Preços</li>
                </ul>
            </nav>
            <Button>Começar</Button>
        </header>
    )
}
