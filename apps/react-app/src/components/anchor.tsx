// Anchor.tsx
import Link from "next/link";
import { ReactNode } from "react";

function classes(...classes: (string | undefined)[]) {
    return classes.filter(Boolean).join(" ");
}

// export const StyledAnchor = styled.a`
//     color: inherit;
//     height: fit-content;
//     text-decoration: none;
//     width: fit-content;

//     :visited,
//     :hover,
//     :active {
//         color: inherit;
//     }
// `;

type AnchorProps = {
    href: string;
    className?: string;
    children: ReactNode;
    passHref?: boolean;
    target?: "_blank" | "_self" | "_parent" | "_top";
    rel?: string;
    targetBlank?: boolean;
};

export default function Anchor({
    href,
    passHref,
    target,
    children,
    className,
    rel,
    targetBlank,
}: AnchorProps) {
    const otherProps = targetBlank
        ? { target: "_blank", rel: `noreferrer noopener ${rel || ""}` }
        : { ...{ rel } };

    return (
        <div className={classes("hover:cursor-pointer", className)}>
            <Link
                href={href}
                passHref={passHref}
                target={target}
                {...otherProps}
            >
                {children}
            </Link>
        </div>
    );
}

interface Props {
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    className?: string;
    children: React.ReactNode;
}

export function OnClickAnchor({ onClick, className, children }: Props) {
    return (
        <div
            onClick={onClick}
            className={classes("cursor-pointer font-semibold", className)}
        >
            {children}
        </div>
    );
}
