'use strict';

const React = require('react');
const decorators = require('../../../src/components/decorators');

module.exports = {
    createDecorators: function(spec){
        spec = spec || {};
        return {
            Loading: (props) => {
                return spec.loading ? <spec.loading {...props}/> : <div/>;
            },
            Toggle: (props) => {
                return spec.toggle ? <spec.toggle {...props}/> : <div/>;
            },
            Header: (props) => {
                return spec.header ? <spec.header {...props}/> : <div/>;
            },
            Container: (props) => {
                return spec.container ? <spec.container {...props}/> : <div/>;
            }

        };
    },
    createAnimations: function(){
        return {
            toggle: () => {
                return {
                    animation: 'fadeOut',
                    duration: 0
                };
            },
            drawer: () => {
                return {
                    enter: {
                        animation: 'slideDown',
                        duration: 0
                    },
                    leave: {
                        animation: 'slideUp',
                        duration: 0
                    }
                };
            }
        };
    }
};
