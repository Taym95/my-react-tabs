import React from 'react'
import { isNull, each, has, forOwn, isUndefined, isObject, indexOf, isEmpty } from 'lodash'

export const inheritParentProps = (parent, child, propsToInherit, propsToAdd) => {

    if (isNull(child))
        return null;

    let childProps = {};

    // only add props when child is a object
    if (isObject(child.type)) {

        each(propsToInherit, (propName) => {

            // only add child prop if parent exists
            if (has(parent.props, propName)) {
                // in case child prop has value this one is leading
                childProps[propName] = (has(child.props, propName) ? child.props[propName] : parent.props[propName])
            }

        })

        // add the following properties
        if (!isUndefined(propsToAdd)) {
            forOwn(propsToAdd, (value, key) => {
                childProps[key] = value;
            })
        }

    }

    // when type is undefined the child is probably only a text value
    if (isUndefined(child.type)) return child;
    else return React.cloneElement(child, childProps);

};

export const generateUniqueGuid = () => {

    const s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
    };

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();

};
export const addClassNameByPropValue = (classNameRef, props, propsKey, propsValue, classNameToAdd) => {

    // only add when property exists and matches expected value and does not yet exist in reference
    if (has(props, propsKey) && props[propsKey] === propsValue)
        classNameRef = addClassName(classNameRef, classNameToAdd);

    return classNameRef;

};

export const addClassName = (classNameRef, classNameToAdd) => {

    if (indexOf(classNameRef, classNameToAdd) === -1)
        classNameRef += ' ' + classNameToAdd;

    return classNameRef;

};
