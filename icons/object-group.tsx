

import * as React from "react"

export interface Props {
    /** Size */
    size?: number
    /** Icon text */
    text?: string
    /** Icon title */
    title?: string
    style?: any
}
export interface State {
}

class IconObjectGroup extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--object-group`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m39.8 10.1h-2.5v19.8h2.5v7.5h-7.5v-2.5h-24.8v2.5h-7.5v-7.5h2.5v-19.8h-2.5v-7.5h7.5v2.5h24.8v-2.5h7.5v7.5z m-5-5v2.5h2.5v-2.5h-2.5z m-32.3 0v2.5h2.5v-2.5h-2.5z m2.5 29.8v-2.5h-2.5v2.5h2.5z m27.3-2.5v-2.5h2.5v-19.8h-2.5v-2.5h-24.8v2.5h-2.5v19.8h2.5v2.5h24.8z m5 2.5v-2.5h-2.5v2.5h2.5z m-12.5-19.9h7.5v14.9h-17.4v-4.9h-7.4v-14.9h17.3v4.9z m-14.9 7.5h12.5v-10h-12.5v10z m19.9 5v-10h-5v7.5h-7.4v2.5h12.4z"></path></g>
                </svg>
                {this.props.text ? (
                    <span className={`${this.name}__text`}>
                        {this.props.text}
                    </span>
                ) : null}
            </span>
        )
    }
}

export default IconObjectGroup

