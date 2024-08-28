// OnSelect is a prop that we passto triggger on click function in the component
export default function TabButton({ children, isSelected, ...props}) {
    return (
    <li>
        <button className={isSelected ? "active" : undefined} {...props}>{children}</button>
    </li>
)
};