

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
    className?: string
}
export interface State {
}

class IconBuildingO extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
    }

    render() {
        let className = `muk-icon ${this.name}--building-o ${this.props.addClass} ${this.props.className}`

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
                    <g><path d="M13.1 29.3v1.4q0 .3-.2.5t-.5.2h-1.5q-.3 0-.5-.2t-.2-.5v-1.4q0-.3.2-.5t.5-.2h1.5q.2 0 .5.2t.2.5zm0-5.7V25q0 .3-.2.5t-.5.2h-1.5q-.3 0-.5-.2t-.2-.5v-1.4q0-.3.2-.5t.5-.2h1.5q.2 0 .5.2t.2.5zm5.7 0V25q0 .3-.2.5t-.5.2h-1.5q-.2 0-.5-.2t-.2-.5v-1.4q0-.3.2-.5t.5-.2h1.5q.3 0 .5.2t.2.5zm-5.7-5.7v1.4q0 .3-.2.5t-.5.2h-1.5q-.3 0-.5-.2t-.2-.5v-1.4q0-.3.2-.5t.5-.3h1.5q.2 0 .5.3t.2.5zm17.1 11.4v1.4q0 .3-.2.5t-.5.2h-1.4q-.3 0-.5-.2t-.2-.5v-1.4q0-.3.2-.5t.5-.2h1.4q.3 0 .5.2t.2.5zm-5.7-5.7V25q0 .3-.2.5t-.5.2h-1.4q-.3 0-.5-.2t-.3-.5v-1.4q0-.3.3-.5t.5-.2h1.4q.3 0 .5.2t.2.5zm-5.7-5.7v1.4q0 .3-.2.5t-.5.2h-1.5q-.2 0-.5-.2t-.2-.5v-1.4q0-.3.2-.5t.5-.3h1.5q.3 0 .5.3t.2.5zm-5.7-5.8v1.5q0 .3-.2.5t-.5.2h-1.5q-.3 0-.5-.2t-.2-.5v-1.5q0-.2.2-.5t.5-.2h1.5q.2 0 .5.2t.2.5zm17.1 11.5V25q0 .3-.2.5t-.5.2h-1.4q-.3 0-.5-.2t-.2-.5v-1.4q0-.3.2-.5t.5-.2h1.4q.3 0 .5.2t.2.5zm-5.7-5.7v1.4q0 .3-.2.5t-.5.2h-1.4q-.3 0-.5-.2t-.3-.5v-1.4q0-.3.3-.5t.5-.3h1.4q.3 0 .5.3t.2.5zm-5.7-5.8v1.5q0 .3-.2.5t-.5.2h-1.5q-.2 0-.5-.2t-.2-.5v-1.5q0-.2.2-.5t.5-.2h1.5q.3 0 .5.2t.2.5zm-5.7-5.7v1.5q0 .2-.2.5t-.5.2h-1.5q-.3 0-.5-.2t-.2-.5V6.4q0-.3.2-.5t.5-.2h1.5q.2 0 .5.2t.2.5zm17.1 11.5v1.4q0 .3-.2.5t-.5.2h-1.4q-.3 0-.5-.2t-.2-.5v-1.4q0-.3.2-.5t.5-.3h1.4q.3 0 .5.3t.2.5zm-5.7-5.8v1.5q0 .3-.2.5t-.5.2h-1.4q-.3 0-.5-.2t-.3-.5v-1.5q0-.2.3-.5t.5-.2h1.4q.3 0 .5.2t.2.5zm-5.7-5.7v1.5q0 .2-.2.5t-.5.2h-1.5q-.2 0-.5-.2t-.2-.5V6.4q0-.3.2-.5t.5-.2h1.5q.3 0 .5.2t.2.5zm11.4 5.7v1.5q0 .3-.2.5t-.5.2h-1.4q-.3 0-.5-.2t-.2-.5v-1.5q0-.2.2-.5t.5-.2h1.4q.3 0 .5.2t.2.5zm-5.7-5.7v1.5q0 .2-.2.5t-.5.2h-1.4q-.3 0-.5-.2t-.3-.5V6.4q0-.3.3-.5t.5-.2h1.4q.3 0 .5.2t.2.5zm5.7 0v1.5q0 .2-.2.5t-.5.2h-1.4q-.3 0-.5-.2t-.2-.5V6.4q0-.3.2-.5t.5-.2h1.4q.3 0 .5.2t.2.5zm-5.7 30.7h8.6V2.9H7.4v34.2h8.5v-5q0-.2.2-.5t.5-.2h7.2q.3 0 .5.2t.2.5v5zM35.9 1.4v37.2q0 .5-.4 1t-1 .4H5.9q-.6 0-1-.4t-.4-1V1.4q0-.6.4-1t1-.4h28.6q.6 0 1 .4t.4 1z"></path></g>
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

export default IconBuildingO

