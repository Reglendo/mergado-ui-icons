

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

class IconNewspaperO extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--newspaper-o`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m19.9 12.5h-7.5v7.5h7.5v-7.5z m2.5 12.5v2.5h-12.5v-2.5h12.5z m0-14.9v12.4h-12.5v-12.4h12.5z m12.4 14.9v2.5h-10v-2.5h10z m0-5v2.5h-10v-2.5h10z m0-5v2.5h-10v-2.5h10z m0-4.9v2.4h-10v-2.4h10z m-29.8 18.6v-18.6h-2.5v18.6q0 0.5 0.4 0.9t0.8 0.3 0.9-0.3 0.4-0.9z m32.3 0v-21.1h-29.8v21.1q0 0.6-0.3 1.2h28.8q0.5 0 0.9-0.3t0.4-0.9z m2.5-23.6v23.6q0 1.5-1.1 2.6t-2.7 1.1h-32.3q-1.5 0-2.6-1.1t-1.1-2.6v-21.1h5v-2.5h34.8z"></path></g>
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

export default IconNewspaperO
