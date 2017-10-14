

import * as React from "react"

export interface Props {
    size?: number
    text?: string
    title?: string
    style?: any
    addClass?: string
    viewBox?: string
    color?: string
    textFirst?: boolean
}
export interface State {
}

class IconVenus extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
    }

    render() {
        let className = `muk-icon ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                {this.props.text && this.props.textFirst &&
                    <span className={`muk-icon__text`}>
                        {this.props.text}
                    </span>
                }
                <svg className={`muk-icon__image`} preserveAspectRatio='xMidYMid meet'
                     fill={this.props.color}
                     stroke={this.props.color}
                     strokeWidth={0}
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={this.props.viewBox}
                >
                    <g><path d="M33.2 12.9q0 4.9-3.3 8.5t-8.1 4.2v5.8h5q.3 0 .5.2t.2.5v1.5q0 .3-.2.5t-.5.2h-5v5q0 .3-.2.5t-.5.2h-1.5q-.3 0-.5-.2t-.2-.5v-5h-5q-.3 0-.5-.2t-.2-.5v-1.5q0-.3.2-.5t.5-.2h5v-5.8q-3.3-.3-6-2.3t-4.2-5-1.2-6.5q.3-3 1.8-5.5t4.1-4.2 5.5-2q3.8-.4 7.1 1.2T31.3 6t1.9 6.9zm-22.8 0q0 4.1 2.9 7t7.1 3 7-3 3-7-3-7.1-7-2.9-7.1 2.9-2.9 7.1z"></path></g>
                </svg>
                {this.props.text && !this.props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {this.props.text}
                    </span>
                }
            </span>
        )
    }
}

export default IconVenus

