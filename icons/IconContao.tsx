

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

class IconContao extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--contao ${this.props.addClass}`

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
                    <g><path d="M3.1 2.9h4.4Q5.9 4.3 4.7 6.2q-.8 1.2-1.4 2.6t-.6 2.8-.2 2.6.2 3 .5 2.8.6 3l.1.7Q5.1 29 5.8 31q1.2 3.8 3.3 6.1h-6q-1.1 0-1.8-.7t-.8-1.8V5.4q0-1 .8-1.8t1.8-.7zm26.9 0h6.9q1.1 0 1.9.7t.7 1.8v29.2q0 1-.7 1.8t-1.9.7h-4q4.8-4.6 4.4-12.6l-10.4 2.3q-.1 1-.3 1.8t-.7 1.6-1.3 1.4-2.1.8q-2.8.5-4.5-.9-.7-.6-1.1-1.4t-1.2-2.9-1.4-5.7q-.8-3.7-1.1-5.9t-.1-3.1.5-1.7q.5-.9 1.4-1.6t2.3-1.1q1-.2 1.9-.1t1.5.4 1.2.8.9 1 .8 1.3l10.5-2.2Q32.5 5.4 30 2.9z"></path></g>
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

export default IconContao

