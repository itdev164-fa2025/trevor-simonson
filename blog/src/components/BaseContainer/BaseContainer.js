import React from 'react'
import PropTypes from 'prop-types'
import {Flex, Box} from 'rebass'

export const BaseContainter = ({children, flex = false, ...rest})=>{
    let Component = flex ? FLex : Box;
    return <Component {...rest}>{children}</Component>
}

BaseContainter.protoTypes = {
    flex: PropTypes.bool,
    as: PropTypes.string,
    children: PropTypes.node.isRequired
}