

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

class IconFloppyO extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--floppy-o ${this.props.addClass}`

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
                    <g><path d="M11.6 34.3h17.1v-8.6H11.6v8.6zm20 0h2.8v-20q0-.3-.2-.9t-.4-.7l-6.3-6.3q-.2-.2-.8-.5t-.8-.2V15q0 .9-.7 1.5t-1.5.6H10.9q-.9 0-1.6-.6T8.7 15V5.7H5.9v28.6h2.8V25q0-.9.6-1.5t1.6-.6h18.5q.9 0 1.5.6t.7 1.5v9.3zM23 13.6V6.4q0-.3-.2-.5t-.5-.2H18q-.3 0-.5.2t-.2.5v7.2q0 .3.2.5t.5.2h4.3q.3 0 .5-.2t.2-.5zm14.3.7V35q0 .9-.6 1.5t-1.6.6h-30q-.8 0-1.5-.6T3 35V5q0-.9.6-1.5t1.5-.6h20.8q.9 0 1.9.4t1.7 1.1l6.3 6.2q.6.6 1 1.7t.5 2z"></path></g>
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

export default IconFloppyO

