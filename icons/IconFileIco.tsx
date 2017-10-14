

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

class IconFileIco extends React.Component<Props, State> {

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
                    <g><path d="m 35.8,8.5 c 0.4,0.4 0.733333,0.9666667 1,1.7 0.266667,0.733333 0.433333,1.366667 0.5,1.9 l 0,25.8 c 0,0.533333 -0.2,1.033333 -0.6,1.5 -0.4,0.466667 -0.933333,0.666667 -1.6,0.6 l -30,0 C 4.5,40 4,39.8 3.6,39.4 3.2,39 3,38.5 3,37.9 L 3,2.1 C 3,1.5666667 3.2,1.0666667 3.6,0.6 4,0.13333333 4.5,-0.06666667 5.1,0 l 20,0 c 0.6,0 1.266667,0.13333333 2,0.4 0.733333,0.26666667 1.3,0.6333333 1.7,1.1 z M 25.9,3 l 0,8.4 8.4,0 C 34.1,11 33.933333,10.7 33.8,10.5 l -7,-7 C 26.6,3.3666667 26.3,3.2 25.9,3 Z m 8.5,34.1 0,-22.8 -9.3,0 C 24.5,14.3 24,14.1 23.6,13.7 23.2,13.3 23,12.766667 23,12.1 l 0,-9.2 -17.1,0 0,34.2 z" id="path4312"></path>  <g style={{"fontStyle":"normal","fontWeight":"normal","fontSize":58.9221611,"lineHeight":"125%","fontFamily":"sans-serif","textAlign":"end","letterSpacing":0,"wordSpacing":0,"textAnchor":"end","fillOpacity":1,"stroke":"none","strokeWidth":1,"strokeLinecap":"butt","strokeLinejoin":"miter","strokeOpacity":1}} id="text4320" transform="matrix(1.4814843,0,0,1.4814843,-16.01806,-17.117606)">    <path d="m 16.723201,29.353483 1.931226,0 0,6.041823 -1.931226,0 0,-6.041823 z m 0,-2.351996 1.931226,0 0,1.57519 -1.931226,0 0,-1.57519 z" style={{"fillOpacity":1}} id="path11703" ></path>    <path d="m 25.402928,29.54229 0,1.575189 q -0.393798,-0.269724 -0.79299,-0.399192 -0.393797,-0.129467 -0.819961,-0.129467 -0.809173,0 -1.26231,0.474714 -0.447742,0.46932 -0.447742,1.316255 0,0.846934 0.447742,1.321648 0.453137,0.469321 1.26231,0.469321 0.453136,0 0.857723,-0.134863 0.409981,-0.134862 0.755228,-0.399191 l 0,1.580584 q -0.453137,0.167229 -0.922457,0.248146 -0.463926,0.08631 -0.933246,0.08631 -1.634529,0 -2.556986,-0.836145 -0.922457,-0.84154 -0.922457,-2.335812 0,-1.494273 0.922457,-2.330418 0.922457,-0.841539 2.556986,-0.841539 0.474714,0 0.933246,0.08631 0.463925,0.08092 0.922457,0.248147 z" style={{"fillOpacity":1}} id="path11705" ></path>    <path d="m 29.955872,30.58882 q -0.641943,0 -0.981796,0.463925 -0.334458,0.458532 -0.334458,1.327044 0,0.868512 0.334458,1.332437 0.339853,0.458532 0.981796,0.458532 0.631155,0 0.965613,-0.458532 0.334458,-0.463925 0.334458,-1.332437 0,-0.868512 -0.334458,-1.327044 -0.334458,-0.463925 -0.965613,-0.463925 z m 0,-1.380988 q 1.559006,0 2.432913,0.841539 0.879301,0.84154 0.879301,2.330418 0,1.488877 -0.879301,2.330417 -0.873907,0.84154 -2.432913,0.84154 -1.5644,0 -2.449096,-0.84154 -0.879301,-0.84154 -0.879301,-2.330417 0,-1.488878 0.879301,-2.330418 0.884696,-0.841539 2.449096,-0.841539 z" style={{"fillOpacity":1}} id="path11707" ></path>  </g></g>
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

export default IconFileIco

