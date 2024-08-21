// OnSelect is a prop that we passto triggger on click function in the component
export default function TabButton({ children, onSelect, isSelected}) {
    return (
    <li>
        <button className={isSelected ? "active" : undefined} onClick={onSelect}>{children}</button>
    </li>
)
};