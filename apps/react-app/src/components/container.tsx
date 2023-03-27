interface ContainerProps {
    children: any;
    className?: string;
}

export default function Container({
    children,
    className,
}: ContainerProps): JSX.Element {
    return (
        <div className={classes("m-auto", "p-10 my-10", className)}>
            {children}
        </div>
    );
}

function classes(...classes: (string | undefined)[]) {
    return classes.filter(Boolean).join(" ");
}
