

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

class IconBadgePno extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 39.999997 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
    }

    render() {
        let className = `muk-icon ${this.name}--badge-pno ${this.props.addClass} ${this.props.className}`

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
                    <g><path d="M34.539 18.667A14.576 14.576 0 0 0 21.333 5.47V0h-2.666v5.47A14.576 14.576 0 0 0 5.46 18.667H0v2.666h5.46a14.583 14.583 0 0 0 13.207 13.198V40h2.666v-5.469A14.583 14.583 0 0 0 34.54 21.333H40v-2.666h-5.461zM20 32c-6.625 0-12-5.375-12-12 0-6.626 5.375-12 12-12 6.628 0 12 5.374 12 12 0 6.625-5.372 12-12 12z"></path><path d="M14.22 17.226q0 1.209.209 1.808.219.59.694.59.914 0 .914-2.398 0-2.378-.914-2.378-.475 0-.694.59-.21.58-.21 1.788zm4.215-.019q0 2.189-.847 3.293-.847 1.094-2.484 1.094-1.57 0-2.426-1.123-.856-1.132-.856-3.264 0-4.348 3.282-4.348 1.609 0 2.465 1.132.866 1.123.866 3.216zm6.546-4.148L17.264 26.97h-2.283l7.717-13.911h2.283zm-1.018 9.724q0 1.209.21 1.808.218.59.694.59.913 0 .913-2.398 0-2.379-.913-2.379-.476 0-.695.59-.209.58-.209 1.79zm4.215-.019q0 2.18-.847 3.283-.846 1.094-2.483 1.094-1.57 0-2.426-1.123-.857-1.132-.857-3.254 0-4.348 3.283-4.348 1.608 0 2.464 1.132.866 1.123.866 3.216z"></path></g>
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

export default IconBadgePno

