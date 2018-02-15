
import * as React from "react"

export const IconBadgeThird: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--badge-third ${props.addClass} ${props.className}`
    return (
            <span className={className} style={props.style} title={props.title}>
                {props.text && props.textFirst &&
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
                <svg className={`muk-icon__image`} preserveAspectRatio='xMidYMid meet'
                     fill={props.color}
                     stroke={props.color}
                     strokeWidth={0}
                     height={props.size}
                     width={props.size}
                     viewBox={props.viewBox}
                >
                    <g><path d="M34.539 18.667A14.576 14.576 0 0 0 21.333 5.47V0h-2.666v5.47A14.576 14.576 0 0 0 5.46 18.667H0v2.666h5.46a14.583 14.583 0 0 0 13.207 13.198V40h2.666v-5.469A14.583 14.583 0 0 0 34.54 21.333H40v-2.666h-5.461zM20 32c-6.625 0-12-5.375-12-12 0-6.626 5.375-12 12-12 6.628 0 12 5.374 12 12 0 6.625-5.372 12-12 12z"></path><path d="M24.406 16.16q0 1.304-.79 2.218-.79.913-2.217 1.256v.057q1.684.21 2.55 1.027.866.81.866 2.189 0 2.008-1.456 3.13-1.456 1.114-4.158 1.114-2.265 0-4.016-.752v-2.502q.81.409 1.78.666.97.256 1.922.256 1.456 0 2.15-.494.695-.495.695-1.59 0-.98-.8-1.389-.799-.409-2.55-.409h-1.056v-2.255h1.075q1.618 0 2.36-.418.752-.429.752-1.456 0-1.58-1.98-1.58-.684 0-1.398.229-.704.228-1.57.79l-1.36-2.027q1.902-1.37 4.538-1.37 2.16 0 3.407.875 1.256.875 1.256 2.436z" word-spacing="0"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconBadgeThird.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 39.999997 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
