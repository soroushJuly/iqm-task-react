import "./BaseButton.css"

type BaseButtonProps = {
    title: string
    variant?: string
    disabled?: boolean
    onLeftClick?: () => void
    onRightClick?: () => void
    buttonSize?: string
}

function BaseButton({ title, variant = "disabled", disabled = false, onLeftClick, onRightClick, buttonSize }: BaseButtonProps) {
    const handleClick = (e: any) => {
        if (e?.nativeEvent?.button === 0) {
            onLeftClick?.();
        } else if (e?.nativeEvent?.button === 2) {
            e.preventDefault();
            onRightClick?.();
        }
    };

    return (
        <button
            className={[variant, disabled ? "read-only" : "interactive", buttonSize].join(" ")}
            onClick={handleClick}
            onContextMenu={handleClick}>
            <span>{title}</span>
        </button>
    )
}

export default BaseButton;
